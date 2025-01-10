/*
//Add new element
let newHeading = document.createElement('h1');
console.log(document.createElement('h1'));
newHeading.innerText = "The lord is good";

body.appendChild(newHeading)


// Work with Event listeners
select.option.addEventListener('Volvo',function(){
    body.style.backgroundColor = "blue";
})
*/

let selectFontSize = document.getElementById("changefont");
let updateFontSize = document.getElementById("words");

selectFontSize.addEventListener("change", function () {
  let selectedFontSize = selectFontSize.value;
  updateFontSize.style.fontSize = selectedFontSize;
});

let selectFontColor = document.getElementById("changeFontColor");
let updateFontColor = document.getElementById("words");

selectFontSize.addEventListener("click", function () {
  let selectedFontColor = selectFontColor.value;
  updateFontColor.style.color = selectedFontColor;
});

let selectFontFamily = document.getElementById("changeFontFamily");
let updateFontFamaily = document.getElementById("words");

selectFontFamily.addEventListener("change", function () {
  let selectedFontFamily = selectFontFamily.value;
  updateFontFamaily.style.fontFamily = selectedFontFamily;
});
