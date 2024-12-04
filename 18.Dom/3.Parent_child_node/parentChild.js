
// # Element
// 1.ParentElement 
// const  parentEle = document.querySelector('#parent')
// console.log(typeof parentEle) //object
// console.log(parentEle) //<div class=​"parent" id=​"parent">​…​</div>​
// console.log(parentEle.parentElement); //​body
// console.log(parentEle.parentElement.parentElement) //html
// console.log(parentEle.parentElement.parentElement.parentElement)//null

// 2.children
// console.log(parentEle.children) //HTMLCollection(5)
// console.log(parentEle.parentElement.children) //HTMLCollection(3)
  // parentEle.children[1].style.color = "orange";

// firstElementChild
// console.log(parent.firstElementChild)  //<div>Monday</div>

// lastElementChild
// console.log(parent.lastElementChild)   //<div>Thusday</div>

// 4.nextElementSibling
// console.log(parentEle.nextElementSibling) //h2
// console.log(parentEle.nextElementSibling.nextElementSibling)//script
// console.log(parentEle.nextElementSibling.nextElementSibling.nextElementSibling)//null


// 5. PreviousElementSibling
// console.log(parentEle.previousElementSibling) //h1
// console.log(parentEle.previousElementSibling.previousElementSibling)//null


// 6 .Element tagName
// const  parenttagname = document.querySelector('#parent').tagName
// console.log(parenttagname) //UL

// ---------------------------------------------------------------------------------------
// note point : jo element nahi ho tha hai vo per node ho tha hai
// ---------------------------------------------------------------------------------------

// #.Nodes  

// Note: Whitespace between elements is considered text nodes.
// If you add whitespace between the two li elements, the result will be "undefined"

//  const  parentNODE = document.querySelector('#parent')
// console.log( parentNODE.childNodes); //NodeList(11)
// console.log( parentNODE.parentNode.childNodes) //NodeList(8)
// console.log( typeof parentNODE.childNodes) //object


// // 1.firstChild
// const firstchild = document.querySelector('#parent').firstChild
// console.log(firstchild)//#text

// const firstchild = document.querySelector('#parent').firstChild.textContent
// console.log(firstchild)//space

// // 2.last child node 
// const lastchild = document.querySelector('#parent').lastChild
// console.log(lastchild)//#text
// const lastchild = document.querySelector('#parent').lastChild.textContent
// console.log(lastchild)//spacelast

// 3.nextSibling 
// const  nextchild = document.querySelector('#item1').nextSibling
// console.log(nextchild) //#text
// const  nextchild = document.querySelector('#item1').nextSibling.textContent
// console.log(nextchild) //MOHil


// 4.previousSibling
// const  previousSib = document.querySelector('#item1').previousSibling
// console.log(previousSib) //#comment
// const  previousSib = document.querySelector('#item1').previousSibling.textContent
// console.log(previousSib) //#comment // hi  

// 5.childNodes
// const  parentNODE = document.querySelector('#parent')

// for(let i =0; i<parentNODE.childNodes.length; i++){
//   console.log(parentNODE.childNodes[i].textContent);
// }

// output : [spacestart,  hi, insidethefirstChild, MOHil,tea,      , 3,   ,4,  ,5,spaceLast  ]


// 6.hasChildNodes()
// The hasChildNodes() method returns true if the specified node has any child nodes, otherwise false.

// The hasChildNodes() method is read-only.

// const  parentNODE = document.querySelector('#parent').hasChildNodes()
// console.log(parentNODE);//true

// const  item3 = document.querySelector('#item3').hasChildNodes()
// console.log(item3) //false

// 7.nodeName 
// The nodeName property returns the name of a node:
// The tagname (in upper case) for element nodes
// The attribute name for attribute nodes
// #text for text nodes
// #comment for comment nodes
// #document for document nodes

// const  nodeNamepro = document.querySelector('#parent').nodeName;
// console.log(nodeNamepro);//UL

// const  nodeNamepro = document.querySelector('#item3').nodeName;
// console.log(nodeNamepro);// li

// console.log(document.body.nodeName);//BODY

// 8.node type 

// The nodeType property returns the node type, as a number, of the specified node.

// If the node is an element node, the nodeType property will return 1.

// If the node is an attribute node, the nodeType property will return 2.

// If the node is a text node, the nodeType property will return 3.

// If the node is a comment node, the nodeType property will return 8.

// 9 nodeValue Property

// The nodeValue property sets or returns the value of a node.

// If the node is an element node, the nodeValue property will return null.

// Note: If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (element.childNodes[0].nodeValue).

// For other node types, the nodeValue property will return different values for different node types.


// difference between element ve Nodes 

// 1 Difference Between tagName and nodeName
// The nodeName property also returns the tag name of an element.
// The nodeName can also return the tag name of attribute nodes, text nodes, and comment nodes.

// 2.HTML Nodes vs Elements

// In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with (or without) child nodes.
// Nodes are element nodes, text nodes, and comment nodes.
// Whitespace between elements are also text nodes.
// Elements are only element nodes.

//3. childNodes vs children

// childNodes returns child nodes (element nodes, text nodes, and comment nodes).
// children returns child elements (not text and comment nodes).

// 4.Siblings vs Element Siblings

// Siblings are "brothers" and "sisters".
// Siblings are nodes with the same parent (in the same childNodes list).
// Element Siblings are elements with the same parent (in the same children list).

// 5. nextSibling vs nextElementSibling

// nextSibling returns the next node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
// nextElementSibling returns the next element (not text and comment nodes).

// 6.previousSibling vs previousElementSibling

// previousSibling returns the previous node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
// previousElementSibling returns the previous element (not text and comment nodes).


