


// closures

// function can return function 

// function outerFunction(){
//     return 1;
// }

// const ans = outerFunction();
// console.log(ans);


// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// // console.log(ans);
// // ans();


// function printFullname(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullname("harshit", "sharma");
// // console.log(ans);
// ans();




// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x)
//     }
// }

// const ans = hello("arg");
// ans();



// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

// const cube = myFunction(3);
// const ans1 = cube(3);
// console.log(ans1);



// function func(){
//     let counter = 0;
//     return function (){
//         if(counter < 1){
//             console.log("hi You Called me");
//             counter++;
//         }
//         else{
//             console.log("Mai already ek bar call ho chuka hoon")
//         }
//     }

// }

// const myFunc = func();
// myFunc();
// myFunc();

























