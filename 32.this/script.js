"use strict";

// this in global space 
// console.log(this) // window object // In case of browser the global object is window object and In case of node enviroment it show global object



// this inside  a function 
// function x(){
    // the value depends on strict / non strict mode
    //  non-strict mode the value of this is windowobject 
    // console.log(this) 
    
    // "use strict"; 
    // on strict mode value of this is undefine
    // console.log(this) 
// }    
// x()


// this in non-strict mode (this substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject only in non strict mode



// this keyword value depends on how this is called(window)
// In strict mode - "use strict";
// x(); //undefine 
// window.x(); //window object 


// this inside the object's method 

// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this);// the value of this object itself {a: 10, x: ƒ}
//         console.log(this.a);//the value of this is 10
//     }
// }
// obj.x(); 


// call apply bind method (sharing methods) 

// call 

// const student = {
//     name:"ram",
//     printName: function (){
//         console.log(this.name);
//     },
// };

// student.printName();

// const student2 = {
//     name: "hari",
// };

// student.printName.call(student2); // value of this  = student2 which is overwrite by the help of call method.

// check the video of call apply bind 

// this inside arrow function 

// const obj = {
//     a:10,
//     // x:function(){
//     //     console.log(this); //{a: 10, x: ƒ}
//     // }
//     x:() => {
//         console.log(this); // windowobject or it will be enclosing lexical context
//     }
// }
// obj.x();


// this inside nested arrow function 

// const obj2 = {
//     a:10,
//     x:function(){

//     // console.log(this);//{a: 10, x: ƒ}

//     // It is the enclosing lexical context of "y"
//     //    const y = () =>{
//     //         console.log(this); //{a: 10, x: ƒ} 
//     //     }
//     //     y()
//     }
   
// }
// obj2.x();


// this inside Dom element  => refence to HTML element 
