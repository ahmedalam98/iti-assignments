document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

var btn = document.querySelector("button");

// Event handler
btn.onclick = function () {
  alert("I'm an event handler.");
};

// Event listener
btn.addEventListener("click", function () {
  alert("I'm an event listener.");
});
