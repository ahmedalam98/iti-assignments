const express = require("express");
const { createServer } = require("http");
const { join } = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../Client/index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(join(__dirname, "../Client/style.css"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(join(__dirname, "../Client/script.js"));
});

app.get("/chat.svg", (req, res) => {
  res.sendFile(join(__dirname, "../Client/chat.svg"));
});

io.on("connection", (socket) => {
  // console.log("User connected with id : " + socket.id);

  socket.on("my-custom-event", (msg) => {
    console.log("Message : " + msg);
    io.emit("my-custom-event", msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
