import { useState } from 'react';
import useProxy from '../lib/useProxy/useProxy'

const Test = ()=>{
const data = useProxy({a:{b:{c:1}}})
const onClick = ()=>{
    data.a.b.c++;
}
return (
     <div>
     Test
     <div>
        {data.a.b.c}
     </div>
     <button onClick={onClick}>+1</button>
     </div>
    )
}


export default Test;