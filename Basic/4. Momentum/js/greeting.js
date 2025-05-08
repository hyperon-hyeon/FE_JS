//JavaScript Basics Week4
//Login - Default activity / save user name / local storage

//1. prevent Default activity
const link=document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}
link.addEventListener("click",handleLinkClick);

//2. save username
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

loginForm.addEventListener("submit",loginSubmit);


//3. local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);
}else{
    paintGreetings(savedUsername);
}


