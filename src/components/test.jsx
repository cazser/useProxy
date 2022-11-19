import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 const array = useProxy( [1,2,3,4,5] );
 const onClick = ()=>{ 
   array[0]++;
 }
//

//array.push(18);
const count = useProxy({age:18, name:"Tom", education:{"primary":"xxx小学"}})
const onclick1 = ()=>{
  count.age++;
  count.education.primary = count.age;
} 
return (
     <div>
      <div>
        <div>{array[0]}</div>
        <div>{array[1]}</div>
        <div>{array[2]}</div>
        <div>{array[3]}</div>
      </div>
      <button onClick={onClick} >+1</button>
      <div>{count.age}</div>
      <div>{count.education.primary}</div>
      <button onClick={onclick1}>+1</button>
     </div>
     )
}


export default Test;