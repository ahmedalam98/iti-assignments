document.addEventListener("DOMContentLoaded", function () {
  var rightImage = document.querySelector(".right");
  var leftImage = document.querySelector(".left");
  var bottomImage = document.querySelector(".bottom");

  var stopButton = document.getElementById("stop");
  var moveButton = document.getElementById("move");

  rightImage.style.position = "absolute";
  rightImage.style.top = "50%";
  rightImage.style.transform = "translateY(-50%)";
  rightImage.style.right = "0";

  leftImage.style.position = "absolute";
  leftImage.style.top = "50%";
  leftImage.style.transform = "translateY(-50%)";
  leftImage.style.left = "0";

  bottomImage.style.position = "absolute";
  bottomImage.style.bottom = "0";
  bottomImage.style.left = "50%";
  bottomImage.style.transform = "translateX(-50%)";

  var parentBox = 270;

  var leftFlag = 0;

  function moveImage1() {
    var leftPos = parseInt(leftImage.style.left);

    if (leftPos !== parentBox && leftFlag === 0) {
      leftImage.style.left = leftPos + 1 + "px";
    } else if (leftPos === parentBox) {
      leftFlag = 1;
      leftImage.style.left = leftPos - 1 + "px";
    }

    if (leftPos !== 0 && leftFlag === 1) {
      leftImage.style.left = leftPos - 1 + "px";
    }
    if (leftPos === 0) {
      leftFlag = 0;
      leftImage.style.left = leftPos + 1 + "px";
    }
  }

  var rightFlag = 0;

  function moveImage2() {
    var rightPos = parseInt(rightImage.style.right);

    if (rightPos !== parentBox && rightFlag === 0) {
      rightImage.style.right = rightPos + 1 + "px";
    } else if (rightPos === parentBox) {
      rightFlag = 1;
      rightImage.style.right = rightPos - 1 + "px";
    }

    if (rightPos !== 0 && rightFlag === 1) {
      rightImage.style.right = rightPos - 1 + "px";
    } else if (rightPos === 0) {
      rightFlag = 0;
      rightImage.style.right = rightPos + 1 + "px";
    }
  }

  var bottomFlag = 0;

  function moveImage3() {
    var bottomPos = parseInt(bottomImage.style.bottom);

    if (bottomPos !== parentBox && bottomFlag === 0) {
      bottomImage.style.bottom = bottomPos + 1 + "px";
    } else if (bottomPos === parentBox) {
      bottomFlag = 1;
      bottomImage.style.bottom = bottomPos - 1 + "px";
    }

    if (bottomPos !== 0 && bottomFlag === 1) {
      bottomImage.style.bottom = bottomPos - 1 + "px";
    } else if (bottomPos === 0) {
      bottomFlag = 0;
      bottomImage.style.bottom = bottomPos + 1 + "px";
    }
  }

  var leftInterval = setInterval(moveImage1, 10);
  var rightInterval = setInterval(moveImage2, 10);
  var bottomInterval = setInterval(moveImage3, 10);

  function stop() {
    clearInterval(leftInterval);
    clearInterval(rightInterval);
    clearInterval(bottomInterval);
  }

  function movement() {
    leftInterval = setInterval(moveImage1, 10);
    rightInterval = setInterval(moveImage2, 10);
    bottomInterval = setInterval(moveImage3, 10);
  }

  stopButton.addEventListener("click", stop);
  moveButton.addEventListener("click", movement);
});
