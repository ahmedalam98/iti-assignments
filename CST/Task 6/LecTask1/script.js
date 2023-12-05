document.getElementsByTagName;

document.getElementById("btn1").addEventListener("click", function () {
  displayInputText();
  displayOptionText();
});

function displayInputText() {
  var txt = document.getElementById("txt1");
  document.getElementById("div1").innerText = txt.value;
}

function displayOptionText() {
  var sel = document.getElementById("menu");
  var selectedOptions = [];
  for (var i = 0; i < sel.options.length; i++) {
    if (sel.options[i].selected) {
      selectedOptions.push(sel.options[i]);
    }
  }

  var optionTexts = selectedOptions.map(function (option) {
    return option.text;
  });

  var optionValues = selectedOptions.map(function (option) {
    return option.value;
  });

  document.getElementById("opTxt").innerText = optionTexts.join("- ");
  document.getElementById("opVal").innerText = optionValues.join("- ");
}
