const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

fs.readFile(dataPath,{
  encoding: "utf-8"
})
  .then( dataString => {
    console.log(dataString);
    writeTo(Number(dataString) + 1);
  })
  .catch(e => {
    console.log("File DNE, writing 0 to new file.");
    writeTo(0);
  });

const writeTo = (data) => {
  fs.writeFile(dataPath, data.toString())
    .catch(console.error);
};