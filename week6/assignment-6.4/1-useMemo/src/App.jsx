import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from './components/Assignment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Assignment />
    </>
  )
}

export default App
