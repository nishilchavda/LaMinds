// Data Types:
// Two Type of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 25;
let b = a;
//type: string, number, boolean, null, undefined, symbol, bigint

// 2. Non-Primitive Data Types (Reference Data Types) [], (), {}
// copy --> give refrence of parent
// let d = [1, 2, 3];
// let e = d;
// types: arrays [], objects {}, functions ()

// Primitive Data Types
// types: string, number, boolean, null, undefined, symbol, bigint
//string:
// '' - single quotes
// "" - double quotes
// `` - backticks
let d = 'Nishil'; // string
d = "Nishil"; // string
d = `Nishil`; // string

//number:
let e = 12;
e = 12.25;
e = -25;

//boolean:
let f = true;
f = false;

//null:
// you give a value
let g = null;

//undefined:
// you don't give a value, by default value
let h; // undefined

//symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1===u2
let obj = { uid : 1, name: "test", email: "test@test.com"};
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] = "001";

//bigint:
// check range of number, Number.MAX_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
let num2 = 900719925470991n;
num2 + 3n;

// Non-Primitive Data Types
// types: arrays [], objects {}, functions ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age: 9, phone_number: 1234567890 };
let profiles = [
    { name: "test", age: 9, phone_number: 1234567890 },
    { name: "test1", age: 19, phone_number: 2234567890 },
    { name: "test2", age: 29, phone_number: 3234567890 }
];
function name(params) {}

// Dynamic Typing
let u_name = "username";
u_name = 123;
u_name = {};
// javascript --> typescript

//typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
//why typeof NaN --> number
// NaN is a failed number operation that why that type is number
// ex. "hello" - 5 --> NaN

// type coeration
// "5" + 1 // + --> Value Add and Coeration(Mix)
// "5" - 1

//Truthy vs Falsy Values
//0, false, "", null, undefined, NaN, document.all -- false
// ex. !!0 -- check value is true and false
// ex. if(null){}. js convert it into false
// ex. if(-1){} -- truthy
// all --> true