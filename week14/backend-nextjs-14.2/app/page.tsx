import axios from 'axios'

async function  fetchUser(){
    const response = await axios.get("http://localhost:3000/api/user");
     return response.data;
}

export default async function Home() {
   const alluser = await fetchUser();
   console.log(alluser);
   
  return (
    
      <div>
          
            <h1>ID: {alluser.user.id}</h1>
            <h1>email: {alluser.user.email}</h1>
          




          <div>hi there</div>
      </div>

      
  );
}
