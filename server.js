const express = require("express");
const app = express();

const date = new Date().getHours();
console.log(date);
if (date > 20 || date < 5) {
  console.log("server is not open");
} else {
  app.use(express.static(__dirname + "/Product"));
  console.log("welcome to our website");
}

app.listen(3000, err => {
  if (err) console.log("server is not run");
  else console.log("server is connected");
});
