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
      get:(target, prop, receiver)=>{
        
        return Reflect.get(target, prop, receiver);
      },
      set:(target, prop, val)=>{
        //console.log(target);
        setState(
            {
              ...state,
              [prop]:val
            }
          )
        return true;
      },
      
  
  
  });
}
}

export default useProxy;