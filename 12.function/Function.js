// # function 

// Declaration function  

// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

// declaration 

function addTwoNumbers(){
  
    //  console.log()
    // return;
    // console.log() // unreachable code

}

// referenceName  =>  addTwoNumber
// function calling , functionExecute => addTwoNumber()
//parameters  
function Addnum( num1, num2){

}
// Arguement 
Addnum(2, 4);

// function calling 
// withArguement Addnum(2, 4)
//withoutArguement Addnum() //NaN
// addTwoNumbers(3, ) // NaN

// If we pass string in arguement
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") //3a


// default value in parameter

// function Addnumber( num1 = 2, num2 = 3){
//    console.log(num1 + num2)
// }
// Addnumber()//5
// Addnumber(3)//6
// Addnumber(3,7)//10

// Problem
// function CalculateCartPrice(num1){
//     return num1
// }
// console.log(CalculateCartPrice(200, 300, 400)) // 200

// Rest operator =>... 

// function CalculateCartPrice(...num1){
//     return num1;
// }
// console.log(CalculateCartPrice(200, 400, 500 )); //[200, 400 ,500]

// function CalculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(CalculateCartPrice(200, 400, 500))

// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }
  
//   myFun("one", "two", "three", "four", "five", "six");
  
//   // Console Output:
//   // a, one
//   // b, two
//   // manyMoreArgs, ["three", "four", "five", "six"]


// ___________________________________________________________________


// object in function 
// const user = {
//     username: "hitesh",
//     prices: 123,   //username is hitesh and Price is undefined // this is Typesafety problem in javascript 
//   //price: 199,    //username is hitesh and Price is 199
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username } and Price is ${anyObject.price }`)
// }
// // handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

// function with Array( )

// const myArray = [200, 400, 100, 600]
// function returnSecondValue(getArray){
//     return getArray[2]
// }
// // console.log(returnSecondValue(myArray)) //100
//  console.log(returnSecondValue([200, 400, 500, 1000]))  //500

// # scope 
// let a = 10;
// const b =  20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);


// {} scope => function , if- else conditon iss ko {} scope bol tha hai 

//// Scope in Function 

// 1.global scope 
// 2.block scope 
// 3.function scope //nested Scope


// // var c = 300;  //1.global scope
// if(true){  //2.block scope
//     let a = 20;
//     const b = 20;
//     var c = 200;
// }
// // let a = 34
// // console.log(a);
// // console.log(b);
// // console.log(c) 


// 3.function scope //nested Scope

// function Addnum(num1 = 4, num2 = 4){
//     //  var result = num1+num2;// ReferenceError: result is not defined
//     // let result = num1 + num2;// ReferenceError: result is not defined
//     // const result = num1 + num2;// ReferenceError: result is not defined
    
//     // agar hum iss me kuch bhi pass karan hai toh hum
//     // 1.return ;
//     // 2.console.log()
// }
// console.log(result); 



// // Nested scope 
// function one(){
//     const username = "hitesh" //global scope
//     function two(){
//         const website = "youtube"; //
//         console.log(username);
//     }
    // console.log(website); // ReferenceError: website is not defined
//     two();  //hitesh
// }
// one(); ReferenceError: website is not defined

// if(true){
//     const username = "hitesh";
//     function one (){
//         var website = "youtube" 
//         console.log((username + website))
//     }
//     // console.log(website) // reference error
// }
// // one(); global scope function call 



// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = "youtube"
//         console.log(username+website);
//     }
//     console.log(website)// not Allowed

// }
// console.log(username) //not Allowed


// Declaration of function 

// function addOne(num){
//     return num + 1;
// }
// console.log(addOne(5));

// variable function declaration 

// const addTwoNumber = function(num){
//     return num+2;
// }
// console.log(addTwoNumber(4));

// # intresting thing

// hoisting of function 

// console.log(addNumber(5))
// function addNumber(num){
//     return num+1
// }

// console.log(addNumber(5)) // Possible
//  var addNumber = function (num){
//     return num+1
// }


// hoisting of function (const or let case me not possible is hoisting) 
// console.log(addNumber(5)) // Not Possible
//  const addNumber = function (num){
//     return num+1
// }

// function declaration with arrow function 

// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements


// const chai = ()=>{
//     let username = "mohil"
//     console.log(this.username); // undefined 
// }
// chai()

// Explicit return

// const addTwo = (num1, num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(3,2))

// Impilicit return 

// const addTwo  = (num1, num2) => num1 + num2

// console.log(addTwo(3,4));

// we are not use {} and return but line must be the single line

// when you use {} in arrow function and other return keyword
// but in this case we remove {} so we can also remove the return keyword


// const addTwo = (num1, num2)=>(num1+num2)
// console.log(addTwo(3,4));

// object return in Arrow fuction 

// const addTwo = () =>({userid: 1})
// console.log(addTwo()); // {userid: 1}

// Immediately Invoked function Expression (IIFE)

// () ()

// 1. () first function is defination 
// 2. () function  calling 
// 3. ; function calling end by using semicol or function complete 

//  (function chai(){
//     console.log('Db connected');
//  }) (); //functionCalling


//  Problem # Arrow Function (IIFE)

// ( ()=>{
//     console.log('Db connected');
// }) () // error// ;

// // # named (IIFE )
// (function aurcode(){
//     console.log("DB console");
// })() //error  // please check Semi-Colon


// ((name)=>{
//     console.log(`db connect ${name}`);
// })('hitesh');


// How to Use the Constructor Function
// How to Use Closures
// How to Use Higher-Order Functions
// ------------------------------------------------------------------------
// practice question

// function power (a, b){
//     let ans  = 1;
//     for(i = 0; i < b; i++){
//         ans = ans*a;
//     }
//     return ans;
// }
// console.log(power(2, 3))
// console.log(power(4,2))

// function power (a, b){
//     let ans  = 1;
//     for(i = 0; i < b; i++){
//         ans = ans*a;
//     }
//     return ans;
// }
// console.log(power(2, 3))
// console.log(power(4,2))


// function oddEven(num){
   
//     if(num % 2 === 0){
//         return "Number is Even";
//     }
//     else{
//         return "Number is odd";
//     }

// }
// console.log(oddEven(16));



// prime Number

// function primeNumber(number){
 
//     for(let i = 2; i<number; i++){
//         if(number % i === 0){
//             return "Number is not a Prime";
//         }
//         else{
//             return "Number is Prime";
//         }
//     }

// }

// console.log(primeNumber(6));

// function with Array( )



// const myArray = [200, 400, 100, 6000, 20, 34]

// function returnSecondValue(getArray){
//     return getArray[2];
// }
// console.log(returnSecondValue(myArray));

// console.log(Math.max(...myArray));

// function maxValue(value){

//     let max = Number.MIN_SAFE_INTEGER;
//     for(let i = 0; i<myArray.length; i++){
    
//          if(myArray[i]>= max){
//             max = myArray[i];

//          }

//     }
//     return max;
  
// }

// console.log(maxValue(myArray));


// function minValue(value){

//     let min = Number.MAX_SAFE_INTEGER;
//     for(let i = 0; i<myArray.length; i++){
    
//          if(myArray[i]<= min){
//             min = myArray[i];

//          }

//     }
//     return min;
  
// }

// console.log(minValue(myArray));


// const myArray = [200, 400, 100, 6000, 20, 34]

// const reverseArr = (arr) =>{
    
//     for(let i = 0; i<myArray.length; i++){
//         let start = 0;
//         let end = myArray.length-1;

//         if(start <= end){

//             let temp = myArray[start];
//             myArray[start] = myArray[end];
//             temp = myArray[end];
            
//             start++;
//             end--;
//         }

//     }
//     return arr;


// }

// console.log(reverseArr(myArray));
// console.log(myArray.length)

// swap Alternate

// const myArray = [200, 400, 100, 6000, 20, 34]

// const swapAlternate = (arr) => {
  
//     let s = 0;
//     let e = s + 1;

//     for(let i = 0; i<myArray.length; i++){
      
//         if(e <= (myArray.length-1)){
//         let temp = myArray[s];
//         myArray[s] = myArray[e];
//         myArray[e] = temp;

//         s = s+2;
//         e = e+2;
         
//     }

//     }
//     return arr;
 
// }

// console.log(swapAlternate(myArray));


// find unique

// const myArray = [2, 4, 4, 6, 2]

// let ans = 0;

// for( let i = 0; i<myArray.length; i++){
//     ans = ans^myArray[i];

// }
// console.log(ans)




// ____________________________________________________
// # this in function (do later with akshay shanis)

// const user = {
//     username: "hitesh",
//     price: 999,
//    welcomemessaage: function(){
//     // console.log(`${this.username}, welcome to website`);
//     console.log(this); //username: 'hitesh', price: 999, welcomemessaage: ƒ}
//    }
   
// }
// user.welcomemessaage() //{username: 'hitesh', price: 999, welcomemessaage: ƒ}
// // user.username = "sam"  //sam, welcome to website
// // user.welcomemessaage() //{username: 'sam', price: 999, welcomemessaage: ƒ}
// // console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// function chai(){
//     console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }
// chai();


// function chai(){
//     let username = "MOHIL"
//     console.log(this.username);
// }
// chai()  //undefined
















