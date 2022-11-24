import { useState } from 'react';
import useProxy from '../lib/useProxy/useProxy'

const Test = ()=>{

const data = useProxy(new Set([1,2,3,4]))
const onClick =()=>{
    data.add(Math.random());
    console.log(data);
}
return (
     <div>
      <ol>
        {Array.from(data).map((item, index)=><li key={index}>{item}</li>)}
      </ol>
      <button onClick={onClick}>+1</button>
      </div>   
)
}



export default Test;