const createProxyForPlainObject=(target, effect)=>{
   
  return new Proxy(target, 
    {
      //handler
      get:(target, key, receiver)=>{
        console.log("get");
          return target[key];
      },
      set:(target, prop, val)=> { // 拦截写入操作
         effect(target);
          return true;
  
      },
      ownKeys:(target)=> {
      return Object.keys(target);
      },
      getOwnPropertyDescriptor(target, prop) { // 被每个属性调用
        return Object.getOwnPropertyDescriptor(target);
      },
        deleteProperty(target, prop) { // 拦截属性删除
    
        delete target[prop];
        effect(target)
        return true;
    
      },
      has(target, prop) {
        return prop in target
      },
      apply(target, thisArg, args) {
      target.apply(thisArg, args)
    }

  





    })
}

export default createProxyForPlainObject;