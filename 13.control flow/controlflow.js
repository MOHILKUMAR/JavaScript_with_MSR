// if statement 

if (true) {
   // Execute
}

if (false) {
    // Not Execute 
}


const isUserLoggedIN = true
if (isUserLoggedIN) {

}

// do revision of all operator
// <, >, <=, >=, ==, !=, ===, !==

// +++++++++++++++++++++++++++++++++++++++++

// problem
// const temperature = true

// if ( temperature < 50 ){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50")


// if () {

// }
// else{

// }

// Solution
// const temperature = true

// if ( temperature < 50 ){
//     console.log("less than 50");
// }
// else{
// console.log("temperature is greater than 50")
// }

// -----------------------------------------------

// const score = 200

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`); //User power: fly
// }
// console.log(`User power: ${power}`); //ReferenceError: power is not defined


// shorthand notation

// const balance = 1000
// if(balance > 500 ) console.log("test"),console.log("test2");

// else if

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500"); 
// }
// else if( balance < 750){
//    console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


// const UserLoggedIN = true
// const debitCard = true
// const loggedInFromGoogle = true
// const loggedInFromEmail = true

// if ( UserLoggedIN && debitCard && 2==33 ) {
//     console.log("Allow to buy course");

// }

// if(loggedInFromGoogle || loggedInFromEmail ){
//     console.log("User logged in ");
// }

// #Switch 

// switch( key) {
//     case value:
//         break;
//     default:
//         break;
// }

// const month = 3; //number 

// switch (month){
//       case  1:
//         console.log("january")
//         break;
//       case  2:
//         console.log("Feb")
//         break;
//       case  3:
//         console.log("march")
//         break;
//       case  4:
//         console.log("April")
//         break;
//       default: 
//         console.log("match not found")
//         break;

// }

// const month = "feb";

// switch (month){
//       case  "jan":
//         console.log("january")
//         break;
//       case  "feb":
//         console.log("Feb")
//         break;
//       case  "march":
//         console.log("march")
//         break;
//       case  "ap":
//         console.log("April")
//         break;
//       default: 
//         console.log("january")
//         break;

// }


// falsey 

// const userEmail = []
// const userEmail =""

// if(userEmail){
//     console.log("got user email");
// }    
// else{
//     console.log("dont't have user email");
// }

// falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined , NaN;

// truthy
// "0", 'false', " ", [], {}, function(){}


// const userEmail = []
// if( userEmail.length === 0){
//     console.log("array is empty");
// }

// const  emptyObj = {}
// if( Object.keys(emptyObj).length === 0){
//     console.log("object is empty")
// }

// false ==0
// true
// false == ''
// true
// 0 == ''
// true


// Nullish Coalescing Operator (??): null undefined

// let val1; 
// // val1 = 5 ?? 10    // 5
// // val1 = null ?? 10 //10
// // val1 = undefined ?? 15  // 15
// val1 = null ?? 10 ?? 234 // 10

// console.log(val1);


// ternary operator

// condition ?  true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")











