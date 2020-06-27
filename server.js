const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/home.html");
});
app.get("/gamevault", (request, response) => {
  response.sendFile(__dirname + "/pages/gamevalt.html");
});
app.get("/chat", (request, response) => {
  response.sendFile(__dirname + "/pages/chat.html");
});
app.get("/mit", (request, response) => {
  response.sendFile(__dirname + "/pages/mit.html");
});
app.get("/videos/all", (request, response) => {
  response.sendFile(__dirname + "/videos/all.html");
});
app.get("/vt", (request, response) => {
  response.sendFile(__dirname + "/videos/template.html");
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
