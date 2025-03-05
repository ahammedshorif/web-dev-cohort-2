const express = require('express');
const app = express();

app.use(express.json());

let username;
let password;
let kidneyId;
    

function userMiddleware(req, res, next){
        
    if(username != "shorif" && password != "shor"){
        res.status(402).json({
            mag: 'Invalid username or password',
        })
    }
    else{
        next();
    }
}


function kidneyMiddleware(req, res, next){
    
    if(kidneyId != 1 || kidneyId !=2){
        res.status(403).json({
            mag: "incorrect input in query!"
        })
    }
    else{
        next();
    }
}



app.get('/health-checkup', userMiddleware,kidneyMiddleware, function (req, res){
    
    username = req.headers.username;
    password = req.headers.password;
    kidneyId = req.query.kidneyId;
    

    res.send("Your kidney is healthy 🙂")


});

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})