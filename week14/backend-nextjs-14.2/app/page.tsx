import axios from 'axios'

async function  fetchTodo(){
    const response = await axios.get("http://16.171.40.123:3000/todos");
     return response.data.todos;
}

export default async function Home() {
   const allTodos = await fetchTodo();
   console.log(allTodos);
   
  return (
    
      <div>
          <ul  className='flex flex-col justify-center'>{ allTodos.map( todo => (
            <div key={todo._id} className='w-[50%] h-[200] bg-white m-4 rounded text-black '>
             <li ></li>
             <h1>title: {todo.title}</h1>
             <h2>decription: {todo.description}</h2>
             <span>{ todo.c}</span>
             </div>
          ))}</ul>


          <div>hi there</div>
      </div>

      
  );
}
