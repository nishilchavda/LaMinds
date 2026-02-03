# 📘 JavaScript Internship Learning Notes

This repository documents my **day-wise learning of JavaScript** during my internship.
It covers **core JavaScript fundamentals** with explanations and examples for **practice and revision**.

---

## 🗓️ Day 1 – JavaScript Variables (`var`, `let`, `const`)

### 📌 What is a Variable?

A variable is a **temporary data storage** used to store values during program execution.

> Example:
> Like an e-commerce website temporarily stores your cart data while shopping.

---

### 📌 Types of Variables in JavaScript

* `var` (ES5)
* `let` (ES6)
* `const` (ES6)

---

### 📌 Variable Naming Rules

```js
var a = "temp";
var _name = "Hello";
var $price = 100;

// var 123 = "number"; ❌ Invalid
b = 24; // ❌ Avoid (creates global variable)
```

---

### 📌 `var` vs `let` vs `const`

| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Redeclare | ✅ Yes    | ❌ No      | ❌ No      |
| Reassign  | ✅ Yes    | ✅ Yes     | ❌ No      |
| Hoisted   | Yes      | Yes (TDZ) | Yes (TDZ) |

---

### 📌 Temporal Dead Zone (TDZ)

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

TDZ exists from **declaration to initialization** for `let` and `const`.

---

## 🗓️ Day 2 – JavaScript Data Types

### 📌 Types of Data Types

#### Primitive (Stored by value)

* string
* number
* boolean
* null
* undefined
* symbol
* bigint

```js
let a = 10;
let b = a; // value copied
```

#### Non-Primitive (Stored by reference)

* Array
* Object
* Function

```js
let arr1 = [1,2];
let arr2 = arr1; // reference copied
```

---

### 📌 Type Coercion & `typeof` Quirks

```js
typeof null      // "object"
typeof NaN       // "number"
1 == "1"         // true
1 === "1"        // false
```

---

### 📌 Truthy & Falsy Values

**Falsy values:**

```js
false, 0, "", null, undefined, NaN
```

Everything else is **truthy**.

---

## 🗓️ Day 3 – JavaScript Operators

### Operators Covered

* Arithmetic (`+ - * / % **`)
* Comparison (`== === != !== > <`)
* Logical (`&& || !`)
* Assignment (`+= -= *=`)
* Unary (`typeof ++ --`)
* Ternary (`condition ? a : b`)

---

## 🗓️ Day 4 – Control Flow Statements

### Topics Learned

* `if`
* `if-else`
* `else if`
* `switch`
* Early return pattern

```js
function checkScore(score) {
    if (score < 60) return "Fail";
    if (score < 80) return "Average";
    return "Excellent";
}
```

---

## 🗓️ Day 5 – JavaScript Loops

### Loops Covered

* `for`
* `while`
* `do-while`
* `break`
* `continue`

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## 🗓️ Day 6 – JavaScript Functions

### 📌 What is a Function?

A function is a reusable block of code that performs a specific task.

---

### Types of Functions

* Function Declaration
* Function Expression
* Arrow Function

```js
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;
```

---

### 📌 Parameters vs Arguments

```js
function greet(name) { // parameter
    console.log("Hello", name);
}
greet("User"); // argument
```

---

### 📌 Advanced Function Concepts

* First-class functions
* Callback functions
* Higher-order functions
* Closures
* IIFE
* Hoisting
* Pure vs Impure functions

```js
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
```

---

## 🎯 Key Takeaways

* Strong understanding of JavaScript fundamentals
* Improved logic building
* Clean and modular coding practices
* Ready for interview-level questions

---

## 🧑‍💻 Author

**Nishil**
JavaScript Intern | Frontend Learner 🚀

---
