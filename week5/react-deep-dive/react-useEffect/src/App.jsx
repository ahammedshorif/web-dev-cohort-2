import { useState , useEffect } from 'react'

import './App.css'

function App() {

  const [count,setCount]= useState(0)
  const [count2,setCount2]= useState(0)

 //variation 1:
 // run on every render

  // useEffect(()=>{
  //   alert("run on every render")
  // })

  //variation 2:

  // useEffect(()=>{
  //   alert("run on only first render")
  // },[])

  //variation 3:

  useEffect(()=>{
    alert("run on if count variable update")
  },[count])

  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
      <br />
      <br />
      <button onClick={()=>{setCount2(count2+1)}}>Count2 {count2}</button>
    </>
  )
}

export default App
