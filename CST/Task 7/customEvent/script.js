var inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    stop();
  });
});

var ahmed = new Event("ahmed");

document.addEventListener("ahmed", function () {
  console.log("ahmed is fired");
});

var timerId = setTimeout(function () {
  document.dispatchEvent(ahmed);
}, 5000);

function stop() {
  clearTimeout(timerId);
  timerId = setTimeout(function () {
    document.dispatchEvent(ahmed);
  }, 5000);
}
