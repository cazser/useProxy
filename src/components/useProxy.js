import { useState } from 'react'

const useProxy = ([state, setState])=>{
  const obj = {value: state};
  return new Proxy(obj,
    {
      get:()=>{return obj.value},
      set:(target, propKey, value, receiver)=>{
       console.log(value); setState(value);}
    } )
}

export default useProxy;