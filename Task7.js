/* =========================================
   1. API Task - User Names Uppercase
   Using Promise Concept
========================================= */

const usersPromise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        reject("Failed to fetch users");
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

usersPromise
  .then((users) => {

    // Convert usernames into uppercase
    const upperCaseUsers = users.map((user) =>
      user.username.toUpperCase()
    );

    console.log("Uppercase Usernames:");
    console.log(upperCaseUsers);

    /*
    Output Example:
    ["BRET", "ANTONETTE", "SAMANTHA"]
    */
  })
  .catch((error) => console.log(error));



/* =========================================
   2. API Task - Expensive Products
   Using Promise Concept
========================================= */

const productsPromise = new Promise((resolve, reject) => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        reject("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

productsPromise
  .then((products) => {

    // Filter products price > 100
    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log("Products Price Greater Than 100:");
    console.log(expensiveProducts);

    /*
    Output Example:
    [
      { id: 5, price: 695 },
      { id: 6, price: 168 }
    ]
    */
  })
  .catch((error) => console.log(error));



/* =========================================
   3. Date Concept Task - Digital Clock
========================================= */

// Create Date object
const currentDate = new Date();

// Get current time
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Print digital clock
console.log("Current Time:");
console.log(hours + " : " + minutes + " : " + seconds);

/*
Output Example:
10 : 45 : 30
*/



/* =========================================
   4. String Concept Task - Username Checker
========================================= */

// Create string
let userName = "   Naveen Kumar   ";

// Remove spaces
let trimmedName = userName.trim();

// Convert into uppercase
let upperCaseName = trimmedName.toUpperCase();

// Check includes "KUMAR"
let result = upperCaseName.includes("KUMAR");

// Print output
console.log("Final Name:", upperCaseName);
console.log("Contains KUMAR:", result);

/*
Output:
Final Name: NAVEEN KUMAR
Contains KUMAR: true
*/



/* =========================================
   5. Array Concept Task - Student Rank System
========================================= */

// Create marks array
const marks = [450, 300, 700, 200, 900];

// Sort high to low
const sortedMarks = marks.sort((a, b) => b - a);

// Get top 3 marks
const top3Marks = sortedMarks.slice(0, 3);

// Print top 3 marks
console.log("Top 3 Marks:");
console.log(top3Marks);

/*
Output:
[900, 700, 450]
*/