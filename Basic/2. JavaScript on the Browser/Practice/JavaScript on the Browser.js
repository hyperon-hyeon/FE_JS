//JavaScript Basics Week3
//Document / Event / CSS in JS


//Document
const title1 = document.getElementsByClassName("hello");
console.log(title1); //result: HTMLCollection(3) [div.hello, div.hello, div.hello]

const title2 = document.getElementsByTagName("h1");
console.log(title2); //result: HTMLCollection(3) [h1, h1, h1]

const title3 = document.querySelector(".hello h1");
console.log(title3); //result: <h1>Grab me!</h1>
title3.innerText = "Hello"; //result: Hello (inner text)

const title4 = document.querySelectorAll(".hello h1");
console.log(title4); //result: NodeList(3) [h1, h1, h1]

const title = document.querySelector("div.hello:first-child h1");
console.dir(title);


//Event
function handleTitleClick(){
    title.style.color = "green";
}
function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}
title.addEventListener("click",handleTitleClick);
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave",handleMouseLeave);


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("no WIFI");
}
function handleWindowOnline(){
    alert("on WIFI");
}
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);