const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const Body = document.querySelector('body');

buttons.forEach( function (button){
    // console.log(button)
    button.addEventListener('click', function(e){
     console.log(e)
     console.log(e.target)
     if(e.target.id === 'Gray'){
        Body.style.backgroundColor = e.target.id //gray
     }
     if(e.target.id === 'white'){
        Body.style.backgroundColor = e.target.id //white
     }
     if(e.target.id === 'blue'){
        Body.style.backgroundColor = e.target.id //blue
     }
     if(e.target.id === 'yellow'){
        Body.style.backgroundColor = e.target.id //blue
     }
    //  if(e.target.id === 'purple'){                         //demo
    //     Body.style.backgroundColor = e.target.id //blue
    //  }
    })
})



