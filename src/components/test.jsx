import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 let count = useProxy( useState(0));
 const onClick = ()=>{ }
  return (
     <div>
      <div>{count.value}</div>
      <button onClick={onClick} >+1</button>
     </div>
     )
}


export default Test;