import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 let count = useProxy( {age:19, name:"静静", education:{primary:"xxx小学"}} );
 const onClick = ()=>{ 
   count.age = count.age+1;
   count.education.primary =  count.age;
 }

  return (
     <div>
      <div>{count.age}</div>
      <div>{count.name}</div>
     <div>{count.education.primary}</div>
      <button onClick={onClick} >+1</button>
     </div>
     )
}


export default Test;