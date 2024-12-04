// HTML DOM MouseEvent
// The MouseEvent Object
// The MouseEvent Object handles events that occur when the mouse interacts with the HTML document.


// Event	         Occurs When
// onclick	         A user clicks on an element
// oncontextmenu	 A user right-clicks on an element
// ondblclick	     A user double-clicks on an element
// onmousedown	     A mouse button is pressed over an element
// onmouseenter	     The mouse pointer moves into an element
// onmouseleave	     The mouse pointer moves out of an element
// onmousemove	     The mouse pointer moves over an element
// onmouseout	     The mouse pointer moves out of an element
// onmouseover	     The mouse pointer moves onto an element
// onmouseup	     A mouse button is released over an element

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.onclick or click

// {/* <button onclick="myFunction()">Click me</button> */}

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }

// document.getElementById("demo").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// 2.oncontextmenu Event

// const div = document.getElementById("myDiv");
// div.addEventListener("contextmenu", (e) => {e.preventDefault()});

// _____________________________________________________________________


// // Assign an "contextmenu" event to div01:
// document.getElementById("div01").addEventListener("contextmenu", myFunction);


// // Show hidden content:
// function myFunction() {
//   const div = document.getElementById("myDiv");
//   div.style.visibility = "visible";
// }




// 3.Double-click
// function myFunction() {
//     document.getElementById("demo").innerHTML += "Hello World ";
//   }


// document.getElementById("demo").addEventListener("dblclick", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I was double-clicked!";
// }


// 4. // onmousedown and onmouseup
// The onmousedown event occurs when a user presses a mouse button over an HTML element.

// Events order for the left and middle mouse button:

// onmousedown
// onmouseup
// onclick
// Events order for the right mouse button:

// onmousedown
// onmouseup
// oncontextmenu

// function mouseDown() {
//     document.getElementById("myP").style.color = "red";
//   }
  
//   function mouseUp() {
//     document.getElementById("myP").style.color = "blue";
//   }


// document.getElementById("demo").addEventListener("mousedown", mouseDown);
// document.getElementById("demo").addEventListener("mouseup", mouseUp);

// function mouseDown() {
//   document.getElementById("demo").innerHTML = "The mouse button is held down.";
// }

// function mouseUp() {
//   document.getElementById("demo").innerHTML = "You released the mouse button.";
// }

// 5.onmouseenter Event and onmouseleave Event
// The onmouseenter event occurs when the mouse pointer enters an element.
// The onmouseenter event is often used together with the onmouseleave event, which occurs when the mouse pointer leaves an element.
// The onmouseenter event is similar to the onmouseover event. The difference is that the onmouseenter event does not bubble (does not propagate up the document hierarchy). See "More Examples" at the bottom of this page to better understand the differences.

// onmouseleave Event
// The onmouseleave event occurs when the mouse pointer leaves an element.
// Theonmouseleave event is similar to the onmouseout event. The difference is that the onmouseleave event does not bubble (does not propagate up the document hierarchy). See "More Examples" at the bottom of this page to better understand the differences.

// document.getElementById("demo").addEventListener("mouseenter", mouseEnter);
// document.getElementById("demo").addEventListener("mouseleave", mouseLeave);

// function mouseEnter() {
//   document.getElementById("demo").style.color = "red";
// }

// function mouseLeave() {
//   document.getElementById("demo").style.color = "blue";
// }


// 6.onmousemove Event
// The onmousemove event occurs when the pointer moves over an element.

// document.getElementById("myDIV").addEventListener("mousemove", function(event) {
//     myFunction(event);
//   });
  
//   function myFunction(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     let coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("demo").innerHTML = coor;
//   }



//  7. mouseover and mouseout

//   document.getElementById("demo").addEventListener("mouseover", mouseOver);
//   document.getElementById("demo").addEventListener("mouseout", mouseOut);
  
//   function mouseOver() {
//     document.getElementById("demo").style.color = "red";
//   }
  
//   function mouseOut() {
//     document.getElementById("demo").style.color = "blue";
//   }



// Example
// This example demonstrates the difference between the onmousemove, onmouseleave and onmouseout events:



// let x = 0;
// let y = 0;
// let z = 0;

// function myMoveFunction() {
//   document.getElementById("demo1").innerHTML = z+=1;
// }

// function myLeaveFunction() {
//   document.getElementById("demo2").innerHTML = x+=1;
// }

// function myOutFunction() {
//   document.getElementById("demo3").innerHTML = y+=1;
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MouseEvent          Properties
// Property	           Returns
// altKey	           If the ALT key is pressed
// button	           Which mouse button is pressed
// buttons	           Which mouse buttons were pressed
// clientX	           The X coordinate of the mouse pointer (window relative)
// clientY	           The Y coordinate of the mouse pointer (window relative)
// ctrlKey	           If the CTRL key is pressed
// detail	           The details about an event
// metaKey	           If the META key is pressed
// offsetX	           The X coordinate of the mouse pointer (target relative)
// offsetY	           The Y coordinate of the mouse pointer (target relative)
// pageX	           The X coordinate of the mouse pointer (document relative)
// pageY	           The Y coordinate of the mouse pointer (document relative)
// relatedTarget	   The element that triggered the mouse event
// screenX             The X coordinate of the mouse pointer (screen relative)
// screenY	           The Y coordinate of the mouse pointer (screen relative)
// shiftKey            If the SHIFT key is pressed
// which	           Deprecated (Avoid using it)
//                     Use the button property instead


// 1.MouseEvent: altKey property

// The MouseEvent.altKey read-only property is a boolean value that indicates whether the alt key was pressed or not when a given mouse event occurs.
// Be aware that the browser can't always detect the alt key on some operating systems. On some Linux variants, for example, a left mouse click combined with the alt key is used to move or resize windows.


// let log = document.querySelector("#log");
// document.addEventListener("click", logKey);

// function logKey(e) {
//   log.textContent = `The alt key is pressed: ${e.altKey}`;
// }

// 2. MouseEvent: button property

// The MouseEvent.button read-only property indicates which button was pressed on the mouse to trigger the event.

// This property only guarantees to indicate which buttons are pressed during events caused by pressing or releasing one or multiple buttons. As such, it is not reliable for events such as mouseenter, mouseleave, mouseover, mouseout, or mousemove.

// 2. MouseEvent: ctrlKey property

// The MouseEvent.ctrlKey read-only property is a boolean value that indicates whether the ctrl key was pressed or not when a given mouse event occurs.

// const log = document.querySelector("#log");
// window.addEventListener("mousemove", logKey);

// function logKey(e) {
//   log.textContent = `The ctrl key was pressed while the cursor was moving: ${e.ctrlKey}`;
// }

// 3.MouseEvent: shiftKey property

// let log = document.querySelector("#log");
// document.addEventListener("click", logKey);

// function logKey(e) {
//   log.textContent = `The shift key is pressed: ${e.shiftKey}`;
// }

// Value
// A number representing a given button:

// 0: Main button pressed, usually the left button or the un-initialized state
// 1: Auxiliary button pressed, usually the wheel button or the middle button (if present)
// 2: Secondary button pressed, usually the right button
// 3: Fourth button, typically the Browser Back button
// 4: Fifth button, typically the Browser Forward button

// let button = document.querySelector("#button");
// button.addEventListener("mouseup", (e) => {
//   let log = document.querySelector("#log");
//   switch (e.button) {
//     case 0:
//       log.textContent = "Left button clicked.";
//       break;
//     case 1:
//       log.textContent = "Middle button clicked.";
//       break;
//     case 2:
//       log.textContent = "Right button clicked.";
//       break;
//     default:
//       log.textContent = `Unknown button code: ${e.button}`;
//   }
// });

// SmallProject ?
// const buttonNames = ["left", "right", "wheel", "back", "forward"];
// function mouseButtonPressed(event, buttonName) {
//   // Use binary `&` with the relevant power of 2 to check if a given button is pressed
//   return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
// }

// function format(event) {
//   const { type, buttons } = event;
//   const obj = { type, buttons };
//   for (const buttonName of buttonNames) {
//     obj[buttonName] = mouseButtonPressed(event, buttonName);
//   }
//   return JSON.stringify(obj, null, 2);
// }

// const log = document.getElementById("log");
// function logButtons(event) {
//   log.textContent = format(event);
// }

// document.addEventListener("mouseup", logButtons);
// document.addEventListener("mousedown", logButtons);



// MouseEvent: clientX property
// The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page)


// MouseEvent: clientY property
// The clientY read-only property of the MouseEvent interface provides the vertical coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).

// MouseEvent: screenX property
// The screenX read-only property of the MouseEvent interface provides the horizontal coordinate (offset) of the mouse pointer in screen coordinates.

// MouseEvent: screenY property
// The screenY read-only property of the MouseEvent interface provides the vertical coordinate (offset) of the mouse pointer in screen coordinates.


// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// ++++++++++++++++++++++++++++++++++++++++KeyboardEvent+++++++++++++++++++++++++++++++++++++++



// 1.onkeypress Event

// document.getElementById("demo").addEventListener("keypress", myFunction);

// function myFunction() {
//   document.getElementById("demo").style.backgroundColor = "red";
// }


// 2.onkeydown Event
// document.getElementById("demo").addEventListener("keydown", myFunction);

// function myFunction() {
//   document.getElementById("demo").style.backgroundColor = "red";
//   console.log("press down")
// }


// 3.onkeyup Event

// document.getElementById("fname").addEventListener("keyup", myFunction);

// function myFunction() {
//   let x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }


// property of keyboard 

// 1. alt key pressed 
// function isKeyPressed(event) {
//     const x = document.getElementById("demo");
//     if (event.altKey) {
//       x.innerHTML = "The ALT key was pressed!";
//     } else {
//       x.innerHTML = "The ALT key was NOT pressed!";
//     }
//   }


// 2. ctrl key pressed 
//   function isKeyPressed(event) {
//     const x = document.getElementById("demo");
//     if (event.ctrlKey) {
//       x.innerHTML = "The ctrl key was pressed!";
//     } else {
//       x.innerHTML = "The ctrl key was NOT pressed!";
//     }
//   }

//   3.shiftKey is press
//   function isKeyPressed(event) {
//     const x = document.getElementById("demo");
//     if (event.shiftKey) {
//       x.innerHTML = "The shift key was pressed!";
//     } else {
//       x.innerHTML = "The shift key was NOT pressed!";
//     }
//   }




// Element: focus event and blur event

// The focus event fires when an element has received focus. The event does not bubble, but the related focusin event that follows does bubble.

// const password = document.querySelector('input[type="password"]');

// password.addEventListener("focus", (event) => {
//   event.target.style.background = "pink";
// });

// password.addEventListener("blur", (event) => {
//   event.target.style.background = "";
// });


// focusin event and focusout event

// const form = document.getElementById("form");

// form.addEventListener("focusin", (event) => {
//   event.target.style.background = "pink";
// });

// form.addEventListener("focusout", (event) => {
//   event.target.style.background = "";
// });
