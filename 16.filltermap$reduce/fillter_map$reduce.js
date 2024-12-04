//  const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach( (item) => {
//    // console.log(item);//  ruby java python cpp undefined
//     return item  // undefined
//  })

// console.log(values); // undefined

// filter()

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num>4)
// console.log(newNums);//(6) [5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)=> {
//     // num>4  //[]
//     return num > 4 //Agra ap Scope open kar tha hai toh ko return keyword likna padaga Or agar ap retrun keyword nahi lik ta han toh ap ko empty{},[] return hoga //(6) [5, 6, 7, 8, 9, 10]
// })
// console.log(newNums);

// _______________________________________________

// const newNums = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums) //(6) [5, 6, 7, 8, 9, 10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



//   const userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks); 
// 0
// : 
// {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007}
// 1
// : 
// {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996}
// length
// : 
// 2

// ______________________________________________

// const userBook = books.filter((bk)=> {
//    return bk.publish >= 2000;
// })
// console.log(userBook);

// // (2) [{…}, {…}]
// // 0
// // : 
// // {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014}
// // 1
// // : 
// // {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016}
// // length
// // : 
// // 2

// let userBook = books.filter((bk) => {
//      return bk.publish >= 1995 && bk.genre === "History"
// })
// console.log(userBook); //(3) [{…}, {…}, {…}] 
// //{title: 'Book Three', 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Map 

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNumns = myNums.map( (num) => num + 10)
// console.log(newNumns); //(10) [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const newNumns = myNums.map( (num) => { return num + 10})
// console.log(newNumns); //(10) [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// chaining 

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums
//        .map((num) => num * 10)  //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//        .map( (num) => (num + 1)) //(10) [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
//         .filter( (num) => num >= 40)

// console.log(newNums);

// const user = [
//     {firstName: 'MOHIL', lastName: 'kumar', age: 26},
//     {firstName: 'rahul', lastName: 'singa', age: 75},
//     {firstName: 'Rajat', lastName: 'Dalal', age: 50},
//     {firstName: 'shalini', lastName: 'roa', age: 26}

// ];


// const output = user.filter((item) => item.age < 30 )
//                    .map((item) => item.firstName )

// console.log(output)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reduce()

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//    console.log(`acc:${acc} and currval: ${currval}`)
//     return  acc + currval
// },0 )
// console.log(myTotal);//6


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0) 
// console.log(myTotal);


const shoppingCart  = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobdev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },

]

// const  priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,  0)

// console.log(priceToPay);


// const user = [
//     {firstName: 'MOHIL', lastName: 'kumar', age: 26},
//     {firstName: 'rahul', lastName: 'singa', age: 75},
//     {firstName: 'Rajat', lastName: 'Dalal', age: 50},
//     {firstName: 'shalini', lastName: 'roa', age: 26}

// ];

// { 26: 2, 75: 1, 50: 1}


// const output = user.reduce( (acc,cur) => {
//      if(acc[cur.age]){
//        acc[cur.age] = ++acc[cur.age];
//      }
//      else{
//         acc[cur.age] = 1;
//      }
//      return acc;
// }, {});

// console.log(output)


// const output = user.reduce( (acc , cur) => {
    
//     if (cur.age < 30){
//         acc.push(cur.firstName)
//      }
//     return acc;
    
//  }, [])
 
 
//  console.log(output)


// .some()

// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// some(callbackFn)
// some(callbackFn, thisArg)

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true

// function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }
  
//   [2, 5, 8, 1, 4].some(isBiggerThan10); // false
//   [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Testing array elements using arrow functions

// [2, 5, 8, 1, 4].some((x) => x > 10); // false
// [12, 5, 8, 1, 4].some((x) => x > 10); // true


// Checking whether a value exists in an array

// const fruits = ["apple", "banana", "mango", "guava"];

// function checkAvailability(arr, val) {
//   return arr.some((arrVal) => val === arrVal);
// }

// checkAvailability(fruits, "kela"); // false
// checkAvailability(fruits, "banana"); // true

// .every()

// every(callbackFn)
// every(callbackFn, thisArg)

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // Expected output: true


// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   [12, 5, 8, 130, 44].every(isBigEnough); // false
//   [12, 54, 18, 130, 44].every(isBigEnough); // true


// Check if one array is a subset of another array

// const isSubset = (array1, array2) =>
//     array2.every((element) => array1.includes(element));
  
//   console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
//   console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


// entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]


// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
//   console.log(index, element);
// }

// // 0 'a'
// // 1 'b'
// // 2 'c'


// const array = ["a", "b", "c"];
// const arrayEntries = array.entries();

// for (const element of arrayEntries) {
//   console.log(element);
// }

// // [0, 'a']
// // [1, 'b']
// // [2, 'c']


// destructuring of Array 

const colors = ['red', 'green', 'yellow', 'pink'];

// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];

// console.log(color1) //red
// console.log(color2)  //green
// console.log(color3)  //yellow


// Destructing 

// const [color1] = colors
// console.log(color1) //red

// multipe value destructure 

// const [color1, color2] = colors;

// console.log(color1, color2) //red green

// const [a, b, c, d, e] = colors;
// console.log(a)  //red
// console.log(b)  //green
// console.log(c)  //yellow
// console.log(d)  //pink
// console.log(e)  //undefined 

// const [, ,, color3] = colors;
// console.log(color3) //pink

// const {2: colors3} = colors;
// console.log(colors3) // yellow 

// const [, , secondletter] = color1 //red
// console.log(secondletter); // d 


// # destructuring parameter in function 
// function printColor ([a, b]){
//     console.log([a, b]);//['red', 'green']
// }
// printColor(colors);


// function printColor ([a, ,b]){
//     console.log([a, b]);  //['red', 'yellow']
// }
// printColor(colors);


// function printColor ({2: color2}){
//     // console.log([2, color2]);  //(2) [2, 'yellow']
//     console.log([, color2]);
// }

// printColor(colors);













