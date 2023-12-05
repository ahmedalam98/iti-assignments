// DOM Elements

var next = document.getElementById("next");
var slideshowButton = document.getElementById("slideshow");
var stop = document.getElementById("stop");
var previous = document.getElementById("previous");
var img = document.querySelector("img");

var images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg"];
var intervalId;

// Event Listeners

next.addEventListener("click", nextImage);

slideshowButton.addEventListener("click", startSlideshow);

stop.addEventListener("click", stopSlideshow);

previous.addEventListener("click", previousImage);

// Functions

function nextImage() {
  var currentImage = img.getAttribute("src");
  var index = images.indexOf(currentImage);
  if (index === images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  img.setAttribute("src", images[index]);
}

function previousImage() {
  var currentImage = img.getAttribute("src");
  var index = images.indexOf(currentImage);
  if (index === 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  img.setAttribute("src", images[index]);
}

function startSlideshow() {
  intervalId = setInterval(nextImage, 1000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}
