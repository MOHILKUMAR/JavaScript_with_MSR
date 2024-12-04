
// javascript and classes

// ## OOP 
// -collection of properties and methods 
// -tolowerCase

// #WHY use OOP 
// #part of OOP 
// Object literal 
// -constructor function  
// -Prototypes
// -Classes 
// -Instances (new , this)


// ## 4 pillars
// -abstraction 
// -Encapsulation 
// -Inneritance 
// -Polymorphism 




// #object literals
// const user = {
//     username: 'hitesh',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details form database");
//         console.log(this) // curent context 
//     }
// }

// console.log(user.username);
// user.getUserDetails();


// -Instances
// const  prominseOne = new Pormise()
// const date  = new Date ()

// #Constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.getting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this; // it is impilcitly define hota hai

}

// const userOne  = User("hitesh" , 12, true)
// const userTwo =  User("chaiAurCode", 23, true) // yeah per overwrite ho raha hai
// console.log(userOne.username);

// use new intances every time 
const userOne  = new User("hitesh" , 12, true)
const userTwo = new User("chaiAurCode", 23, true)
console.log(userOne.username);
console.log(userOne.constructor)

