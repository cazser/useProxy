import { useState } from 'react'


const useProxy = (arg)=>{
//proxy只能拦截对象
//console.log(typeof target);
const target = useState(arg);
const state =  target[0];
const setState= target[1];
if(typeof state!=='object'){
  //非对象  
  return new Proxy(target, {
      get:(target, prop)=>{
        //console.log(prop);
        if(prop==='value'){
          return state;
        }else{
          return target[prop]
        }
      },
      set:(target, prop, val)=>{
        if(prop==='value'){
          setState(val);  
        }else{
          
        }
        return true;
    }
    
  });
}else{
  //对象
   return new Proxy(state, {
     
         get:function(target, prop, receiver) {
          if(prop in target){
           let value = Reflect.get(...arguments);
           console.log(value);
           console.log(typeof value ==='function')
           return typeof value == 'function' ? value.bind(target) : value;
         } else {
           return undefined; // 默认值
         }
        },
        set(target, prop, val) { // 拦截写入操作
          //target[prop]=val;
         // setState({...target}) 
          console.log(target);
          if(target instanceof Set){
            console.log('set')
            setState(new Set(target))
          }else if(Array.isArray(state)){
            target[prop]=val;
            setState([...target])
          }else{
            setState({
            ...state,
            [prop]:val
          })}
          return true;
        
      },
       ownKeys(target) {
      return Object.keys(target);
    },
     getOwnPropertyDescriptor(target, prop) { // 被每个属性调用
     return Object.getOwnPropertyDescriptor(target,prop);
      },
      deleteProperty(target, prop) { // 拦截属性删除
    
        delete target[prop];
          return true;
    
      },

      has(target, prop) {
        return prop in target;
    },
    apply(target, thisArg, args) {
       target.apply(thisArg, args);
    }

      
  });
}
}

export default useProxy;