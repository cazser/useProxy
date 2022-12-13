import { useState } from 'react'


const useProxy = (obj)=>{

    //对象序列化
    //然后对比是否变化
    //如果变化则调用setState 
    let strobj = JSON.stringify(obj);//简单序列化有很多缺点
    const [state, setState] = useState(obj);
    return new Proxy(state,{
        get(target, key){
          return target[key]
        },
        set(target, prop, newVal){
          target[prop] = newVal;
        }
    } )
}

export default useProxy;