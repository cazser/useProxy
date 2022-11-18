import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 const array = useProxy( [1,2,3,4,5] );
 const onClick = ()=>{ 
   array[0]++;
 }
  array.push(0);

  return (
     <div>
      <div>{array[0]}</div>
      <div>{array[1]}</div>
      <div>{array[2]}</div>
      <button onClick={onClick} >+1</button>
     </div>
     )
}


export default Test;