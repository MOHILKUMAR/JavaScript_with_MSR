

// setTimeout( function (){
//    console.log("heii")
// }, 2000);

// const sayHitesh  = function(){
//     console.log('hitesh');
// }
// setTimeout(sayHitesh, 2000)



// const changeText = function (){
//     document.querySelector('h1')
//     .innerHTML = "best Js Series"
// }

// const changeMe = setTimeout(changeText, 2000)

// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("Stopped")

// })


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// setInterval(function(){
//     console.log("hello", Date.now())
// }, 1000)


// const sayDate = function(){
//     console.log("kumaar", Date.now());
// }
// setInterval(sayDate, 1000, )


// const sayDate = function(str){
//     console.log(str, Date.now());
// }

// setInterval(sayDate, 1000, "hello ")



// const Div = document.querySelector('.btn');
// Div.addEventListener('click', (e) => { 
    
//     console.log(e.target.id)//stop start

//     const startBtn = document.getElementById('start'); 
//     const stopBtn =  document.getElementById('stop')
//     const intervalId = setInterval(sayDate, 1000, "hi")
//     if(startBtn === start){
//         intervalId
//     }

//     if(stopBtn === stop){
//         clearInterval(intervalId);
//     }
//     // const intervalId = setInterval(sayDate, 1000, "hi")

    
// }, false)



// project 


//generate a ramdom color

// const ramdomColor = function(){
//     const hex = "0123456789ABCDEF"
//     let color = '#'
//     for(let i = 0; i < 6; i++){
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// // console.log(ramdomColor())

// let intervalId ;
// const startChangingColor = function() {

//    if(!intervalId){
//     intervalId =  setInterval(changeBgcolor, 1000)
//    }

//     function changeBgcolor() {
//         document.body.style.backgroundColor = ramdomColor()
//     }

// }
// const stopChangingColor = function() {
//     clearInterval(intervalId);
//     intervalId = null;
// }

// document.querySelector('#start').addEventListener('click', startChangingColor)

// document.querySelector('#stop').addEventListener('click', stopChangingColor)



const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
    <dtable>
      <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`

})














