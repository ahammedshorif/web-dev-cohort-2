const express = require("express");
const { createTode, updateTodo } = require("./types");
const app = express()

app.use(express.json())

app.post("/todo", (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTode.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(403).json({
            mag: "You send wrong inputs"
        })
        return;
    }
    //put it mongoDB

})
app.get("/todos",  (req,res)=>{

})

app.put("/completed", (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(403).json({
            mag: "You send wrong inputs"
        })
        return;
    }
})

app.listen(3000,()=>{
    console.log("app lintening on 3000");
    
})