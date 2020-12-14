const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const dbURL = process.env.MONGO_URL || "mongo://localhost:27017";
const dbName = "docker";
const collecName = "counter";

async function start(){
  
  const dbClient = await MongoClient.connect(dbURL);
  const db = dbClient.db(dbName);
  const collec = db.collection(collecName);
  
  app.get("/",async(req,res)=>{
    const count = await collec.countDocuments();
    res.json({count});
  })

  app.get("/add",async(req,res)=>{
    await collec.insertOne({});
    res.json({msg: "success"})
  })

  app.listen(4000,()=>{
    console.log("Server fired at 4000");
  })

}

start();