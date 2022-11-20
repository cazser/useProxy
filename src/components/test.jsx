import { useState } from 'react';
import useProxy from '../lib/useProxy/useProxy'

const Test = ()=>{
<<<<<<< HEAD

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
=======
const data = useProxy({a:{b:{c:1}}})
const onClick = ()=>{
    data.a.b.c++;
}
return (
     <div>
     Test
     <div>
        {data.a.b.c}
>>>>>>> 81af1a360ef8abad147286639ce140a4e499ba26
     </div>
     <button onClick={onClick}>+1</button>
     </div>
    )
}


export default Test;