// express 


const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send("hello worldc !!")
})

app.get('/route', (req, res) => {
     res.json({
        name: "shoirf",
        age: 24
     })
})


app.listen(3000,()=>{
    console.log("app listening on port 3000");
    
})

