

// const user1 = {
//     firstName : "harshit",
//     lastName : "vashistha",
//     email: "harshit@sffdf.com",
//     age: 3,
//     address: "32, raj nagar , 234344, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years ago`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// const user1about = user1.about();
// console.log(user1about);

// _____________________________________________________________________________________________
// function 
// 1.That function create object
// 2. add key value pair 
// 3. object ko return krega 


// function createUser(firstName, lastName, email, age, address){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function(){
//     return `${this.firstName} is ${this.age} years ago`;
//   };
//   user.is18 = function(){
//     return this.age >= 18;
//   }
//   return user;
// }

// // const user1 = createUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// // console.log(user1);

// // console.log(user1.is18());


// const user1 = createUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = createUser('ramada', 'place', 'ram24434gamil.com', '11', 'sfdfdff');
// const user3 = createUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');



// // when we create multiple users then it will also create multiple of method in object which take extra memory space 

// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years ago`
//     },
//     is18 :function(){
//         return this.age >= 18;
//       },
//     sing : function(){
//         return 'tons dfjfl kdf dfkj';
//     }
//     }

// function createUser(firstName, lastName, email, age, address){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;

// //   here javascript call Reference address of the method 
//   user.about = userMethod.about; 
//   user.is18 = userMethod.is18;
//   user.sing = userMethod.sing;
//   return user;
// }

// const user1 = createUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = createUser('ramada', 'place', 'ram24434gamil.com', '13', 'sfdfdff');
// const user3 = createUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');

// console.log(user1.about());
// console.log(user2.about());
// console.log(user1.sing());

// _____________________________________________________________________




// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2 = {
//     key3 : "value3"
// }
// console.log(obj2.key1);//undefined
// ++++++++++++++++++++++++++++++++++++++++++++

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2 = Object.create(obj1);
// console.log(obj2);
// obj2.key3 = "value3";
// console.log(obj2.key3);
// console.log(obj2.key2);//value2
// // obj2.key2 = "unique"
// console.log(obj2.key2);// unique

// console.log(obj2);


// // __proto__ 
// // offical ecmascript documentation
// // __proto__ === [[prototype]]

// // this is totally different = prototype 

// console.log(obj2.__proto__);// obj1;



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years ago`
//     },
//     is18 :function(){
//         return this.age >= 18;
//       },
//     sing : function(){
//         return 'tons dfjfl kdf dfkj';
//     }
//     }

// function createUser(firstName, lastName, email, age, address){
//   const user = Object.create(userMethod);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }

// const user1 = createUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = createUser('ramada', 'place', 'ram24434gamil.com', '13', 'sfdfdff');
// const user3 = createUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');

// console.log(user1);
// console.log(user2.about());
// console.log(user1.sing());

// ++++++++++++++++++++++++++++++++++++++++++++++++++



// what is phototype ?

//  prototype (Constructor Function's Prototype)
//  Definition: prototype is a property of constructor functions (i.e., function objects) that defines the prototype object for instances created by that constructor. When you create an instance using a constructor function, that instance’s __proto__ will point to the constructor's prototype.
//  Usage: It’s used for defining methods and properties that should be shared across all instances of an object created by a constructor function

// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
  
//   const john = new Person('John');
//   john.sayHello(); // "Hello, my name is John"

//   In this example, Person.prototype holds the sayHello method, which is shared by all instances of Person.
// +++++++++++++++++++++++++++++++++++++

// function hello(){
//     console.log("hw");
// }
// const hello = {
//     key1: "value",
// }
// const hello = [1,2,3,3,4];
//console.log(hello.name)

// javascript function  ---> function ===  Object
// you can add your own property;

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property  -----> tells function name;
// function provides more usefull properties;

// console.log(hello.prototype); // {}
// me function ke hi __proto__ hi use kar raha hoon to add propety and methods aur us chiz ko ham prototype of function bol tha h 
// only function provide prototype property that means free k space provide  hote hai inside the function __proto__ me jis ham prototype bol tha h. 

// if(hello.prototype){
//     console.log("prototype is present");
// }
// else{
//     console.log("prototype is not present");
// }

// function hello(){
//     console.log("hello world");
// }


// Adding prpperty in function prototype
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";

// // Adding Method in function prototype
// hello.prototype.sing = function(){
//     return "oh lal la lalal al";
// }
// console.log(hello.prototype)

// using prototype in functions 

// function createUser(firstName, lastName, email, age, address){
//   const user = Object.create(createUser.prototype);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years ago`
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// createUser.prototype. sing = function(){
//     return 'tons dfjfl kdf dfkj';
// }


// const user1 = createUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = createUser('ramada', 'place', 'ram24434gamil.com', '13', 'sfdfdff');
// const user3 = createUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');

// console.log(user1.about())
// console.log(user1.sing())
// console.log(user1)
// _______________________________________________________________________________________


// __________________________________________________________________________________

// new  keyword 

// function CreateUser(firstName , age){
//     this.firstName = firstName;
//     this.age = age;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} age is ${this.age}`
// }
// const user1 = new CreateUser("hello" , 45);
// console.log(user1);
// console.log(user1.about());

// new keyword 
// 1. empty Object this = {}
// 2.return this 
// 3. object.create(createUser.prototype);


// dev community 
// What is the `new` keyword in JavaScript?
// The new keyword in JavaScript is used to create new object instances from either:

// 1. A constructor function: A constructor function is used to create and initialize an object created with the new keyword.
// 2. A JavaScript class: A class is a template for creating objects in JavaScript.

// The new keyword does the following to create an object:
// Creates a new object instance.
// Binds the new object's prototype to the parent's prototype property, i.e., a constructor function or a class.
// Executes the function or the class with the given arguments, then binds the this keyword to the newly created object.
// Returns the new object.


// Object creation using the new keyword
// The new keyword creates new objects from a constructor function or a javascript class. Here's a quick run-through of how it's done.


// 1. The Constructor function
// Follow the steps below to create a new object using the new keyword and a constructor function:

// Define a constructor function.
// Use the new keyword to create an instance from the constructor function.
// When a constructor function is invoked with the new keyword, a new object is created with its properties and methods.

// Example
// Here's an example of using the new keyword with a constructor function:

// function Writer(fname, lname){
//   //Properties
//   this.firstName = fname;
//   this.lastName = lname;

//   //Method(S)
//   this.sayName = () => {
//     let fullName = `${this.firstName} ${this.lastName}`;

//     console.log(fullName);
//   }
// }

// let jsWriter = new Writer('Akande', 'Olalekan Toheeb');

// console.log(jsWriter);
// jsWriter.sayName();


// Explanation
// Line 1: A constructor with two parameters, fname and lname, is created.
// Lines 3 and 4: fname and lname are assigned to this.firstName and this.lastName, respectively.
// Line 7: A method that does something is created.
// Line 14: The new keyword creates a new object instance, jsWriter.
// When the new keyword is used with Writer, it creates a new object with its own set of fname and lname properties. The jsWriter object is assigned to the result of calling the Writer constructor function with the new keyword and passing in the arguments Akande and Olalekan Toheeb.
// Note: sayName is also available to jsWriter. Remember, jsWriter is a copy of Writer.
// Line 16: The new object is logged into the console.
// Line 17: Test if sayName exist in jsWriter by calling it.


// The Constructor function
// Creating a new object using the new keyword and a Constructor function is similar to creating it with the new keyword and a JavaScript class. Below is an example.

// Example

// class Writer{
//   constructor(fname, lname){
//     //Properties
//     this.firstName = fname,
//     this.lastName = lname
//   }

//   //Method(s)
//   sayName = () => {
//     let fullName = `${this.firstName} ${this.lastName}`;

//     console.log(fullName);
//   }
// }

// let jsWriter = new Writer('Akande', 'Olalekan Toheeb');

// console.log(jsWriter);
// jsWriter.sayName();

// Explanation
// Line 1: A javascript class was created with two parameters, fname and lname.

// Lines 4 and 5: fname and lname are bound to this.firstName and this.lastName, respectively.

// Line 9: A method that does something is created.

// Line 16: The new keyword creates a new object instance, jsWriter.




// # GFG 
// JavaScript new Keyword

// JavaScript new keyword is used to create an instance of an object that has a constructor function.

// On calling the constructor function with the ‘new’ operator, the following actions are taken:

// A new empty object is created.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.
// About the returned value, there are three situations below. 

// Syntax:
// new constructorFunction(arguments);

// Parameters:
// ConstructorFunction: A class or function that specifies the type of the object instance.
// Arguments: A list of values that the constructor will be called with.


// Return Value:
// If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.
// If the constructor function returns nothing, ‘this’ is returned;
// If the constructor function returns a primitive value,  it will be ignored, and ‘this’ is returned.

// Example 1: This example shows the use of a new keyword.


// function Fruit(color, taste, seeds) {
//     this.color = color;
//     this.taste = taste;
//     this.seeds = seeds;
// }
 
// // Create an object
// const fruit1 = new Fruit('Yellow', 'Sweet', 1);
 
// // Display the result
// console.log(fruit1.color);

// Explanation: In the above example, the ‘new’ keyword creates an empty object. Here, Fruit() includes three properties ‘color’, ‘taste’, and ‘seeds’ that are declared with ‘this’ keyword. So, a new empty object will now include all these properties i.e. ‘color’, ‘taste’ and ‘seeds’. The newly created objects are returned as fruit1().


// Example 2: This example shows the use of a new keyword.

// function func() {
//     let c = 1;
//     this.a = 100;
// }
 
// // Set the function prototype
// func.prototype.b = 200;
//  func.prototype.c = function(){
//     console.log("hey mere dosto")
//  }
// // Create an object
// let obj = new func();
 
// // Display the result on console
// console.log(obj.a);
 
// console.log(obj.b);
// obj.c();

// Explanation: In the above example, the ‘new’ keyword creates an empty object and then sets the ‘prototype’ property of this empty object to the prototype property of func(). New property ‘b’ is assigned using func.prototype.y. So, the new object will also include ‘b’ property. Then it binds all the properties and functions declared with this keyword to a new empty object. Here, func() includes only one property ‘a’ which is declared with this keyword. So new empty object will now include ‘a’ property. The func() also includes ‘c’ variable which is not declared with this keyword. So ‘c’ will not be included in new object. Lastly, the newly created object is returned. Note that func() does not include areturn statement. The compiler will implicitly insert ‘return this’ at the end.


// ----------------------------------

// constructor function 

// agar hum me jab bhi "new"  use kar ne hote hai h tab hum functionname, Objectname ko capital letter se start karte h. 

// function CreateUser(firstName, lastName, email, age, address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// //   return this // not compulsary to write the
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years ago`
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype. sing = function(){
//     return 'tons dfjfl kdf dfkj';
// }


// const user1 = new CreateUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = new CreateUser('ramada', 'place', 'ram24434gamil.com', '13', 'sfdfdff');
// const user3 = new CreateUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');

// console.log(user1.about())
// console.log(user1.sing())
// console.log(user1)
// console.log(user1.is18())
// _________________________________________________________
// all keys 

// for(let key in user1){
//     console.log(key);
// }


// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let numbers = [1,2,3];
// console.log(numbers);
// console.log(Object.getPrototypeOf(numbers))
// let numbers = new Array(1,2,3);
// console.log(Array.prototype); 



// // prototype of Array is Array [] 
// console.log(Array.prototype)
// console.log(Array.isArray(Array.prototype));
// // prototype of function is object {}
// function hello(){
//     console.log("hw")
// }
// console.log(hello.prototype); //{}



// 2015 / es6 
// class keyword 
// class age fake 

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//           console.log("constructor called")
//           this.firstName = firstName;
//           this.lastName = lastName;
//           this.email = email;
//           this.age = age;
//           this.address = address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years ago`
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return 'tons dfjfl kdf dfkj';
//     }
//     func(a){
//         console.log(a);
//     }
// }


// const user1 =  CreateUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// Class constructor CreateUser cannot be invoked without 'new'

// const user1 = new CreateUser('ram', 'sayma', 'ram24434gamil.com', '11', 'sfdfdff');
// const user2 = new CreateUser('ramada', 'place', 'ram24434gamil.com', '13', 'sfdfdff');
// const user3 = new CreateUser('bholenath', 'sakhti', 'ram24434gamil.com', '11', 'sfddfdfsa');


// console.log(user1.sing())
// console.log(user1.firstName);
// console.log(Object.getPrototypeOf(user1));
// user1.func("harshit");
// user1.func(12);

// ------------------------------------------------

// class practice 


// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return`${this.name} is eating`;
//     }
//     isSuperCute(){
//       return this.age <= 1; 
//     }
//     isCute(){
//         return true;
//     }
// }

// const animal1 = new Animal("tom", 2); animal class ke object hai 
// console.log(animal1);
// console.log(animal1.eat())
// console.log(animal1.isCute())

// inheritance 

// dog class

// "extends" is use for inheritance 
// dog = sabclass, drivedclass
// Animal = parentclass , baseclass

// class Dog extends Animal{
//   constructor(name, age, speed){
//     super(name, age);
//     this.speed = speed;
//   }

//   eat(){
//     return `Modfied Eat: ${this.name} is eating`
//   }
//   run(){
//     return `${this.name} is running at ${this.speed}kmph`
//   }
// }

// // object / instance 
// const tommy = new Dog("tommy", 3, 45); 

// console.log(tommy.eat())
// console.log(tommy.isCute())
// console.log(tommy)
// console.log(tommy.speed);
// console.log(tommy.run())


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GETTER AND SETTER 
// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

//    now this function is become getter method and it behave like a class property 
//   getter 
//    get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
 
//     // setter
//     set fullName(fullName){
        
//        const [firstName, lastName] =  fullName.split(" ");
//         //mohit__vashistha
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
     

//    setName(firstName, lastName)
//    {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
// }

// const person1 = new Person("harshit", "sharma", 5);
// console.log(person1);
// console.log(person1.firstName); // yesh property hoti h
// console.log(person1.fullName()); // method h

// console.log(person1.fullName()); // person1.fullName is not a function
// console.log(person1.fullName) // harshit sharma 


// // set the name 
// console.log(person1.firstName);
// console.log(person1.lastName);
// // person1.setName("mohit", "vashistha");
// person1.firstName = "mohit";
// person1.lastName = "vashistha";
// console.log(person1.firstName);
// console.log(person1.lastName);

// setter 
// person1.fullName = "mohit vashistha";
// console.log(person1);


// _____________________________________________________________________________________

// static method and properties 


class Person {
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
    
        }
        // static method 
         static classInfo(){
            return "this is person class";
         }
        // static property 
         static decs = "static property";

        // getter 
         get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
     
        // setter
         set fullName(fullName){
            
           const [firstName, lastName] =  fullName.split(" ");
        //mohit__vashistha
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // object se related h 
        eat(){
                    return`${this.firstName} is eating`;
                }
        isSuperCute(){
                    return this.age <= 1; 
                }
        isCute(){
                    return true;
                }
    }        
    

const person1 = new Person("harshit", "sharma" , 8 );
console.log(person1.eat());

// console.log(person1.classInfo()) //person1.classInfo is not a function



// class name se hio call karna h  
const info = Person.classInfo();
console.log(info); //this is person class

console.log(person1.decs) //undefine
console.log(Person.decs) //static property

