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


// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
// console.log(cities);
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
// var punjab_cities = cities.slice(1, 3)
// console.log(punjab_cities);


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

// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
// var userinput = prompt("Enter City Name");

// 4 index
// 5 elements

// for(var i=0;i<cities.length;i++){
//     console.log(i);
// }

// Flag
// var cityFound = false
// for(var i=0;i<=cities.length-1;i++){
//     // console.log(cities[i]);
//     if(userinput == cities[i]){
//         console.log(`${userinput} is found at index ${i}`);
//         cityFound = true
//     }
// }

// if(cityFound==false){
//     console.log(`${userinput} is not found`);
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }


// console.log(fullNames);


// Changing Case
// var UserName = "Atif"

// console.log(UserName.toUpperCase());
// console.log(UserName.toLowerCase());

// var shop = "Icecream"

// var userCustomer = prompt("What do you want")


// if(shop.toLowerCase() == userCustomer.toLowerCase()){
//     console.log("Available");
// }

// var userName = "Muhammad Atif"

// console.log(userName);
// console.log(userName.length);

// var month = "September"

// var length = month.length

// if(length>3){
//     monthAbbrevation = month.slice(0,3)
// console.log(monthAbbrevation);
// }


// var para = "The '.' They say it shouldbe 'the Second World War.' So lets search the following sentence for the banned charactersand replace them with  II the phrase that the New Yorker prefers."

// console.log(para.indexOf("World War II")); // Starting se
// console.log(para.lastIndexOf("World War II")); // End se dhundna hai

// IndexOf - Starting se value find krta hai
// if -- == -1{
//     // not available
// }

// var userName = "Faraz Ahmed"

// console.log(userName);
// console.log(userName.charAt(4));
// console.log(userName.charAt(userName.length-1));


// var para = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the Second World War the following sentence for the the Second World War banned characters
// and replace them with the the Second World War phrase that the New Yorker prefers.`

// // var newpara = para.replace("the Second World War","World War II")
// var newpara = para.replace(/the Second World War/g,"World War II")

// console.log(newpara);


// var a = "Ehtisham"

// console.log(a.charCodeAt(1));


// 26 - Rounding Numbers
// 1.5 / 1.6 - > 2
// 1.4 <- 1
// console.log(Math.round(2.8))
// console.log(Math.round(2.2))
// console.log(Math.round(2.5))
// console.log(Math.round(-2.6))

// var score = 55.7
// console.log(Math.round(score));

// var score = 55.7
// score = Math.round(score)
// console.log(score);


// Lowest
// var score = 55.9
// score = Math.floor(score)
// console.log(score);

// Highest
// var score = 55.9
// score = Math.ceil(score)
// console.log(score);

// var score = 55.1
// score = Math.ceil(score)
// console.log(score);

// Random Numbers

// var number = Math.random()
// console.log(Math.ceil(number * 2));

// var dice = Math.floor(Math.random() * 6) + 1
// console.log(dice);

// Typecasting - Type change
// var number = "421.66"
// console.log(number);
// console.log(typeof number);
// // Number
// var number = "421.66"
// number = Number(number);
// console.log(number);
// console.log(typeof number);
// // Integer
// var number = "421.66"
// number = parseInt(number);
// console.log(number);
// console.log(typeof number);
// // Float
// var number = "421.66"
// number = parseFloat(number);
// console.log(number);
// console.log(typeof number);

// Numbers to String
// var number = 1234
// console.log(number);
// console.log(typeof number);


// number = number.toString()
// console.log(number);
// console.log(typeof number);


// var percentage = 78.4466788034673525
// // Controlling the length of the decimals
// console.log(percentage);

// percentage = percentage.toFixed(2)
// console.log(percentage);



// Date and Time

// var today = new Date()
// console.log(today);
// console.log(today.getDay()); // 0 - Sunday , 4 - Thursday
// console.log(today.getDate());
// console.log(today.getMonth()); //Month - 0 -January, 5 - June
// console.log(today.getFullYear());
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getTime())

// Task:
// Javascript Date Method se Day ka index nikalna hai then Day 
// (Like: Thursday) SHow krna hai
// ..arr - Start Sunday

// Task 2:
// Same for Month


// console.log(today.getTime());
// 1st January 1970 - Today

// var birthday = new Date("Month Date, Year")
// var birthday = new Date("Nov 3, 2005")
// console.log(birthday);



// Age Calculator
// var today = new Date()
// var birthday = new Date("Nov 3, 2005")
// console.log(today.getTime())
// console.log(birthday.getTime())

// today_time = today.getTime()
// birthday_time = birthday.getTime()

// var age_time = today_time - birthday_time
// console.log(age_time);


// var age = age_time / (1000 * 60 * 60 * 24 * 365)
// console.log(age);
// var age = age_time / (1000 - Seconds * 60 - Minutes * 60 - Hours * 24 - Day * 365 - Year)


// var today = new Date()
// console.log(today);
// today.setDate(22)
// console.log(today);
// today.setFullYear(3050)
// console.log(today);
// today.setMonth(8)
// console.log(today);
// today.setHours(15)
// console.log(today);
// today.setMinutes(25)
// console.log(today);
// today.setDay(25)
// console.log(today);


// Functions
// Reusability - Code: 100 places Lines 10 
// Code Complexity 

// Example: Company Different Departments, Department - Function (Scope)

// Function ka aik Scope hota hai
// Jab tak Kisi ko usky domain/scope se bahar nahi laya jae


// function - keyword
// function_name - name
// {Scope} - Scope of Function

// function students(){
//     // Scope
// }


// function Welcome(){
//     console.log("Welcome to our Shop!");
// }

// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()
// Welcome()

// Task 1: Call 10 times your biodata function

// Task 2: Function Time btaye means - jab bh user call krega to usey current time show krwana hai


// function Greetings(username){
//     alert(`Welcome ${username}`)
// }

// Greetings("Umair")
// Greetings("Atif")
// Greetings("Amber")
// Greetings("Kashif")
// Greetings()


// function Greetings(username="Yougesh"){
//     alert(`Welcome ${username}`)
// }

// Greetings("Umair")
// Greetings("Atif")
// Greetings("Amber","ABCD")
// Greetings("Kashif")
// Greetings()

// Task: User se Pura Data lena hai or marksheet print krwani hai, StudentName,RollNo,English,Urdu.. ,


// function Result(Name,Department,English,Urdu,Maths){
//     // console.log(Name,Department,English,Urdu,Maths);
//     console.log('====================================');
//     console.log("Marksheet");
//     console.log('====================================');
//     console.log("Subject  Marks")
//     console.log(`English  ${English}`)
//     console.log(`Urdu  ${Urdu}`)
//     console.log(`Maths  ${Maths}`)
//     var obtained_marks = English+Urdu+Maths
//     var TotalMarks = 300
//     var percentage = obtained_marks/TotalMarks*100

//     console.log(`Obtained Marks ${obtained_marks}`);
//     console.log(`Total Marks ${TotalMarks}`);
//     console.log(`Percentage ${percentage}`);

//     // Agr kisi ko scope se bahar lana ho to bulana prta hai
//     return percentage
// }

// var result = Result("Yougesh",50,100,50,80)

// console.log(result);



// function calcTot(totalvalue) {
//     var orderTot;
//     if (totalvalue >= 100) {
//         orderTot = totalvalue;
//     }
//     else if (totalvalue < 50.01) {
//         orderTot = totalvalue + 5;
//     }
//     else {
//         orderTot = totalvalue + 5 + (.03 * (totalvalue - 50));
//     }
//     return orderTot;
// }

// var total = calcTot(100)



// var sum = 100
// function sumValue(){
//     var sum = 500
//     // console.log(sum);
// }
// sumValue()
// console.log(sum);


// Palindrome - eye,wow,madam

// function Palindrome(str){
// var lower_case = str.toLowerCase()

// var reverse = lower_case.split('').reverse().join('')

// console.log(lower_case == reverse)
// }

// Palindrome("wow")


// Switch Statements
// if(today == "Saturday"){
//     console.log("Today is Saturday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }
// else if(today == "Sunday"){
//     console.log("Today is Sunday");
// }

// switch
// (today)
// Body
// Different Cases

// var today = "Saturday"

// switch (today) {
//     case "Sat":
//         console.log("Today is Saturday");
//         break
//     case "Sun":
//         console.log("Today is Sunday");
//         break
//     case "Mon":
//         console.log("Today is Mon");
//         break
//     case "Tue":
//         console.log("Today is tue");
//         break
//     case "Thur":
//         console.log("Today is Thur");
//         break
//     case "Fri":
//         console.log("Today is Fri");
//         break
//     default:
//         console.log("Nothing");
// }


// While Loop - Condition

// For Loop - for loop (1-10) - Iteration / Array Iteration

// console.log("====== For Loop =======");
// for(initialization,Condition/Iteration,Increment){body}
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// console.log("====== While Loop =======");
// initialization
// while (condition/iteration) {
// Body
// Increment
// }

// var i = 1
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// let i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++
// }

// True ya false = True Run

// var num=5

// // while condition+_true

// // Car - Running -> Break True -> Running: False
// while (true){
//     var user = +prompt("Guess a Number")

//     if (user == num){
//         console.log("Congrats");
//     }else{
//         console.log("Try Again");
//         break
//     }
// }

// var num = 3
// attemp = 0
// while (true) {
//     var user = +prompt("Guess a number")
//     attemp++
//     if (user == num) {
//         console.log("Congrats");
//         break
//     } else {
//         console.log("Try Again");
//     }
// }
// sir is there any problem code run nhi horha

// Do While Loop - yeh aik bar lazmi chlega then condition check kregaa
// Initialization
// do{
// Scope
// increment
// }while(condition)

// var i = 10

// do{
//     console.log(i);
//     i++
// }while(i<10)


// do-while ki real life example - Login Page
// password


// Course
// 1. Events JS QUiz
// 2. Calculator App
// 3. JS DOM
// - Stopwatch
// 4. Todo App
// 5. Objects
// 6. Quiz App
// 7. Firebase Database
// 8. Firebase Authentication


// Final 
// 1. Client Website (With domain name .pk .com etc)
// 2. Grand Quiz JS
// 3. Viva
// 4. Todo App with Database
// 5. Quiz App with Database

// =============== Events (special occasion)=================

// function Greet() {
//     console.log("Welcome to our website");
// }

// function GreetingUser(message) {
//     console.log(message);
// }

function expand() {
    var message = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum at libero sapiente ea, error molestiae nam cupiditate. Tenetur tempore iure harum excepturi non obcaecati vero autem deserunt ex, perferendis dolor numquam accusantium cumque quos sed ad cupiditate perspiciatis odit rem consectetur id dolorum pariatur necessitatibus. Odio doloribus, optio repudiandae enim unde mollitia? Vitae harum reiciendis cupiditate perspiciatis, molestias maiores id optio, ex, illum amet nam temporibus facere alias. Provident quis assumenda pariatur quod nostrum? Vero pariatur libero iste expedita necessitatibus ducimus, quaerat voluptatibus alias voluptate amet tempore vitae nesciunt non maxime eos beatae, nam consequuntur perferendis ut molestias? Soluta sint eius praesentium ex numquam, deleniti consequatur omnis modi repellendus eaque aperiam tempora velit quo? Officiis omnis magni est blanditiis dolore nam voluptatum consectetur mollitia quasi dicta eum, ipsam quam doloribus quibusdam. Veritatis aliquid dolore illo voluptates saepe voluptas laudantium consequatur soluta nam delectus, labore eaque obcaecati sed placeat quidem similique tenetur perferendis ipsa optio, magni vel? Sint atque temporibus consequatur facere. Dolores quasi ipsa, repellat dolorum consectetur laudantium? Aliquam sed vel architecto? Vel quod quam minima dolor iusto doloribus vero unde dolore, neque provident, pariatur assumenda debitis explicabo distinctio! Dolorum odit beatae, provident at inventore sequi ullam quasi doloribus accusantium perferendis officia rerum alias quaerat, velit vero officiis adipisci suscipit ex minima ea veritatis laboriosam. Officiis laborum eveniet molestiae totam nesciunt, rerum, recusandae porro, facere quidem vero pariatur? Natus, saepe quis, voluptate optio voluptatibus quibusdam officia aliquam nihil et voluptas officiis consequatur consequuntur vel dolor molestiae maxime cum beatae exercitationem temporibus tempora provident. Soluta similique cum necessitatibus accusantium, id quibusdam illo. Similique quia doloremque ducimus quis nisi dolorem eum et, quas neque odio. Amet voluptatem nesciunt quia deleniti voluptatum ut, tenetur recusandae fuga corrupti! Fugiat corrupti reiciendis autem hic itaque animi quisquam magnam illum! Molestiae earum natus in atque, vitae est quasi reiciendis asperiores quibusdam architecto quisquam quaerat. Quidem porro, aut deserunt accusantium aliquid voluptatem possimus repellat suscipit tempore et, ipsa impedit neque harum commodi molestias, sunt velit error. Facilis voluptas, similique quaerat aut eius delectus culpa possimus, quisquam accusamus ab modi voluptatibus obcaecati totam itaque dolorem sed voluptatum ipsa mollitia quasi nobis corrupti dolor odio sit excepturi. Impedit ad magnam voluptate quas, natus sed deleniti nesciunt necessitatibus suscipit hic distinctio eaque ea provident fuga. Fugit dicta soluta debitis doloremque ad, alias distinctio dolore. Consequuntur provident aut, dolorem accusamus nihil animi velit, neque cum aperiam laborum et perspiciatis dicta incidunt ipsa voluptates iusto adipisci odit. Nam distinctio tenetur autem dignissimos, consectetur facilis vero minima ratione consequatur saepe commodi, blanditiis, labore totam reiciendis fugiat cum neque reprehenderit amet. Aliquam minima quis maiores ex ipsa doloremque nihil omnis? Saepe labore voluptate adipisci eligendi, minima nobis earum laboriosam hic perspiciatis voluptates? Fuga ipsam quidem alias mollitia amet? Eos perferendis doloremque reprehenderit corrupti voluptatum hic atque aut mollitia delectus ducimus a consequuntur dolore iusto debitis illo nulla accusantium accusamus, vero aperiam officiis! Nihil sapiente eos harum magnam alias maxime, illum pariatur aliquam incidunt nam rerum iste, omnis officiis excepturi tempora. Mollitia corporis eveniet natus."
    console.log(message);
    document.getElementById('paragraph').innerHTML = message

}