//JavaScript Basics Week1
//Variables and Constants, Data Types / Arrays / Objects

alert("hi");

// Variables and Constants, Data Types
const a=5;
var b=2;
let myName="Hyeon"; 

console.log(a+b); //result: 7
console.log(a*b); //result: 10
console.log(a/b); //result: 2.5
console.log("hello! "+myName); //result: hello! Hyeon

myName="Hyeon Lee"; //let allows changing the value of myName
console.log("hello! "+myName); //result: hello! Hyeon Lee


const amIfat=null;
let something;
console.log(something,amIfat); //result: undefined null


//Arrays
const daysOfWeek=["mon","tue","wed","thu","fri","sat","sun"];
console.log(daysOfWeek); //result: mon,tue,wed,thu,fri,sat,sun 
console.log(daysOfWeek[0]); //result: mon

daysOfWeek.push("again mon"); //add again mon to the end of the array
console.log(daysOfWeek); //result: mon,tue,wed,thu,fri,sat,sun, again mon

const nonsense=[1,2,"hello",true,null]; //array with different data types
console.log(nonsense); //result: [1,2,"hello",true,null]


//Objects
const playerName = "Hyeon";
const playerPoints = 121212;
const playerHandsome = true;  
const playerFat = "little bit fat";

const playerArr =["Hyeon",121212,true,"little bit fat"];
console.log(playerArr); //result: ["Hyeon",121212,true,"little bit fat"]

const playerObj={
    name:"Hyeon",
    points:121212,
    handsome:true,
    fat:"little bit fat"
}; //object with different data types

console.log(playerObj.name); //result: Hyeon
console.log(playerObj["name"]); //result: Hyeon

playerObj.fat="not fat"; //change the value of fat
console.log(playerObj.fat); //result: not fat

playerObj.lastName="Lee"; //add lastName to the object
playerObj.points=7; //change the value of points
console.log(playerObj); //result: {name: "Hyeon", points: 7, handsome: true, fat: "very fat", lastName: "Lee"}