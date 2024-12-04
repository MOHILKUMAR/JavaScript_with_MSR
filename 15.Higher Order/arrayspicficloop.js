
// for of 
//["","", ""]
// [ {}, {}, {}]
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// Syntax

// for (variable of iterable)
//     statement

// for (const iterator of object) {
      //statement
// }

//1.variable

// Receives a value from the sequence on each iteration. May be either a declaration with const, let, or var, or an assignment target (e.g. a previously declared variable, an object property, or a destructuring assignment pattern). Variables declared with var are not local to the loop, i.e. they are in the same scope the for...of loop is in.

//2.iterable

// An iterable object. The source of the sequence of values on which the loop operates.

// 3.statement

// A statement to be executed on every iteration. May reference variable. You can use a block statement to execute multiple statements.



// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//1. Iterating over an Array

// const iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value);
// }

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);   
// }

// 2.Iterating over a string

// const iterable = "boo";

// for (const value of iterable) {
//   console.log(value);
// }
// // "b"
// // "o"
// // "o"

// 3.Iterating over a TypedArray

// const iterable = "boov";

// for (const value of iterable) {
//   console.log(value);
// }
// "b"
// "o"
// "o"

// 4. Iterating over a Map

// / const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United nation of America")
// map.set('fr', "France")
// map.set('IN', "India")  // not inserted

// console.log(map)  //Map(3) {'IN' => 'India', 'USA' => 'United nation of America', 'fr' => 'France'}

// for (const key of map) {
//     console.log(key)  //(2) ['IN', 'India'] (2) ['USA', 'United nation of America'] (2) ['fr', 'France']

// }


// for (const [key, value] of map) { // yeah ham ne ki destructuring 
//     console.log(key, ":-", value);  //
    
// }


// const iterable = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ]);
  
//   for (const entry of iterable) {
//     console.log(entry);
//   }
//   // ['a', 1]
//   // ['b', 2]
//   // ['c', 3]
  
//   for (const [key, value] of iterable) {
//     console.log(value);
//   }
//   // 1
//   // 2
//   // 3
  
// 5.Iterating over a Set

// const iterable = new Set([1, 1, 2, 2, 3, 3]);

// for (const value of iterable) {
//   console.log(value);
// }
// // 1
// // 2
// // 3


// 6.Iterating over the arguments object

// You can iterate over the arguments object to examine all parameters passed into a function.

// function foo() {
//     for (const value of arguments) {
//       console.log(value);
//     }
//   }
  
//   foo(1, 2, 3);
//   // 1
//   // 2
//   // 3

// _________________________________________
// Do it later these topic 
// Iterating over a NodeList
// Iterating over a user-defined iterable
// Iterating over a generator
// ___________________________________________


// #Problem

// const myobject  = { // object are not iteratable for this method
//         'game1': 'NFS',
//          'game2': 'Spiderman'
//     }
    
//     for(const [key, value] of myobject) {
//         console.log(key, ':-', value); //TypeError: myobject is not iterable
//     }
    
// --------------------------------------------------------------------


// for...in( ){}

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// for (variable in object)
    // statement

// 1.for..in on Object

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// const myObject  = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "sw"
// }

// for (const key in myObject) {
//     // console.log(key)  // key js cpp rb swift
//     console.log(myObject[key]) // value javascript, c++, ruby, sw

// }

// for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
    // js shortcut is for javascript
    // cpp shortcut is for c++
    // rb shortcut is for ruby
    //swift shortcut is for sw
  
// }

// Deleted, added, or modified properties (first you have understand the prototype in oops)

// 1. Deleted

// const obj = { a: 1, b: 2, c: 3 };

// // Deleting a property before it is visited
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
//   delete obj.c;
// }  //obj.a = 1  obj.b = 2

// const obj2 = { a: 1, b: 2, c: 3 };

// // Deleting a property after it is visited
// for (const prop in obj2) {
//   console.log(`obj2.${prop} = ${obj2[prop]}`);
//   delete obj2.a;
// }


// 2. for..in on Array

// const Programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in Programming) {
//    //console.log(key); //0 1 2 3 4 
//    //console.log(Programming[key]) // value js rb py java cpp
// }


// 3. for..in on Maps 

//  const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United nation of America")
// map.set('fr', "France")
// map.set('IN', "India")  // not inserted


// for (const key in map) {
//     console.log(key); // NOT Iterater
// }


// _____________________________________________
// Difference Btw for..of and for..in 
// _____________________________________________

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// #for ecah() work as a loop

// The forEach() method of Array instances executes a provided function once for each array element.

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// thisArg we discuss it later


// Parameters
// 1. callbackFn : A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
// 2. thisArg :A value to use as this when executing callbackFn. See iterative methods



// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item); //js  rb  py   java  cpp 
// })

// coding.forEach( (item) =>{
//     console.log(item); //js  rb  py   java  cpp 
// } )


function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // yeah per ham ne reference diya hai  //  js  rb  py   java  cpp 
// coding.forEach(printMe())  //TypeError: undefined is not a function

// coding.forEach( (item , index, arr)=> {
//     console.log(item, index , arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) =>{
    //console.log(item.languageName);
})


// const items = [1, 2, 4, 5, 6];
// const  copyItem = []

// for(let i=0; i<items.length; i++){
//     copyItem.push(items[i]);
// }
// console.log(copyItem)


// items.forEach((items) => {
//     copyItem.push(items)
// })
// console.log(copyItem)