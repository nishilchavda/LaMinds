// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function () {} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};

function temp_cart(){
    console.log("Adding Product");
}
temp_cart()
temp_cart()
temp_cart()

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function ( args --> function call karti () ni andar lakheli(pass) kareli values)

function cartBtn(product) { // product -- parms
    console.log("Adding", product, "to Cart");
}
cartBtn("Dell Laptop");
cartBtn("Apple 16");
cartBtn("PS5");

function cartBtn_price(product, price){
    console.log("Adding", product, "to Cart with", price);
}
cartBtn_price("Dell Laptop", 50000);
cartBtn_price("Apple 16", 56000);
cartBtn_price("PS 5", 60000);

// exercise
function plus(num1,num2) {
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus(1,3);

// convert into function expression
let plus_expression = function (num1,num2) {
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus_expression(2,3);

// convert into arrow function
let plus_arrow = (num1,num2) =>{
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus_arrow(3,3);

// Default, rest parameters in function
// default
function def(v1, v2){
    console.log(v1, v2);
}
def();
function buyNow(product = "Product Name", price = "Product_Price") {
    console.log(product, price);
}
buyNow("Mobile");

// reset --> Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni andar lakhvana aave chhe)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(v1, v2, v3, ...numbers) {
    // ...numbers -- reseters
    console.log("reset", v1, v2, v3, numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//example
function abcd2(v1, v2, v3, ...characters) {
    // ...numbers -- reseters
    console.log("reset", v1, v2, v3, characters);
}
abcd1("A", "B","C", "D", "E", "F", "G", "H", "I", "J");

function abcd3(v1, v2, v3, ...run) {
    // ...numbers -- reseters
    console.log("reset", v1, v2, v3, characters);
}
abcd1(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// return or early return
function temp_fnc() {
    if ( 10 > 9 ) return "true";
}
temp_fnc();

// first Class function:
// function can be treated as variables
// let fnc1 = function (){} - function expression
// let fnc2 = () => () - arrow function
const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
};
cart5("function expression - S25 ultra", 69000);
//convert into arrow function
const cart6 = (product, price) => {
    console.log(`Adding ${product} at ${price}`);
}
cart6("function expression - S25 ultra", 69000);

//example
const cart7 = (product, price,id) => {
    console.log(`Adding ${product} at ${price} which id ${id}`);
}
cart7("function expression - S25 ultra", 69000, 1234);

// function can be passed as arguments to other functions
function temp_fnc2(params) {
    params(); // agrs function
}
temp_fnc2(() => {
    console.log("second function")
}); // function agrs --> function

//example
function temp_fnc2(number) {
    number(); // agrs function
}
temp_fnc2(() => {
    console.log(`sum of`, 1+2)
}); // function agrs --> function

// function can be returned from other functions
function temp_fnc2() {
    return function fnc4() {
        console.log("function 4");
        // return "function can be returned from other function"
    }
}
console.log(temp_fnc2()());

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){}} abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state na modify na kare (Pure function --> je function bahar na state ne modify na kare)
let temp_a = 20;
function temp_change() {
    return "hello";
} // --> pure function
console.log(temp_change());

console.log("value of temp_a before change:", temp_a);

// impure function --> function je same input  par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare)
function temp_change1() {
    temp_a++;
} // --> inpure function
temp_change1();
console.log("Value of temp_a after change", temp_a);
temp_change1();
console.log("Value of temp_a after change", temp_a);
temp_change1();
console.log("Value of temp_a after change", temp_a);
temp_change1();
console.log("Value of temp_a after change", temp_a);
temp_change1();
console.log("Value of temp_a after change", temp_a);

// closure function
// function je potana parent function na variables ne access kari shake (return thava valo function use karshe parent function na koi variable) (function within function)
function outer(){
    let outer_var = 50; // parent function variable
    function inner(){
        outer_var--;
        console.log(outer_var); // child function console log
    }
    return inner();
}
console.log(outer());

function outer1(){
    let outer_var = 50; // parent function variable
    function inner1(){
        outer_var += 2;
        console.log(outer_var); // child function console log
    }
    return inner1();
}
console.log(outer1());

//lexical scope --> nested function can access variables declared in their outer scope
function outer2(){
    let temp_outer = "Outer Function variable";
    function inner1(){
        let temp_inner = "Inner Function Variable";
        console.log(temp_outer);
        function most_inner(){
            console.log("Most_inner Function Output", temp_outer);
            console.log("Most_inner Function Output", temp_inner);
            function most2_inner(){
                console.log("Most2_inner Function Output", temp_outer);
                console.log("Most2_inner Function Output", temp_inner);
            }
            most2_inner();
        }
        most_inner();
    }
    inner1();
}
outer2();

// IIFE - immediately invoked function expression
(function(){})(); // function je declare karta j call thai jaye
(function temp_IIFE(){
    console.log("IIFE Function")
})();

// Hosting in fuction
temp_abc();
function temp_abc(){
    console.log("Hosited Function")
} // -- function decleration
// temp_bcd();
// let temp_bcd = function (){
//     console.log("Hosited Function");
// }
// temp_cdf();
// let temp_cdf = () => {
//     console.log("Hosited Function");
// }

// exercise

// Example 1
// greet();
// function greet() {
//   console.log("Hello");
// } // hosting before defind

// greet();
// const greet = function () {
//   console.log("Hello");
// }; // not hoting before defind

// Example 2
greet();
function greet(){ 
    console.log("Hello!"); 
} // hosting, print Hello!
// why? - function declaration but called before

// Example 3
// function addd(a,b) {
//     return a + b;
// }
// console.log(addd(4,5))

// let addd = (a,b) => {
//     return a + b;
// }
// console.log(addd(4,5))

// Example 4
function welcome(name) // name is parameters
{ 
    console.log("Welcome " + name); 
}
welcome("user"); // user - arguments
// why? - params is placeholder in definition & arg is value when function call

// Example 5
function temp (a, b, c) // a,b,c are parameters - 3
{ 
    console.log(a,b,c); 
}
temp(1, 2) // 1,2 are arguments - 2/ 1 is undefind

// Example 6
function temp_user(name = "Guest")
{ 
    console.log("Hello " + name); 
}
temp_user(); 
// why? - argument is definded with params so when function is called it prin "Hello Guest"

// Example 7
function number(...numbers) // "..." is reseters
{ 
    console.log(numbers); 
}
number(1, 2, 3, 4, 5)
// why ? - ...numbers collects all arguments into an array
// Useful when number of arguments is unknown

// Example 8
// function calculateTotal(...scores)
// { 
//     let total = 0; 
//     for(let i=0; i<=scores.length; i++)
//     { 
//         total += scores[i]; 
//     } 
//     return total; 
// } // error - 

// function calculateTotal(...scores)
// { 
//     let total = 0; 
//     scores.forEach(function(val)
//     { 
//         total = total + val; 
//     });
//     return total; 
// } // correct -

// console.log(calculateTotal(10, 20 ,30 ,40 ,50));
// // let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50);

// Example 9
// function checkAge(age)
// { 
//     if(age < 18)
//     { 
//         console.log("Too Young"); 
//     } else {
//         console.log("Access Granted"); 
//     } 
// }

// function checkAge(age){
//     if(age < 18){
//         console.log("Too Young");
//         return;
//     }
//     console.log("Access Granted");
// }
// Why? Stops execution early, Cleaner and more readable

// Example 10
// function f()
// { return;}
// why? - return; without a value automatically returns undefined

// Example 11
// Functions in JavaScript are treated like any other value.
// Why?
// Because functions can:
// Be assigned to variables
// Be passed as arguments
// Be returned from other functions
// Be stored in arrays / objects

// Example 12
// let a = function(){console.log("Helloo");}
// a(a);
// no error
// a assinged function

// Example 13
// function abcd1(val1){ val1(); }
// abcd1(function(){ console.log("Hello");})
// no error
// callback function

// Example 14
// Takes another function as an argument, OR Returns a function

// Example 16 
let a = 5;
function num(num){ total += num; }
num(3);
// impure function

// Example 17
function num(total, value){
    return total + value;
}
num(5, 3); // 8

// Example 18
// A closure is created when a function remembers variables from its outer scope, even after the outer function has finished executing.
// when creation not execution

// Example 19
function outer(){ let count = 0; return function(){ count++; console.log(count); }; }
const counter = outer();
counter();
counter();
// no error
// clouser

// Example 20
function init(){ console.log("Initialized"); }
(function(){ console.log("Initialized"); })();

// Example 21
let fun=(function(){ 
    let score = 0; // this is private variable 
    return{ getScore: function()
        { console.log(score); }, 
        setScore: function(val)
        { score = val; } 
    } 
})()
// IIFE is used to:
///Create private variables
///Avoid global scope pollution
///Implement data encapsulation

//secutiry real world use

// Example 22
temp_var();

var temp_var = function(){
    console.log("Hello");
}
// error
//Why?
///var temp_var is hoisted as undefined
///Function expression is NOT hoisted
///Calling undefined() → error

// Example 23
temp_var();

function temp_var(){
    console.log("Hello");
}
// no error
// Function declaration is fully hoisted
// Function exists before execution starts