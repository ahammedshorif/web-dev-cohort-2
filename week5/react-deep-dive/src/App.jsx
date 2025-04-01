import { useState } from 'react'
import './App.css'
import Com from "./components/Counter"
import Nav from "./components/Nav"

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
        <Nav></Nav>
        <Com count={count} setCount={ setCount }> </Com>
        
       
    </>
  )
}

export default App
