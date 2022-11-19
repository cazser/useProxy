import { useState } from 'react';
import useProxy from './useProxy';

const Test = ()=>{
 const person = useProxy({age:18, name:"Tom", education:{primary: "xxx小学", value:{some:1}}})
const onClick =()=>{
  person.age++;
  person.education.primary = person.age;
  person.education.value.some++;
}
return (
     <div>
     <div>{person.age}</div>
     <div>{person.name}</div>
     <div>{person.education.primary}</div>     
    <div>{person.education.value.some}</div>
      <button onClick={onClick}>+1</button>   
     </div>
     )
}


export default Test;