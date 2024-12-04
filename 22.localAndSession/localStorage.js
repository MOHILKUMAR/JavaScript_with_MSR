

//localStorage 

// wirte in console; 
//  window.localStorage // Storage {length: 0}

// 1 key 
// 2 value

// difference in getItem() 

// localStorage.getItem('age')
//  null 

// localStorage.age 
// undefined


// const nameElement =  document.querySelector('.name-tab');
// const nameInput = document.querySelector('.name');


// // access the value of the localstorage
// // nameElement.innerText = localStorage.myName

// // reconmmded way 
// nameElement.innerText = localStorage.getItem('myName')
// nameInput.addEventListener('input', (e) =>{
//     // console.log(e.target.value);

//     // update the localStorage
//     // localStorage.myName = e.target.value;

//     localStorage.setItem('myName', e.target.value);

//     // access the value 
//     nameElement.innerText = localStorage.myName;

// })

// const ageElement =  document.querySelector('.age-tab');
// const ageInput = document.querySelector('.age');

// ageElement.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e) =>{
//     // console.log(e.target.value);

//     // update the localStorage
//     // localStorage.myName = e.target.value;

//     localStorage.setItem('myAge', e.target.value);

//     // access the value 
//     ageElement.innerText = localStorage.myAge;

// })


// how to stroge  data of Object in localStorage

 const nameInput = document.querySelector('.name');
 const ageInput = document.querySelector('.age');
 const phoneInput = document.querySelector('.phone');

const nameElement =  document.querySelector('.name-tab');
const ageElement =  document.querySelector('.age-tab');
const phoneElement =  document.querySelector('.phone-tab');


//  const myData = {
//     name: '',
//     age: '',
// }


const myData = JSON.parse(localStorage.getItem('myData')) || {}

 nameInput.addEventListener('input', (e) =>{
    myData.name = e.target.value   // {name: 'd', age: ''}
    nameElement.innerText = myData.name;

    // how to convert Object Data into String in json format string
    // JSON.stringify(myData) // '{"name":"","age":""}'

    // how to convert JSON String
    // JSON.parse('{"name":"dfdfdf","age":""}') //{name: 'dfdfdf', age: ''}

    localStorage.setItem('myData', JSON.stringify(myData))
 })

 ageInput.addEventListener('input', (e) =>{
    myData.age = e.target.value   // {name: 'd', age: '23'}
    ageElement.innerText = myData.age;
    localStorage.setItem('myData', JSON.stringify(myData))
 })

 phoneInput.addEventListener('input', (e) =>{
    myData.phone = e.target.value   // {name: 'd', age: '23'}
    phoneElement.innerText = myData.phone;
    localStorage.setItem('myData', JSON.stringify(myData))
 })

// nameElement.innerText = myData.name;
// ageElement.innerText = myData.age;
// phoneElement.innerText = myData.phone;

if(myData.name){
    nameElement.innerText = myData.name;
}
if(myData.age){
    ageElement.innerText = myData.age;
}
if(myData.phone){
    phoneElement.innerText = myData.phone;
}



// how to clear the all data in localStorage 
// localStorage.clear()

// if we want to remove one dataOject
// localStorage.removeItem('user1')

// note: - agar hum kisis or port per apne link ko open kar ta hai toh hum a vo previous storage data nahi milega. 

