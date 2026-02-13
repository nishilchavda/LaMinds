// Objects vs Array
// Objects -- when you want to show all data based on one entity(ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex. all users data)
// let user_data = [{name: "abc", email: "test@gmail.com"}, {name: "def"}, {name: "abc1"}, {name: "ABC"}]

// create 
// variable = {}
// key : value --> key-value sturcture
let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
let demo1 = "name"
user[demo1] // --> convert into name (demo = 'name') --> output: Test

// Nesting and Deep Access
const user1 = {
    name: "test",
    address: {
        city: "Surat",
        pin: 395009,
        location: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // -- nested Object
user1.address.location.lat; // --> Deep Access
// user1.address.location.lng;

// Object destructuring:
let { lat, lng } = user1.address.location;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.location;
// destructure and rename variable name

let demo = {
    first_name: "Demo",
    last_name: "User",
    age: 45,
    email: "demo@user.com",
};

// Looping (for-in loop)
// for (variable name in object_name){}
for (const key in demo) {
    // console.log(key);
    // obj.key --> not working
    // console.log(demo[key]);
    console.log(key,":",demo[key]); //-- log whole object
}

// Copying Objects: Spred, Object.assign, deep-clone
// Spred
// let user_data = {...demo};
let user_data = {gender: "Male", role: "user", ...demo} // add key-value and copy object
// Use case: State update
const user2 = {
    name: "Amit",
    age: 30
};

const updatedUser = {
    ...user2,
    age: 31
};

console.log(updatedUser);

// Object.assign -- copy and add keys-value
let user_data_assign = Object.assign({}, demo); // - nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number: 7894567894}, demo); // - add and copy
// Use case: Default settings + user settings merge
const defaultSettings = {
    theme: "light",
    language: "en"
};

const userSettings = {
    theme: "dark"
};

const finalSettings = Object.assign({}, defaultSettings, userSettings);

console.log(finalSettings);

// Object.assign vs spred 
// Object.assign() -- Method -- ES5 Old version, Less used
// Spred -- Oprator -- state updated, most used in react application, clean code

// deep clone
let temp_user1_clone = {...user1}
// user1_clone.address.city = "Valsad" --> that will change value of user1 too
// issue : when you clone & copy nested object using spred or object.assing into new variable that copy all value but nested object pass only refrence not copy
// (Jyare tame nested object(parent obj.) spred na upyog thi copy karo tyare nested obj.(child obj.) reference pass karshe  -- value copy  thase nahi)
// How to clone that -- use deep clone
// first convert your object to string
// JSON - JavaScript Object Notation
// JSON.stringify(obj._name) -- convert object into string
// JSON.parse(stringify_Object) -- convert string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case:
// Real time use:
// API response handling
// Avoid data mutation bugs

// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// Use case: User profile form validation
// ex. website par thi user form ma data add kare chhe ane te data backend pase object formate ma aave chhe
const userProfile = {
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 25
};
// now check how many field user fill up
const keys = Object.keys(userProfile);
console.log(keys);
console.log(keys.length);

// Object.entries -- add key and value into array formate
// give array of arrays
let key_value_arr = Object.entries(demo);
// Use case: Display user details dynamically (UI)
// ex. backend give you data into object formate
const user3 = {
    name: "Priya",
    city: "Ahmedabad",
    role: "Admin"
};
// print key and value both in profile page
Object.entries(user3).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});
// Object.entries(user) ==> convet into Arrays
// forEach ==> Array loop

// Optional Chaining, Computed Properties
// user1.address.location.lng;
user1?.address?.location?.lng; //-- ? Optional Chaining
// use case:
// Without optional chaining -> app crash
// Background data incomplete
// API response safety
const apiResponse = {
    user: {
        profile: {
            name: "Neha"
        }
    }
};
console.log(apiResponse.user?.profile?.name);
console.log(apiResponse.user?.address?.city);

// Computed Properties
let role = "admin";
let user4 = {
    name: "test",
    age: 26,
    email: "test@gmail.com",
    address:{
        city: "Surat"
    },
    [role]: "test"
}
// Use case: Dynamic object keys
const fieldName = "email";
const user5 = {
    name: "Ravi",
    [fieldName]: "ravi@gamil.com"
};
console.log(user5);

// ## Write Answers, Errors, How, Why for Every Questions

// ## 🟢 VARIABLES & DATA TYPES (1–15)

// > Use the given variables while solving. Do NOT change values unless asked.

// ```js
// let a = "a";
// let b = "10";
// let c = 10;
// let d;
// let e = null;
// ```

// 1. Compare `a == "a"` and `a === "a"`. Log both results.
// 2. Compare `b == c` and `b === c`. Explain the output using code comments.
// 3. Convert `b` so that `b === c` becomes `true`.
// 4. Check whether `d` is `undefined` without using `typeof`.
// 5. Write a condition that safely checks both `d` and `e`.
// 6. Write code to prove that `null == undefined` but `null !== undefined`.
// 7. Show type coercion using `c + b` and fix it.
// 8. Check if `c` is `NaN` after doing `c / "a"`.
// 9. Convert `b` to a number using **two different approaches**.
// 10. Convert `c` to a string using **two different approaches**.
// 11. Write code that turns any value into a boolean.
// 12. Store a number in `const` and explain why reassignment fails (using code).
// 13. Copy a primitive value and prove changes don’t affect the original.
// 14. Write a comparison that returns `false` but looks like it should be `true`.
// 15. Fix a buggy comparison caused by implicit type conversion.

// ---

// ## 🟢 OPERATORS (16–30)

// 16. Check if a number is even **without `%` operator**.
// 17. Find maximum of two numbers **without `if` or `Math.max()`**.
// 18. Write a calculator using only arithmetic operators.
// 19. Use logical operators to provide default values.
// 20. Rewrite an `if-else` using ternary operator.
// 21. Chain multiple ternary conditions.
// 22. Use `&&` to conditionally execute a function.
// 23. Demonstrate short-circuit behavior with code.
// 24. Compare two values of different data types.
// 25. Write code using nullish coalescing (`??`).
// 26. Show difference between `||` and `??` using examples.
// 27. Use spread operator to merge arrays.
// 28. Use rest operator to accept variable arguments.
// 29. Create a copy of an array and modify it safely.
// 30. Demonstrate operator precedence using code.

// ---

// ## 🟡 CONTROL FLOW (31–45)

// 31. Write a grading system using `if-else`.
// 32. Convert the grading system into `switch`.
// 33. Demonstrate switch fall-through behavior.
// 34. Write nested `if` logic for login validation.
// 35. Refactor nested `if` into clean conditions.
// 36. Write code that executes only when two conditions are true.
// 37. Handle multiple conditions using logical operators.
// 38. Write a menu-driven program using `switch`.
// 39. Show what happens when `break` is missing.
// 40. Rewrite `switch` logic using `if-else`.
// 41. Validate input range using conditions.
// 42. Write code that exits early from a function.
// 43. Implement a simple traffic light system.
// 44. Convert real-life decision logic into code.
// 45. Handle edge cases in conditional logic.

// ---

// ## 🟡 LOOPS (46–60)

// 46. Print numbers from 1 to 100 using a loop.
// 47. Print only even numbers using loop.
// 48. Stop a loop when a condition is met.
// 49. Skip numbers divisible by 3.
// 50. Find sum of numbers using loop.
// 51. Reverse a number using loop.
// 52. Count digits in a number.
// 53. Find factorial using loop.
// 54. Generate Fibonacci sequence.
// 55. Break out of nested loops.
// 56. Use `continue` in a loop.
// 57. Create a multiplication table.
// 58. Detect infinite loop and fix it.
// 59. Compare `for` vs `while` using code.
// 60. Replace a loop with array methods.

// ---

// ## 🟡 FUNCTIONS (61–80)

// 61. Write a function that returns sum of two numbers.
// 62. Rewrite it using arrow function.
// 63. Use default parameters.
// 64. Write a function that returns another function.
// 65. Pass a function as an argument.
// 66. Write a callback-based example.
// 67. Create a pure function.
// 68. Demonstrate side effects in a function.
// 69. Write a recursive function.
// 70. Convert recursive logic to iterative.
// 71. Write a function that accepts unlimited arguments.
// 72. Implement a higher-order function.
// 73. Use closure to preserve state.
// 74. Create a function counter.
// 75. Implement currying.
// 76. Write a memoized function.
// 77. Handle invalid input inside a function.
// 78. Compare arrow vs normal function behavior.
// 79. Write a function that runs only once.
// 80. Refactor repeated logic into a function.

// ---

// ## 🔵 ARRAYS (81–101)

// 81. Find sum of array elements.
// 82. Find maximum element in array.
// 83. Remove duplicates from array.
// 84. Find second largest number.
// 85. Filter positive numbers.
// 86. Map array values to squares.
// 87. Use `reduce()` to count elements.
// 88. Chain `filter → map → reduce`.
// 89. Find first matching element.
// 90. Check if any value satisfies condition.
// 91. Check if all values satisfy condition.
// 92. Extract first and rest values using destructuring.
// 93. Merge arrays using spread operator.
// 94. Clone array deeply.
// 95. Sort array without `.sort()`.
// 96. Rotate array elements.
// 97. Flatten nested array.
// 98. Implement custom `map()`.
// 99. Implement custom `filter()`.
// 100. Implement custom `reduce()`.
// 101. FINAL BOSS ⭐ Combine multiple array methods with constraints.



// # ✅ ANSWERS & HOW (Concise)

// > Each answer shows **what happens** and **why**. Keep code minimal.

// ## Variables & Data Types (1–15)

// 1. `==` checks value, `===` checks value + type → both true here.
// 2. `b == c` true (coercion), `b === c` false (string vs number).
// 3. `b = Number(b)` or `b = +b`.
// 4. `d === undefined`.
// 5. `d == null` safely checks both `null` & `undefined`.
// 6. `null == undefined // true`, strict comparison is false.
// 7. `c + b` becomes string concat → fix by converting `b` to number.
// 8. `c / 'a'` → `NaN`; check via `Number.isNaN()`.
// 9. `Number(b)`, `+b`.
// 10. `String(c)`, `c.toString()`.
// 11. `Boolean(value)` or `!!value`.
// 12. `const` blocks reassignment, not mutation.
// 13. Primitives copy by value → independent.
// 14. Example: `0 == false` → true.
// 15. Use strict equality to avoid coercion.

// ## Operators (16–30)

// 16. Use bitwise: `(n & 1) === 0`.
// 17. Ternary: `a > b ? a : b`.
// 18. Basic ops with `+ - * /`.
// 19. Defaults via `||` or `??`.
// 20. `condition ? a : b`.
// 21. Nest ternaries carefully.
// 22. `cond && fn()`.
// 23. OR stops at first truthy.
// 24. Coercion occurs with `==`.
// 25. `x ?? y` only for null/undefined.
// 26. `||` treats falsy; `??` doesn’t.
// 27. `[...a, ...b]`.
// 28. `function f(...args){}`.
// 29. `const copy=[...arr]`.
// 30. Parentheses change order.

// ## Control Flow (31–45)

// 31. `if/else` grading.
// 32. `switch(score)`.
// 33. Missing `break` falls through.
// 34. Nested checks for auth.
// 35. Combine conditions.
// 36. Use `&&`.
// 37. Logical operators.
// 38. `switch(menu)`.
// 39. Execution continues.
// 40. Equivalent conditions.
// 41. Range checks.
// 42. Early `return`.
// 43. `switch(color)`.
// 44. Translate rules to code.
// 45. Handle edges first.

// ## Loops (46–60)

// 46. `for` loop.
// 47. `i+=2` or check even.
// 48. `break`.
// 49. `continue`.
// 50. Accumulator.
// 51. Mod/div loop.
// 52. Count divisions.
// 53. Multiply loop.
// 54. Iterative fib.
// 55. Label or flags.
// 56. Skip iteration.
// 57. Nested loop.
// 58. Fix condition.
// 59. Use cases differ.
// 60. Prefer array methods.

// ## Functions (61–80)

// 61. `function sum(a,b){return a+b}`.
// 62. `(a,b)=>a+b`.
// 63. Defaults in params.
// 64. Return function.
// 65. Pass fn.
// 66. Callback execution.
// 67. No side effects.
// 68. Mutates outer state.
// 69. Base case.
// 70. Loop version.
// 71. Rest params.
// 72. Takes/returns fn.
// 73. Closure retains state.
// 74. Increment counter.
// 75. Partial application.
// 76. Cache results.
// 77. Guard clauses.
// 78. `this` differs.
// 79. IIFE/flag.
// 80. DRY refactor.

// ## Arrays (81–101)

// 81. `reduce` sum.
// 82. Track max.
// 83. Filter/indexOf.
// 84. Two-pass or one-pass.
// 85. `filter(n>0)`.
// 86. `map(n*n)`.
// 87. `reduce((c)=>c+1)`.
// 88. Chain methods.
// 89. `find`.
// 90. `some`.
// 91. `every`.
// 92. `[first,...rest]`.
// 93. `[...a,...b]`.
// 94. Recursive copy.
// 95. Implement sort.
// 96. Slice/concat.
// 97. Recursion.
// 98. Loop + callback.
// 99. Conditional push.
// 100. Accumulator logic.
// 101. Combine with constraints.



// ## create Readmd.md file and write the answers of all questions
// ## 🟢 BEGINNER LEVEL (1–20)

// ### Q1. Variables

// What is the difference between `var`, `let`, and `const`?

// ---

// ### Q2. Data Types

// Name all primitive data types in JavaScript.

// ---

// ### Q3. Type Checking

// How do you check the type of a variable?

// ---

// ### Q4. Operators

// What is the difference between `==` and `===`?

// ---

// ### Q5. Arithmetic Operators

// What will be the output?

// ```js
// let x = 10;
// console.log(x + 5 * 2);
// ```

// ---

// ### Q6. String Concatenation

// What is the output?

// ```js
// console.log('5' + 2);
// ```

// ---

// ### Q7. Boolean Logic

// What is the result?

// ```js
// console.log(true && false);
// ```

// ---

// ### Q8. Functions

// What is a function and why is it used?

// ---

// ### Q9. Function Call

// What will this return?

// ```js
// function add(a, b) {
//   return a + b;
// }
// add(2, 3);
// ```

// ---

// ### Q10. Arrays

// How do you create an array in JavaScript?

// ---

// ### Q11. Array Access

// What is the output?

// ```js
// const arr = [10, 20, 30];
// console.log(arr[1]);
// ```

// ---

// ### Q12. Objects

// What is an object in JavaScript?

// ---

// ### Q13. Object Access

// What is the output?

// ```js
// const user = { name: 'A', age: 20 };
// console.log(user.age);
// ```

// ---

// ### Q14. Control Flow

// What does an `if` statement do?

// ---

// ### Q15. Condition Check

// What is the output?

// ```js
// let x = 5;
// if (x > 3) console.log('Yes');
// ```

// ---

// ### Q16. Loops

// What is a loop and why is it used?

// ---

// ### Q17. for Loop

// What is the output?

// ```js
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// ```

// ---

// ### Q18. while Loop

// When should you use a `while` loop?

// ---

// ### Q19. Increment Operator

// What is the result?

// ```js
// let a = 5;
// a++;
// console.log(a);
// ```

// ---

// ### Q20. Comments

// How do you write single-line and multi-line comments?

// ---

// ## 🟡 INTERMEDIATE LEVEL (21–35)

// ### Q21. Scope

// What is block scope?

// ---

// ### Q22. Hoisting

// What is hoisting in JavaScript?

// ---

// ### Q23. Undefined vs Null

// Explain the difference between `undefined` and `null`.

// ---

// ### Q24. Truthy & Falsy

// List all falsy values in JavaScript.

// ---

// ### Q25. Functions vs Arrow Functions

// What is the difference between normal functions and arrow functions?

// ---

// ### Q26. Parameters vs Arguments

// Explain with an example.

// ---

// ### Q27. Return Keyword

// What happens if a function does not return anything?

// ---

// ### Q28. Array Methods

// What is the difference between `push()` and `pop()`?

// ---

// ### Q29. Loop vs Array Methods

// When should you use loops instead of array methods?

// ---

// ### Q30. Object Iteration

// How do you loop through object properties?

// ---

// ### Q31. Break & Continue

// Explain `break` and `continue` with loops.

// ---

// ### Q32. Comparison Operators

// What is the result?

// ```js
// console.log(0 == false);
// console.log(0 === false);
// ```

// ---

// ### Q33. Ternary Operator

// Rewrite using ternary:

// ```js
// if (age >= 18) {
//   status = 'adult';
// }
// ```

// ---

// ### Q34. Array Destructuring

// What is array destructuring?

// ---

// ### Q35. Spread Operator

// What does the spread operator do with arrays?

// ---

// ## 🔵 ADVANCED LEVEL (36–50)

// ### Q36. Closures

// What is a closure? Give a simple example.

// ---

// ### Q37. Execution Context

// What is the JavaScript execution context?

// ---

// ### Q38. Call Stack

// What is the call stack?

// ---

// ### Q39. Pass by Value vs Reference

// Explain with arrays or objects.

// ---

// ### Q40. Shallow vs Deep Copy

// What is the difference?

// ---

// ### Q41. Higher-Order Functions

// What is a higher-order function?

// ---

// ### Q42. Callback Functions

// What is a callback function?

// ---

// ### Q43. Immutability

// Why is immutability important in JavaScript?

// ---

// ### Q44. Event Loop (Conceptual)

// What is the event loop?

// ---

// ### Q45. Synchronous vs Asynchronous

// Explain the difference.

// ---

// ### Q46. forEach vs map

// What is the difference?

// ---

// ### Q47. == Interview Trap ⭐

// What is the output?

// ```js
// console.log([] == []);
// ```

// ---

// ### Q48. typeof Interview Trap ⭐

// What is the output?

// ```js
// console.log(typeof null);
// ```

// ---

// ### Q49. NaN Check

// How do you check if a value is `NaN`?

// ---

// ### Q50. FINAL INTERVIEW QUESTION ⭐⭐⭐

// Explain how JavaScript code runs from start to finish (high-level).

// ---