
/*var maxchar = 160;
var i = document.getElementById("textinput");
var c = document.getElementById("count");
c.innerHTML = maxchar;
    
i.addEventListener("keydown",count);

function count(e){
    var len =  i.value.length;
    if (len >= maxchar){
       e.preventDefault();
    } else{
       c.innerHTML = maxchar - len-1;   
    }
}
*/


let maxCharacters = 200;
let enteredText = document.getElementById("enteredtext");
var countCharaters = document.getElementById("count");
countCharaters.innerHTML = maxCharacters;
    
enteredText.addEventListener("keydown",count);

function count(letters){
    let numberOfCharacters =  enteredText.value.length;
    if (numberOfCharacters >= maxCharacters){
       letters.preventDefault();
    } else{
       countCharaters.innerHTML = maxCharacters - numberOfCharacters-1;   
    }
}