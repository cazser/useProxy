import { useState } from 'react'
const Test = ()=>{
  const [count, setCount] = useState(0)
  return (
     <div>
      <div>{count}</div>
      <button>+1</button>
     </div>
     )
}


export default Test;