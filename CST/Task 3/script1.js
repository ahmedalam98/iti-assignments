// 1.1
var response = prompt("Enter your headline", "Headline");

function printHeadline(response) {
  document.write("<h1>Heading</h1>");
  document.write("<hr/>");

  for (var i = 0; i < 6; i++) {
    document.write("<h" + (i + 1) + ">" + response + "</h" + (i + 1) + ">");
  }
}

printHeadline(response);


