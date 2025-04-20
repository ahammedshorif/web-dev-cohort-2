import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:3000/todos")
    .then((response)=>{
      
      setTodos(response.data.todos)
      console.log(todos);
      
    })
  },[])

  return (
    <>
      {todos.map( todo => <Todos title = {todo.title} description= {todo.description}></Todos>)}
    </>
  )

  function Todos({title,description}){
    return <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  }
}

export default App
