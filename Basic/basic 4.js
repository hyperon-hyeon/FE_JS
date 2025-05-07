//JavaScript Basics Week4
//CSS in JS / 


//1. CSS in JS
const h1 = document.querySelector("h1"); // h1 요소를 먼저 가져와야 함

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);