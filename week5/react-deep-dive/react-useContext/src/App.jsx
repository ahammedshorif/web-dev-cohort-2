import { createContext,useState } from 'react'
import './App.css'
import Child1 from './components/Child1'

const userContext = createContext(); //step1: context create

// step2: wrap all child inside the porvider
// step3: pass value
function App() {

const [user,setUser]= useState({name:"Shorif"})

  return (

    <>
      <userContext.Provider value={user}>
        <Child1></Child1>
      </userContext.Provider>
    </>
  )
}

export default App
export {userContext}
