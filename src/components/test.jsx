import { useState } from 'react';
import useProxy from './useProxy';

const Test = ()=>{
 const array = useProxy([1,2,3,4,5]);

return (
     <div>
      <ol>
        {array.map(item=><li key={item}>{item}</li> ) }
      </ol>
      
     </div>
     )
}


export default Test;