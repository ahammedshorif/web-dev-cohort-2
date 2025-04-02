import React, { useState } from 'react'


function Counter(props) {
  console.log(props);
  
  const [localCount, setLocalCount] = useState(props.count);
  return (
    
    <button onClick={()=>{setLocalCount(localCount+1)}}>Counter {localCount}</button>
  )
}

export default Counter