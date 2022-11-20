const createProxyForPlainObject=(target, effect)=>{
   
  return new Proxy(target, 
    {
      //handler
      get:(target, key, receiver)=>{
          return target[key];
      },
      set:(target, prop, val)=> { // 拦截写入操作
         effect(target);
          return true;
  
      }


    })
}

export default createProxyForPlainObject;