const express = require("express");
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";
const mongoose = require('mongoose');


const app= express()


app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test');


const Users = mongoose.model("Users",{
    name: String,
    username: String,
    password: String,
});


const user = new Users({
    name:"Ahammed shorif",
    username: "ahmmedsh0rif",
    password: "1234"
})

user.save();

console.log("data seve")

async function userExists(userName,password){
   const userExist = await Users.findOne({username: userName, password: password});
   return userExist;
}


app.post('/signin',(req,res)=>{
    const username =req.body.username;
    const password = req.body.password;
    

    if(!userExists(username,password)){
        res.status(403).json({
            msg: "user dosent exist in our in memory db",
        })
    }
    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token,
    })
});

app.get("/users", (req,res)=>{
    const token = req.headers.authorization;
        const decoded =jwt.verify(token,jwtPassword);
        const username = decoded.username;

        res.json({
            users: Users.filter((value)=>{
                if(value.username == username){
                    return false;
                }
                else{
                    return true;
                }
            })
        })

})

app.listen(3000,()=>{
 console.log("listening on port 3000");
 
})