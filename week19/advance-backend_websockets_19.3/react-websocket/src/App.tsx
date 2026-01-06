

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [socket,setSocket] = useState(null)
  const [latestMessage, setLatestMassage] = useState("")

  useEffect(()=>{
    const sockets = new WebSocket("ws://localhost:5000");
      sockets.onopen = ()=>{
        console.log("connected");
        setSocket(socket)
      }

      sockets.onmessage =(message: any)=>{
        console.log("Received message",message.data);
        setLatestMassage(message.data)
        
      }
    
    
  },[])
  if(!socket){
    return <div>
        Connecting to socket server......
    </div>
  }
  return (
    <div>
        <h1>Hello WebSocket</h1>
        {latestMessage}
    </div>
  )
}

export default App
