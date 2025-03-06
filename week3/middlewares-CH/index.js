const express = require('express')
const app = express()

app.use(express.json());

const route = require("./routes/route")

// mount the router on the app
app.use("/api",route)



app.get('/', (req, res) => {
    console.log("Home route");
    res.send("Welcome");
    
})

app.listen(2000, ()=>{
    console.log("listening on 2000");
    
})