const express = require('express');
const fs = require('fs');
const bodyParser= require('body-parser');

const app = express();
const PORT= 4000;

app.use(express.json());
app.use(bodyParser.json());



// app.get('/files/:fileName', (req, res) => {
//     const fileName = req.params.fileName;
//      console.log(fileName);
     
// })

app.post('/files', (req, res) => {
    console.log(req.body.data);
    
    fs.appendFile("test.txt", req.body.data, ()=>{
        res.json({
            mag: "write file done!"
        })
    })
})


app.get('/files/:fileName', (req, res) => {
    let fileName = req.params.fileName;
    let data;
    fs.readFile(fileName, "utf-8",(err,data)=>{
        console.log(data);
        
        res.json({
            data
        })
    })
    
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
    
})