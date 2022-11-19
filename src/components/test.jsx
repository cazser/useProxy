import { useState } from 'react';
import useProxy from './useProxy';

const Test = ()=>{
 const array = useProxy([1,2,3,4,5]);
const onClick =()=>{
  array[0]++;
  console.log(array.reduce((a,b)=>a+b,0));
}
return (
     <div>
      <ol>
        {array.map((item, index)=><li key={index}>{item}</li> ) }
      </ol>
      <button onClick={onClick}>+1</button>   
     </div>
     )
}


export default Test;