if (window.localStorage) {
  var scriptElement = document.createElement("script");
  scriptElement.src = "./scripts/pollyfill.js";
  scriptElement.type = "text/javascript";
  document.head.appendChild(scriptElement);
}

const myButton = document.getElementById("btn");
myButton.addEventListener("click", () => {
  myLocalStorage.clear();

  myLocalStorage.setItem("userName", "Ahmed Alam El-Deen");
  myLocalStorage.setItem("age", "25");
  myLocalStorage.setItem("job", "Front-End Developer");
  myLocalStorage.setItem("country", "Egypt");

  // console.log(myLocalStorage.getItem("userName"));
  // console.log(myLocalStorage.removeItem("age"));
  console.log(myLocalStorage.cookiesObj);

  // myLocalStorage.clear();
});
