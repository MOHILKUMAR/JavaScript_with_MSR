"use strict"; //treat all js code as newer version
//alert() is not use in node enivironment


// JavaScript has 8 Data Types

//1. Primitive values: call by value mean agar inki value me koi change karaga to inki copy me change hoga;
//  Primitive datatype store in stack memory

// 1.String
// 2.Number
// 3.Bigint
// 4.Boolean
// 5.Undefined
// 6.Null 
// 7.Symbol


//2. Non - primitive (Reference) (heap Memory store ho hai)

// The Object Data Type
// The object data type can contain both built-in objects,
//  and user defined objects:

// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, float arrays, promises, and more.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

// Example
// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.Strings

// A string  is a series of characters like "John Doe".
// Strings are written with quotes. 
// You can use single or double quotes:

// Example
// // Using double quotes:
// let carName1 = "Volvo XC60";

// // Using single quotes:
// let carName2 = 'Volvo XC60';

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
// // Single quote inside double quotes:
// let answer1 = "It's alright";

// // Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// // Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';


// ___________________________________________________

// 2. Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:
// Example
// // With decimals:
// let x1 = 34.00;

// // Without decimals:
// let x2 = 34;

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:
// Example
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123
// console.log(y);
// console.log(z);

// __________________________________________________________________

// 3.BigInt

// All JavaScript numbers are stored in a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// Example
// let x = BigInt("123456789012345678901234567890");
// let x = 123456789012345678901234567890n;
    // console.log(x);

// ___________________________________________________________

// 4. Booleans
// Booleans can only have two values: true or false.
// Example
// let x = 5;
// let y = 5;
// let z = 6;
// (x == y)       // Returns true
// (x == z)       // Returns false

//  1. numbers
//   console.log(Boolean(10));        //true
//   console.log(Boolean(1));         //true
//   console.log(Boolean(-19));       //true
//   console.log(Boolean(Infinity));  //true
//   console.log(Boolean(-Infinity)); //true
//   console.log(Boolean(NaN));       //false
//   console.log(Boolean(0));         //false
//   console.log(Boolean(null));         //false
//   console.log(Boolean(undefined));    //false

//   2. String

//   console.log(Boolean(""));    //false  in empty string
//   console.log(Boolean(" "));   //true  in space
//   console.log(Boolean('dfdf')); //true
  

// Booleans are often used in conditional testing.
// _______________________________________________________________

// Undefined

// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
// Example
// let car;    // Value is undefined, type is undefined
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
// car = undefined;    // Value is undefined, type is undefined

// _________________________________________________________________

// Empty Values

// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.
// Example
// let car = "";    // The value is "", the typeof is "string"

// Symbol
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.
// Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.
// ____________________________________________________________
//  Symbol

// To create a new primitive Symbol, you write Symbol() with an optional string as its description:
// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");
// console.log(Symbol("foo") === Symbol("foo")) // false
// const sym = new Symbol(); // TypeError
// console.log(sym);
// This prevents authors from creating an explicit Symbol wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, new Boolean, new String and new Number).


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.Non - primitive 

// The Object Data Type
// The object data type can contain both built-in objects,
//  and user defined objects:


// ______________________________________________________

// 1.Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, float arrays, promises, and more.
// Date object:
// const date = new Date("2022-03-25");

// __________________________________________________________

// 2.user defined objects:

// 1. Arrays 

// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):

// Example
// const cars = ["Saab", "Volvo", "BMW"];
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

// 2. Objects
// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
// Example
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

//  3. Function 
// const myfunction  = function(){
//     console.log("hello world");
//     }





