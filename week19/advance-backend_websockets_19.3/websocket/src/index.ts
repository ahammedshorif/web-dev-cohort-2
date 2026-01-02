import WebSocket, {WebSocketServer} from "ws";

import http, { request } from "http"

const server = http.createServer((request:any ,response:any)=>{
    console.log((new Date())+ "Received request for " + request.url);
    response.end("hi there")
    
})

const wss = new WebSocketServer({server});

wss.on("connection",(ws)=>{
    ws.on("error",console.error);
    ws.on("message", function message(data,isBinary){
    wss.clients.forEach(function each(client){
        if(client.readyState === WebSocket.OPEN){
            client.send(data, {binary: isBinary});
        }
      })
    })
    ws.send("hello! message from server")
})

server.listen(5000,()=>{
    console.log("server listening on 5000");
    
})