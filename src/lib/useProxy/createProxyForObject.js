
const createProxyForObject= (target, effect)=>{
   return new Proxy(target, 
      {
            //?handler

               // 拦截读取操作
      get(target, key, receiver) {
        if(typeof target[key] === 'object' && target[key]!==null){
         return createProxyForObject(target[key], effect);
        }
      return target[key];
    },
    // 拦截设置操作
    set(target, key, newVal, receiver) {
   
      const oldVal = target[key]
      // 如果属性不存在，则说明是在添加新的属性，否则是设置已存在的属性
      const type = Array.isArray(target)
        ? Number(key) < target.length ? 'SET' : 'ADD'
        : Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'
      // 设置属性值
      const res = Reflect.set(target, key, newVal, receiver)
      if (target === receiver.raw) {
        if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) {
         
        }
      }
      effect(target);
      return res
    },
    has(target, key) {
      return Reflect.has(target, key)
    },
    ownKeys(target) {
      return Reflect.ownKeys(target)
    },
    deleteProperty(target, key) {
   
      const hadKey = Object.prototype.hasOwnProperty.call(target, key)
      const res = Reflect.deleteProperty(target, key)

      if (res && hadKey) {
        trigger(target, key, 'DELETE')
      }

      return res
    }
  
            //!handler
      })

   
      
}

export default createProxyForObject;