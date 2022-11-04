import { useState } from 'react'
const Test = ()=>{
  const [count, setCount] = useState(0);
 const onClick = ()=>{setCount(count+1)}
  return (
     <div>
      <div>{count}</div>
      <button onClick={onClick} >+1</button>
     </div>
     )
}


export default Test;