//Task-1
function WelcomeUser(name){
    console.log("Welcome " + name);
    
}
    WelcomeUser("Durga Prasad")

//Task-2
function Square(num){
    return num * num;
}
console.log(Square(6));

//Task-3
let emp ={
    name : "Durga Prasad",
    salary : 40000,

    empbonus: function(bonus){
        console.log(this.name);
        console.log(this.salary+bonus);
        
    }
}
    emp.empbonus(5000);

//Task-4
function scopeCheck(){
    if(true){
        var a = "I am VAR";
        let b = "I am LET";
        const c= "I am CONST";
        console.log(a);
        console.log(b);
        console.log(c);
        
    }
    //var is a global scope
    console.log(a);


    console.log(b);
    console.log(c);
    
}
    scopeCheck();

    //Task-5
    const add=(a,b) =>{
        console.log(a+bc);
        
    }

    //Task-6 -- callback Function

    function multiply(c,d){
        return c*d;
    }
    function calculator(callback, num1, num2) {
        console.log(callback(num1, num2));
        
    }
    calculator(multiply, 10, 4); 

// Task 7 — Generator Function

function* offers(){

    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 8 — Default Parameter

function student(name, course = "JavaScript"){

    console.log("Student Name:", name);
    console.log("Course:", course);
}

student("Naveen");

// Task 9 — Currying

function multi(a){

    return function(b){

        return function(c){

            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));

// Task 10 — Spread Operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Task 11 — Object Spread

const obj1 = {
    name: "Navi"
};

const obj2 = {
    role: "Developer"
};

const mergedObject = {
    ...obj1,
    ...obj2``
};

console.log(mergedObject);

// Task 12 — Rest Operator

function numbers(...num){

    console.log(num);

    let total = 0;

    for(let n of num){
        total += n;
    }

    console.log(total);
}

numbers(1,2,3,4);

// Mini Challenge 
// Student Management System

const students = [];


// Add Student
function addStudent(name, marks){

    const student = {
        name,
        marks
    };

    students.push(student);

    console.log(name + " added successfully");
}


// Print Students
function printStudents(){

    console.log("Student List");

    students.forEach((student,index) => {

        console.log(
            index + 1,
            student.name,
            student.marks
        );
    });
}


// Callback Function
function calculateMarks(student){

    return student.marks;
}


// Calculator Function
function totalMarks(callback){

    let total = 0;

    students.forEach(student => {

        total += callback(student);
    });

    console.log("Total Marks:", total);
}


// Spread Operator
function bonusMarks(bonus){

    const updatedStudents = students.map(student => {

        return {
            ...student,
            marks: student.marks + bonus
        };
    });

    console.log("After Bonus Marks");

    console.log(updatedStudents);
}


// Rest Operator
function addMultipleStudents(...newStudents){

    students.push(...newStudents);

    console.log("Multiple Students Added");
}


// Using Functions

addStudent("Rahul", 80);
addStudent("Naveen", 90);

addMultipleStudents(
    {name:"Kiran", marks:70},
    {name:"Teja", marks:85}
);

printStudents();

totalMarks(calculateMarks);

bonusMarks(5);