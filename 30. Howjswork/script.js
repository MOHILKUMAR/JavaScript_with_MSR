// compilation 
// code execution 

// why compilation

// How javascript code executes 

// what is global execution context ?
// what is local execution context ?
// closures


// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = ."harshit"; //SyntaxError: Unexpected token

// console.log(this);
// console.log(window);
// console.log(firstName);//undefined
// var firstName = "harshit";
// console.log(firstName);//harshit


// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my function ");
// }

// var firstName = "harshit";
// var lastName = "sharma";
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// hoisting 

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function declaration
// function myFunction(){
//     console.log("this is my function ");
// }
// var firstName = "harshit";
// var lastName = "sharma";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// --------------------------------------
// var  
// myFunction();
// console.log(myFunction);// undefined;

// // function expression 
// var myFunction = function(){
//     console.log("this is my function");
// }
// console.log(myFunction);


// // let 
// console.log(firstName); //  script.js:69 Uncaught ReferenceError: Cannot access 'firstName' before initialization
// // console.log(firstName); //script.js:70 Uncaught ReferenceError: firstName is not defined
// let firstName = "harshit";
// console.log(firstName);



// console.log("hello world");
// let firstName = "Harshit";
// let lastName = "vashistha";

// const myFunction = function(){
//     let var1 = "First Variable";
//     let var2 = "second Variable";
//     console.log(var1)
//     console.log(var2);
// }


// function execution context 

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments); //array like object hota hai
//     // console.log(arguments[0]);
//     // console.log(arguments.length)
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }
// const personName = getFullName("harshit", "sharma");
// console.log(personName);



// lexical enviroment, scope chain 

// const lastName = "vashistha";
// const printName = function(){
//     const firstName = "harshit";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();


const lastName = "vashistha";
const printName = function(){
    const firstName = "harshit";
   function myFunction(){
    console.log(firstName);
    console.log(lastName);
   }
   myFunction()
}
printName();