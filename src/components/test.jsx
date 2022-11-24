import { useState } from 'react';
import useProxy from '../lib/useProxy/useProxy'

const Test = ()=>{

const data = useProxy([[1,2,3], 
                       [4,5,6],
                       [7,8,9]])
const onclick = ()=>{
    data.push(Math.random());
}
return (
     <div>
      <ol>
        {data.map((item, index)=>
        <ol key={index}>
           {item.map((inner, innerindex)=><li key={innerindex}>{inner}</li>) }
        </ol>)}
      </ol>
      <button onClick={onclick} >+1</button>
      </div>   
)
}



export default Test;