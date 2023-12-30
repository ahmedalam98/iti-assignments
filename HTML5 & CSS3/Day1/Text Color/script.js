window.addEventListener("DOMContentLoaded", () => {
  const redRange = document.getElementById("redRange");
  const greenRange = document.getElementById("greenRange");
  const blueRange = document.getElementById("blueRange");
  const text = document.getElementById("myText");

  function updateParagraphColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    text.style.color = color;
  }

  redRange.addEventListener("input", updateParagraphColor);
  greenRange.addEventListener("input", updateParagraphColor);
  blueRange.addEventListener("input", updateParagraphColor);
});
