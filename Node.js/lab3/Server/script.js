const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 7007;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET requests

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/main.html"));
});

app.get("/main.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/main.css"));
});

app.get("/assets/bg.png", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/assets/bg.png"));
});

app.get("/assets/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/assets/logo.png"));
});

app.get("/clients.json", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/clients.json"));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/favicon.ico"));
});

app.get("/welcome.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/welcome.css"));
});

/////////////////////////////////////////////////////////////////////

// POST requests

app.post("/welcome.html", (req, res) => {
  let data = req.body;
  console.log(data);

  const page = fs
    .readFileSync(path.join(__dirname, "../Client/welcome.html"), "utf8")
    .replace("{clientName}", data.username)
    .replace("{clientEmail}", data.email)
    .replace("{clientPhone}", data.phoneNumber)
    .replace("{clientAddress}", data.address);

  // 1) Add the new client to the clients.json file in the Server folder
  const clients = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../Server/clients.json"), "utf8")
  );
  clients.push(data);

  // 2) Write the updated clients array to the clients.json file
  fs.writeFileSync(
    path.join(__dirname, "../Server/clients.json"),
    JSON.stringify(clients)
  );

  res.send(page);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
