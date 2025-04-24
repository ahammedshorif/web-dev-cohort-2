import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Assignment from './components/Assignment'
import Assignment2 from './components/Assignment2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Assignment /> */}
      <Assignment2 />
    </>
  )
}

export default App
