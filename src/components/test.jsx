import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 const array = useProxy( [1,2,3,4,5] );
 const onClick = ()=>{ 
   array[0]++;
 }
//
for(let num of array){
  console.log(num);
}

Object.getPrototypeOf(array).push;
const count = useProxy({age:18, name:"Tom", education:{"primary":"xxx小学"}})
const onclick1 = ()=>{
  count.age++;
  count.education.primary = count.age;
} 
return (
     <div>
      <ol>
        {array.map(item=><li>{item}</li> ) }
      </ol>
      <button onClick={onClick} >+1</button>
      <div>{count.age}</div>
      <div>{count.education.primary}</div>
      <button onClick={onclick1}>+1</button>
     </div>
     )
}


export default Test;