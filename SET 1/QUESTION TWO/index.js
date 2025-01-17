let count = 0
let button = document.getElementById("button");
let clicks = document.getElementById("numberOfClicks");

button.onclick =    function(){
    count++;
clicks.innerHTML = count;
}