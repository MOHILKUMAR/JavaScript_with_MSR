// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set TIMEOUT block")
//     }, 3000);
// }

// // getData()

// let output = getData();

// await 

// fetch API

// async function getData() {
//   // get request - async 
// //   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
// //   let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
// let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//   // parse json - async
//   let data = await response.json();
//   console.log(data);
// }
// getData();


// scenario:
// prepare url/api endpoint -> sync 
// await // fetch data - > network call -> async
// process data -> sync


// Post request 

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: 'lovebabbar'}),
    headers: myHeaders,
};
async function getData() {
    const response = await fetch("https://dummyjson.com/posts");
    let data = await response.json();
    console.log("get data response:", data);
    
}
async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("My data:", data);
}

async function processData() {
    await postData();
    await getData();
}


processData();


