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
  let  serial = JSON.stringify(state);
   return new Proxy(state, {
     
         get:function(target, prop, receiver) {
             if(prop in target){
              return target[prop];
             }  

             return undefined;
        },
        set(target, prop, val) { // 拦截写入操作
         
          if(prop in target){
            target[prop] = val;
          }
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