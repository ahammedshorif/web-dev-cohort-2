// express 


const express = require('express');

const app = express();



app.get('/', (req, res) => {
    console.log(req.headers);
    let age = req.query.age;
    console.log(`age = ${age}`)
    
    res.send(`hello man Your age is ${age}`)
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

