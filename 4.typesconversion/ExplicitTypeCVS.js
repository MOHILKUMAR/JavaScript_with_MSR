"use strict"; //treat all js code as newer version

// JavaScript Type Conversion

// Type conversion, or typecasting, is changing the data type of a value to a different data type in JavaScript.

// Type conversion can be either implicit or explicit.

// Implicit type conversion is when JavaScript automatically converts a value to a different data type based on the context.

// Explicit type conversion is when you explicitly tell JavaScript to convert a value to a specific data type using a built-in function or method.

// Values can be converted to different types using methods or automatic conversion.



// Explicit type conversion 

// list of JavaScript Global Methods.there is lots of method which dicuss soon. 
// 1.Number()
// 2.String()
// 3.Boolean()

// -----------------------------------------
// let score = 33;

// // two ways to check the KEY_WORD tpyeof 

// console.log(typeof score);   //number
// console.log(typeof(score));  // number

// -----------------------------------------

// 1.NUMBER TO Number;

// let name = "33";
// console.log(typeof(name));

// let changeInNumber = Number(name);     //string
// console.log(typeof changeInNumber);   //number
// console.log(changeInNumber);          //33
// --------------------------------------------

// let nameAndNumber = "123MOHIL";

// let changeInNumber1 = Number(nameAndNumber);
// console.log(typeof nameAndNumber);

// NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value. NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value.
// console.log(changeInNumber1);

// Note POINT 
// "33"=> 33
// "33adf"=> NaN
// true =>1 , false=>0;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// CONVERTING INTO string

// / The global method String() can convert numbers to strings. 
// It can be used on any type of numbers, literals, variables, or expressions:

// number to String

// let someNumber = 33;
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber);  //string 
// console.log(stringNumber);         //33

// let x = 123;
// console.log(String(x));         // returns a string from a number variable x
// console.log(String(123));      // returns a string from a number literal 123
// console.log(String(100 + 23));  // returns a string from a number from an expression

// Converting Dates to Strings

// console.log use karne h 
// console.log(String(Date()) ) // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// console.log( typeof String(Date()) )

// Converting Booleans to Strings

// String(false)                  // returns "false"
// console.log(String(true))     // returns "true"
// console.log(typeof String(true)); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Converting in number 

// string to number 
// The global method Number() converts a variable (or a value) into a number.

// console.log(Number("mohil")); //NaN
// console.log(typeof(Number("mohil")));

// string of number  to Number

// console.log(Number("3.14"));          //3.14
// console.log(typeof(Number("3.14")));  //number

// property to number 

// console.log(Number(Math.PI));            //3.145454545
// console.log(typeof(Number(Math.PI)));   //number
 
// space to number 

// console.log(Number(" "));     //0
// console.log(typeof(Number(" ")));  //number

// blank to number 

// console.log(Number());          //0
// console.log(typeof(Number()));  //number

// breaking string to number 

// console.log(Number("99 88"));          //nan
// console.log(typeof(Number("99 88")));   //number


// Converting Date Object into Number

// let d = new Date('1995-12-17T03:24:00');  
// console.log("Type of d before conversion: " + typeof  d +" " +Number(d));  // number  date ko number me convert ker dgi
// console.log("Type of d after conversion: " + typeof Number(d) +"  "+ Number(d));  //  same output but change in value

// Converting String into Number

// let v = "144";
// console.log("Type of v before conversion: " + typeof v + " " +v);
// console.log("Type of v after conversion: " + typeof Number(v)+ " " + Number(v));

// -------------------------------------------------------------

// tpye conversion of null and undefined;

// undefined to number 

// let num = undefined;
// let typeConversion = Number(num);   
// console.log(typeof typeConversion);  //number
// console.log(typeConversion);        // nan

// null to number 

// let num1 = null;
// let typeConversion1 = Number(num1);  
// // console.log(typeof typeConversion1); //number
// // console.log(typeConversion1);  // 0

// Boolean to Number
// let boolean = true;
// let typeConversion2 = Number(boolean);
// console.log(typeof typeConversion2);  // number
// console.log(typeConversion2);         // 1

// -------------------------------------------------------
// # Boolean

// Number to Boolean

// let num = 1;
// let booleanCheck = Boolean(num);
// console.log(booleanCheck);         //true
// console.log(typeof(booleanCheck));    //booleaan

// check for emptyspace

// let emptyspace = "";
// let booleanCheck = Boolean(emptyspace);   
// console.log(booleanCheck);        //false
// console.log(typeof(booleanCheck));  //boolean

// check for String

// let checkString = "dfdfdf";
// let booleanCheck = Boolean(checkString);
// console.log(booleanCheck);           //true
// console.log(typeof(booleanCheck));   //boolean

// Note POINT 
// 1=> true, 0=>false
//" " => false
//"nol"=> true;

// ------------------------------------------

