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

// var CNIC = true
// var UniCard = false
// var age = 15
// var card_verification = true

// if (UniCard == true) {
//     if (card_verification == true) {
//         console.log("Entry Allowed");
//     }
// } else if (CNIC == true) {
//     console.log("Limited Entry Allowed");
// } else if (age >= 18) {
//     console.log("More Limited ENtry Allowed");
// } else {
//     console.log("Ap ghar jaen");
// }

// var x = 5
// var y = 10
// var a = 10
// var b = 10
// var c = 3
// var d = 4

// OR || - Dono main koi aik true hona lazmi hai
// AND && - Dono true hona lazmi hai

// if((x===y || a===b) && c === d){
//     console.log("True");
// }else{
//     console.log("False");
// }

// if(c==d){
//     if(x===y){
//         console.log("True");
//     }else if(a===b){
//         console.log("True");
//     }else{
//         console.log("False");   
//     }
// }else{
//     console.log("False");
// }


// Arrays

// koi 5 cities k name store krny hain

// var city1 = "Karachi"
// var city2 = "Islamabad"
// var city3 = "Lahore"
// var city4 = "Peshawar"
// var city5 = "Rawalpindi"
// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// console.log(city5);

// var cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
// console.log(cities);
// console.log(cities[2]);

// var data = ["Ehtisham",3,true,1.5]
// console.log(data);

// var arr = ["NEW","ARRAY"]
// console.log(arr);


// arr.push("Ehtisham")
// arr.push("ABCD")
// console.log(arr);


// var new_arr = ["Ayan","NEW","ARRAY"]

// new_arr.push("ABCD")

// console.log(new_arr);

// new_arr.pop()

// console.log(new_arr);


// Starting se value Add/remove krni hai
// new_arr.shift()
// console.log(new_arr);


var cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
console.log(cities);
// cities.shift()
// console.log(cities);
// cities.unshift("Hyderabad")
// console.log(cities);
// cities.unshift("ABCD","ABCDE","XYZ")
// console.log(cities);

// Splice

// cities.splice(Starting Index, Delete Count, Mulitple Values to be added)
// cities.splice(2,2) // just delete the values from index 2 to 4
// cities.splice(2,2,"ABCD","XYZ")
// cities.splice(2,0,"ABCD","XYZ")
// console.log(cities);

// Slice - copy krega
// cities.slice(starting Index, Ending Index + 1)
var punjab_cities = cities.slice(1,3)
console.log(punjab_cities);


// ==========================Array Methods============================
// - Push (Array main last se value add krdeta hai)
// - Pop (Last value ko remove krdeta hai)
// - Shift (Starting value ko remove krdeta hai)
// - Unshift (Starting se value add krdeta hai)
// - Splice (Add/Remove multiple values in array)
// - Slice (Copy krdeta hai)