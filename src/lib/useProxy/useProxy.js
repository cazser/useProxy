import { useState } from "react";
import _ from 'lodash';
import createProxyForObject from "./createProxyForObject";
const useProxy = (target)=>{
   const [state, setState] = useState(target);
   return createProxyForObject(target, (target)=>{
    console.log(111);
    console.log(_.cloneDeep(target));
    setState(_.cloneDeep(target));
   })
}

export default useProxy;