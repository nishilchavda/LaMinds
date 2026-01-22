// operators
// Arithmetic, comparioson, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1+2 --> Add
// "user" + "name" --> concat
// 5 + "5" --> concat, 5 + 5 --> Add
// -
// ex. 2 - 1
// /,*
// ex. 240/2, 25*2
// % (modules) (sheshfal) (reminder)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square)(exposition)
// ex. 2**3 --> 8
// ex. 2**3 --> 8

// Comparison (ans: true, false)
// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not  strict comparison)
// ===
// ex. 12 === "12" (check type and value, strict comparasion)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !==
// ex. 12!== 13 (reverse of ==, not  strict comparison)
// >=
// ex. 22 >= 22
// <= 
// ex. 13 <= 13
// <
// ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13

// assignment
// = 
// give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
// ex. a -= 4; (substract value into old value and save it into a)
// *=
// ex. a /= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)

// logical
// && (AND)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 &&  14<15 --> false
// true && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

// Unary Oprator
// // + - ! typrof ++ --
// +
// convert string to number
// ex. +"5" --> 5
// +"Name" --> 55
// +"Name" --> NaN
// "5" + 5 --> 10
// -
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // post ex. a++ + a => 26
// --
// ex. let a = 3;
// a-- --> 3 // post ex. a++ + a => 2
// a++ --> 3 // post ex. a++ + a => 4

// Ternary
// ? :
// condition ? true thase to print thase : false thase to print thase
// let a = 12>13 ? console.log("true"): console.log("false");

// typeof null --> object
// typeof [] --> object, let a =[]; a instanceof Array --> true
// instanceof --> check type of reference data type // don't  use typeof for reference data  type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo
