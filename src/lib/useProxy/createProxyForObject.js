
import createProxyForPlainObject from './createProxyForPlainObject.js';
import isPlaintObject from './isPlainObject.js'
const createProxyForObject= (target, effect)=>{
   if(isPlaintObject(target)){
      return createProxyForObject(target, effect);
   }
   let map={};
   let map1={};
   for(let [key, val] of Object.entries(target)){
      if(typeof val ==='object'){
        map1[key] = val;
      }else{
        map[key] = val;
      }
   }

   
      
}

export default createProxyForObject;