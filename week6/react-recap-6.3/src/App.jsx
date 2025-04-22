import { useState,memo } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("hello useEffect",count);
    //logic
    //fetch,setTimeout,setTimeintevale
    
  },[count])

// it's return function , use if componeate wrap into memo
 const callBack = useCallback(()=>{
    //logic
  },[])

// it's retrun value
 const memoStore = useMemo(()=>{
   //compute if dependancy update

 },[])

 // useRef is a hook which referance dom element
 const divRaf = useRef()

  return (
    <>
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div ref={divRaf}></div>
        <Demo callBack={callBack} memoValu={memoStore}></Demo>
       
    </>
  )
}

const Demo = memo(function({callBack}){
  return <div>
     hi there
  </div>
})

export default App
