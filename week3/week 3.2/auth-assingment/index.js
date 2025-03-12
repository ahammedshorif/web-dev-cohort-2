const express = require("express");
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";


const app= express()


app.use(express.json())

const Users = [
    {
        username: "shorif@gmail.com",
        password: "1234",
        name: "shorif"
    },
    {
        username: "rakib@gmail.com",
        password: "12345",
        name: "rakib"
    },
    {
        username: "shakil@gmail.com",
        password: "123456",
        name: "shakil"
    },
]

function userExists(userName,password){

}


app.post('/signin',(req,res)=>{
    const username =req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        res.status(403).json({
            msg: "user dosent exist in our in memory db",
        })
    }
    var token = jwt.sign({username: username},"shhhh");
    return res.json({
        token,
    })
});

app.get("/users", (req,res)=>{
    const token = req.header.authorization;
    try{
        const decoded =jwt.verify(token,jwtPassword);
        const username = decoded.username;

    } catch(err){
        return res.status(403).json({
            mag: "Invalid token",
        })

    }
})

app.listen(3000,()=>{
 console.log("listening on port 3000");
 
})