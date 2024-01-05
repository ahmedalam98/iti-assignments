var canvas = document.getElementById("myCanvas");
var draw = canvas.getContext("2d");

var uplftX = 0;
var uplftY = 0;
var edge1 = canvas.width;
var edge2 = canvas.height;
draw.lineWidth = 3;
draw.strokeStyle = "rgb(10, 67, 191)";
var drawing;

drawing = setInterval(() => {
  draw.beginPath();
  draw.moveTo(uplftX, uplftY);
  uplftX += 5;
  uplftY += 5;
  draw.lineTo(uplftX, uplftY);
  draw.stroke();
  if (uplftX > edge1 && uplftY > edge2) {
    alert("Animation End");
    clearInterval(drawing);
  }
}, 50);
