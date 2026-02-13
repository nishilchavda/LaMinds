// Array -- Hold multiple values at same time
// ["product_name", 50000, '20%']
// ["a","b","Hello"]
// [2, 4, 5, 6]

// create
// define a variable = [multiple values]
let arr = [1, 2, 3, 4]
// let product_data = ["S@% Ultra", 150000, "20%", "Mobile"]

// access
// Position = [0 1 2 3] --> index
// access
// array_name[position(index)]
arr[0];

// modify
// array name[position] = new value
arr[0]=10;

// Array Methods:(variable_name.method_name())
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last 
arr.push(5);
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// use case -- enter new producats into existing producats list

// pop --> remove last value into array
arr.pop()
// use case -- remove last product you add into your list

// shift -- remove first value into Array
arr.shift()
// use case -- add a value into top of that data you receive
  
// unshift -- remove first value into Array
arr.unshift(10)
// use case -- add a value into top of that data you receive

// splice - remove value into array - specific position and specific number of values
// into () - first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
// e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case -- select msg and remove multiple msg at on click

// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
// use case -- copy specific data and save it into new variable
// generate a report based on date and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array or modify new array

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your frontend

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
// h.sort();
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })
let arr1 = [10, 2, 5, 20, 30];
let temp_arr1 = arr1.sort((a,b) => a - b); // -- use when array hold numeric values

let arr2 = ["b", "f", "z", "q","m", "k"];

let arr3 = ["Hello", "Aero", "Right", "Array", "Objects", "Variable" ];

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// let tasks = ['Wake up', 'Brush teeth'];
// tasks.push("Buy Milk");
// console.log(tasks)

// Q2. pop()
// Remove the last notification from the notifications array.
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop(2);
// console.log(notifications)

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift(1);
// console.log(customers)

// Q4. unshift()
// A new song is added to the beginning of the playlist.
// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A')
// console.log(playlist)

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1,1,'John','sara')
// console.log(students)

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1,2);
// console.log(menu)

// Q7. slice()
// Create a new array that contains only weekend days.
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekends = days.slice(5);
// console.log(weekends)

// Q8. reverse()
// Reverse the order of levels in a game.
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();
// console.log(levels)

// Q9. sort()
// Sort the scores in ascending order.
// let scores = [45, 12, 78, 34, 89];
// let scores_sort = scores.sort((a,b)=> a-b);
// console.log(scores_sort)

// Q10. sort() with numbers
// Sort the prices from lowest to highest.
// let prices = [199, 49, 999, 299, 149];
// let prices_sort = prices.sort((a,b)=> a-b);
// console.log(prices_sort)

// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let products2 = products.slice(0,3);
// console.log(products)
// console.log(products2)

// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(2, 1, 'Purple', 'Orange')
// console.log(colors)

// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step')
// console.log(steps)

// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// console.log(names)

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
// let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception');
// movies.shift();
// movies.sort();
// console.log(movies)

// Q16. splice() return value
// What does the splice method return in this case?
// let nums1 = [1, 2, 3, 4];
// nums1.splice(1, 2);
// console.log(nums1)
//return first and last number becasue it remove 2 value from index 1


// Q17. slice() immutability check
// After executing slice, does the original array change?
// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3);
// console.log(nums2);
// console.log(result);
//no

// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse();
// console.log(letters)
// console.log(reversedLetters)
// yes

// Q21. splice() edge case
// What happens if deleteCount is 0?
// let arr11 = ['x', 'y', 'z'];
// arr11.splice(1, 0, 'new');
// console.log(arr11)
// it adds 0 at index 1

// Q23. slice() negative index
// What elements are returned?
// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1);
// console.log(sliced)
// return 300 and 400 index start -3 to -1

// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged
// ans a) splice()
// ans b) slice()

// Q25. Chained methods (brain teaser)
// What is the final value of arr?
// let arr21 = [1, 2, 3];
// arr21.push(arr21.shift());
// console.log(arr21)
// shift() removes 1, push adds 1 at end

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let i = [10, 35, 40, 68];

// i.forEach((val)=>{
//     let new_val = val + 10;
//     console.log(new_val);
// });

// i.forEach((val)=>{
//     let new_val = val - 10;
//     console.log(new_val);
// });

// important into Array
// now all method are used in real world projects
// all method are working with function
// manipulate data using array methods and function

// .map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 30, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val)=>{
    if (val>15){
        return val;
    }
});
// use case -- data ma thi specific data new array ma store karvo hoy
// ex. product ma thi specific category na product new array ma store karva hoy
// if you want to show only electronics producat on your homepage

//example for study

// // 1. Double daily steps count 
// // Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];
// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);
// console.log(newSteps)


// // 2. Convert minutes to seconds
// // Real life: Video duration calculation

// const minutes = [1, 5, 10];
// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// console.log(seconds)


// // 3. Add ₹50 delivery charge to prices
// // Real life: Food delivery app

// const prices = [200, 350, 500];
// const finalPrices = prices.map(price => price + 50);
// console.log(finalPrices)


// // 4. Convert exam marks to grades
// // Real life: Result system

// const marks = [35, 72, 88, 40];
// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = marks.map(getGrade);
// console.log(grades)


// // 5. Capitalize names
// // Real life: Display usernames properly

// const names = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );
// console.log(formattedNames)


// // 6. Apply 10% discount
// // Real life: Shopping sale

// const prices2 = [500, 1000, 1500];
// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);
// console.log(discounted)


// // 7. Add bonus points to scores based on condition
// // Real life: Game scoring system

// const scores = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });
// console.log(finalScores)


// // 8. Convert temperatures with formula
// // Real life: Weather app

// const celsius = [0, 20, 30];
// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);
// console.log(fahrenheit)


// // 9. Generate table of numbers
// // Real life: Math learning app

// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);
// console.log(tableOfTwo)


// // 10. Combine map with string formatting
// // Real life: SMS notification system

// const balances = [500, 1200, 300];
// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );
// console.log(messages)

// //Extra Example
// let marks2 = [10, 5, 20, 25, 15]
// let final_marks = marks2.map((val) => {
//   if(val == 5){
//     return val + 4;
//   }
//   return val;
// })

// filter
// filter tyare use karvu ke jyare ek new array create karvo che with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price)=> {
  if(price>30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare

// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive product on your homepage
// if you want to filter product based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyboard"];
let filter_product_type = product_type.filter((type)=>{
  if(type === "Tablet" || type === "Mobile") return true;
});
console.log(filter_product_type)

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [10, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
  return accumulator + val;
}, 0); // intial value of accumulator
//  0 + 10 => 10
// 10 + 68 => 78
// 78 + 45 => 123
console.log("Final Price :", final_price)
// accumulator --> je value function ma return thase te accumulator ma store thase --> accumulator name change kari sako cho
// val --> array ni darek value

// use case -- data ma thi ek single value calculate karvi hoy
// ex. product ma thi total price calculate karvi hoy


// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Samart Watch"];
let find_product = product.find((item) => {
  if (item === "Desktop") {
    return true;
  } else if (item === "Tablet") {
    return true;
  } else {
    return false;
  }
});

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. product ma thi specifice product find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log("find", person);

// filter --> you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log("Filter", AllSara);

// example 2: Book bus for travel

// some
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in ture and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some((val) => {
  if (val > 85) return 12;
  // if (val < 85) return "need improvement";
});
console.log(any)
// use case -- check if some product are out of stock in your cart


// every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 5, 35];
let num = def.every(function(val){
  return val < 40;
})
// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// Method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4[0]; --> 1
// let k = arr4[2]; --> 3
let [ j, , k] = arr4; // --> destructuring
// let [, , n] == arr;
console.log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
// name, email, gender, city
// console.log("name", name)



// spread operator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; / - just give reference not copy value(when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spread --> into Array and Object --- copy
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [...temp_arr, ...temp_arr2];

// ### Q1. Grocery Store – Total Cost

// 1. Keep items costing more than 100
// 2. Add 5% tax
// 3. Find total cost

const prices = [50, 120, 300, 80, 200];
const totalCost = prices.filter(p => p > 100).map(p=> p * 1.05).reduce((s,p) => s + p, 0);
console.log("Q1-> Total Cost - ",totalCost)

// ### Q2. Fitness App – Weekly Calories

// 1. Keep days with workout minutes >= 20
// 2. Convert minutes to calories (1 min = 4 cal)
// 3. Find total calories


const minutes = [10, 25, 40, 15, 60];
const calories = minutes.filter(m => m >= 20).map(m=> m * 4).reduce((s, m) => s + m,0);
console.log("Q2-> Total Calories - ",calories)

// ### Q3. Exam Results – Total Passed Marks

// 1. Keep passing marks (>= 40)
// 2. Find total marks

const marks = [35, 55, 80, 20, 45];
const total_marks = marks.filter(m => m >= 40).reduce((s,m) => s + m, 0);
console.log("Q3-> Total Marks - ",total_marks)

// ### Q4. Bank App – Total Credits

// 1. Keep only positive transactions
// 2. Find total credited amount

const transactions = [500, -200, 1000, -300, 700];
const total_credit = transactions.filter(m => m > 0).reduce((s, m) => s + m, 0);
console.log("Q4-> Total Credit - ",total_credit)

// ### Q5. Online Sale – Discounted Bill

// 1. Keep items above 1000
// 2. Apply 15% discount
// 3. Find total payable amount

const prices1 = [800, 1500, 3000, 600, 1200];
const total_prices1 = prices1.filter(m => m > 1000).map(m=> m * 0.85).reduce((s,m)=> s + m,0);
console.log("Q5-> Total Payable Amount - ",total_prices1)

// ### Q6. Attendance – Reward Points

// 1. Keep attendance hours >= 7
// 2. Convert hours to points (×10)
// 3. Find total points

const hours = [5, 7, 8, 6, 9];
const total_rewards = hours.filter(m => m >= 7).map(m=> m * 10).reduce((s,m)=> s+m,0);
console.log("Q6-> Total Points",total_rewards)

// ### Q7. Delivery App – Total Distance
// 1. Keep trips longer than 5 km
// 2. Add 1 km bonus per trip
// 3. Find total distance

const distances = [3, 6, 10, 4, 8];
const total_distance = distances.filter(m=> m > 5).map(m=> m+1).reduce((s,m)=> s+m,0);
console.log("Q7-> Total Distance - ",total_distance)

// ### Q8. Salary System – Final Salary

// 1. Keep salaries above 20,000
// 2. Add 2,000 bonus
// 3. Find total salary payout

const salaries = [18000, 25000, 30000, 15000];
const total_salary = salaries.filter(m=> m > 20000).map(m=> m + 2000).reduce((s,m)=> s+m,0);
console.log("Q8-> Total Salary - ",total_salary)

// ### Q9. Study App – Total Study Time

// 1. Keep sessions longer than 1 hour
// 2. Convert hours to minutes
// 3. Find total study minutes

const hours1 = [0.5, 1.5, 2, 0.75, 3];
const total_study = hours1.filter(m=>m>1).map(m=>m*60).reduce((s,m)=> s+m,0);
console.log("Q9-> Total Study Minutes - ",total_study)

// ### Q10. Electricity Usage – Monthly Bill

// 1. Keep usage above 100 units
// 2. Multiply by cost per unit (₹6)
// 3. Find total bill

const units = [80, 120, 200, 90, 150];
const total_bill = units.filter(m=>m>100).map(m=>m*6).reduce((s,m)=> s+m,0);
console.log("Q10-> Total Bill - ",total_bill)

// ### Q11. Game Scores – Final Power Score

// 1. Keep scores above 40
// 2. Double each score
// 3. Find total power score

const scores = [30, 50, 90, 20, 70];
const total_power = scores.filter(m=>m>40).map(m=>m*m).reduce((s,m)=> s+m,0);
console.log("Q11-> Total Power Score - ",total_power)

// ### Q12. Travel App – Total Fare

// 1. Keep rides longer than 10 km
// 2. Add ₹50 service fee
// 3. Find total fare

const rides = [5, 12, 20, 8, 15];
const total_fare = rides.filter(m=>m>10).map(m=>m+50).reduce();
console.log(total_fare);

// ### Q13. Office Work – Productive Hours

// 1. Keep hours >= 6
// 2. Convert hours to minutes
// 3. Find total productive minutes

// ```js
// const hours = [4, 6, 8, 5, 9];
// ```

// ---

// ### Q14. Shopping Cart – Reward Coins

// 1. Keep purchases above ₹500
// 2. Give 10 coins per purchase
// 3. Find total coins earned

// ```js
// const purchases = [300, 800, 1200, 400];
// ```

// ---

// ### Q15. Fuel App – Total Fuel Cost

// 1. Keep fuel purchases above 5 liters
// 2. Multiply by ₹105 per liter
// 3. Find total cost

// ```js
// const liters = [3, 6, 10, 4, 8];
// ```

// ---

// ### Q16. Interview Classic – Sum of Cubes
// 1. Keep odd numbers
// 2. Cube each number
// 3. Find total sum

// ```js
// const numbers = [1, 2, 3, 4, 5];
// ```

// ---

// ### Q17. Performance Tracking – Bonus Points

// 1. Keep values above average
// 2. Add 5 bonus points
// 3. Find total score

// ```js
// const scores = [10, 20, 30, 40, 50];
// ```

// ---

// ### Q18. Subscription App – Final Bill

// 1. Keep subscriptions above ₹300
// 2. Add 18% tax
// 3. Find final bill

// ```js
// const plans = [199, 399, 599, 299];
// ```

// ---

// ### Q19. Learning App – Achievement Score

// 1. Keep scores >= 60
// 2. Square each score
// 3. Find total score

// ```js
// const scores = [45, 60, 70, 30, 80];
// ```

// ---

// ### Q20. Interview Finisher ⭐

// 1. Keep numbers divisible by 3
// 2. Multiply by 10
// 3. Find total sum

// ```js
// const numbers = [3, 6, 9, 10, 12];
// ```

// ---