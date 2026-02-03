// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for-loop? when you know how many times you want to repost a block of code.
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)
//(start; end; change)
// for (let i = 1; i <= 10; i++)
// {
//     console.log(i);
// }
// for (let j = 9; j >= 1; j--)
// {
//     console.log(j);
// }
// for (let i = 1; i <= 10; i++)
// {
//     console.log("hello");
// }

// while loop -- do while loop
// kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// while (ex. 1 -> Hello World -> stop when condition false)
// start
// while(end){
// code
// change
// }
// let k =5;
// while (k <= 20){
//     console.log("K With While Loop:",k);
//     k++;
// }
// make it true loops
// let k1 = 50;
// while (k1 >= 20) {
//       console.log(k1);
//       k1--;
// }

// let a = 60;
// while (a >= 20){
//     console.log(a);
//     a--;
// }

// let c = 30;
// while (c >= 20){
//     console.log(c);
//     c--;
// }

// let e = "Hello";
// let d = 1;
// while (d <= 20) {
//     console.log(e);
//     d++;
// }

// let d = 1;
// while (d <= 20){
//     console.log("Hello");
//     d++;
// }

// let f = 50;
// while (f <= 60) {
//     console.log(f);
//     f++;
// }

// let q = 50;
// while (q <= 60) {
//     console.log(q);
//     q++;
// }

// do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);

// let j = 12;
// do{
//     console.log("do while loop:", j); // code
//     j++; // chnage (condition)
// } while (j < 20); // while check after executing code block (end)

// let z = 15; // start
// do {
//     console.log("do while loop error:", z); // code
//     z++; // change (condition)
// } while (z < 10);
// why: first loop print code then run condition then check code to print it but value is small so it only print 15

// break
// for (let k = 1; k <= 201; k++) {
//     console.log("Loop with break",k);
//     if (k === 24) {
//         break;
//     }
// }

// for (let k = 12; k <= 201; k++) {
//     console.log("Loop with break",k);
//     if (k < 24) {
//         break;
//     }
// }

// continue
// for (let a = 1; a <= 10; a++) {
//     if ( a === 5 ) {
//         continue;
//     }
//     console.log(a);
// }

// for (let A = 1; A <= 10; A++) {
//     if ( A >= 5 ) {
//         continue;
//     }
//     console.log("loop that skip numbers",A);
// }


// Exersice

// JavaScript Loops: For, while, do-while, break, continue
// Example 1:
// Print number from 1 to 10 using a for loop.
// console.log("Example - 1: Print number from 1 to 10 using a for loop.");
// for(let a = 1; a<=10; a++){
//     console.log(a);
// }
 
// Example 2:
// Print number from 10 to 1 using while loop.
console.log("Example - 2: Print number from 10 to 1 using while loop.");
// let b=10;
// while (b>=1){
//     console.log(b);
//     b--;
// }

// Example 3:
// Print even numbers from 1 to 20 using for loop.
console.log("Example - 3: Print even numbers from 1 to 20 using for loop.");
// for(let i=1; i<=20; i++){
//     if(i%2 ===0){
//         console.log(i);
//     }
// }

// Example 4:
// Print odd numbers from 1 to 15 using while loop.
// console.log("Example - 4: Print odd numbers from 1 to 15 using while loop.");
// let i= 1;
// while(i<=15){
//     if(i%2 !==0){ // or (i%2 ===1)
//         console.log(i);
//     }
//     i++;
// }

// Example 5:
// Print the multiplication table of 5.
// console.log("Example - 5: Print the multiplication table of 5.");
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// Example 6:
// Find the sum of numbers from 1 to 100 using a loop.
// console.log("Example - 6: Find the sum of numbers from 1 to 100 using a loop.");
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);

// Example 7:
// Print all numbers between 1 to 50 that are divisible by 3.
// console.log("Example - 7: Print all numbers between 1 to 50 that are divisible by 3.");
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// Example 8:
// Ask the user for a number and print whether each number from 1 to that number is even or odd.
// console.log("Example - 8: Ask the user for a number and print whether each number from 1 to that number is even or odd.");
// let num = prompt("give a number");
// for(let i=1; i <=num; i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

// Example 9:
// Count how many numbers between 1 to 100 are divisible by 3 or 5.
// console.log("Example - 9: Count how many numbers between 1 to 100 are divisible by 3 or 5.");
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }
 
// (Break and Continue)Example 10:</h1>
// Stop at First Multiple of 7
// Write a Loop from 1 to 100 that:
// Prints Each number
// Stop Completely when it finds the first number divisible by 7
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }
 
// (Break and Continue)Example 11:
// Skip Multiples of 3
// Write a Loop From 1 to 20 that:
// Skip number divisible by 3
// Prints all other numbers

// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);
// }

// (Break and Continue)Example 12:
// Print First 5 Odd Numbers
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
// Then stops the loop
// Use Both if, continue and a counter + break
// count = 0;
// for(let i =1; i<=100; i++){
//     if(i%2 ===1){
//         count++;
//         console.log(i);
//     }
//     // console.log(i);
//     if (count ===5){
//         break;
//     }
// }
 