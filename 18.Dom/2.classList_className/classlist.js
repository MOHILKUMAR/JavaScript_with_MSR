
// HTML DOM Element classList

// function AddStyle() {
//     const list = document.getElementById("myDIV");
//     list.classList.add("myStyle");
//   }

//   function removeStyle() {
//     document.getElementById("myDIV").classList.remove("myStyle");
//   }

//   function toggleStyle() {
//     document.getElementById("myDIV").classList.toggle("myStyle");
//   }

//   function replaceStyle() {
//     const list = document.getElementById("myDIV").classList;
//     list.replace("myStyle", "newStyle");
//   }

// {/* <h1>The DOMTokenList Object</h1> */}

// let list = document.getElementById("demo").classList;
// document.getElementById("demo").innerHTML = list; 
// console.log(list) //DOMTokenList(3) ['c1', 'c2', 'c3', value: 'c1 c2 c3']


// key 
// let list = document.getElementById("demo").classList;
// let text = "";
// for (let x of list.keys()) {
//   text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// values()
// let list = document.getElementById("demo").classList;
// let text = "";
// for (let x of list.values()) {
//   text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// HTML DOMTokenList length
// let list = document.getElementById("demo").classList;
// let number = list.length;console.log(number); //3

// HTML DOMTokenList item()
// let list = document.getElementById("demo").classList;
// let item = list.item(0);
// console.log(item)  //c1



// className 

// Set the class attribute for an element:
// function addingStyle() {
//   document.getElementById("myDIV").className = "mystyle";
// }

// Get the class attribute of "myDIV":
let value = document.getElementById("myDIV").className;
console.log(value)


// Toggle between two class names:
function myFunction() {
  const element = document.getElementById("myDIV");
  if (element.className == "myStyle") {
    element.className = "newStyle";
  } else {
    element.className = "myStyle";
  }
}