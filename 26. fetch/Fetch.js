//  const URL = "https://jsonplaceholder.typicode.com/postss"; // error
//  const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(): - yeah predefine function hai 
//fetch(URL): - agar hum fetch function ke under URL daal de toh by defualt this function is call "GET" method.  

// const whatisthis = fetch(URL)
// console.log(whatisthis); // PROMISE 

// fetch(URL)
        //   .then(response =>{
        //     console.log(response)
        //   })
        //   .then((response) =>{
        //     // console.log(response.json()); //Promise
        //     return response.json();
        //   })
        // .then(data => {
        //     console.log(data);
        //   })


        //   .then((abc) =>{
        //     // console.log(response.json()); //Promise
        //     return abc.json();
        //   })
        //   .then(bcd => {
        //     console.log(bcd);
        //   })


        // .then((response) =>{
        //     // console.log(response)
        //     if(response.ok){
        //         return response.json();
        //     }else{
        //         throw new Error("something went wrong!")
        //     }
           
        //   })
        // .then(data => {
        //     console.log(data);
        //   })
        // .catch((error) => {
        //     console.log("inside catch");
        //     console.log(error);
        // })


    // #post  METHOD;

//  const URL = "https://jsonplaceholder.typicode.com/postss";
// fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset = UTF-8',
//     },
// })
//        .then((response) =>{
//             // console.log(response)
//             if(response.ok){
//                 return response.json();
//             }else{
//                 throw new Error("something went wrong!")
//             }
           
//           })
//         .then(data => {
//             console.log(data);
//           })
//         .catch((error) => {
//             console.log("inside catch");
//             console.log(error);
//         })

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)

        //  .then((response) => {
        //     return response.json();
        //  })
        //  .then((date) => {
        //     console.log(date);
        //  })
        // .then(response => response.json())
        // .then(data => console.log(data))


// go and check the all method in website:

// # async / await 

// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//   const response = await fetch(URL);
//   if(!response.ok){
//     throw new Error("Something went Wrong");
//   }
//   const data = await response.json();
// //   console.log(response);
// //   console.log(data);
//   return data;
  
// }

// getPosts()

// const returned = getPosts();
// console.log(returned);

// getPosts()
//        .then(myData => {
//         console.log(myData);
//        })
//       .catch((error) => {
//         console.log("inside catch");
//         console.log(error);
//       })



// const URL = "https://jsonplaceholder.typicode.com/posts";
//       const getPosts = async() =>{
//         const response = await fetch(URL);
//         if(!response.ok){
//           throw new Error("Something went Wrong");
//         }
//         const data = await response.json();
//         return data;
//       }

//       getPosts()
//       .then(myData => {
//        console.log(myData);
//       })
//      .catch((error) => {
//        console.log("inside catch");
//        console.log(error);
//      })








