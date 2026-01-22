// Control Flow Statements in Javascript

// If-Else Statement (if, if else, if else-if else)
// if (condition){} --> condition true hot to {} code run
if (12 < 13) {
  console.log(true);
}

if (15 < 13) {
  console.log(true);
} // condition is false that ehy if statement not run

if (!12) {
  console.log(true);
}

if (!0) {
  console.log(true);
}

// if-else Statement
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
} // condition is false that ehy if statement not run
else {
  console.log(false); // if if statement condition is false then run this code
}

if (!12) {
  console.log("number");
} else {
  console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition){
} else{}
*/
let loggedin = true;
let admin = true;
if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}

// switch statement
switch (
  "BOGO" // value --> Case value sathe match karshe ane code run thase
) {
  case "First50":
    console.log("50% off on First Order");
    break;
  case "BOGO":
    console.log("Buy One get One");
    break;
  case "BalckFriday":
    console.log("It's Black Friday Sale - Get at Rs. 50");
    break;
  default:
    console.log("Offer Not Valid");
}

let paymentMethod = "UPI";

switch (paymentMethod) {
  case "Card":
    console.log("Pay using Debit/Credit Card");
    break;

  case "UPI":
    console.log("Pay using UPI");
    break;

  case "Cash":
    console.log("Cash on Delivery selected");
    break;

  default:
    console.log("Payment method not supported");
}

// Early Return Pattern
function score(value) {
  if (value > 90) {
    return "value is more than 90";
  } else if (value < 80) {
    return "value is less than 80";
  } else if (value < 70) {
    return "value is less than 70";
  } else if (value < 60) {
    return "value is less than 60";
  } else {
    return "value is less than 50";
  }
}
score(100);
// console.log(score(1000))

function score1(value) {
  if (value > 90) return "Value is more than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "Value is less than 60";
}
score1(65);

function score2(value) {
  if (value < 60) return "Value is less than 60";
  else if (value < 70) return "Value is less than 70";
  else if (value < 80) return "Value is less than 80";
  else if (value < 90) return "Value is less than 90";
  else return "Value is less than 90";
}
score2(65);

let x = 2;

switch (x) {
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Unknown");
}

function getGrade(score) {
    if (score > 90) return console.log("A+");
    else if (score > 80) return console.log("A");
    else if (score > 70) return console.log("B");
    else if (score > 60) return console.log("C");
    else if (score > 33) return console.log("D");
    else if (score < 33) return console.log("Fail");
    else return console.log("Invalid Score");
}

function rps(user, computer) {
    if  (user === computer) return "Match Tie!";
    else if (
        (user === "rock" && computer === "scissor") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")
    ) return "User Wins!";
    else return ("Computer Wins!");
}

console.log(rps("rock", "scissors"));
console.log(rps("paper", "rock"));
console.log(rps("scissors", "paper"));
console.log(rps("rock", "rock"));