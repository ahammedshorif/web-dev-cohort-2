import './App.css'

function App() {
  

  return (
    <>
      <Todo title="todo 1" description="this is my first todo"></Todo>
    </>
  )
}

interface todoIntefaces{
  title:string;
  description:string
  done?: boolean;
}

function Todo(props:todoIntefaces){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
     
  </div>
}

export default App
