//must be saved as package to node js --save
const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.send("welcome to the server")
})

app.listen(3000, () => {
  console.log('hey');
})
