var firstcolor = document.getElementById("first");
var secondcolor = document.getElementById("second");
var body = document.getElementById("base");
var printarea = document.getElementById("result");

function setGradient(){
    body.style.background = "linear-gradient(to right, "+ firstcolor.value +", " + secondcolor.value + ")"; 
    printarea.innerHTML = "linear-gradient(to right, "+ firstcolor.value +", " + secondcolor.value + ")";
}

firstcolor.addEventListener("input", setGradient,);
secondcolor.addEventListener("input", setGradient);



