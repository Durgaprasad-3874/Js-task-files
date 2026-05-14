
//Task-1 Student Registration form

let StudentName= prompt(" Enter Student Name");
const Department= prompt(" Enter Department");
let StudentAge= prompt(" Enter Student Age");

console.log(`Welcome ${StudentName}`);
console.log(`Department : ${Department}`);
console.log(`StudentAge : ${StudentAge}`);

//Task-2 ATM Withdrawl

let balance=25000;
let Withdrawl =Number(prompt("Enter Withdrawl Amount: "));
if(Withdrawl >=100 && Withdrawl <= balance){
    console.log("Transcation Successfull");
    
} else if(Withdrawl < 100 ){
    console.log("Minimam Withdrawl amount is 100");
    
}else{
    console.log("Insufficient fund");
    
}

//Task-3 Swiggy Discount Order 

let Amount= Number(prompt("Enter Order Amount"));
let deliveryMessage = Amount > 499 ? "You are Eligible Free Devilery" : "Delivery Charges applied";
 console.log(deliveryMessage);

//Task-4 Insta Login

let UserName= prompt("Enter UserName");
UserName="Devil";
let passwords= prompt("Enter the Password");
passwords="3874";
if(passwords==3874 && UserName=="Devil"){
    console.log("Login Succesfull");
}
else {
    console.log("Invalid UserName and password");
}

//Task-5 Traffic Signals Controls
let signals= prompt("Enter The color(red/yellow/green):");
switch (signals.toLowerCase()){
    case "red" :
        console.log("Stop");
        break;
        case "Yellow" :
        console.log("Ready");
        break;
        case "red" :
        console.log("Go");
        break;
        default:
            console.log("Invalid Signals");         
}

//Task-6 Employee salary Calculator

function salarycalculator(basicsalary, bonus){
    return basicsalary + bonus;
}
let totalsalary= salarycalculator(25000, 1200);
console.log(" TotalSalary : ", totalsalary);

//Task-7 Employee salary Calculator

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {

  total += prices[i];

}

let average = total / prices.length;

console.log("Total Price:", total);

console.log("Average Price:", average);

// Task 8 — WhatsApp Contact Book

let contact = {

  name: "Naveen",

  phone: "9876543210",

  status: "Available"

};

for (let key in contact) {

  console.log(`${key}: ${contact[key]}`);

}

// Task 9 — Movie Ticket Booking

function payment() {

  console.log("Payment Completed");

}

function bookTicket(callback) {

  console.log("Ticket Booked Successfully");

  callback();

}

bookTicket(payment);

// Task 10 — Food Delivery Time Tracker

function* foodDeliveryTracker() {

  yield "Order Confirmed";

  yield "Preparing Food";

  yield "Out for Delivery";

  yield "Delivered";

}

let order = foodDeliveryTracker();

console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);