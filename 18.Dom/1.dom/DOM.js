
//1. Document: getElementById() 

// The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly

// If you need to get access to an element which doesn't have an ID, you can use querySelector() to find the element using any selector.


// console.log(document.getElementById('title'))  //h1#title.heading
// console.log(document.getElementById('title').id) //title
// console.log(document.getElementById('title').class)  //undefined 
// console.log(document.getElementById('title').className)  //heading

// how to Hold getElementById in variables 
// const  title = document.getElementById("title");
// console.log(title);// h1#title.heading

// // How to apply CSS 
// title.style.backgroundColor = "green"
// title.style.padding = "15px"
// title.style.borderRadius = "50%"

// _______________________________________________________________________________


//2. Document: getElementsByClassName()


// The getElementsByClassName() method returns a collection of elements with a specified class name(s).

// The getElementsByClassName() method returns an HTMLCollection.


// const heading = document.getElementsByClassName("heading")
// console.log(heading);//HTMLCollection [h1#title.heading, title: h1#title.heading]

// const heading = document.getElementsByClassName("heading");
// heading[0].style.backgroundColor = "red"

// const collection = document.getElementsByClassName("example");
// collection[0].innerHTML = "Hello World!";


// const applyLoopClassHtmlCollection = document.getElementsByClassName("example");
// for (let i = 0; i < applyLoopClassHtmlCollection.length; i++) {
//     applyLoopClassHtmlCollection[i].style.backgroundColor = "red";
// }


// const tempClassLists = document.getElementsByClassName('list_items')
// console.log(tempClassLists) //HTMLCollection(4) [li.list_items, li.list_items, li.list_items, li.list_items]

// how to convert HTMLCollection to Array

// const tempClassLists = document.getElementsByClassName('list_items')
// console.log(tempClassLists) //HTMLCollection(4) [li.list_items, li.list_items, li.list_items, li.list_items]

// const conARR = Array.from(tempClassLists);
// console.log(conARR); //Array (4) [li.list_items, li.list_items, li.list_items, li.list_items] 

// conARR.forEach(function(li){
//     li.style.color = 'orange'
// })



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Document: querySelector()

// querySelector(selectors)
// The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. If no matches are found, null is returned.
// The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes.
// If the specified selector matches an ID that is incorrectly used more than once in the document, the first element with that ID is returned.

// Selecting the Elements 

// const  h1 = document.querySelector("h1");
// console.log(h1);//h1#title.heading

// const h2 = document.querySelector("h2");
// console.log(h2); //h2 it select first node of h2 lists // <h2>Lorem ipsum dolor sit amet consectetur ad. Autem nam deleniti quaerat.</h2>//

// // Selecting the id 

// const  id = document.querySelector("#title");
// console.log(id)  // <h1  id="title">…</h1>

// // selecting  with class 

// const  classes = document.querySelector(".heading");
// console.log(classes)  // <h1 class="heading" >…</h1>

// // selecting with the Attribute
// const Attribute = document.querySelector('input[type = "password"]')
// console.log(Attribute); //<input type="password">

// Note-Point 
// 1. you can use all selector of css with the help of querySelector
// {1.Adjacent Sibling selector, childSelector , p-:first-child }

// -------------------------------------------------------------------

// const myul = document.querySelector('ul')
// console.log(myul)//<ul>…</ul>

// console.log(myul.querySelector('li')); //<li class="list_items">…</li> first item hi mila
// const turnGreen  = myul.querySelector('li')
// turnGreen.style.backgroundColor = "green"
// turnGreen.style.padding = "20px"
// turnGreen.innerText = "mohil"

//# querySelectorAll

//  const QsAll = document.querySelectorAll("li");
// console.log(QsAll); // NodeList(4) [li.list_items, li.list_items, li.list_items, li.list_items]

// NodeList: it is not a Array. and these are some method of nodeList // entries // forEach // item // keys// length // value

// QsAll.style.color = "green "//TypeError: Cannot set properties of undefined (setting 'color')
// QsAll[0].style.color = "green " //  one pa green color gaya

// use of forEach in NodeList and change background color of lists 
// QsAll.forEach((item) =>{
//     item.style.backgroundColor = "red" 
// })

// # convert nodelist into array with help of Array.form();

// const cLiA = Array.from(QsAll);
// console.log(cLiA) .// ARRay 

// for of  { for loop, for in} try it your self
//  const QsAll = document.querySelectorAll("li");
//  for(const lia of QsAll){
//     lia.style.color = 'teal'
//     lia.style.backgroundColor = 'green'
//  }  

//  #style

// const QsAll = document.querySelectorAll("li");
// for(const element of QsAll){
//    element.style.color = 'teal'
//    element.style.backgroundColor = 'green'

// element.style.cssText = `
//    color: teal;
//    background-color : white; 
// `

// document.getElementsByTagName 
// className
// element.className = 'green-link' //overwrite
// element.className = 'list_items green-link' // remove OverWrite
// element.className = 'list_items green-link way-line' // multiple classes adding
// element.setAttribute('class', 'green-link')

// classList {see down}
// console.log(element.classList) // domTokenlist 
// method {add(), remove(), toggle(), etc}
// element.classList.add('green-link') // yeah overWrite nahi kar tha hai
// element.classList .remove('green-link') // yeah class ko remove kar datha hai



// };
//   _____________________________________________________
// classList {yeah class attribute per apply hote hai}
// console.log(element.classList) // domTokenlist 
// method {add(), remove(), toggle(), etc}

// const h2 = document.querySelector('#head-2')
// h2.classList.add('test')
// console.log(h2);  // <h2 class=​"heading-2 test" id=​"head-2">

// h2.classList.remove('test')
// console.log(h2); // <h2 class=​"heading-2" id=​"head-2">

// h2.classList.toggle('test');
// console.log(h2) //(hoga test in class)
// h2.classList.toggle('test');
// console.log(h2)  //(nahi hoga test in class)

// h2.classList.add('way-line')
// h2.classList.add('green-link')
// h2.classList.toggle('hidden')
// ___________________________________________________________
// #Method to extract the text or content form the Element or html 

// const  title = document.getElementById("title");

// // 1. textContent
// title.textContent = "hekk";
// console.log(title.textContent);

    
 //Dom Learning test texton chai aur code

// 2.innerHtml

//console.log(title.innerHTML) //Dom Learning <span style="display: none;">test text</span>on chai aur code

// 3. innerText

//console.log(title.innerText)  //Dom Learning on chai aur code


//4. Difference B/W innerText and textContent.

// console.log(title.innerText)  // yeah css properties ko bhi apply kar tha hai style="display: none;"
// console.log(title.textContent)
// console.log(title.innerHTML)//iss me css property bhi dik thi hai //Dom Learning <span style="display: none;">test text</span>on chai aur code

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Element: getAttribute() method

// getAttribute(attributeName)
// The getAttribute() method of the Element interface returns the value of a specified attribute on the element.

// If the given attribute does not exist, the value returned will be null.

// If you need to inspect the Attr node's properties, you can use the getAttributeNode() method instead.


// console.log(document.getElementById('title').getAttribute('id'))  //title
// console.log(document.getElementById('title').getAttribute('class'))  //heading
// console.log(document.getElementById('title').getAttribute('all'))  //null

// console.log(document.querySelector('[mohil]').attributes.mohil) //  mohil=​"name"
// console.log(document.querySelector('[mohil]').attributes.id) //DOM.js:172 id=​"title"


// <!-- example div in an HTML DOC -->
// <div id="div1">Hi Champ!</div>

// // in a console
// const div1 = document.getElementById("div1");
// //=> <div id="div1">Hi Champ!</div>

// const exampleAttr = div1.getAttribute("id");
// //=> "div1" yeah id ki value hai 

// const align = div1.getAttribute("align");
// //=> null

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Element: setAttribute() method

// setAttribute(name, value)

// The setAttribute() method of the Element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().


// console.log(document.getElementById('title').setAttribute('class' , 'test'))    //undefined // OverWirte the classvalue to check on element section that why the console log output is undefined  
// console.log(document.getElementById('title').setAttribute('class' , 'heading  test')) // now both class value are same check it on element section
// console.log(document.getElementById('title').setAttribute('Rahul', 'ram'))

// direact set the attributes
// console.log(document.getElementById('title').id = 'hari')//<h1 class="heading1" id="hari" mohil="name">



// HTML
//  <button>Hello World</button>   

// JavaScript
// const button = document.querySelector("button");

// button.setAttribute("name", "helloButton");
// button.setAttribute("disabled", "");



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//# parent and children relationship (It is Important to  master because it help in React js)

// const parent = document.querySelector('.parent')
// console.log(parent) //<div class="parent">…</div>
// console.log((parent.children)); //HTMLCollection(4) [div, div, div, div]
// console.log(parent.children[1].innerHTML)//Tuesday

// for( let i = 0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML); 
// document.write(parent.children[i].innerHTML +'<br>')
// } 

// how to style
// parent.children[1].style.color = "orange";

// console.log(parent.firstElementChild)  //<div>Monday</div>
// console.log(parent.lastElementChild)   //<div>Thusday</div>

// const dayOne = document.querySelector('.day')

// console.log(dayOne) //<div class="day">Monday</div>
// console.log(dayOne.parentElement); //<div class="parent">…</div>
// console.log(dayOne.nextElementSibling); //<div class="day" style="color: orange;">Tuesday</div>


// #node list 
// console.log("NODES: ", parent.childNodes); 

//NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
// adding the Comment in Between the div tag 
//NodeList(11) [text, comment, text, div.day, text, div.day, text, div.day, text, div.day, text]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Create a NEW Element in DOM 

// const div = document.createElement('div')
// console.log(div)  // <div></div>

// const h1 = document.createElement('h1')
// console.log(h1)  // <h1></h1>

// ------------------------------------------------------
// const div = document.createElement('div')
// console.log(div)  // <div></div>
// div.className = "main"
// div.id = "myId"
// // div.id = Math.round(Math.random() * 10 + 1)

// div.setAttribute("title", "generated title")
// div.style.backgroundColor = "green"
// div.style.padding = " 12px "

// // div.innerText = "chai aur code"

// const addText = document.createTextNode("chai Aur Code")
// div.appendChild(addText)

// document.body.appendChild(div)
// -------------------------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// #Edit and Remove 

// Adding the value 
// function addLanguage(langName){
//     const li = document.createElement("li");
//     li.innerHTML = `${langName}`
//     document.querySelector('.language').appendChild(li)
// }
// addLanguage("pyhton")
// addLanguage("mohil")


// Adding the value in optimizing code 

// function addOptiLanguage(langName){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector('.language').appendChild(li)

// }
// addOptiLanguage("mohil")


// // Edit 

//  const secondLang = document.querySelector("li:nth-child(2)")
// // secondLang.innerHTML = " mojo"


// const newli = document.createElement('li')
// newli.textContent = "mojo"
// secondLang.replaceWith(newli)


// const firstLang = document.querySelector("li:first-child")
// firstLang.outerHTML = '<li>TypeScript</li>'


// // remove 

// const lastlang = document.querySelector('li:last-child')
// lastlang.remove()



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// start here 


// Element: prepend() method

// The Element.prepend() method inserts a set of Node objects or strings before the first child of the Element. Strings are inserted as equivalent Text nodes.

// prepend(param1)
// prepend(param1, param2)
// prepend(param1, param2, /* …, */ paramN)


// Prepending an element
// let div = document.createElement("div");
// let p = document.createElement("p");
// let span = document.createElement("span");
// div.append(p);
// div.prepend(span);
// document.body.append(div)

// console.log(div.childNodes); // NodeList [ <span>, <p> ]

// Prepending text
// let div = document.createElement("div");
// div.append("Some text");
// div.prepend("Headline: ");

// console.log(div.textContent); // "Headline: Some text"


// Prepending an element and text
// let div = document.createElement("div");
// let p = document.createElement("p");
// div.prepend("Some text", p);
// console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Element: append() method
// The Element.append() method inserts a set of Node objects or strings after the last child of the Element. Strings are inserted as equivalent Text nodes.

// Differences from Node.appendChild():
// Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects.
// Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

// append(param1)
// append(param1, param2)
// append(param1, param2, /* …, */ paramN)


// Appending an element
// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append(p);

// console.log(div.childNodes); // NodeList [ <p> ]

// Appending text

// let div = document.createElement("div");
// div.append("Some text");

// console.log(div.textContent); // "Some text"

// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append("Some text", p);

// console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Node: appendChild() method
// The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.

// Note: If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.
// If the given child is a DocumentFragment, the entire contents of the DocumentFragment are moved into the child list of the specified parent node.

// appendChild() returns the newly appended node, or if the child is a DocumentFragment, the emptied fragment.
// appendChild(aChild)


// const paragraph = document.body.appendChild(document.createElement("p"));
// // You can append more elements to the paragraph later


// Append a paragraph to the body

// Create a new paragraph element, and append it to the end of the document body
// const p = document.createElement("p");
// document.body.appendChild(p);


// Creating a nested DOM structure

// In this example, we attempt to create a nested DOM structure using as few temporary variables as possible.
// const fragment = document.createDocumentFragment();
// const li = fragment
//   .appendChild(document.createElement("section"))
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li"));
// li.textContent = "hello world";

// document.body.appendChild(fragment);



// It generates the following DOM tree:

// <section>
//   <ul>
//     <li>hello world</li>
//   </ul>
// </section>


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//createDocumentFragment() method
// Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
// createDocumentFragment()

// Examples
// This example creates a list of major web browsers in a DocumentFragment, then adds the new DOM subtree to the document to be displayed.

// HTML
// <ul id="ul"></ul>

// JavaScript

// const element = document.getElementById("ul"); // assuming ul exists
// const fragment = document.createDocumentFragment();
// const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

// browsers.forEach((browser) => {
//   const li = document.createElement("li");
//   li.textContent = browser;
//   fragment.appendChild(li);
// });

// element.appendChild(fragment);

// create ul with id = ul 
// Should I use document.createDocumentFragment or document.createElement


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//node replaceChild() method

// The replaceChild() method of the Node interface replaces a child node within the given (parent) node.
// replaceChild(newChild, oldChild)

// Warning: If the new node is already present somewhere else in the DOM, it is first removed from that position.


// Given:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Create an empty element node
// without an ID, any attributes, or any content
// const sp1 = document.createElement("span");

// // Give it an id attribute called 'newSpan'
// sp1.id = "newSpan";

// // Create some content for the new element.
// const sp1_content = document.createTextNode("new replacement span element.");

// // Apply that content to the new element
// sp1.appendChild(sp1_content);

// // Build a reference to the existing node to be replaced
// const sp2 = document.getElementById("childSpan");
// const parentDiv = sp2.parentNode;

// // Replace existing node sp2 with the new span element sp1
// parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>


// Element: replaceWith() method

// The Element.replaceWith() method replaces this Element in the children list of its parent with a set of Node objects or strings. Strings are inserted as equivalent Text nodes.
// replaceWith(param1)
// replaceWith(param1, param2)
// replaceWith(param1, param2, /* …, */ paramN)

// Using replaceWith()

// const div = document.createElement("div");
// const p = document.createElement("p");
// div.appendChild(p);
// const span = document.createElement("span");

// p.replaceWith(span);

// console.log(div.outerHTML);
// // "<div><span></span></div>"




// Node: insertBefore() method

// The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.

// If the given node already exists in the document, insertBefore() moves it from its current position to the new position. (That is, it will automatically be removed from its existing parent before appending it to the specified new parent.)

// This means that a node cannot be in two locations of the document simultaneously.


// insertBefore(newNode, referenceNode)

// {/* <div id="parentElement">
//   <span id="childElement">foo bar</span>
// </div> */}


//  // Create the new node to insert
//  const newNode = document.createElement("span");

//  // Get a reference to the parent node
//  const parentDiv = document.getElementById("childElement").parentNode;

//  // Begin test case [ 1 ] : Existing childElement (all works correctly)
//  let sp2 = document.getElementById("childElement");
//  parentDiv.insertBefore(newNode, sp2);
//  // End test case [ 1 ]

//  // Begin test case [ 2 ] : childElement is of Type undefined
//  sp2 = undefined; // Non-existent node of id "childElement"
//  parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
//  // End test case [ 2 ]

//  // Begin test case [ 3 ] : childElement is of Type "undefined" (string)
//  sp2 = "undefined"; // Non-existent node of id "childElement"
//  parentDiv.insertBefore(newNode, sp2); // Generates "Type Error: Invalid Argument"
//  // End test case [ 3 ]

// Example 2

// {/* <div id="parentElement">
//   <span id="childElement">foo bar</span>
// </div> */}

//  // Create a new, plain <span> element
//  let sp1 = document.createElement("span");

//  // Get the reference element
//  let sp2 = document.getElementById("childElement");
//  // Get the parent element
//  let parentDiv = sp2.parentNode;

//  // Insert the new element into before sp2
//  parentDiv.insertBefore(sp1, sp2);


// Note: There is no insertAfter() method. It can be emulated by combining the insertBefore method with Node.nextSibling.

// In the previous example, sp1 could be inserted after sp2 using:
// parentDiv.insertBefore(sp1, sp2.nextSibling);
// If sp2 does not have a next sibling, then it must be the last child — sp2.nextSibling returns null, and sp1 is inserted at the end of the child node list (immediately after sp2).

// Example 3
// Insert an element before the first child element, using the firstChild property.
// // Get the parent element
// let parentElement = document.getElementById("parentElement");
// // Get the parent's first child
// let theFirstChild = parentElement.firstChild;

// // Create a new element
// let newElement = document.createElement("div");

// // Insert the new element before the first child
// parentElement.insertBefore(newElement, theFirstChild);

// Correct way to use insertBefore() [duplicate]





// Element: after() method

// The Element.after() method inserts a set of Node objects or strings in the children list of the Element's parent, just after the Element. Strings are inserted as equivalent Text nodes.

// after(node1)
// after(node1, node2)
// after(node1, node2, /* …, */ nodeN)

// Inserting an element
// let container = document.createElement("div");
// let p = document.createElement("p");
// container.appendChild(p);
// let span = document.createElement("span");

// p.after(span);

// console.log(container.outerHTML);
// // "<div><p></p><span></span></div>"

// Inserting text

// let container = document.createElement("div");
// let p = document.createElement("p");
// container.appendChild(p);

// p.after("Text");

// console.log(container.outerHTML);
// // "<div><p></p>Text</div>"

// Inserting an element and text

// let container = document.createElement("div");
// let p = document.createElement("p");
// container.appendChild(p);
// let span = document.createElement("span");

// p.after(span, "Text");

// console.log(container.outerHTML);
// // "<div><p></p><span></span>Text</div>"







// Element: insertAdjacentHTML() method
// The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

// insertAdjacentHTML(position, text)

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

// Examples

// Inserting HTML

// {/* <select id="position">
//   <option>beforebegin</option>
//   <option>afterbegin</option>
//   <option>beforeend</option>
//   <option>afterend</option>
// </select>

// <button id="insert">Insert HTML</button>
// <button id="reset">Reset</button>

// <p>
//   Some text, with a <code id="subject">code-formatted element</code> inside it.
// </p> */}

// css

// code {
//     color: red;
//   }

// JavaScript

// const insert = document.querySelector("#insert");
// insert.addEventListener("click", () => {
//   const subject = document.querySelector("#subject");
//   const positionSelect = document.querySelector("#position");
//   subject.insertAdjacentHTML(
//     positionSelect.value,
//     "<strong>inserted text</strong>",
//   );
// });

// const reset = document.querySelector("#reset");
// reset.addEventListener("click", () => {
//   document.location.reload();
// });






// Element: insertAdjacentElement() method

// The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
// insertAdjacentElement(position, element)

// const inserts = document.querySelector('#insert');
// inserts.addEventListener('click', () => {

//     const position = document.querySelector('#position')
//     const subject = document.querySelector('#subject');
//     const span = document.createElement("li")
//     span.innerText = "hello ji"
//     subject.insertAdjacentElement(position.value, span )

// })

// const reset = document.querySelector('#reset');
// reset.addEventListener('click', () => {
//     document.location.reload();
// })


// Using event delegation 
// 1. non Optimizing code 

// const insert = document.querySelector('#btn');
// btn.addEventListener('click', (e) => {
//     const inserts = document.querySelector('#insert');
    
//   if(e.target.id  ===  "insert" ) {
//     const inserts = document.querySelector('#insert');
//     const position = document.querySelector('#position')
//     const subject = document.querySelector('#subject');
//     const span = document.createElement("li")
//     span.innerText = "hello ji"
//     subject.insertAdjacentElement(position.value, span )
//   }
  
//   if(e.target.id === 'reset'){
//    document.location.reload()
//   }


// })

// 2. Optimizing code 

// const insert = document.querySelector('#btn');
// btn.addEventListener('click', (e) => {
//     const inserts = document.querySelector('#insert');
    
//   if(e.target.id  ===  "insert" ) {
//     const span = document.createElement("li")
//     span.innerText = "hello ji"
//     subject.insertAdjacentElement(position.value, span )
//   }
  
//   if(e.target.id === 'reset'){
//    document.location.reload()
//   }

// })







// Element: insertAdjacentText() method

// The insertAdjacentText() method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.
// insertAdjacentText(where, data)

// const inserts = document.querySelector('#insert');
// inserts.addEventListener('click', () => {

//     const position = document.querySelector('#position')
//     const subject = document.querySelector('#subject');
//     const span = document.createElement("li")
    
//     subject.insertAdjacentText(position.value,  "hello ji" )

// })

// const reset = document.querySelector('#reset');
// reset.addEventListener('click', () => {
//     document.location.reload();
// })



// HTMLElement: dataset property/

// The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.

// Name conversion
// dash-style to camelCase conversion
// A custom data attribute name is transformed to a key for the DOMStringMap entry by the following:

// Lowercase all ASCII capital letters (A to Z);
// Remove the prefix data- (including the dash);
// For any dash (U+002D) followed by an ASCII lowercase letter a to z, remove the dash and uppercase the letter;
// Other characters (including other dashes) are left unchanged.
// camelCase to dash-style conversion
// The opposite transformation, which maps a key to an attribute name, uses the following:

// Restriction: Before transformation, a dash must not be immediately followed by an ASCII lowercase letter a to z;
// Add the data- prefix;
// Add a dash before any ASCII uppercase letter A to Z, then lowercase the letter;
// Other characters are left unchanged.
// For example, a data-abc-def attribute corresponds to dataset.abcDef.

// Accessing values
// Attributes can be set and read by the camelCase name/key as an object property of the dataset: element.dataset.keyname.
// Attributes can also be set and read using bracket syntax: element.dataset['keyname'].
// The in operator can check if a given attribute exists: 'keyname' in element.dataset. Note that this will walk the prototype chain of dataset and may be unsafe if you have external code that may pollute the prototype chain. Several alternatives exist, such as Object.hasOwn(element.dataset, 'keyname'), or just checking if element.dataset.keyname !== undefined.
// Setting values
// When the attribute is set, its value is always converted to a string. For example: element.dataset.example = null is converted into data-example="null".
// To remove an attribute, you can use the delete operator: delete element.dataset.keyname.


// Examples
// html/
// {/* <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
//   Carina Anand
// </div>
//  */}

// js

// const el = document.querySelector("#user");

// // el.id === 'user'
// // el.dataset.id === '1234567890'
// // el.dataset.user === 'carinaanand'
// // el.dataset.dateOfBirth === ''

// // set a data attribute
// el.dataset.dateOfBirth = "1960-10-03";
// // Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

// delete el.dataset.dateOfBirth;
// // Result on JS: el.dataset.dateOfBirth === undefined
// // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

// if (el.dataset.someDataAttr === undefined) {
//   el.dataset.someDataAttr = "mydata";
//   // Result on JS: 'someDataAttr' in el.dataset === true
//   // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
// }








