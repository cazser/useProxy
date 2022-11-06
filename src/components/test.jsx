import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 let count = useProxy( {age:19, name:"静静"} );
 const onClick = ()=>{ count.age = count.age+1}
  return (
     <div>
      <div>{count.age}</div>
      <div>{count.name}</div>
      <button onClick={onClick} >+1</button>
     </div>
     )
}


export default Test;