var selectedImage = "./gws.jpg";

var inputs = document.querySelectorAll("input");
var message = document.getElementById("message");

function selectImage() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selectedImage = inputs[i].value;
    }
  }
}

var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function () {
  selectImage();
  openChildWindow();
});

//////////////////////////////////////////////////////////////

function openChildWindow() {
  var childWindow = window.open("", "childWindow", "width=400, height=400");
  var childWindowDocument = childWindow.document;

  childWindowDocument.body.style.backgroundColor = "blanchedalmond";
  var newImage = childWindowDocument.createElement("img");

  newImage.src = "./" + selectedImage + ".jpg";
  newImage.style.width = "250px";
  newImage.style.height = "250px";
  newImage.style.display = "block";
  newImage.style.position = "absolute";
  newImage.style.top = "25%";
  newImage.style.left = "50%";
  newImage.style.transform = "translate(-50%, -50%)";
  newImage.style.borderRadius = "24px";
  childWindowDocument.body.appendChild(newImage);

  var newParagraph = childWindowDocument.createElement("h2");
  newParagraph.innerText = message.value;
  newParagraph.style.fontFamily = "cursive, Roboto, sans-serif";
  newParagraph.style.position = "absolute";
  newParagraph.style.top = "50%";
  newParagraph.style.left = "50%";
  newParagraph.style.transform = "translate(-50%, -50%)";
  childWindowDocument.body.appendChild(newParagraph);

  var closeButton = childWindowDocument.createElement("button");
  closeButton.innerText = "Close Preview";
  closeButton.style.position = "absolute";
  closeButton.style.top = "65%";
  closeButton.style.left = "50%";
  closeButton.style.transform = "translate(-50%, -50%)";
  closeButton.style.display = "inline-block";
  closeButton.style.padding = "1em 1.7em";
  closeButton.style.margin = "0 0.1em 0.1em 0";
  closeButton.style.border = "0.16em solid black";
  closeButton.style.borderRadius = "2em";
  closeButton.style.boxSizing = "border-box";
  closeButton.style.textDecoration = "none";
  closeButton.style.fontFamily = "Roboto, sans-serif";
  closeButton.style.fontWeight = "600";
  closeButton.style.color = "black";
  closeButton.style.textShadow = "0 0.04em 0.04em rgba(255, 255, 255, 0.253)";
  closeButton.style.textAlign = "center";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    childWindow.close();
  });
  childWindowDocument.body.appendChild(closeButton);
}
