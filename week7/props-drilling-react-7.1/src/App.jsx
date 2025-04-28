import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Count count={count} setCount={setCount}></Count>
        
    </div>
  )
}
// props-drilling becaues- App => Count => Buttons props pass 
function Count({count,setCount}){
  return <div>
      <h1>{count}</h1>
      <Buttons count={count} setCount={setCount} ></Buttons>
</div>
}

function Buttons({count,setCount}){
  return <div>
      <button onClick={()=>{
          setCount(count+1)
      }}>count +</button>
      <button onClick={()=>{
          setCount(count-1)
      }}>count -</button>
  </div>
}

export default App
