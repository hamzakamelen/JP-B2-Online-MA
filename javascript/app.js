// Chapter 10 (if statements)
// if
// if else
// nested if
// if else or else if

// if(condition ){
//  body
// }

// var age = +prompt("Enter your age");
// console.log(age);
// > Greater than
// < Less than
// Jiski side tail hogi wo chota hoga
// Jiski side magarmach ka face hoga wo greater hoga

// if(age >= 18){
//     console.log("Entry Allowed");
// }

// Children Park
// if(age<20){
//     console.log("Entry allowed");
// }

// Children Park
// if (age <= 20) {
//     console.log("Entry allowed")
// }

// if - else

// if(condition){
// body 
// }
// else{
// if not true
// }

// if(age>20){
//     console.log("Ehtisham ne kaha hai ap bike chala skty ho");
// }else{
//     console.log("Bus se travel kren");
// }

// society

// = Assignment Operator (Assign value to a variable)
// == Equals to - Only check value (Type Not Check) - Comparison operator
// === Value + Data Type Checking
// != Not Equal To
// !== Not equal to both type and value checking

// if(2 == "2"){
//     console.log("Entry Allowed");
// }else{
//     console.log("Not Allowed");
// }

// var num = prompt("Enter number");
// if(2 === num){
//     console.log("Entry Allowed");
// }else{
//     console.log("Not Allowed");
// }

// var num = +prompt("Enter number");
// if(2 != num){
//     console.log("Entry Not Allowed");
// }else{
//     console.log("Allowed");
// }

// If Else with Circuits(AND, OR)
var age = 16
var ID_Card = false

// Age > 18 and IDCard bhi hona chahiye
// if (age >= 18 && ID_Card == true) {
//     console.log("Entry Allowed");
// } else {
//     console.log("Entry Not Allowed");
// }

// Age > 18 or IDCard bhi hona chahiye
// if (age >= 18 || ID_Card == true) {
//     console.log("Entry Allowed");
// } else {
//     console.log("Entry Not Allowed");
// }

// OR - || -> Koi aik bhi condition true hoi then TRUE answer dega
// AND - && -> dono condition true hona compulsory hai then TRUE answer dega

var CNIC = true
var UniCard = false
var age = 15
var card_verification = true

if (UniCard == true) {
    if (card_verification == true) {
        console.log("Entry Allowed");
    }
} else if (CNIC == true) {
    console.log("Limited Entry Allowed");
} else if (age >= 18) {
    console.log("More Limited ENtry Allowed");
} else {
    console.log("Ap ghar jaen");
}