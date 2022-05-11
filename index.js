var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient(){
    body.style.background = "linear-gradient(to right," 
   + color1.value 
   +" , "
   + color2.value +")";
   css.textContent = body.style.background + ";"
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



const addTo = x => x + y;
var addToken = addTo(10);
addToken(3);


const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);


const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);