// BASIC THEORY

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques"
// using many web technologies on the "client-side "
// to create asynchronous web applications.

// With Ajax, web applications can send and retrieve
// data from a server asynchronously (in the background)
// without interfering with the display and
// behaviour of the existing page

// We don't use data in XML format anymore.
// we use JSON now.

// we have 3 most common ways to create and send request to server

// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # XMLHttpRequest  (XHR)

// const URL = "https://jsonplaceholder.typicode.com/posts"
// const URL = "https://jsonplaceholder.typicode.com/postss" // error  // we check are status code in network tab  and it also generate the error console of browser.

// const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState); //0

// // step 1
// xhr.open("GET", URL); // this is asynchronus work.

// // console.log(xhr.readyState); //1

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState); //2,3,4
//     if(xhr.readyState ===  4 ){
//         // console.log(xhr.readyState);
//         // console.log(xhr);
//         // console.log(xhr.response); // json
//         // console.log(typeof xhr.response) //string

//    const response = xhr.response;
//    const data = JSON.parse(response);
//     console.log(data);
//     console.log(typeof data); //object

//     }

// }

// xhr.send();

// theory dekhni hai
// readyState

// statuscode
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// response


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// .onload  

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);

// xhr.onload = function () {
//   // yeah sirf tabhi chale ga jab meri readyState = 4;
// //   console.log(xhr.readyState); //4

//   const response = xhr.response;
 //  here json into object the from of data;
//   const data = JSON.parse(response);
//   console.log(data);

//   console.log(typeof data); //object
// };
// xhr.send();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Error handling 

// const URL = "https://jsonplaceholder.typicode.com/posts";
// // const URL = "https://jsonplaceholder.typicode.com/postss";//error links
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//     // This code can handle the error when the conditions of stateCode lies btw in 200 to 300 range    
//  if(xhr.status >= 200 && xhr.status < 300){
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//  }else{
//     console.log("somthing went wrong") 
//  }
 
// }

// network error find method 
// xhr.onerror = () => {
//     console.log("network error");
// }

// xhr.send();




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// fetch the data one By one with the help of callbacks

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
   
//  if(xhr.status >= 200 && xhr.status < 300){
//     const data = JSON.parse(xhr.response);
//     // console.log(data);
//     // const id  = data[3].id
//     // console.log(id);
   
//     const id  = data[3].id
//     const xhr2 = new XMLHttpRequest();
//     const URL2 = `${URL}/${id}`
//     console.log(URL2)
//     xhr2.open('GET', URL2);
//     xhr2.onload = () => {
//         const data2 = JSON.parse(xhr2.response);
//         console.log(data2);
//     }
//     xhr2.send();

//  }else{
//     console.log("somthing went wrong") 
//  }
 
// }

// xhr.onerror = () => {
//     console.log("network error");
// }

// xhr.send();



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method, url) {
    return new Promise(function (resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                // resolve(xhr.responseText)
                resolve(xhr.response)
            }else{
                reject(new Error("Something Went Wrong"))
            }
        }

    xhr.onerror = function() {
        reject(new Error('something in network'));
    }

    xhr.send();

    })
}


sendRequest("GET", URL)
          .then((response) => {
            const data = JSON.parse(response);
            // console.log(data);
            // console.log(response);
            return data; 
          } )
          .then((data) => {
            // console.log(data[3].id);
            const id = (data[3].id);
            return id;
          })
         .then(id => {
            // console.log(id);
            const url = `${URL}/${id}`;
            return sendRequest("GET", url)
         })
         .then(newRespone => {
            const newData = JSON.parse(newRespone);
            console.log(newData);
         })
         .catch( (error) => {
            console.log(error);
         })



