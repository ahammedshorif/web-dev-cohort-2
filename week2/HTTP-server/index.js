// express 


const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(express.json())
app.use(bodyParser.json())


const users = [{
    name: "shorif",
    age: 24,
    metadata: {
        profilePicture: "none",
        pronouns: "he/him",
        address: "cumilla"
    }
},
 {
    name: "Ovi",
    age: 24,
    metadata: {
        profilePicture: "none",
        pronouns: "he/him",
        address: "ctg"
    }
}

]



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

app.get('/user', (req, res) => {
    let uname = [];
    for(let i=0;i<users.length;i++){
        let userAddress= users[i].metadata.address;
        console.log(userAddress);
        
         uname.push(userAddress);
    }
    res.send(uname);
})

app.post('/', (req, res) => {
    console.log(req.body);
    const ageb = req.body.age;
    res.json({
        mag: "done"
    })
    
})

app.delete('/', (req, res) => {
     res.status(404).json({
        mag: "page not found"
     })
})


app.listen(3000,()=>{
    console.log("app listening on port 3000");
    
})

