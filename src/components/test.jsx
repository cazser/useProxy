import { useState } from 'react';
import useProxy from './useProxy';

const Test = ()=>{
 const array = useProxy([{value:1},{value:2}]);
const onClick =()=>{
  array[0].value++;
}
return (
     <div>
      <ol>
        {array.map((item, index)=><li key={index}>{item.value}</li> ) }
      </ol>
      <button onClick={onClick}>+1</button>   
     </div>
     )
}


export default Test;