// 1.1 Floating Child

var win;
var intId;
var x = 0;
var y = 0;

function moveWin() {
  intId = setInterval(moveChild, 1000);
}

function moveChild() {
  do {
    setTimeout(win.moveTo(x, y), 10000);
    x += 1;
    y += 1;
  } while (x !== 380);

  do {
    setTimeout(win.moveTo(x, y), 10000);
    x -= 1;
    y -= 1;
  } while (x !== 0);
}

function openFloating() {
  win = window.open("", "", "width=150,height=150");
  win.document.write("<p>Child Window</p>");
  win.focus();
  win.moveTo(0, 0);
  moveWin();
}

function stopFloating() {
  clearInterval(intId);
  win.close();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.2 Typing Message
function showTypingMessage() {
  var childWindow = window.open("", "_blank", "width=400,height=200");

  var message = "This is a demo message created by Ahmed Alam El-Deen ...";

  var index = 0;

  // Make the child window type the message
  var typingInterval = setInterval(function () {
    childWindow.document.write(message.charAt(index));

    index++;

    if (index === message.length) {
      setTimeout(function () {
        childWindow.close();
        clearInterval(typingInterval);
      }, 1000);
    }
  }, 100);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.3 Advertising

// Dummy Advertising Text
const text =
  "Introducing QuantumTech X-1 – where innovation meets elegance! Our flagship smartphone redefines your mobile experience with cutting-edge technology and sleek design. Immerse yourself in stunning visuals on the 6.5-inch Super AMOLED display, and capture life's moments with the 64MP triple-lens camera system. The Octa-Core Quantum Processor ensures lightning-fast performance for seamless multitasking. Stay powered throughout the day with the 5000mAh battery and enjoy fast charging. Unlock your device effortlessly with the in-display fingerprint sensor and facial recognition. With 5G connectivity, experience blazing-fast internet speeds for a connected lifestyle. Enhance your audio experience with Dolby Atmos, and enjoy the latest Android OS with access to a world of apps. Upgrade to QuantumTech X-1 today and elevate your smartphone experience. Brilliance meets sophistication in the QuantumTech X-1. Introducing QuantumTech X-1 – where innovation meets elegance! Our flagship smartphone redefines your mobile experience with cutting-edge technology and sleek design. Immerse yourself in stunning visuals on the 6.5-inch Super AMOLED display, and capture life's moments with the 64MP triple-lens camera system. The Octa-Core Quantum Processor ensures lightning-fast performance for seamless multitasking. Stay powered throughout the day with the 5000mAh battery and enjoy fast charging. Unlock your device effortlessly with the in-display fingerprint sensor and facial recognition. With 5G connectivity, experience blazing-fast internet speeds for a connected lifestyle. Enhance your audio experience with Dolby Atmos, and enjoy the latest Android OS with access to a world of apps. Upgrade to QuantumTech X-1 today and elevate your smartphone experience. Brilliance meets sophistication in the QuantumTech X-1. ";

function openAd() {
  var childWindow = window.open("", "_blank", "width=500,height=200");
  childWindow.document.write(text);
  childWindow.document.write(text);
  childWindow.document.write(text);

  // Make the child slowely scroll down to the last line
  var scrollInterval = setInterval(function () {
    childWindow.scrollBy(0, 10);
  }, 100);

  // Close the child window after reaching the last line
  setTimeout(function () {
    clearInterval(scrollInterval);
    childWindow.close();
  }, text.length * 4);
}
