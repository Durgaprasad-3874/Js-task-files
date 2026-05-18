// Real-Time JavaScript Questions
// Topic : Array + Object + HOF + Spread

// 1. Student Attendance System

const presentStudents = ["Rahul", "Anjali", "Kiran"];
const absentStudents = ["Sneha", "Arjun"];

// Merge arrays using spread operator
const allStudents = [...presentStudents, ...absentStudents, "Vikram"];

console.log("Final Student List:");
console.log(allStudents);

// 2. E-Commerce Cart

const mobileDetails = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 75000
};

const chargerDetails = {
  chargerType: "Fast Charger",
  watt: 45
};

// Merge objects using spread operator
const finalProduct = {
  ...mobileDetails,
  ...chargerDetails,
  deliveryDate: "20-May-2026"
};

console.log("\nFinal Product Details:");
console.log(finalProduct);



// 3. Food Delivery App

function orderFood(...items) {
  console.log("\nFood Order Details:");
  console.log("Total items ordered:", items.length);
  console.log("First item:", items[0]);
  console.log("Last item:", items[items.length - 1]);
}

// Function call
orderFood("Pizza", "Burger", "Pasta", "Ice Cream");



// 4. Employee Salary Filter

const employees = [
  { name: "Amit", salary: 45000 },
  { name: "Priya", salary: 60000 },
  { name: "Ravi", salary: 80000 },
  { name: "Neha", salary: 40000 }
];

// Filter employees with salary above 50000
const highSalaryEmployees = employees.filter(
  employee => employee.salary > 50000
);

console.log("\nEmployees with Salary Above 50000:");
console.log(highSalaryEmployees);



// 5. Online Game Score Board

const scores = [100, 200, 150, 250, 300];

// Use reduce() to find total score
const totalScore = scores.reduce((total, score) => {
  return total + score;
}, 0);

console.log("\nTotal Game Score:");
console.log(totalScore);