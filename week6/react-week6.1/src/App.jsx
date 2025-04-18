import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count=2;
function App() {
  const [todos, setTotos] = useState([
    { id: 1,
      title: "go to gym",
      description: "ldfjl"
    },
    { id:2,
      title: "go to gym dfjkdlsjf",
      description: "ldfjldlfjalsd"
    }
  ])

  function addTodo(){
    let newTodos = [...todos,{
      id:count++,
      title: "go to gym dfjkdlsjf",
      description: "ldfjldlfjalsd"
    }]
    setTotos(newTodos)
  }

  return (
    <>
      {/* <AddTodo></AddTodo>
      <Todos > </Todos> */}
      <CardWrapper>
        <AddTodo></AddTodo>
      </CardWrapper>
      <CardWrapper>
        <Todos > </Todos>
      </CardWrapper>
    </>
  )

  function Todos(){
    return <div className=''>
       {todos.map((todo)=>{
        return <div className='bg-red-300 m-2'>
         <h1>{todo.title}</h1>
         <h3>{todo.description}</h3>
         </div>
       })}
    </div>
  }

  function AddTodo(){
    return <div>
      <button onClick={addTodo}>Add todo</button>
    </div>
  }

  function CardWrapper({children}){
    return <div className="bg-blue-500 my-2">
          {children}
    </div>
  }
}



export default App
