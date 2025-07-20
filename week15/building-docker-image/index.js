import express from "express"

const app = express()


app.get("/", (req,res)=>{

    res.json({
        name: "docker",
        date: "21/07/2025"
    })
})


app.listen(3000,()=>{
    console.log("app listening on 3000");
    
})