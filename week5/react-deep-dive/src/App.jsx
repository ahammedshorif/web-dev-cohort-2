import { useState } from 'react'
import './App.css'
import Com from "./components/Counter"
import Nav from "./components/Nav"
import Sidbar from './components/Sidbar'
import Hero from "./components/Hero"

function App() {
  const [count,setCount] = useState(0)
 

  return (
    <>
        <Nav></Nav>
        <Sidbar></Sidbar>
        <Hero></Hero>
       
        
        
        
       
    </>
  )
}

export default App
