import React, { useState,useMemo } from 'react'

function Assignment() {
    const [input, setInput] = useState(1)
   const calFactorial = useMemo(()=>{
    let result=1;
    for(let i=1;i<=input;i++){
        result= result*i;
    }
    console.log(result)
    return result
   },[input])
  return (
    <div>
        <input type="text" onChange={(e)=>{
           setInput(e.target.value)
        }} />
        <p>Calculated value {calFactorial}</p>
    </div>
  )
}

export default Assignment