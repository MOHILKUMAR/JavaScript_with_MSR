// Implicit type conversion 
// when JavaScript automatically converts a value to a different data type based on the context in which it is used, also known as type coercion as we previously mentioned.

// when adding a number and a boolean, JavaScript will automatically convert the boolean to number before performing the operation:

// let num = 42 + true; 
// console.log(num);  // 43

// What is Type Coercion in JavaScript ?

// Type coercion is the automatic conversion of a value from one data type to another, such as converting numbers, strings, and booleans based on the operators applied to them.

// Key Pointers
// Implicit conversion uses the constructor of the required data type.
// Basic conversions include number to string, string to number, and boolean to number.
// Non-string values added to strings are converted to strings.
// Boolean true becomes "true" when added to a string.
// Arithmetic operations convert strings to numbers.
// Boolean false converts to 0 and true to 1 for arithmetic.
// Examples show console.logtrue outputs 1.
// The equality operator == coerces values to the same type for comparison.
// Comparing '10' == 10 results in true.
// Comparing true to 1 results in true, but true to 'true' results in false.
  
// +++++++++++++++++++++++++++++++++++++++++

//1.Number to String Conversion

// When any string or non-string value is added to a string, 
// it always converts the non-string value to a string implicitly. When the string ‘Rahul’ is added to the number 10 then JavaScript does not give an error. It converts the number 10 to string ’10’ using coercion and then concatenates both strings.
// ---------------------------------------------

// // The Number 10 is converted to
// // string '10' and then '+'
// // concatenates both strings   
// let x = 10 + '20';
// let y = '20' + 10;

// // The Boolean value true is converted
// // to string 'true' and then '+'
// // concatenates both the strings
// let z = true + '10';

// console.log(x);    //1020
// console.log(y);    //2010
// console.log(z);    //true10

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String to Number Conversion

// When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, 
// all the values that are not numbers are converted into the number data type,
//  as these operations can be performed between numbers only. Some examples of this are shown below.

// Example: In this example, we are converting string to number implicitly.

// The string '5' is converted
// to number 5 in all cases
// implicitly
// let w = 10 - '5';
// let x = 10 * '5';
// let y = 10 / '5';
// let z = 10 % '5';

// console.log(w);    //5
// console.log(x);    //50
// console.log(y);    //2
// console.log(z);     //0  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Boolean to Number

// When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. Some examples of this are shown below.

// Example: In this example, we are converting Boolean to number implicitly.

// The Boolean value true is
// converted to number 1 and
// then operation is performed
// let x = true + 2;    //3

// The Boolean value false is
// converted to number 0 and
// then operation is performed
// let y = false + 2;   //2

// console.log(x);
// console.log(y);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The Equality Operator

// The equality operator (==) can be used to compare values irrespective of their type. This is done by coercing a non-number data type to a number. 

// Some examples of this are shown below:

// Example: In this example, we are using == operator for checking the type of the values.
// Should output 'true' as string '10'
// is coerced to number 10
// let x = (10 == '10');

// // Should output 'true', as boolean true
// // is coerced to number 1
// let y = (true == 1);

// // Should output 'false' as string 'true'
// // is coerced to NaN which is not equal to
// // 1 of Boolean true
// let z = (true == 'true');

// console.log(x);    //true
// console.log(y);      //true
// console.log(z);        //true