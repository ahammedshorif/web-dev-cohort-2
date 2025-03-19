const express = require("express")
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())


app.get("/sum", (req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    let sum = parseInt(num1) + parseInt(num2);

    res.json(sum);

})

app.listen(3000, ()=>{
    console.log("listening port on 3000");
    
})