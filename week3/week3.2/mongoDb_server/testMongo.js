const express = require("express");
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


app.listen(3000,()=>{
    console.log("listening on port 3000");
    
   })