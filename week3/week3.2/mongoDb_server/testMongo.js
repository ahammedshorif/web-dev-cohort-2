const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test");

const Users = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});


//** store data in mongodb database

function storeData(){
    const user = new Users({
        name:"shorif100",
        username: "ahmmedsh0rif",
        password: "1234"
    })
    
    user.save();
    console.log("data seve")
}

//  storeData()



//***get data**
async function getData() {
  try {
    const docs = await Users.find({});
    return docs;
  } catch (err) {
    console.error(err);
  }
}


app.get("/", (req, res) => {
  async function call() {
    const result = await getData();
    console.log(result);

    res.json(result);
  }
  call()
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
