const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/home.html");
});
app.get("/gamevault", (request, response) => {
  response.sendFile(__dirname + "/pages/gamevalt.html");
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
