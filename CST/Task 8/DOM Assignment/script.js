document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector("img");
  var navList = document.getElementById("nav");

  image.addEventListener("click", function () {
    changeImagePosition();
    var cloneImage = createCloneImage();
    document.body.appendChild(cloneImage);
    navList.style.listStyleType = "circle";
  });

  function changeImagePosition() {
    image.style.position = "absolute";
    image.style.top = "0px";
    image.style.right = "0px";
  }

  function createCloneImage() {
    var cloneImage = document.createElement("img");
    cloneImage.src = image.src;
    cloneImage.style.width = "200px";
    cloneImage.style.height = "200px";
    cloneImage.style.position = "absolute";
    cloneImage.style.bottom = "0px";
    cloneImage.style.left = "0px";
    return cloneImage;
  }

  navList.style.position = "absolute";
  navList.style.top = "50%";
  navList.style.left = "50%";
  navList.style.transform = "translate(-50%, -50%)";

  var listItems = navList.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.textAlign = "center";
  }
});
