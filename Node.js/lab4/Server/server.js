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

app.get("/chat.svg", (req, res) => {
  res.sendFile(join(__dirname, "../Client/chat.svg"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("Message : " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
