import { useState } from 'react'

const useProxy = (target)=>{
//proxy只能拦截对象
//console.log(typeof target);
const state =  target[0];
const setState= target[1];
  return new Proxy(target, {
    get:(target, prop)=>{
      console.log(prop);
      if(prop==='value'){
        return state;
      }else{
        return target[prop]
      }
    },
    set:(target, prop, val)=>{
      if(prop==='value'){
        setState(val);  
      }
    }
    
  });
}

export default useProxy;