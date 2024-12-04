// Array  part 1 

// Declaring of Array. Array always declare in [] square barket.

// const myArr = [0, 1, 23, 56, 565, 56 ];
// console.log(myArr[2]); //23
// console.log(myArr); // return full array  [0, 1, 23, 56, 565, 56]
// const myHero = ["shaktiman", "naagraj"]

// Modifty in Array 

// const a = ["Harry", 15, "male", "BCA" ];

// console.log(a); //(4) ['Harry', 15, 'male', 'BCA']
// a[0] = "Sunnny";
// console.log(a); //(4) ['Sunnny', 15, 'male', 'BCA']

// delete from Array( )
// const a = ["Harry", 15, "male", "BCA" ];
// console.log(a)  //(4) ['Harry', 15, 'male', 'BCA']
 
// delete a[1];
// console.log(a);  // ['Harry', empty, 'male', 'BCA']

// console.log(a[1]); //undefine
// console.log(a);

// Method in Array 

// const myArr = [0, 1, 23, 56, 565, 56 ];

// const myArr1 = [2, 3, 5, 6, 6, 4];

// 1. .push(6);
// myArr.push(6);  // insertion or pushing the value at the end of array 
// myArr.push(7);   //(8) [0, 1, 23, 56, 565, 56, 6, 7]
// console.log(myArr);

// const items = [1, 2, 4, 5, 6];
// const  copyItem = []


// for(let i=0; i<items.length; i++){
//     copyItem.push(items[i]);
// }

// console.log(copyItem)


// problem solution at the end
//  myArr.push(myArr1); //It store the myArr1 array in myArr array as a value.
// console.log(myArr);  //(7) [0, 1, 23, 56, 565, 56, Array(6)]
// console.log(myArr[6])   // return the value of 6 index (6) [2, 3, 5, 6, 6, 4]
// console.log(myArr[6][1]); // 3 ;
// push work on exsiting Array

//2. .pop() ;

// myArr.pop(); // pop() delete or remove element from back without passing element
// console.log(myArr) //(5) [0, 1, 23, 56, 565]

// // 3. unshift() or shift() 

// myArr.unshift(3); // it insert the value in array from start;
// console.log(myArr);  //(7) [3, 0, 1, 23, 56, 565, 56]

// myArr.shift();   // It remove the value from start of the array.no need to pass value;
// console.log(myArr); // (5) [1, 23, 56, 565, 56]

// 4. includes 

// console.log(myArr.includes(9)); //false 

// 5. indexOF

// console.log(myArr.indexOf(9)) // -1
// console.log(myArr.indexOf(1))  //1

// 6. .join() 

// const newArr = myArr.join();  // typeof = join is string
// console.log(myArr);  // (6) [0, 1, 23, 56, 565, 56]
// console.log(newArr); // it return the array comma seperate o/p : 0,1,23,56,565,56;

// // 6. slice();
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// slice()
// slice(start)
// slice(start, end)

// read from start --->

//    0     1     2     3     4
// |     |     |     |     |     |
// |  S  |  L  |  I  |  C  |  E  |
// |     |     |     |     |     |
//   -5    -4    -3    -2    -1

// <--- read from reverse

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// // Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// // |     |     |     |     |     |
// // |  S  |  L  |  I  |  C  |  E  |
// // |     |     |     |     |     |
// //   -5    -4    -3    -2    -1

// // <--- read from reverse
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// const myArr = [0, 1, 23, 56, 565, 56 ];
// const myn1 = myArr.slice(1, 3); //(2) [1, 23]
// console.log(myn1); //(2) [1, 23]
// console.log("B", myArr); //B (6) [0, 1, 23, 56, 565, 56]


// // 7. splice() 

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


const myArr = [9, 1, 23, 0, 565, 56 ];
const newARRR = [4,3,5,6,7]
const emptyAR = [];


 const result = myArr.splice(1, 2, "mohil")
 console.log(result) //(2) [1, 23]
console.log(myArr)   //(5) [9, 'mohil', 0, 565, 56]




// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Return value
// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.

// Using splice() on sparse arrays

// sparse arrays: arrays where only a few locations in the array have any data, most of the locations are considered as “empty”

// The splice() method preserves the array's sparseness.

// const arr = [1, , 3, 4, , 6];
// console.log(arr.splice(1, 2)); // [empty, 3]
// console.log(arr); // [1, 4, empty, 6]

// const myArr = [0, 1, 23, 56, 565, 56 ];
// // const myn2 = myArr.splice(1, 3);
// // console.log(myn2); //(3) [1, 23, 56]
// // console.log("c" , myArr); // c  (3) [0, 565, 56]

// // const hello = myArr.splice(3);
// // console.log(hello);


// const myArr = [9, 1, 34, 0, 565, 56 ];
// const newARRR = [4,3,5,6,7]
// const emptyAR = [];


// const result = myArr.splice(-5, 0, "mohil")
// console.log(result)//[]
// console.log(myArr)// [9, 'mohil', 1, 34, 0, 565, 56]


// Examples

// Remove 0 (zero) elements before index 2, and insert "drum"

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum");
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum", "guitar");
// // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// // removed is [], no elements removed

// Remove 0 (zero) elements at index 0, and insert "angel"

// const myFish = ["clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(0, 0, "angel");
// // myFish is ["angel", "clown", "mandarin", "sturgeon"]
// // no items removed

// Remove 0 (zero) elements at last index, and insert "sturgeon"

// const myFish = ["angel", "clown", "mandarin"];
// const removed = myFish.splice(myFish.length, 0, "sturgeon");
// // myFish is ["angel", "clown", "mandarin", "sturgeon"]
// // no items removed

// Remove 1 element at index 3
// const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// const removed = myFish.splice(3, 1);
// // myFish is ["angel", "clown", "drum", "sturgeon"]
// // removed is ["mandarin"]

// Remove 1 element at index 2, and insert "trumpet"
// const myFish = ["angel", "clown", "drum", "sturgeon"];
// const removed = myFish.splice(2, 1, "trumpet");
// // myFish is ["angel", "clown", "trumpet", "sturgeon"]
// // removed is ["drum"]

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
// const myFish = ["angel", "clown", "trumpet", "sturgeon"];
// const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
// // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// // removed is ["angel", "clown"]

// Remove 2 elements, starting from index 2
// const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
// const removed = myFish.splice(2, 2);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

// Remove 1 element from index -2
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(-2, 1);
// // myFish is ["angel", "clown", "sturgeon"]
// // removed is ["mandarin"]

// // Remove all elements, starting from index 2
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2);
// // myFish is ["angel", "clown"]
// // removed is ["mandarin", "sturgeon"]
// --------------------------------------------------------------------------------------------

// problem in Push()

// const myArr = [0, 1, 23, 56, 565, 56 ];
// const myArr1 = [2, 3, 5, 6, 6, 4];

//  myArr.push(myArr1); //It store the myArr1 array in myArr array as a value.
// console.log(myArr);  //(7) [0, 1, 23, 56, 565, 56, Array(6)]
// console.log(myArr[6])   // return the value of 6 index (6) [2, 3, 5, 6, 6, 4]
// console.log(myArr[6][1]); // 3 ;
// // push work on exsiting Array

// 7) concat ()

// const myArr = [0, 1, 23, 56, 565, 56 ];
// const myArr1 = [2, 3, 5, 6, 6, 4];
// const empArR = []

// const allArr = myArr.concat(myArr1);
// console.log(allArr) // it join both array into a new Array(12) [0, 1, 23, 56, 565, 56, 2, 3, 5, 6, 6, 4]  
// const res = empArR.concat(myArr1.concat(myArr))
// console.log(res)



// 8) spread () = ...array_name, ...array_name;

// const allAarry = [...myArr, ...myArr1]
// console.log(allAarry); // it concatinate the array same work as the concat() method but it have avdvantage of flexible insertion of multiple array in single line.



// ------------------------------------------------------------------------------------------------


// 9) .flat( )

// const newArray = [1, 2, 3, [3, 4, 7], [5, 6, 7, [1, 3, 5]]]; // array inside array and subarray
// // const realArray = newArray.flat(Infinity);
// // console.log(realArray);  //(12) [1, 2, 3, 3, 4, 7, 5, 6, 7, 1, 3, 5]

// const realArray = newArray.flat(1); //flat(1) here 1 is depth. and we can take depth as much as(1,2,3,4,5----Infinity)
// console.log(realArray); //(10) [1, 2, 3, 3, 4, 7, 5, 6, 7, Array(3)]



// 10) isArray( ) 

 //The Array.isArray() static method determines whether the passed value is an Array.

// console.log(Array.isArray([1, 3, 5]));
// // Expected output: true

// console.log(Array.isArray('[]'));
// // Expected output: false

// console.log(Array.isArray(new Array(5)));
// // Expected output: true


// // 11) Array.from() // it convert string into array 

// console.log(Array.from("MOHIL"));  //(5) ['M', 'O', 'H', 'I', 'L']

// // We convert Object into Array
// console.log(Array.from({name:"mohil"})) //  it return []


// Array.of
// // We convert the variables into Array

// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1, score2, score3));


// sort ()
// To sort the elements in an array without mutating the original array, use toSorted().
// string pe toh alphabetically order per kaam kar tha hai

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]


// if  i want to sort the array with sort() function then first i need to do convert into string then apply the sort() on it;


// const numberArray = [40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }
// console.log(numberArray.sort()); // [1, 200, 40, 5]
// console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]



// # Reverse()

// const a = ["sanja", "Aman", "Rehman", "Karan"]

// const reverseA = a.reverse();
// console.log(reverseA); //(4) ['Karan', 'Rehman', 'Aman', 'sanja']




// # .find()   
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// //IF condition is satisfies first then it will return the ans  and not checking the whole array. 

// console.log(found);
// // Expected output: 12

// # findindex( )
// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3 is index 


// {  findLast(), findLastIndex() }

// #.lastIndexOf()

// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // Expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // Expected output: 1

//  # .toString()

// The toString() method of Array instances returns a string representing the specified array and its elements.

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());
// // Expected output: "1,2,a,1a"

// valueof() is use for print array

// const array1 = [1, 2, 3, 4];

// console.log(array1.valueOf());


// # Fill() 

// fill(value)
// fill(value, start)
// fill(value, start, end)

// const array1 = [1, 2, 'a', '1a'];
// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// // Expected output: Array [6, 6, 6, 6]