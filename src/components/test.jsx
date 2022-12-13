import { useState } from 'react';
import useProxy from '../lib/useProxy/useProxy'

const Test = ()=>{

const data = useProxy({
  a:{
    b:{
      c:1
    }
  }
})
const onclick = ()=>{
    data.a.b.c++;
}
return (
     <div>
      <span>{data.a.b.c}</span>
      <button onClick={onclick} >+1</button>
      </div>   
)
}



export default Test;