// 1 .project change background color randomly

const mainButton = document.querySelector('button');
const currentcolor = document.querySelector('.currentcolor');
const body = document.body;

const Arr = [];

function randomColorGenerator(){
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   const randomColor = `rgb(${red}, ${green}, ${blue})`
   return randomColor;
}

mainButton.addEventListener('click', (e) =>{
    const randomColor = randomColorGenerator();
    currentcolor.textContent = randomColor;
    body.style.backgroundColor = randomColor;
    Arr.push(randomColor);
    console.log(Arr)
})