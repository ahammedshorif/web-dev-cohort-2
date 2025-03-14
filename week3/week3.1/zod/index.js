const express = require("express");
const z = require("zod");

const app = express();
app.use(express.json());

const schema = z.string();

let response = schema.parse("sljf");
  console.log(response);
//   let response2 = schema.parse(20);
//   console.log(response2);

app.get("/", (req, res) => {
  
  res.send("zod test route");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
