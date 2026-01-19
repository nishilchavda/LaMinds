// variable -- temp data store(ex. Flipkart that save your data for buying purpose)

//var, let and const -- line by line comparison
//var (ES5)
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
//var 123 = "number"; //invalid
b= 24; //never use
//let
//let temp = "abc";
//const
const temp_const="Hello World!";

//declaration and initialization
var d; // declare
var d = 12; //declare and initialize for first time
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
var name = "user name";
let name1 = "user name1";

// Reassignment, redeclaration
var temp = 12;
temp = "number"; // Reassignment
var temp = "24"; // Redeclaration



//scope (global, Block, Functional)
var e = 23; // global scope
console.log("Global Scope " + e);

{
    var e = 25; // block scope
    console.log("Block Scope " + e);
}

function abc() {
    var e = 30; // functional scope
    console.log("Functional Scope " + e);
}
abc();
console.log("Global Scope after function " + e);





//scope (global, Block, Functional)
let f = 20; // global scope
console.log("Global Scope " + f);

{
    let f = 30; // block scope
    console.log("Block Scope " + f);
}

function abcd() {
    let f = 40; // functional scope
    console.log("Functional Scope " + f);
}
abcd();
console.log("Global Scope after function " + f);

//Temporal Dead Zone (TDZ)
// TDZ not working on var
console.log(temp_b);
var temp_b = 24; // on var there is no TDZ

// console.log(g);
console.log(j);
let j = 12; 


//Hosting Impact
//Hosting --> when your create a variable into js that break into two parts first is declare part that go to up and there  initialize part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 52)
// if you use console.log before initialization that give you undefined;
let  temp_d_let = 24;
// let variable not sure before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impact on var, let, const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/