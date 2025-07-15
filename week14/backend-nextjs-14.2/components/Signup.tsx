"use client"
import axios from "axios"
import { useState } from "react"


function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="w-full h-screen flex justify-center items-center">
       <div className=" h-[350px] w-[300px] bg-white border-black border-2 flex flex-col justify-between p-8 rounded-lg">
         <div className="mt-4 *:flex  flex-col justify-center items-center">
            <input className="mb-5 p-2 border-black border-2 rounded" type="text" placeholder="email" onChange={(e)=>{
                setEmail(e.target.value)
                }} />
            <input className="mb-4 p-2 border-black border-2 rounded"  type="password" placeholder="password" onChange={(e)=>{
                setPassword(e.target.value)
                }}  />
         </div>
         <div className="flex justify-center">
            <button className="bg-black text-white p-2 mb-4 rounded-md" onClick={()=>{
            axios.post("http://localhost:3000/api/user",{
                email,
                password
            })

            }}>Submit</button>
         </div>
    </div> 
</div>
  )
}

export default Signup