// method 
// function inside object  

// const person = {
//     firstName : 'harshit',
//     age : 8,
//     about: function() {
//         console.log("person name is harsit and person age is 8");
//     }

// }
// console.log(person.about);
// person.about();
// console.log(person.about()) // undefine; 


// what if when we change the name and age of this object:


// const person = {
//     firstName : 'rOHIT',
//     age : 43,
//     about: function() {
//         // console.log(`person name is ${firstName} and person age is ${age}`);
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }

// person.about(); //ReferenceError: firstName is not defined
// person.about();

// // this ki value runtime per pata chal thi h 
// ___________________________________________________________

// const person = {
//     firstName : 'MOHIT',
//     age : 23,
//     about: function() {
//        console.log(this);
//        console.log(`${this.firstName} ${this.age}`)
//     }
// }
// person.about(); // object print ho raha h 

// ____________________________________________________________________


// function personInfo(){
//     console.log(`person name is ${this.firstName} and age ${this.age}`)
// }

// const person1 = {
//     firstName: 'harsh',
//     age: 8,
//     about: personInfo
// }

// const person2 = {
//     firstName: 'Mohit',
//     age: 20,
//     about: personInfo
// }

// const person3 = {
//     firstName: 'Mohit',
//     age: 18,
//     about: personInfo
// }

// personInfo();//person name is undefined and age undefined
// console.log(personInfo);

// person1.about()
// person2.about()
// person3.about()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(this); // window object;
// console.log(window); // window object;

// console.log(this === window );

// ______________________________________________________

// function myFunc(){
//     console.log("hello ji");
// }
// window.myFunc();


// function myFunc(){
//     console.log(this)
// }
// myFunc(); // window object 

// function myFunc(){
//     "use strict"
//     console.log(this)
// }
// myFunc(); //undefine;

// call apply bind 

// 1.call

// function hello(){
//     console.log("hello world");
// }
// hello.call();

// _________________________________________________________________
// const user1 = {
//     firstName: 'harshit',
//     age: 8,
//     about: function(hobby, favMusician) {
//         console.log(this.firstName, this.age, hobby, favMusician)
//     }
// }
// user1.about('cooking', "bebebapu");


// const user2 = {
//     firstName: 'mohit',
//     age: 9,
// }

// user1.about.call(user2);
// // user1.about.call(); //undefine undefine;
// user1.about.call(user1);

// user1.about.call(user2, "guitar" ); //mohit 9 guitar undefined
// user1.about.call(user2, "guitar" , "atif aslam"); //mohit 9 guitar atif aslam

// _________________________________________________________________________

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician)
// }

// const user1 = {
//     firstName: 'harshit',
//     age: 8,
// }
// const user2 = {
//     firstName: 'mohit'
//     ,age : 9,
// }

// about.call(user1, "guitar", "arijit singh")
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// apply 

// about.apply(user1,["guitar", "bach"] );

//bind

// const func = about.bind(user2, "guitar", 'bach')
// func();


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const user1 = {
//     firstName : 'MOHIT',
//     age : 23,
//     about: function() {
//        console.log(this.firstName, this.age);
//     }
// }
// user1.about();


// don't do this mistake 
// const myFunc = user1.about;
// myFunc(); // undefine undefine

// solution 
// const myFunc = user1.about.bind(user1);
// myFunc();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrow function 

// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about:() => {
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about(user1);
// user1.about.call(user1);

// ------------------------------------------------------------------

// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about:() => {
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName: "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }
// }


// user2.about();
