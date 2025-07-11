import axios from 'axios'

async function  fetchTodo(){
    const response = await axios.get("http://localhost:3000/api/user");
     return response.data;
}

export default async function Home() {
   const alluser = await fetchTodo();
   console.log(alluser);
   
  return (
    
      <div>
          
            <h1>name: {alluser.username}</h1>
            <h1>email: {alluser.email}</h1>


          <div>hi there</div>
      </div>

      
  );
}
