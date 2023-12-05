var currentMarble = 0;

var marbles = document.querySelectorAll(".marbles");

console.log(marbles[currentMarble].src);

marbles.forEach(function (marble) {
  marble.addEventListener("mouseover", stop);
  marble.addEventListener("mouseout", start);
});

function backToZero() {
  if (currentMarble == marbles.length) {
    currentMarble = 0;
  }
}

function turnOn() {
  backToZero();

  marbles[currentMarble].src = "./marble3.jpg";
}

function turnOff() {
  backToZero();

  marbles[currentMarble].src = "./marble1.jpg";
  currentMarble++;
}

function start() {
  timer1 = setInterval(turnOn, 0);
  timer2 = setInterval(turnOff, 1000);
}

function stop() {
  clearInterval(timer1);
  clearInterval(timer2);
}

// Just to start the marbles once the page loads
var timer1 = setInterval(turnOn, 0);
var timer2 = setInterval(turnOff, 1000);
