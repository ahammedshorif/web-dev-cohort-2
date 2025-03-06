const express = require('express')
const app = express()

app.use(express.json());

const route = require("./routes/route")

app.use("/api",route)



app.get('/', (req, res) => {
    console.log("Home route");
    res.send("Welcome");
    
})

app.listen(2000, ()=>{
    console.log("listening on 2000");
    
})