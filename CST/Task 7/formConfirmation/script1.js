var form = document.forms[0];

form.addEventListener("submit", function (event) {
  var response = confirm("Are you sure you want to submit?");

  if (!response) {
    event.preventDefault();
  }
});
