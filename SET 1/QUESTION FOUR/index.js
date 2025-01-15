let maxCharacters = 200;
let enteredText = document.getElementById("enteredtext");
let countCharaters = document.getElementById("count");
countCharaters.innerHTML = maxCharacters;

enteredText.addEventListener("keydown", count);

function count(letters) {
  let numberOfCharacters = enteredText.value.length;
  if (numberOfCharacters >= maxCharacters) {
    letters.preventDefault();
  } else {
    countCharaters.innerHTML = maxCharacters - numberOfCharacters - 1;
  }
}
