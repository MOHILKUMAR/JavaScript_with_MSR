// variable in javascript is container for storing data.

// Types of variables.
// Automatically
// Using var
// Using let
// Using const

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.automatically variables
//  x = 4;
//  console.log(x);
//  mohil = 5;
//  console.log(mohil);

// 2.var variable is use for old versions

//1. Declare in var;
// var a = 10;
// var b;
// var c = null;

// console.log(a);
// console.log(b);
// console.log(c);

// 2. RE-Declare in VAR
// var x = 10;
// var x = 30;  //Redeclaring
// console.log(x);

// 3.Global Scope

// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope:

//   {
//     var x = 5;
//     // console.log(x);
//   }
//   console.log(x);

//  note-point : Variables declared with var inside a { } block can be accessed from outside the block

// 4.Hoisting in var

// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:

// x = 10;
// var x;
// console.log(x);

// 5.Reassigned in var
// var a = 45;
// a = 455;
// console.log(455);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.let variables

// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// 1.Declaring the let variable
// let a = 2;
// console.log(a);

// 2. Redeclared in let

//   let x = "john Doe";
//   console.log(x);
//   let x = 0;     //not allowed
//   console.log(x);

// But we can re-declare let in another scope

//   let x = "john Doe";
//   console.log(x);
//   {
//   let x = 0;
//   console.log(x);
//   }
//  console.log(x);

//3. Block Scope of let variable

// ES6 introduced the two new JavaScript keywords: let and const.
// These two keywords provided Block Scope in JavaScript:

// {
//     let  x = 2;
//     // console.log(x);
// }

// console.log(x); // X can NOT be used here

// 4.Hoisting in variables

// car = Lamborgani;
// let car;
// console.log(car);  //referenceError Connot access 'car'before initialization;
 
// 5.Re-Assigned in let
//  let x = 10;
//  x = 20;
//  console.log(x);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.const variable

// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// 1.Declaring the const variable

// const a = 2;
// console.log(a);

// 2. Redeclared in const

//   const x = "john Doe";
//   console.log(x);
//  const x = 7;
//  console.log(x)
//  let x = 4;
//   var x = 0;
//   console.log(x);

// But we can re-declare const in another scope

//   const x = "john Doe";
//   console.log(x);
//   {
//   const x = 0;
//   console.log(x);
//   }
//  console.log(x);

//3. Block Scope of const variable

// ES6 introduced the two new JavaScript keywords: let and const.
// These two keywords provided Block Scope in JavaScript:

// {
//     const x = 2;
//     // console.log(x);
// }

// console.log(x); // X can NOT be used here

// 4.Hoisting in variables

// car = Lamborgani;
// const car;
// console.log(car);  //referenceError Connot access 'car'before initialization;

// 5.Cannot be Reassigned in const.
// const PI = 3.1434355;
// PI = 3.14;      // Reassigned in const.This will give error. 
// console.log(PI); 
// PI = PI + 10;   //This will give error;
// console.log(PI); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  # {Bind this} (we see this Example later on) 
//  1.var me hote hai
//  2.let and const me nahi hote hai.

// #MULTIPLE Declaring 
// let a = 20, b = 34, c = 45;
// let a = b = c = 4;

// #MIX- variables
// const a = 10;
// const b = 30;
// let c = a+b;
// console.log(c);





