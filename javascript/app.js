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


// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// // `` - template literals
// document.writeln(`
//     <select style="padding:10px">
//     <option>${phones[0]}</option>
//     <option>${phones[0]}</option>
//     <option>${phones[0]}</option>
//     <option>${phones[0]}</option>
//     <option>${phones[0]}</option>
//     </select>
//     `)

// document.writeln(`Name: ${phones[1]}`)


// ===========Loop===================
// Iteration,Multiple Times Run, Repeat
// for loop

// for loop
// Definition: Kisi bhi cheez ko Specific Number of times run karne ke liye use hota hai
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// var userinput = prompt("Enter City Name");

// if(userinput == cleanestCities[0]){
//     console.log(`${cleanestCities[0]} is one of the Cleanest Cities`);
// }else if(userinput == cleanestCities[1]){
//     console.log(`${cleanestCities[1]} is one of the Cleanest Cities`);
// }else if(userinput == cleanestCities[2]){
//     console.log(`${cleanestCities[2]} is one of the Cleanest Cities`);
// }else if(userinput == cleanestCities[3]){
//     console.log(`${cleanestCities[3]} is one of the Cleanest Cities`);
// }

// for(var initialize= startingPoint ; jab tak condition true hogi loop chlega ;increment/decrement)
// 3 parts
// for(intialize;condition;increment/decrement){
// body
// }

// jab tak i ki value less than ya equal ho 100 k us waqt tak loop chlega
// for(var i=0;i<=100;i++){
//     // 101 times - iteration 101
//     console.log(i);
// }

// Task: 1-50
// Task: 100-0

// for(var i=1;i<=20;i++){
//     console.log(`2 x ${i} = ${2*i}`);
// }

// Task: User Input Table - 20 print
// Task: User Input Table - user se length leni hai then print

var cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
var userinput = prompt("Enter City Name");

// 4 index
// 5 elements

// for(var i=0;i<cities.length;i++){
//     console.log(i);
// }

// Flag
var cityFound = false
for(var i=0;i<=cities.length-1;i++){
    // console.log(cities[i]);
    if(userinput == cities[i]){
        console.log(`${userinput} is found at index ${i}`);
        cityFound = true
    }
}

if(cityFound==false){
    console.log(`${userinput} is not found`);
}

