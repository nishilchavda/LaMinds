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
for (let a = 1; a <= 10; a++) {
    if ( a === 5 ) {
        continue;
    }
    console.log(a);
}

for (let A = 1; A <= 10; A++) {
    if ( A >= 5 ) {
        continue;
    }
    console.log("loop that skip numbers",A);
}