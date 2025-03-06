const express = require('express');
const router = express.Router();


/// middleware

const auth = function(req, res, next) {
    console.log("inside auth middleware");

    req.user= {
        userId:req.headers.id,
        role: req.headers.role,
    }
    

    if(req.user){
        next();
    }
    else{
        res.status(403).json({
            succes: false,
            mag: "not a vilid user",
        })
    }
    
}

const isStudent = function(req,res,next){
    console.log("inside student middelwares");

    if(req.user.role == "student"){
        next();
    }
    else{
        res.status(403).json({
            success: false,
            mas: "accces denied, this route is only for students"
        })
    }
    
}


const isAdmin = function(req,res,next){
    console.log("inside Admin middelware");

    if(req.user.role== "admin"){
        next();
    }
    else{
        res.status(403).json({
            success: false,
            mag: "Your are not admin"
        })
    }
}


//routes

router.get("/student", auth,isStudent,(req,res) =>{
    console.log("I'm inside the student route");

    res.send(" student Page")
    
})

router.get("/admin", auth,isAdmin,(req,res)=>{
    console.log("This is Admin route");

    res.send("Admin Page")
    
})


module.exports = router