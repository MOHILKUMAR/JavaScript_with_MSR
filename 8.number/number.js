// NUMBER 

// const score = 400;    
// console.log(score);


// NUMBER is define in Object with help of new keyword

// const balance  = new Number(100);
// console.log(balance);

// _____________________________________________________________

// Method in number 

// 1. to String()  It convert number into string and alfer that you can apply some string property.

// let balance = 100;
// console.log(balance.toString().length) //3

// Magic of toString(): we can use this method to ouput  numbers as hexadecimal(16) octal(8) and binary number;

// let a = 10;
// console.log(a.toString(2)); // binary of 10 = 1010;
// console.log(a.toString(8)); // octal of 10 = 12
// console.log(a.toString(16)); // hex = a

// console.log((2>>>0).toString(2)); // 10  decimal to binary

// 1.b) parseInt  
// The parseInt method parses a value as a string and returns the first integer.
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

// string to int 
// console.log(parseInt("10", 10));   //string to number
// console.log(parseInt("110",2));     // binary to decimal is 6
// console.log(parseInt("10", 8));  //8 octal value of 10
// console.log(parseInt("0x10"));  // string to hex  16
// console.log(parseInt("10", 16)); //16  dec 


// 2.The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.

// let balance = 33;
// console.log(balance.toFixed().length) //2

// let balance = 3453.45454566;
// console.log(balance.toFixed(5));  //3453.45455
// console.log(balance.toFixed(2));  //3453.45

// 3. The toPrecision() method formats a number to a specified length.
// A decimal point and nulls are added (if needed), to create the specified length.
 
// const  balance = 123.8944;
// console.log(balance.toPrecision().length); //8
// console.log(balance.toPrecision(4));      //123.9
// console.log(balance.toPrecision(3));  //automatic roundoff kar diya  124

// 4.toLocaleSting() Method this method is provide comma between the numbers

// const handreds = 1000000;
// console.log(handreds.toLocaleString()); //  1,000,000 default set hai american number system 
// console.log(handreds.toLocaleString('en-IN')); // 10,00,000 indian number system


// 5. toExponential()

// The toExponential() method converts a number into an exponential notation.

// let num = 5.56789;
// let n = num.toExponential();
// console.log(n);  //5.56789e+0

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// #for check the  number we have that methods
// {isFinite(), isinteger(), isNaN(), issafeinteger()}

// let x;
// console.log(x.Number.MAX_SAFE_INTEGER); // is (253 - 1).
// console.log(x.Number.MIN_SAFE_INTEGER) ;//is -(253 - 1).
// console.log(x.Number.MAX_VALUE); // has the value of 1.7976931348623157e+308.
// console.log(x.Number.MIN_VALUE); // has a value of 5e-324.

