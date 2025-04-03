import { useState } from 'react'


import './App.css'

function App() {
  const [string, setString] = useState("")

  function handleClick(){
    alert("Button is Click")
  }
  function handleOnChange(e){
    setString(e.target.value)
  }

  return (
    <>
      <div className='h-[100vh] w-full bg-slate-500'>
         <button onClick={handleClick} className='flex justify-center'>Click</button>
         <input onChange={handleOnChange} type="text" />
         <p>{string}</p>
      </div>
      
    </>
  )
}

export default App
