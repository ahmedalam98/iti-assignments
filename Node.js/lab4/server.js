const express = require("express");
const { createServer } = require("http");
// const { join } = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.get("/chat.svg", (req, res) => {
  res.sendFile(__dirname + "/chat.svg");
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/favicon.ico");
});

io.on("connection", (socket) => {
  // console.log("User connected with id : " + socket.id);

  socket.on("my-custom-event", (msg) => {
    console.log("Message : " + msg);
    io.emit("my-custom-event", msg);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`server running at http://localhost:${process.env.PORT || 3000}`);
});
