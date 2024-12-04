
// harshit 

//Add the event

// 1. Direct on the HTML Element {It is not a good approch because we use one only time of onclick method

// <!-- <button onclick=" console.log('you clicked me')">onclick</button> -->

// 2.Direct apply on javascript file {It is not a good approch because we use one only time of onclick method }

// const btn  = document.querySelector('.btn-headline');
// console.dir(btn) //onclick: null

// btn.onclick = function(){
//     console.log('you clicked me') //you clicked me
// }

// 3.addEventListener method
// const btn  = document.querySelector('.btn-headline');

// function clickme(){
//     console.log('you click me')
// }
// btn.addEventListener('click',clickme )

// btn.addEventListener('click', ()=>{
//     console.log('fuck you')
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. preventDefault
// The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.



// const link = document.getElementById('anchor');
// link.addEventListener('click', function(e){

//     console.log('link clicked...');
//     // e.preventDefault();
// })

// const myFrom = document.getElementById('myFrom');
// myFrom.addEventListener('submit', (e) =>{
//     e.preventDefault();  // now submit button is not working 
// })

// 2.target property
// The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.

// 3.currentTarget



// 3.What Does "(e)" Mean in JavaScript? 

// it is use for eventObjects

// this keyWord

// const btn  = document.querySelector('.btn-headline');

// // btn.addEventListener('click', ()=>{

// //     console.log('value of this')
// //     console.log(this)
// // })
// btn.addEventListener('click', function(){
//     console.log('value of this')
//     console.log(this)
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const allButton = document.querySelectorAll('.my-buttons button');
// console.log(allButton)

// 1 for of

// for(let button of allButton){
//     button.addEventListener('click', function(){
//         console.log('you clicked me')
//     })
// }

//2 for of with this

// for(let button of allButton){
//     button.addEventListener('click', function(){
//         console.log(this)
//     })
// }

// output
// {/* <button id="one">My Button One</button> */}
// {/* <button id="two">My Button two</button> */}
// {/* <button id="three">My Button three</button>*/}

// Problem in Arrow function with this

// for(let button of allButton){
//     button.addEventListener('click', () => {
//         console.log(this)
//     })
// }  // Output is WindowObject

// 3.for loop

// for(let i = 0; i<allButton.length; i++){
//     allButton[i].addEventListener('click', function(){
//         console.log(this)
//     })
// }

// output
// {/* <button id="one">My Button One</button> */}
// {/* <button id="two">My Button two</button> */}
// {/* <button id="three">My Button three</button>*/}

// 4. for each

// allButton.forEach(function(button){
//     button.addEventListener('click', function(){
//                 console.log(this)
//             });
// })

// output
// {/* <button id="one">My Button One</button> */}
// {/* <button id="two">My Button two</button> */}
// {/* <button id="three">My Button three</button>*/}

//5 Event Object

// a)
// const firstButton = document.querySelector('.my-buttons');

// for(let button of allButton){
//     button.addEventListener('click', function(e){
//         console.log(this) // <button id="one">My Button One</button>
//         console.log(this.textContent) //My Button One
//         console.log(e) //event object
//     })
// }

// for(let button of allButton){
//     button.addEventListener('click', (e)=>{
//         // console.log(this) //window {object}
//         // console.log(this.textContent) //undefine
//         console.log(e) //event object
//     })
// }

//b) Two important property(we disscus it later on event Bubling and capturing)
// target: button#three
// currentTarget: null

// const firstButton = document.querySelector('.my-buttons');
// for(let button of allButton){
//     button.addEventListener('click', (e)=>{
//         console.log(e.target) // we clicked first button op :<button id="one">My Button One</button>
//         console.log(e.currentTarget) // we clicked first button op :<button id="one">My Button One</button>
//     })
// }
// __________________________________________________________________________

// event Execution

// console.log("script start !!!")

// const allButton = document.querySelectorAll(".my-buttons button");

// allButton.forEach((button) => {
//     button.addEventListener('click', (e)=>{
//         let num = 0;
//         for(let i = 0; i<=1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);

//     })
// })

// let outerVar = 0;
// for(let i = 0; i<=1000000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ",outerVar)
// console.log("End Script")


// keypress event
// const body = document.body;

// body.addEventListener('keypress', (e)=> {
//     console.log(e.key);
// })
// 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Akshay sani 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Event Bubbling

// document.querySelector('#grandParent').addEventListener('click', ()=>{
//     console.log('GrandParent Clicked')
// }, false)

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent Clicked')
// },false)

// document.querySelector('#child')
// .addEventListener('click', ()=>{
//     console.log('child Clicked')
// }, false)



// Event capturing or Event trickling

// document.querySelector('#grandParent').addEventListener('click', ()=>{
//     console.log('GrandParent Clicked')
// }, true)

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent Clicked')
// }, true)

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('child Clicked')
// }, true)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// example
// document.querySelector('#grandParent').addEventListener('click', ()=>{
//     console.log('GrandParent Clicked')
// }, true); // capturing 

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent Clicked')
// }, false) // bubbling

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('child Clicked')
// }, true) //capturing


// document.querySelector('#grandParent').addEventListener('click', ()=>{
//         console.log('GrandParent Clicked')
//     }, false); //  
    
//     document.querySelector('#parent').addEventListener('click', ()=>{
//         console.log('Parent Clicked')
//     }, true) // 
    
//     document.querySelector('#child').addEventListener('click', ()=>{
//         console.log('child Clicked')
//     }, false) //
    

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// document.querySelector('#grandParent').addEventListener('click', ()=>{
//     console.log('GrandParent Clicked')
// }, true); // capturing 

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('Parent Clicked')
// }, false) // bubbling

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('child Clicked')
// }, false) // bubbling


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stop propagation in case of bubbling

// document.querySelector('#grandParent').addEventListener('click', ()=>{
//     console.log('GrandParent Clicked')
// }, false); // bubbling 

// document.querySelector('#parent').addEventListener('click', (e)=>{
//     console.log('Parent Clicked')
//     e.stopPropagation()
// }, false) // bubbling

// document.querySelector('#child').addEventListener('click', (e)=>{
//     console.log('child Clicked')
//     // e.stopPropagation()
// }, false) //bubbling



// stop propagation in case of capturing

document.querySelector('#grandParent').addEventListener('click', (e)=>{
    console.log('GrandParent Clicked')
    // e.stopPropagation()
}, true); // capturing

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log('Parent Clicked')
    e.stopPropagation()
}, true) // capturing

document.querySelector('#child').addEventListener('click', (e)=>{
    console.log('child Clicked')
    // e.stopPropagation()
}, true) //capturing


// Event Delegation

// document.querySelector('#category').addEventListener('click', (e) =>{
// console.log('Category parent clicked');
// console.log(e)
// console.log(e.target.id) // i click on shoes  and e.target hit the sheos  

// });


// document.querySelector('#category').addEventListener('click', (e) =>{
//  console.log(e.target.id);
// //  window.location.href = "/" + e.target.id;

// // when the nexted li are there then the event Bubbling  create problems. means li parent inside li child then whenever you try to click child li then you first trigged the parent li right which means you bubbling to the grandparent div show that you call the functionality of the parentli and you never call the childli
// if(e.target.tagName === 'LI'){
//     window.location.href = '/' + e.target.id;
// }

// });



// example 

// document.querySelector('#form').addEventListener('keyup', (e) => {

//     console.log(e);
//     if(e.target.dataset.uppercase != undefined){
//         e.target.value = e.target.value.toUpperCase();
//     }
// })



// Benefits of event delegation:
// 1) improves memory space
// 2) mitigates risk of performance bottle neck
// 3) Dom manipulation
// 4) when elements get added dynamically, the process of adding events is slow
// Limitations:
// 1) All the events are not bubbled up, some events like blur, focus are not bubbled up
// 2) if e.stopPropogation is used in child, then events are not bubbled up



// HTMLElement: dataset property

// The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.

// html
// {/* <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
//   Carina Anand
// </div> */}




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// chai aur code 

// document.querySelector('#images').addEventListener('click', function(e){
//     //   console.log(e)
//     //   console.log(e.target.parentNode)
//     //   console.log(e.target.tagName) //IMG
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     }

//     // let removeIt = e.target.parentNode
//     // removeIt.remove()



//     //removeIt.parentNode.removeChild(removeIt);

// },false)
