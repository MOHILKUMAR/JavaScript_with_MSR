

// synchronus programing vs asynchronous programing

// 1.synchronus programing 
//   a) single threaded 

// example

// console.log('script start');

// This is the loop part. We called as blocking event right know
// for(let i = 1; i<10000; i++){
//     console.log('inside for loop');
// }

// console.log('script end');

// for example how this blocking event create problem. When the is webpage fetch the data from the database with api and show to the website. but the problem is fetching the data from database is time consuming and are webpage is not loaded on browser so that process we block Event. 

// 2.asynchronous programing


//1. setTimeout

// console.log("script start");

// function hello(){
//     console.log('hello world');
// }
// setTimeout(hello, 1000);

// setTimeout(() =>{
//     console.log('Arrow function inside the setTimeout')
// }, 1000);

// console.log('script end');

// script start
// script end
// hello world


// example -2;

// console.log('script start');

// setTimeout(() => {
//     console.log('inside setTimeOut');
// }, 1000);

// for(let i = 1; i < 100; i++ ){
//     console.log('....');
// }
// console.log('script end');

// script start
// 99script.js:53 ....
// script.js:55 script end
// script.js:49 inside setTimeOut


// setTimeout return id 

// console.log('script start');

// const id = setTimeout(() => {
//     console.log('inside setTimeOut');
// }, 1000);

// for(let i = 1; i < 100; i++ ){
//     console.log('....');
// }

// console.log("Id of setTimeout:", id);
// console.log('script end');


// script start
// 99script.js:72 ....
// script.js:75 Id of setTimeout: 1
// script.js:76 script end
// script.js:68 inside setTimeOut


// clearTimeout with id of setTimeout

// console.log('script start');

// const id = setTimeout(() => {
//     console.log('inside setTimeOut');
// }, 2000);

// for(let i = 1; i < 100; i++ ){
//     console.log('....');
// }

// console.log("Id of setTimeout:", id);

// console.log('clearing timeOut ');
// clearTimeout(id);

// console.log('script end');


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.setInterval 

// console.log('script start');

// setInterval(() => {
//     console.log(Math.random());
// }, 1000)

// console.log('script end');



// project changing backgroung color 

// const body = document.body;
// const button = document.querySelector('button');

// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.background = rgb;

// },2000)

// // console.log(intervalId)

// button.addEventListener('click', () =>{
//     clearInterval(intervalId);
//     button.textContent = body.style.background 
// }, false);


// understanding the callback;


// function myFunction1(){
//     console.log("function is doing task 1");
// }
// function myFunction2(){
//     console.log("function is doing task 2");
// }
// myFunction1();
// myFunction2();


// _________________________________________________________________
// function myFunction1(callback){
//     console.log("function is doing task 1");
//     callback();
// }
// function myFunction2(){
//     console.log("function is doing task 2");
// }

// myFunction1(myFunction2);

// _______________________________________________________________
// function myFunction1(callback){
//     console.log("function is doing task 1");
//     callback();
// }


// myFunction1(function(){
//     console.log("function is doing task 2");
// });

// myFunction1(() => {
//     console.log("function is doing task 2");
// });

// ____________________________________________________________________

// function getTwoNumberAndAdd(number1, number2, callback){
//     // console.log(number1, number2);
//     // callback(number1, number2);
 
//     if(typeof number1 === "number" && typeof number2 ==="number"){
//         callback(number1, number2);
//     }else{
//         console.log('wrong data type');
//     }

// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// // getTwoNumberAndAdd(4, 5, addTwoNumbers);
// getTwoNumberAndAdd("4", "5", addTwoNumbers);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function getTwoNumberAndAdd(number1, number2, onSuccess , onFailure){
    
//     if(typeof number1 === "number" && typeof number2 ==="number"){
//         onSuccess(number1, number2);
//     }else{
//         onFailure();
//     }

// }
// getTwoNumberAndAdd(4, 5, (num1, num2) => {
//   console.log(num1 + num2);
// }, () => {
//     console.log('Wrong data type');
//     console.log('please pass number only')
// });



// function getTwoNumberAndAdd(number1, number2, onSuccess , onFailure){
    
//     if(typeof number1 === "number" && typeof number2 ==="number"){
//         onSuccess(number1, number2);
//     }else{
//         onFailure();
//     }

// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// function onfail(){
//      console.log('Wrong data type');
//     console.log('please pass number only');
// }

// getTwoNumberAndAdd(4, '5', addTwoNumbers, onfail);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Asynchronous programing 
// callbacks, callbacks hell, pyramid of doom 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');

// not good approch 
// setTimeout(()=>{
//  heading1.textContent = 'Heading 1';
//  heading1.style.color = 'red';
 
// },1000)

// setTimeout(()=>{
//     heading2.textContent = 'Heading 2';
//     heading2.style.color = 'green';
    
// },2000)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');

// setTimeout(()=>{

//  heading1.textContent = 'Heading 1';
//  heading1.style.color = 'red';

//  setTimeout(() =>{
//     heading2.textContent = 'heading 2'
//     heading2.style.color = 'green';
//  },1000)

// },1000)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');


// callbacks hell

// setTimeout(() =>{
//     heading1.textContent = 'one';
//     heading1.style.color = 'red';
//     setTimeout(() =>{
//         heading2.textContent = 'two';
//         heading2.style.color = 'green';
//         setTimeout(() =>{
//             heading3.textContent = 'three';
//             heading3.style.color = 'pink';
//             setTimeout(() =>{
//                 heading4.textContent = 'four';
//                 heading4.style.color = 'yellow';
//                 setTimeout(() =>{
//                     heading5.textContent = 'five';
//                     heading5.style.color = 'brown';
//                     setTimeout(() =>{
//                         heading6.textContent = 'six';
//                         heading6.style.color = 'orange';
//                         setTimeout(() =>{
//                             heading7.textContent = 'seven';
//                             heading7.style.color = 'blue';
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



// Same Work we can do with the help of function 

// const heading1 = document.querySelector('.heading1');
// function changeText(element, text, color, time){
//     setTimeout (() => {
//         element.textContent = text;
//         element.style.color = color;
//     },time)
// }

// changeText(heading1, 'one', 'violet', 3000);


//1 for example me galat Element select kar the hmm 

// const heading1 = document.querySelector('.heading'); // error
// const heading1 = document.querySelector('.heading1'); // error

// function changeText(element, text, color, time){
//     setTimeout(() => {
//       if(element){
//         element.textContent = text;
//         element.style.color = color;
//         console.log('task complete');
//       }
//       else{
//         console.log("Please select the element correct")
//       }
//     },time)
// }
// changeText(heading1, 'one', 'violet', 3000);   //TypeError: Cannot set properties of null (setting 'textContent')

//======================================================================================================================

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');

// function changeText(element, text, color, time, onSuccessCallBack, onFailCallBack){
//     setTimeout(() => {
//       if(element){
//         element.textContent = text;
//         element.style.color = color;
//         if(onSuccessCallBack){
//             onSuccessCallBack();
//         }
//       }
//       else{
//         if(onFailCallBack){
//             onFailCallBack();
//         }
//       }
//     },time)
// }


// changeText(heading1, 'one', 'violet', 3000, () => {
//     changeText(heading2, 'two', 'green', 1000)
// });  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Pramid of Doom 

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');


function changeText(element, text, color, time, onSuccessCallBack, onFailCallBack){
    setTimeout(() => {
      if(element){
        element.textContent = text;
        element.style.color = color;
        if(onSuccessCallBack){
            onSuccessCallBack();
        }
      }
      else{
        if(onFailCallBack){
            onFailCallBack();
        }
      }
    },time)
}

changeText(heading1, 'one', 'violet', 3000, () => {
    changeText(heading2, 'one', 'violet', 3000, () => {
        changeText(heading3, 'one', 'violet', 3000, () => {
            changeText(heading4, 'one', 'violet', 3000, () => {
                changeText(heading5, 'one', 'violet', 3000, () => {
                    changeText(heading6, 'one', 'violet', 3000, () => {
                        changeText(heading7, 'one', 'violet', 3000, () => {
    
                        }, () => {console.log('Heading one does not exist');})
                    }, () => {console.log('Heading one does not exist');})
                }, () => {console.log('Heading one does not exist');})
            }, () => {console.log('Heading one does not exist');})
        }, () => {console.log('Heading one does not exist');})
    }, () => {console.log('Heading one does not exist');}) 
}, () => {console.log('Heading one does not exist');})

