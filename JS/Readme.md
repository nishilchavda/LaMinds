
# JavaScript Variables: `var`, `let`, and `const`

This repository demonstrates core JavaScript concepts related to **variables**, including `var`, `let`, and `const`, along with **scope**, **hoisting**, and the **Temporal Dead Zone (TDZ)**.
I learned these concepts during my internship and created this reference for practice and revision.

---

## 📌 What is a Variable?

A variable is a **temporary data storage** used to store values during program execution.

**Example:**
Like an e-commerce website (e.g., Flipkart) temporarily stores your cart data while shopping.

---

## 📌 Variable Types in JavaScript

JavaScript provides three ways to declare variables:

* `var` (ES5)
* `let` (ES6)
* `const` (ES6)

---

## 📌 Variable Naming Rules

```js
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";

// var 123 = "number"; ❌ Invalid
b = 24; // ❌ Never use (creates a global variable)
```

✔ Allowed: letters, `_`, `$`
❌ Not allowed: starting with numbers

---

## 📌 `var`, `let`, and `const`

### `var`

* Function scoped
* Can be **redeclared**
* Can be **reassigned**
* Added to `window` object (in browser)

```js
var name = "user name";
```

---

### `let`

* Block scoped
* Cannot be redeclared
* Can be reassigned

```js
let name1 = "user name1";
```

---

### `const`

* Block scoped
* Cannot be redeclared
* Cannot be reassigned
* Must be initialized at declaration

```js
const temp_const = "Hello World!";
```

---

## 📌 Declaration & Initialization

```js
var d;        // Declaration
var d = 12;   // Declaration + Initialization
```

---

## 📌 Reassignment & Redeclaration

### `var` allows both

```js
var temp = 12;
temp = "number";   // Reassignment
var temp = "24";   // Redeclaration
```

### `let` allows only reassignment

```js
let x = 10;
x = 20; // ✅
```

---

## 📌 Scope in JavaScript

JavaScript has three types of scope:

* Global Scope
* Block Scope
* Functional Scope

---

### `var` Scope Example

```js
var e = 23; // global scope
console.log("Global Scope " + e);

{
    var e = 25; // block (but affects global)
    console.log("Block Scope " + e);
}

function abc() {
    var e = 30; // function scope
    console.log("Functional Scope " + e);
}
abc();

console.log("Global Scope after function " + e);
```

📌 **Note:** `var` does NOT support block scope.

---

### `let` Scope Example

```js
let f = 20; // global scope
console.log("Global Scope " + f);

{
    let f = 30; // block scope
    console.log("Block Scope " + f);
}

function abcd() {
    let f = 40; // function scope
    console.log("Functional Scope " + f);
}
abcd();

console.log("Global Scope after function " + f);
```

📌 **Note:** `let` supports block scope.

---

## 📌 Temporal Dead Zone (TDZ)

TDZ is the time between **variable declaration and initialization** where accessing the variable throws an error.

### `var` (No TDZ)

```js
console.log(temp_b); // undefined
var temp_b = 24;
```

---

### `let` (TDZ applies)

```js
console.log(j); // ❌ ReferenceError
let j = 12;
```

---

## 📌 Hoisting in JavaScript

Hoisting moves **declarations** to the top of the scope during compilation.

```js
var temp_d = 12;
```

Internally:

```js
var temp_d; // undefined (hoisted)
temp_d = 12; // initialization
```

---

## 📌 Hoisting Impact Summary

| Keyword | Hoisted | Initial Value   | Error Before Initialization |
| ------- | ------- | --------------- | --------------------------- |
| var     | Yes     | undefined       | ❌ No error                  |
| let     | Yes     | Not initialized | ✅ Error (TDZ)               |
| const   | Yes     | Not initialized | ✅ Error (TDZ)               |

---

## 📌 Key Takeaways

* Prefer **`let` and `const`** over `var`
* Avoid using undeclared variables
* Understand scope to prevent bugs
* TDZ helps catch errors early
* Hoisting behaves differently for each keyword 
---

