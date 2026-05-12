// Task 1

console.log("Task 1");

console.log("10" + 5);         
console.log(typeof ("10" + 5));

console.log(10 + true);        
console.log(typeof (10 + true));

console.log(false + null);     
console.log(typeof (false + null));

console.log("Hello" + undefined); 
console.log(typeof ("Hello" + undefined));

console.log([1,2] + 5);        
console.log(typeof ([1,2] + 5));

// Task 2 – Implicit Type Casting

console.log("\nTask 2");

// String + Number
let a = "Age: " + 25;
console.log(a);
console.log(typeof a);

// Boolean + Number
let b = true + 10;
console.log(b);
console.log(typeof b);

// Array + String
let c = [1,2,3] + " Numbers";
console.log(c);
console.log(typeof c);

// Object + Number
let d = {} + 5;
console.log(d);
console.log(typeof d);

// Null + Number
let e = null + 20;
console.log(e);
console.log(typeof e);

// Task 3 – Explicit Type Casting

console.log("\nTask 3");

console.log(Number("500"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number("abc"));
console.log(Number([100]));

// Task 4 – Boolean Constructor

console.log("\nTask 4");

console.log(Boolean(""));
console.log(Boolean("javascript"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

// Task 5 – Student Pass or Fail

console.log("\nTask 5");

let mark = 45;

if (mark > 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Task 6 – Voting Eligibility

console.log("\nTask 6");

let age = 20;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// Task 7 – Greatest Number

console.log("\nTask 7");

let num1 = 50;
let num2 = 80;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is greatest");
}
else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is greatest");
}
else {
  console.log(num3 + " is greatest");
}

// Task 8 – Traffic Light System

console.log("\nTask 8");

let signal = "green";

switch(signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

// Task 9 – Login System

console.log("\nTask 9");

let username = "admin";
let password = "1234";

if (username === "admin") {

  if (password === "1234") {
    console.log("Login Success");
  } else {
    console.log("Invalid Password");
  }

} else {
  console.log("Invalid Username");
}

// Task 10 – Session Finder

console.log("\nTask 10");

let hour = 14;

if (hour >= 1 && hour <= 12) {
  console.log("Morning");
}
else if (hour >= 13 && hour <= 15) {
  console.log("Afternoon");
}
else if (hour >= 16 && hour <= 19) {
  console.log("Evening");
}
else if (hour >= 20 && hour <= 24) {
  console.log("Night");
}
else {
  console.log("Invalid Hour");
}

// Bonus Challenge

console.log("\nBonus Challenge");

console.log(true + true);
console.log("5" - 2);
console.log("5" + 2);
console.log(null + 1);
console.log(undefined + 1);
console.log(Boolean(" "));
console.log(Number(true));