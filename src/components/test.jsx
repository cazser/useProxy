import { useState } from 'react';
import useProxy from './useProxy';
const Test = ()=>{
 const array = useProxy( [1,2,3,4,5] );
 const onClick = ()=>{ 
   array[0]++;
 }
//
for(let num of array){
  console.log(num);
}


return (
     <div>
      <ol>
        {array.map(item=><li>{item}</li> ) }
      </ol>
      
     </div>
     )
}


export default Test;