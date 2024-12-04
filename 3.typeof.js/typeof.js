//  Typeof 

// Note:
// The data type of NaN (Not a Number) is number !

// The typeof operator returns the type of a variable or an expression.

// Examples

 console.log(typeof "John" );        // Returns string
 console.log(typeof ("John"+"Doe")); // Returns string
 console.log(typeof 3.14 );          // Returns number
 console.log(typeof 33 );            // Returns number
 console.log(typeof (33 + 66));      // Returns number
 console.log(typeof true );          // Returns boolean
 console.log(typeof false);          // Returns boolean
 console.log(typeof 1234n);          // Returns bigint
 console.log(typeof Symbol());       // Returns symbol
 console.log(typeof x );             // Returns undefined

//  Practice sheet
// All Together
typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"
