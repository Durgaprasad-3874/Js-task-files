// =========================================
// 1. Print Numbers
// =========================================

console.log("1. Print Numbers from 1 to 20");

for(let i = 1; i <= 20; i++) {
    console.log(i);
}

/*
OUTPUT:
1
2
3
...
20
*/


// =========================================
// 2. Odd Numbers
// =========================================

console.log("2. Odd Numbers from 1 to 50");

for(let i = 1; i <= 50; i++) {

    if(i % 2 !== 0) {
        console.log(i);
    }
}

/*
OUTPUT:
1
3
5
7
...
49
*/


// =========================================
// 3. Multiplication Table
// =========================================

console.log("3. Multiplication Table of 7");

for(let i = 1; i <= 10; i++) {

    console.log("7 x " + i + " = " + (7 * i));
}

/*
OUTPUT:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
*/


// =========================================
// 4. Reverse Counting
// =========================================

console.log("4. Reverse Counting");

let number = 20;

while(number >= 1) {

    console.log(number);
    number--;
}

/*
OUTPUT:
20
19
18
...
1
*/


// =========================================
// 5. Sum of Numbers
// =========================================

console.log("5. Sum from 1 to 100");

let sum = 0;

for(let i = 1; i <= 100; i++) {

    sum = sum + i;
}

console.log("Total Sum = " + sum);

/*
OUTPUT:
Total Sum = 5050
*/


// =========================================
// 6. Array Loop
// =========================================

console.log("6. Array Loop");

let fruits = ["apple", "banana", "orange", "grapes"];

for(let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);
}

/*
OUTPUT:
apple
banana
orange
grapes
*/


// =========================================
// 7. Count Even Numbers
// =========================================

console.log("7. Count Even Numbers");

let evenCount = 0;

for(let i = 1; i <= 50; i++) {

    if(i % 2 === 0) {

        evenCount++;
    }
}

console.log("Even Count = " + evenCount);

/*
OUTPUT:
Even Count = 25
*/


// =========================================
// 8. Star Pattern
// =========================================

console.log("8. Star Pattern");

for(let i = 1; i <= 5; i++) {

    let pattern = "";

    for(let j = 1; j <= i; j++) {

        pattern += "*";
    }

    console.log(pattern);
}

/*
OUTPUT:
*
**
***
****
*****
*/


// =========================================
// 9. Simple Function
// =========================================

console.log("9. Simple Function");

function welcome() {

    console.log("Welcome to JavaScript");
}

welcome();

/*
OUTPUT:
Welcome to JavaScript
*/


// =========================================
// 10. Function with Parameter
// =========================================

console.log("10. Function with Parameter");

function greet(name) {

    console.log("Hello " + name);
}

greet("Naveen");

/*
OUTPUT:
Hello Naveen
*/


// =========================================
// 11. Add Two Numbers
// =========================================

console.log("11. Add Two Numbers");

function add(a, b) {

    return a + b;
}

console.log(add(10, 20));

/*
OUTPUT:
30
*/


// =========================================
// 12. Salary Bonus
// =========================================

console.log("12. Salary Bonus");

function calculateSalary(salary, bonus) {

    return salary + bonus;
}

console.log(calculateSalary(50000, 5000));

/*
OUTPUT:
55000
*/


// =========================================
// 13. Object Loop
// =========================================

console.log("13. Object Loop");

let student = {

    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for(let key in student) {

    console.log(key + " : " + student[key]);
}

/*
OUTPUT:
name : Rahul
course : JavaScript
marks : 95
*/


// =========================================
// 14. Find Largest Number
// =========================================

console.log("14. Find Largest Number");

function largest(a, b) {

    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(largest(10, 50));

/*
OUTPUT:
50
*/


// =========================================
// 15. Mini Employee Task
// =========================================

console.log("15. Mini Employee Task");

let employee = {

    name: "Ramesh",
    department: "IT",
    salary: 40000
};

function salaryAfterBonus(salary, bonus) {

    return salary + bonus;
}

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Salary : " + employee.salary);

let finalSalary = salaryAfterBonus(employee.salary, 5000);

console.log("Salary after bonus : " + finalSalary);

/*
OUTPUT:
Employee Name : Ramesh
Department : IT
Salary : 40000
Salary after bonus : 45000
*/