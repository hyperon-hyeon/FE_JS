//JavaScript Basics Week2
//Function / Input / Condition


//Fuction
console.log("Hello my name is Hyeon"); //result: Hello my name is Hyeon
console.log("Hello my name is A"); //result: Hello my name is A
console.log("Hello my name is B"); //result: Hello my name is B

function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+nameOfPerson + " and I'm " + age);
}

sayHello("Hyeon",23);//result: Hello my name is Hyeon and I'm 23
sayHello("nico",10); //Hello my name is nico and I'm 10
sayHello("dal",21); //Hello my name is dal and I'm 21

function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}

function divide(firstNumber,secondNumber){
    console.log(firstNumber/secondNumber);
}

plus(8,60); //result: 68
divide(98,20); //result: 4.9


const player = {
    name:"Hyeon",
    sayHello: function(otherPeronsName){
        console.log("Hello! "+otherPeronsName+", nice to meet you!");
    }
};

console.log(player.name); //result: Hyeon
player.sayHello("nico"); //result: Hello! nico, nice to meet you!
console.log(player); //result: {name: 'Hyeon', sayHello: ƒ}name: "Hyeon"sayHello: ƒ (otherPeronsName)[[Prototype]]: Object

const foriegnerAge = 23;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge = calculateKrAge(foriegnerAge); //krAge = calculateKrAge's return value

console.log(krAge); //result: 25


//Input, Condition
const age= parseInt(prompt("How old are you?"));

if(isNaN(age)||age<0){
    console.log("Please write a real positive number");
} else if (age<18){
    console.log("You are too young");
}else if(age>=18 && age<=50){
    console.log("You can drink");
}else if(age > 50 && age<=80){
    console.log("You should exercise");
} else if (age===100){
    console.log("wow you are wise");
} else if (age>80){
    console.log("You can do whatever you want");
} 

