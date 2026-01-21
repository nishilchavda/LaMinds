# Day 1 of JS
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

# Day 2 of JS
# JavaScript Data Types – Internship Learning

This repository contains my notes and practice code from my internship, where I learned about **JavaScript Data Types**, their behavior, and important concepts like **primitive vs non-primitive types**, **type coercion**, and **truthy/falsy values**.

---

## 📌 JavaScript Data Types

JavaScript has **two main types of data types**:

### 1️⃣ Primitive Data Types
- Stored by **value**
- When copied, the **actual value** is copied

**Types:**
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

#### Example:
```js
let a = 25;
let b = a; // value is copied
````

---

### 2️⃣ Non-Primitive (Reference) Data Types

* Stored by **reference**
* When copied, the **reference to the original object** is shared

**Types:**

* Arrays `[]`
* Objects `{}`
* Functions `()`

#### Example:

```js
let d = [1, 2, 3];
let e = d; // reference is copied
```

---

## 🔹 Primitive Data Types Explained

### String

Strings can be created using:

* Single quotes `' '`
* Double quotes `" "`
* Backticks `` ` ` ``

```js
let d = 'Nishil';
d = "Nishil";
d = `Nishil`;
```

---

### Number

```js
let e = 12;
e = 12.25;
e = -25;
```

---

### Boolean

```js
let f = true;
f = false;
```

---

### Null

* Value is **intentionally empty**

```js
let g = null;
```

---

### Undefined

* Variable declared but **no value assigned**

```js
let h; // undefined
```

---

### Symbol

* Creates a **unique and immutable value**

```js
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = "uid";
let u4 = Symbol("uid");

// obj[u3] = "001";
```

---

### BigInt

* Used for numbers **larger than Number.MAX_SAFE_INTEGER**

```js
let number = 9007199254740991;
number = number + 6; // precision issue

let num2 = 900719925470991n;
num2 + 3n;
```

---

## 🔹 Non-Primitive Data Types

```js
let temp_array = ["user1", "user2", "user3"];

let temp_obj = { 
  name: "test", 
  age: 9, 
  phone_number: 1234567890 
};

let profiles = [
  { name: "test", age: 9, phone_number: 1234567890 },
  { name: "test1", age: 19, phone_number: 2234567890 },
  { name: "test2", age: 29, phone_number: 3234567890 }
];

function name(params) {}
```

---

## 🔄 Dynamic Typing in JavaScript

JavaScript allows variables to change their data type at runtime.

```js
let u_name = "username";
u_name = 123;
u_name = {};
```

> This is one reason **TypeScript** is often used with JavaScript.

---

## ⚠️ `typeof` Quirks

```js
typeof 12        // "number"
typeof NaN       // "number"
typeof null      // "object"
1 + "1"          // "11"
1 == "1"         // true
1 === "1"        // false
```

* `NaN` means **Not a Number**, but its type is still `number`
* Example:

```js
"hello" - 5 // NaN
```

---

## 🔀 Type Coercion

JavaScript automatically converts types when needed.

```js
"5" + 1 // "51" (string concatenation)
"5" - 1 // 4 (number subtraction)
```

---

## ✅ Truthy vs ❌ Falsy Values

### Falsy Values:

```js
0
false
""
null
undefined
NaN
document.all
```

### Examples:

```js
!!0        // false
if (null) {}  // false
if (-1) {}    // true
```

> All values are **truthy** except the falsy ones listed above.

---

## 🚀 Conclusion

This repository documents my understanding of **JavaScript data types** and core concepts learned during my internship. It serves as a reference for future learning and practice.

---

````md
# Day 3 Of JavaScript Operators – Basics

This document covers the most common **JavaScript operators** with simple examples.

---

## 1. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Description | Example |
|--------|------------|--------|
| `+` | Addition / Concatenation | `1 + 2` → `3`<br>`"user" + "name"` → `"username"`<br>`5 + "5"` → `"55"` |
| `-` | Subtraction | `2 - 1` → `1` |
| `*` | Multiplication | `25 * 2` → `50` |
| `/` | Division | `240 / 2` → `120` |
| `%` | Modulus (remainder) | `12 % 4` → `0`<br>`9 % 2` → `1` |
| `**` | Exponentiation (power) | `2 ** 3` → `8` |

---

## 2. Comparison Operators

Return **boolean values** (`true` or `false`).

| Operator | Description | Example |
|--------|------------|--------|
| `==` | Equal (value only) | `12 == "12"` → `true` |
| `===` | Strict equal (value + type) | `12 === "12"` → `false` |
| `!=` | Not equal (value only) | `12 != 13` → `true` |
| `!==` | Strict not equal | `12 !== "12"` → `true` |
| `>` | Greater than | `12 > 9` → `true` |
| `<` | Less than | `12 < 113` → `true` |
| `>=` | Greater than or equal | `22 >= 22` → `true` |
| `<=` | Less than or equal | `13 <= 13` → `true` |

---

## 3. Assignment Operators

Used to assign or update values.

```js
let a = 12;   // assignment
a += 3;      // a = a + 3
a -= 4;      // a = a - 4
a *= 2;      // a = a * 2
a /= 2;      // a = a / 2
a %= 2;      // a = a % 2
````

---

## 4. Logical Operators

Used to combine conditions.

### AND (`&&`)

```js
true && true   // true
false && true  // false
12 < 13 && 14 < 15  // true
```

### OR (`||`)

```js
true || false  // true
false || false // false
```

### NOT (`!`)

```js
!true   // false
!false  // true
!12     // false
!!12    // true
```

---

## 5. Unary Operators

Work with a single operand.

| Operator | Description       | Example                           |
| -------- | ----------------- | --------------------------------- |
| `+`      | Convert to number | `+"5"` → `5`<br>`+"Name"` → `NaN` |
| `-`      | Negative value    | `-5`                              |
| `!`      | Logical NOT       | `!12` → `false`                   |
| `typeof` | Check data type   | `typeof "name"` → `"string"`      |
| `++`     | Increment         | `a++` (post)<br>`++a` (pre)       |
| `--`     | Decrement         | `a--` (post)<br>`--a` (pre)       |

Example:

```js
let a = 12;
a++;   // returns 12, then a becomes 13
++a;   // a becomes 14, then returns 14
```

---

## 6. Ternary Operator

Short form of `if-else`.

```js
condition ? trueResult : falseResult;

12 > 13 
  ? console.log("true")
  : console.log("false");
```

---

## 7. Type Checking Notes

```js
typeof null      // "object"
typeof []        // "object"

let arr = [];
arr instanceof Array   // true

typeof NaN       // "number"
```

### Important:

* Use **`typeof`** for **primitive data types**
* Use **`instanceof`** for **reference data types**

---

### 🧑‍💻 Author

**Nishil**




