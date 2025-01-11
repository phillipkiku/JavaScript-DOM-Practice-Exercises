

let selectFontSize = document.getElementById("changefont");
let updateFontSize = document.getElementById("words");

selectFontSize.addEventListener("change", function () {
  let selectedFontSize = selectFontSize.value;
  updateFontSize.style.fontSize = selectedFontSize;
});

let selectFontColor = document.getElementById("changeFontColor");
let updateFontColor = document.getElementById("words");

selectFontColor.addEventListener("change", function () {
  let selectedFontColor = selectFontColor.value;
  updateFontColor.style.color = selectedFontColor;
});

let selectFontFamily = document.getElementById("changeFontFamily");
let updateFontFamily = document.getElementById("words");

selectFontFamily.addEventListener("change", function () {
  let selectedFontFamily = selectFontFamily.value;
  updateFontFamily.style.fontFamily = selectedFontFamily;
});


let selectBackgroundColor = document.getElementById("changeBackgroundColor");
let updateBackgtoundColor = document.getElementById("words");

selectBackgroundColor.addEventListener("change", function () {
  let selectedBackgroundColor = selectBackgroundColor.value;
  updateBackgtoundColor.style.backgroundColor = selectedBackgroundColor;
});