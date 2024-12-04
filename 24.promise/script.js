

// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// 1 produce kiye hai 

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
// const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

// const friedRicePromise = new Promise( (resolve, reject) =>{

// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice'))
// {
//     // inside resolve() we pass String, Array, Object, function;
//     resolve('Fried Rice')
// }
// else{
//     // inside reject () we pass String, Array, Object, function;
//     reject("item is not available");
// }
// })
// console.log(friedRicePromise);

// // 2. consume 

// // how to consume

// friedRicePromise.then(
    
//     // jab Promise resolve hoga
//     (myfriedRice) => {
//     console.log('lets eats ', myfriedRice);
//     }, 

//     // jab Promise reject hoga
// (error) => {
//     console.log(error)
//     }
// )


// data in form of object 

// // const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
// const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

// const friedRicePromise = new Promise( (resolve, reject) =>{

// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice'))
// {
//     // inside resolve() we pass String, Array, Object, function;
//       resolve({value:'Fried Rice'});
// }
// else{
//     // inside reject () we pass String, Array, Object, function;
//     //  reject(new Error('something missing from bucket')); // iss ko hum bol te h error object 
    
//     // reject(['salt' ,'is' ,'not' ,'available'])
//     // reject("item is not found")
// }
// })


// 2. consume 

// how to consume

// friedRicePromise.then(
    
//     // jab Promise resolve hoga
//     (myfriedRice) => {
//     console.log('lets eats ', myfriedRice);
//     }, 

//     // jab Promise reject hoga
// (error) => {
//     console.log(error)
//     }
// )


// yeah per hum ne resolve ki care nahi ki h. hum ne bus value null set kar de h.

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
// const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

// const friedRicePromise = new Promise( (resolve, reject) =>{

// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice'))
// {
//     // inside resolve() we pass String, Array, Object, function;
//     resolve('Fried Rice')
// }
// else{
//     // inside reject () we pass String, Array, Object, function;
//     reject("item is not available");
// }
// })


// // yeah per hum ne resolve ki care nahi ki h. hum ne bus value null set kar de h.

// friedRicePromise.then(
    
//     // jab Promise resolve hoga
//     null,

//     // jab Promise reject hoga
// (error) => {
//     console.log(error)
//     }
// )


// ---------------------------------------------------------------------

// by using catch 

// // const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
// const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

// const friedRicePromise = new Promise( (resolve, reject) =>{

// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice'))
// {
//     // inside resolve() we pass String, Array, Object, function;
//     resolve('Fried Rice')
// }
// else{
//     // inside reject () we pass String, Array, Object, function;
//     reject("item is not available");
// }
// })


// friedRicePromise.then(

//   // jab Promise resolve hoga
//     (myfriedRice) => {
//     console.log('lets eats ', myfriedRice);
//     }
// ).catch(
//     (error) => {
//         console.log(error)
//     })




// execution context Promise 

// console.log('start script');


// const bucket = ['coffee', 'chips', 'vegetables', 'rice'];

// const friedRicePromise = new Promise( (resolve, reject) =>{

// if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice'))
// {
//     // inside resolve() we pass String, Array, Object, function;
//     resolve('Fried Rice')
// }
// else{
//     // inside reject () we pass String, Array, Object, function;
//     reject("item is not available");
// }
// })


// friedRicePromise.then(

//   // jab Promise resolve hoga
//     (myfriedRice) => {
//     console.log('lets eats ', myfriedRice);
//     }
// ).catch(
//     (error) => {
//         console.log(error)
//     })



// setTimeout(() => {
//     console.log("hello ji")
// },0);


// for(let i = 0; i <= 10; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end");




// conclusion: micro-task-Queue is more high priority than the callbacks function;

// Promise in function 

// function RicePromise(){
//     const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
//     return new Promise((resolve, reject) => {
//         if(bucket.includes('vegetables')&& bucket.includes('salt') && bucket.includes('rice')){
//             resolve({value:'friedrice'});
//         }
//         else{
//             reject('could not do it');
//         }
//     })
// }

// RicePromise().then(
// // jab promise resolve hoga 
// (myfriendRice) =>{
//     console.log("let eat", myfriendRice);
// }
// ).catch(
//     (error) =>{
//         console.log(error)
//     }
// )
  


// Promise && setTimeout 

// I want to resolve / reject Promise after 2 seconds



// function myPromise(){
//     return new Promise((resolve, reject) => {
//         // const value = true;
//         const value = false;

//         setTimeout(() =>{
         
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }

//         }, 2000)
//     })
// }

// myPromise()
//         .then(() =>{console.log("resolved")})
//         .catch(() => {console.log("rejected")})




// Promise.resolve

// const myPromise = Promise.resolve(5);

// myPromise.then(value => {
//     console.log(value);
// })

// Promise.resolve(5).then(value => {
//     console.log(value);
// })


// then() method always return the promise  or iss ks fayad kiya hai

// iss ka fayad yeah hai ki hum Promise me chaining kar sakta hai. 



// function myPromise(){
//     return new Promise((resolve, reject) => {
//         resolve('foo');
//     })
// }

// // Promise.chaining 
// myPromise()
//               .then((value) => { console.log(value);
//                  value += 'bar';
//                 //   return value;    // promise return ho raha hai
//                 return Promise.resolve(value); // both are same  // promise return ho raha hai
        //  what if we do not write return then it will return undefined
//                 })

//               .then((value) => {
//                 console.log(value);
// })



// "hello ji".then((value) => {
//     console.log(value) //TypeError: "hello ji".then is not a function
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading"); // we create the heading8 in error;
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");



function changeText (element, text , color, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                   reject("element is not selected");
                }
        
            
        }, time)
    })
}

// const returnedPromise = changeText(heading1, "one", "red", 1000);

// returnedPromise.then(() => {
//    return changeText(heading2, 'two', 'purple', 1000)
// })

// ---------------------------------------------------
// changeText(heading1, "one", "red", 1000)
// .then(() => {
//     return  changeText(heading2, "two", "purple", 1000)
    
// })

// // .then(() => {
// //     changeText(heading3, "three", 'green', 1000) // It run after the first color 
// // })

// .then(() => {
//    return changeText(heading3, "three", 'green', 1000)
// })

// ---------------------------------------------------------

changeText(heading1, "one", "red", 1000)
.then(() => changeText(heading2, "two", "purple", 1000))
.then(() => changeText(heading3, "two", "purple", 1000))
.then(() => changeText(heading4, "two", "purple", 1000))
.then(() => changeText(heading5, "two", "purple", 1000))
.then(() => changeText(heading6, "two", "purple", 1000))
.then(() => changeText(heading7, "two", "purple", 1000))
.then(() => changeText(heading8, "two", "purple", 1000))
.then(() => changeText(heading9, "two", "purple", 1000))
.then(() => changeText(heading10, "two", "purple", 1000))
.catch((error) => {
    alert(error);
})







