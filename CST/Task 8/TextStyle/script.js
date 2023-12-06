var text = document.getElementById("PAR");
var fontInputs = document.querySelectorAll("input[name='Font']");
var alignInputs = document.querySelectorAll("input[name='Align']");
var heightInputs = document.querySelectorAll("input[name='Height']");
var lspaceInputs = document.querySelectorAll("input[name='Lspace']");
var indentInputs = document.querySelectorAll("input[name='Indent']");
var transformInputs = document.querySelectorAll("input[name='Transform']");
var decorationInputs = document.querySelectorAll("input[name='Decorate']");
var borderInputs = document.querySelectorAll("input[name='Border']");
var borderColorInputs = document.querySelectorAll("input[name='BorderColor']");

function handleFontChange() {
  for (var i = 0; i < fontInputs.length; i++) {
    if (fontInputs[i].checked) {
      ChangeFont(fontInputs[i].value);
    }
  }
}

function handleAlignChange() {
  for (var i = 0; i < alignInputs.length; i++) {
    if (alignInputs[i].checked) {
      ChangeAlign(alignInputs[i].value);
    }
  }
}

function handleHeightChange() {
  for (var i = 0; i < heightInputs.length; i++) {
    if (heightInputs[i].checked) {
      ChangeHeight(heightInputs[i].value);
    }
  }
}

function handleLspaceChange() {
  for (var i = 0; i < lspaceInputs.length; i++) {
    if (lspaceInputs[i].checked) {
      ChangeLSpace(lspaceInputs[i].value);
    }
  }
}

function handleIndentChange() {
  for (var i = 0; i < indentInputs.length; i++) {
    if (indentInputs[i].checked) {
      ChangeIndent(indentInputs[i].value);
    }
  }
}

function handleTransformChange() {
  for (var i = 0; i < transformInputs.length; i++) {
    if (transformInputs[i].checked) {
      ChangeTransform(transformInputs[i].value);
    }
  }
}

function handleDecorateChange() {
  for (var i = 0; i < decorationInputs.length; i++) {
    if (decorationInputs[i].checked) {
      ChangeDecorate(decorationInputs[i].value);
    }
  }
}

function handleBorderChange() {
  for (var i = 0; i < borderInputs.length; i++) {
    if (borderInputs[i].checked) {
      ChangeBorder(borderInputs[i].value);
    }
  }
}

function handleBorderColorChange() {
  for (var i = 0; i < borderColorInputs.length; i++) {
    if (borderColorInputs[i].checked) {
      ChangeBorderColor(borderColorInputs[i].value);
    }
  }
}

fontInputs.forEach(function (input) {
  input.addEventListener("change", handleFontChange);
});

alignInputs.forEach(function (input) {
  input.addEventListener("change", handleAlignChange);
});

heightInputs.forEach(function (input) {
  input.addEventListener("change", handleHeightChange);
});

lspaceInputs.forEach(function (input) {
  input.addEventListener("change", handleLspaceChange);
});

indentInputs.forEach(function (input) {
  input.addEventListener("change", handleIndentChange);
});

transformInputs.forEach(function (input) {
  input.addEventListener("change", handleTransformChange);
});

decorationInputs.forEach(function (input) {
  input.addEventListener("change", handleDecorateChange);
});

borderInputs.forEach(function (input) {
  input.addEventListener("change", handleBorderChange);
});

borderColorInputs.forEach(function (input) {
  input.addEventListener("change", handleBorderColorChange);
});

function ChangeFont(font) {
  document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(align) {
  document.getElementById("PAR").style.textAlign = align;
}

function ChangeHeight(height) {
  document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(lspace) {
  document.getElementById("PAR").style.letterSpacing = lspace;
}

function ChangeIndent(indent) {
  document.getElementById("PAR").style.textIndent = indent;
}

function ChangeTransform(transform) {
  document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decoration) {
  document.getElementById("PAR").style.textDecoration = decoration;
}

function ChangeBorder(border) {
  document.getElementById("PAR").style.border = border;
}

function ChangeBorderColor(borderColor) {
  document.getElementById("PAR").style.borderColor = borderColor;
}
