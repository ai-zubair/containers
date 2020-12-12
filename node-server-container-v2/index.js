const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res)=>{
  console.log(req.body);
  res.json({code: "hello world"});
})

app.listen(3000, ()=>{
  console.log("Server fired at 3000")
})