import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Assignment from './components/Assignment'
import Assignment2 from './components/Assignment2'
import Assingnment3 from './components/Assingnment3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Assignment /> */}
      {/* <Assignment2 /> */}
      <Assingnment3></Assingnment3>
    </>
  )
}

export default App
