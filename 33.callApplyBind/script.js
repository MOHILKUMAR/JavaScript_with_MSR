// let name = {
//     firstname: "mohil",
//     lastname:  "Saini",
//     printFullName : function(){
//         console.log(this.firstname+ " "+this.lastname);
//     } 
// }
// name.printFullName();


// let name2 = {
//     firstname : "Schin",
//     lastname : "Tendulkar"
// }

// function borrowing 

// name.printFullName.call(name2);

// ------------------------------------------
// let name = {s
//     firstname: "mohil",
//     lastname:  "Saini",  
// }
// let name2 = {
//     firstname : "Schin",
//     lastname : "Tendulkar"
// }

// let  printFullName =  function(hometown){
//             console.log(this.firstname+ " "+this.lastname+" from " + hometown);
//         } 

// function borrowing         
// printFullName.call(name, "delhi");

// apply method 
// printFullName.apply(name2, ["agra"]);


// bind method 
// let printMyName = printFullName.bind(name2, "Mumbai")
// console.log(printMyName);
// printMyName();


// # polyfill for bind method 

// let name = {
//     firstname: "akshay",
//     lastname: "Sani",
// }

// let printFullName = function(hometown, state, country){
//     console.log(this.firstname +" "+ this.lastname +" "+ hometown+" "+ state+" "+ country);
// }


// let printMyName = printFullName.bind(name, "Dehradun");
// printMyName("up" , "india");


// Function.prototype.mybind = function(...args){
// //    this -> printName 
//      let obj = this
//     return function(){
//      obj.call(args[0]);
//   }
// }

// let printMyName2 = printFullName.mybind(name);
// printMyName();

// ----------------------------------------------------

// Function.prototype.mybind = function(...args){
//     //    this -> printName 
//          let obj = this
//          params = args.slice(1);
//         return function(){
//          obj.call(args[0], params);
//       }
//     }
    
//     let printMyName2 = printFullName.mybind(name, "Dehradun");
//     printMyName2("up");


// __________________________________________________________________

    // Function.prototype.mybind = function(...args){
    //     //    this -> printName 
    //          let obj = this
    //          params = args.slice(1);
    //         return function(...args2){
    //          obj.apply(args[0], [...params, ...args2]);
    //       }
    //     }
        
    //     let printMyName2 = printFullName.mybind(name, "Dehradun");
    //     printMyName2("up","india");
    
    
// function currying

// let multiply = function(x, y){
//     console.log(x * y);
// }

// let multiplybytwo = function(y){
//     let x = 2;
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5); //10

// let multiplyByTwo = multiply.bind(this, 2, 3);
// multiplyByTwo(5); //6

// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(2, 3); //6


// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);


// with closure 

let multiply = function(x) {
    return function(y){
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);

