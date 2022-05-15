var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("randomButton");

function setGradient(varColor1,varColor2) {
    body.style.background=
    "linear-gradient(to right," 
    + varColor1
    + "," 
    + varColor2
    +")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", function(){
    setGradient(color1.value,color2.value);
});

color2.addEventListener("input", function(){
    setGradient(color1.value,color2.value);
});

button.addEventListener("click",function(){
    var randomColor1="#"+ Math.floor(Math.random()*16777215).toString(16);
    var randomColor2="#"+ Math.floor(Math.random()*16777215).toString(16);
    setGradient(randomColor1,randomColor2);
    color1.value=randomColor1;
    color2.value=randomColor2;
})