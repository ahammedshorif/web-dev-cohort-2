import { useState,memo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //prevent the rerender
  const inputFunction= useCallback(()=>{
    console.log("hello");
    
  },[])

  return (
    <>
      <BottonComponents inputFunction={inputFunction}></BottonComponents><br></br>
      <button onClick={()=>{setCount(count+1)}}>click me {count}</button>
    </>
  )

  
}
// every time parant rereder it will rerender
// const BottonComponents = ()=>{
//   console.log("child rerender");
  
//   return <div>
//     <button>button click</button>
//   </div>

// it rerender only input change
const BottonComponents = memo(({inputFunction})=>{
  console.log("child rerender");
  
  return <div>
    <button>button click</button>
  </div>
})

export default App
