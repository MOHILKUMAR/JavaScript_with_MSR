// JavaScript Objects
// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
// __________________________________________________________
// Real Life Objects

// In real life, objects are things like: houses, cars, people, animals, or any other subjects.

// Here is a car object example

// car Object
//Properties	              Methods

// car.name = Fiat           car.start()

// car.model = 500           car.drive()

// car.weight = 850kg        car.brake()

// car.color = white	     car.stop()


//1. Object Properties

// A real life car has properties like weight and color:

// car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.

// Car objects have the same properties, but the values differ from car to car.


//2. Object Methods

// A real life car has methods like start and stop:

// car.start(), car.drive(), car.brake(), car.stop().

// Car objects have the same methods, but the methods are performed at different times.

// ____________________________________________________________

// How to Define a JavaScript Object
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor



// 1.JavaScript Object Literal

// An object literal is a list of name:value pairs inside curly braces {}.
// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

// name:value pairs are also called key:value pairs.
// object literals are also called object initializers.

// Object initializer
// An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).


// Creating a JavaScript Object

// 1.1 These examples create a JavaScript object with 6 properties:

// Spaces and line breaks are not important. An object initializer can span multiple lines:

// const JsUser = {
//      name: "mohil",  // if we write the key  like name: then javascript autometically convert into the string.
//      "fullname" : "mohil kumar", // javascript hold the key : value like this. 
//      age: 16,
//      location: "jaipur",
//      email: "mohil@342.com", 
//      isLoggedIn: false,
//      lastLoginDays: ["Monday", "Saturday"],
     
// };

//1.2 This example creates an empty JavaScript object, and then adds 4 properties:

// // Create an Object

// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// const tinderUser = {};  

// how to add key and value in this type of object;

// tinderUser.id = "12324";
// tinderUser.name = " sammy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// ------------------------------------------------------

// 2.Using the new Keyword

// This example create a new JavaScript object using new Object(), and then adds 4 properties:

// // Create an Object
// const person = new Object();

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Object in singleton

// const tinderUser = new Object()
// console.log(tinderUser); //{}  //singleton Object

// The examples above do exactly the same.But, there is no need to use new Object().For readability, simplicity and execution speed, use the object literal method.

// ------------------------------------------------------

// 3. Accessing Object Properties

// You can access object properties in two ways:

// 3.1 objectName.propertyName
// 3.2 objectName["propertyName"]


// const JsUser = {
//      name: "mohil",  // if we write the key  like name: then javascript autometically convert into the string.
//      "fullname" : "mohil kumar", // javascript hold the key : value like this. 
//      age: 16,
//      location: "jaipur",
//      email: "mohil@342.com", 
//      isLoggedIn: false,
//      lastLoginDays: ["Monday", "Saturday"],
     
// }

// // method 1
// console.log(JsUser.email);

// // method 2
// console.log(JsUser["email"]);  // We know that  js is store object keys in strings. So we want to access the value from this method.we use backet [ ] and inside the backet we use " " and inside the quote we pass the key of object. 

// _____________________________________________________________


// Object Properties
// 
// The named values, in JavaScript objects, are called properties.

// Property	     Value

// firstName	 John
// lastName	     Doe
// age	         50
// eyeColor	     blue




// Accessing JavaScript Properties

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
// // objectName.property
// let age = person.age;

// //objectName["property"]
// let age = person["age"];

// //objectName[expression]
// let age = person[x];



// Adding New Properties

// You can add new properties to an existing object by simply giving it a value:

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
//   person.nationality = "English";



// Deleting Properties

// The delete keyword deletes a property from an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
// delete person.age;
// delete person["age"];
// After deletion, the property cannot be used before it is added back again


// JavaScript Object Methods

// Methods are actions that can be performed on objects.
// Methods are function definitions stored as property values.

// Property     	Property Value

// firstName	     John
// lastName	         Doe
// fullName	     function() {return this.firstName + " " + this.lastName;}

// Example

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };


// In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person

// Accessing Object Methods

// You access an object method with the following syntax:

// objectName.methodName()

// console.log(person[fullname()]) //fullname is not defined
// console.log(person["fullname()"]) //undefine

// If you invoke the fullName property with (), it will execute as a function:
// name = person.fullName();

// If you access the fullName property without (), it will return the function definition:
//  name = person.fullName; 
//output function(){
//         return this.name + " " + this.age;
//     }


// Adding a Method to an Object

// Adding a new method to an object is easy:

// person.name = function () {
//     return this.firstName + " " + this.lastName;
//   };

// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

// person.name = function () {
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   };
  
// *Function Declare in Object then that function is called method in object.

// const JsUser = {
//         name: "mohil",  // if we write the key  like name: then javascript autometically convert into the string.
//         "fullname" : "mohil kumar", // javascript hold the key : value like this. 
//         age: 16,
//         location: "jaipur",
//         email: "mohil@342.com", 
//         isLoggedIn: false,
//         lastLoginDays: ["Monday", "Saturday"],
        
//     }


// // example 1;

// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// console.log(JsUser.greeting)  // Function (anonymous)
// console.log(JsUser.greeting()) // hello Js User ,//  undefine  app do bar console.log() kar raho  1. console.log() print kar raha and second console.log(function call kar raha per koi value return nahi mil rahi hai to voh output pe undefine de raha hai )
// JsUser.greeting()  iss case me undefine nahi aayga

// example 2;

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User, ${this.name}`);
// }

// console.log(JsUser.greetingTwo()); // op: Hello Js User, mohil // op:  undefine  = this undefine come due to double excution of the function which is javaScript do autometcally.
// JsUser.greetingTwo()
// ---------------------------------------------------------
// _____________________________________________________
// summary 

// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

// __________________________________________________________

// JavaScript Objects are Mutable

// Objects are mutable: They are addressed by reference, not by value.

// The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.Any changes to x will also change person:


// //Create an Object
// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50, eyeColor:"blue"
//   }
  
//   // Create a copy
//   const x = person;
  
//   // Change Age in both
//   x.age = 10;


// // Mutable
// // pass by Reference
// // real value pe change kar 

// const person = {
//     name : 'mohil',
//     age : 23,

// }
// const X = person;
// X.age = 10;
// console.log(person)


// // unMutable 
// // Pass by value 
// // copy pe change 

// let num  = 10;
// let Y = num;
// Y = 34;
// console.log(num);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/


// Object inside the Object

// const regularUser = {
//     email: "Some@Gamil.com",
//     fullname: {
//         userfullname: {
//                firstname: "mohil",
//                lastname: "kumar",
//         }
//     }
// }

// console.log(regularUser.fullname); //{userfullname: {…}}
// console.log(regularUser.fullname.userfullname)   //{firstname: 'mohil', lastname: 'kumar'}
// console.log(regularUser.fullname.userfullname.firstname)  //mohil

// // If fullname is not exist nahi kar toh  yeah ' ?' wala symsbol ap ko dekna ke liya milega yeah kiya kar tha ha yeah protection kar tha hai

// console.log(regularUser.fullname?.userfullname.firstname)  //mohil

// Nested Objects

// myObj = {
//     name:"John",
//     age:30,
//     myCars: {
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }
//   }

//   myObj.myCars.car2;
//   myObj.myCars["car2"];
//   myObj["myCars"]["car2"];

//   let p1 = "myCars";
//   let p2 = "car2";
//   myObj[p1][p2];

// ______________________________________________________________

// / #Array of Object 
// when data come from database the data in the form of ArrayofObject;

// const User = [
//     {
//         id:1,
//         email:"mohil@fdf",
//     },
//     {
//         id:2,
//         email:"mohil@fddffdfddfdfdfdff",
//     },
//     {
//         id:3,
//         email:"mohdfdffdfil@fdf",
//     },
//     {
//         id:4,
//         email:"mofdfdfdsaahil@fdf",
//     },
//     {
//         id:4,
//         email:"moaaaahil@fdf",
//     },
// ]

// console.log(User[0].email); //mohil@fdf Object bhi zero se start ho tha h

// API 
// 1.) api in JSON  format

// {
//     "name" : "mohil",
//     "coursename": "js in hindi"
//     "price": "free"
// }

// 2.) api in Array format

// [
//     {},
//     {},
//     {}
// ]


// # Object Destructuring
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // const {courseInstructor} = course;
// // console.log(courseInstructor); 

// const {courseInstructor: instructor} = course;
// console.log(instructor);

// ------------------------------------------------------------------------------------------------
// Inbuild Methods 

// 1.Object.create(object)
// 2.Object.keys(object)
// 3.Object.values(object)
// 4.Object.entries()
// 5.# ...spread()
// 6.Object.assign()
// 7.Object.freeze(JsUser)
// 8.Object.isFrozen()
// 9.seal()
// 10.isSealed()
// 11.Object.groupBy(object, callback)
// 12.toString() 

// very imp study later 
// prototype
// getOwnPropertyDescriptor()
// getOwnPropertyDescriptors()
// getOwnPropertyNames()

// _______________________________________________________

// 1.Object.create()

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// Create an Object:

// const person = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   // Create new Object
//   const man = Object.create(person);
//   man.firstName = "Peter";

// -------------------------------------------------

// 2.Object.keys()

// The Object.keys() method returns an array with the keys of an object.
// The Object.keys() method does not change the original object.

// // Create an Object 
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Get the Keys
//   const keys = Object.keys(person);

// //   Use Object.keys() on an array:
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   const keys = Object.keys(fruits)

// //   Use Object.keys() on a string:
//   const fruits = "Banana";
// const keys = Object.keys(fruits);

// ------------------------------------------------------

// 3.Object.values()

// The Object.values() method returns an array of the property values of an object.

// The Object.values() method does not change the original object.

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };
  
//   let text = Object.values(person);

// --------------------------------------------------------

// 4.Object.entries()

// Syntax Object.entries(obj) 

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
//   // Expected output:
//   // "a: somestring"
//   // "b: 42"
  
//  example 

// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// const arrayLike = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]


// -------------------------------------------------------------

// 5.# ...spread()  we use to merge the objects most use

// const ob1 = {1: "a", 2: "b"}
// const ob2 = {3: "a", 4: "b"}

// const obj3 = {...ob1, ...ob2}
// console.log(obj3); //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}


// -------------------------------------------------------------

// 6.Object.assign()

// # combine or Merging the two Objects with the help of Object.assign() Method 

// Object.assign();
// (target, source)
// (target, source,source)
// (target, source,source,source)


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true

// problem

// const ob1 = {1: "a", 2: "b"}
// const ob2 = {3: "a", 4: "b"}
// const ob4 = {5: 45, 6: 34}
// const ob3 = {ob1, ob2}

// console.log(ob3); //{ob1: {…}, ob2: {…}}  same problem like array

// a) Cloning an object

// // to resolve the problem we use Object.assign({}, ob1, ob2)

// // const obj3 = Object.assign({}, ob1, ob2); //why we put this {} inside the object.assign because this can help you to assign more objects inside the object.
// const obj3 = Object.assign({}, ob1, ob2,ob4);  //{1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 45, 6: 34}  {} it can help is to combine or merge the multiple objects.
// // const obj3 = Object.assign( ob1, ob2); // this is also return same Output 
// console.log(obj3); // {1: 'a', 2: 'b', 3: 'a', 4: 'b'}


// -----------------------------------------------------------

// 7.Object.freeze(JsUser)

// const JsUser = {
//      name: "mohil",  // if we write the key  like name: then javascript autometically convert into the string.
//      "fullname" : "mohil kumar", // javascript hold the key : value like this. 
//      age: 16,
//      location: "jaipur",
//      email: "mohil@342.com", 
//      isLoggedIn: false,
//      lastLoginDays: ["Monday", "Saturday"],
     
// }

// // How to change the key: value of object?

// JsUser.email = "hitesh@chatGpt.com"; // here value  of email key is overwirte.

// Object.freeze(JsUser) // if we don't want to Overwrite the value of oject we use the freeze();

// // let check
// JsUser.email = "hitesh@erer.com"  // this overwrite is incomplete because we use freeze method;
// console.log(JsUser);

// "use strict"; 
// const  User = {
//     name: "mohil",
//     age:  23,
//     location : "agra",
//     email: "mohil@4280.com",
//     isLoggedIn: false,
// }



// User.name = "kumar";
// delete User.name;
// User.looks = "handsome"

// console.log(Object.isFrozen(User));

// Object.freeze(User);

// User.salary = 23454545456; // Cannot add property salary, object is not extensible
// User.name = "havi"; // Cannot add property salary, object is not extensible

// console.log(Object.isFrozen(User));

// delete User.name;
// console.log(User) // no change
// --------------------------------------------------------
// freeze() in array 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.freeze(fruits);

// // This will trow an error:
// fruits.push("Kiwi");
// ---------------------------------------------------------------

// 8.Object.isFrozen()

// The Object.isFrozen() returns true if an object is frozen.

// // Create Object
// const person = {firstName:"John", lastName:"Doe"};

// // Freeze Object
// Object.freeze(person);

// // This will return true
// let text = Object.isFrozen(person);


// isFrozen in Array()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.freeze(fruits);

// // This will return true:
// let answer = Object.isFrozen(fruits);

// ________________________________________________________

// Object.seal()

// The Object.seal() method prevents additions or deletions of new properties.

// The Object.seal() method makes existing properties non-configurable.

// The Object.seal() method will fail silently in non-strict mode.

// The Object.seal() method will throw a TypeError in strict mode.

// The Object.isSealed() method can be used to check if an object is sealed.

// const object1 = {
//     property1: 42,
//   };
  
//   Object.seal(object1);
//   object1.property1 = 33;
//   console.log(object1.property1);
//   // Expected output: 33
  
//   delete object1.property1; // Cannot delete when sealed
//   console.log(object1.property1);
//   // Expected output: 33
  

// "use strict"
// // Create Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Seal Object
// Object.seal(person)

// // This will throw an error
// delete person.age;


// array in seal 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.seal(fruits);

// // This will throw an error:
// fruits.push("Kiwi");

// -----------------------------------------------------------

// 10.isSealed()

// The Object.isSealed() returns true if an object is sealed.

// Boolean	
// true if the object is sealed.
// false if not.

// // Create Object
// const person = {firstName:"John", lastName:"Doe"};

// // Seal Object
// Object.seal(person);

// // This will return true
// let answer = Object.isSealed(person);


// array in issealed()

// // Create Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Seal Array
// Object.seal(fruits);

// // This will return true
// let answer = Object.isSealed(fruits);

// ___________________________________________________________

// 11.Object.groupBy(object, callback)

// Object.groupBy(iterable, callback) 

// The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

// The Object.groupBy() method does not change the original object.


// Data in the form of Array Object 

// // Create an Array
// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
  
//   // Callback function to Group Elements
//   function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }
  
//   // Group by Quantity
//   const result = Object.groupBy(fruits, myCallback);

// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];

// const result = Object.groupBy(inventory, ({ type }) => type)

// --------
// function myCallback({ quantity }) {
//     return quantity > 5 ? "ok" : "restock";
//   }

//   const result2 = Object.groupBy(inventory, myCallback);




// ____________________________________________________________

// 12.toString() yeah bhi interview ke purpose

// The toString() method returns an object as a string.
// The toString() method returns "[object Object]" if it cannot return a string
// Object.toString() always returns the object constructor.
// The toString() method does not change the original object.


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   const keys = person.toString();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   const keys = Object.toString(person);

// // ============================================================
// // How to Declare Symbol in Object (InterVeiw ke liya hai)

// const mySym = Symbol("key1");

// const JsSym = {
//     //  mySym: "mykey3",   In this case we cannot use the sysmbol properties here
//         [mySym]: "mykey3",   // IN this case we want to access the sysmbol properties or other propreties of datatypes inside  we use the [] on key example [key] like this. 
// }

// // console.log(JsSym.mySym);         // mykey3
// // console.log(typeof JsSym.mySym);  //string

// console.log(JsSym["mySym"]);  //   // We know that js is store object keys in strings. So we want to access the value from this method.we use backet [ ] and inside the backet we use " " and inside the quote we pass the key of object. 
// console.log(typeof JsSym[mySym]); 
// console.log(JsSym);


// --------------------------------------------------------
//1.singleton
// object.create


// in operater 
// let person = {name: "Harry", age: "35", location: "NYC"}
// console.log('name' in person)
