//iterables
// jispe  hum for of loop laga sakein
// string , array are iterables

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }
// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// const user = {
//     'key1': 'value',
//     'key2': 'value'       
// }
// for(let item of user){
//     console.log(item); // TypeError: user is not iterable 
// }


// Array like Object
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai 
// example :- string 

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);


// SETs (it is iterable)

// store data 
// sets also have its own methods 
// No index-based access 
// Order is not guaranteed 
// unique items only (no duplicates allowed)

// with Array 
// const number = new Set([1,2,3]);
// console.log(number);

// unique items only (no duplicates allowed)
// const number = new Set([1,2,3,1]);
// console.log(number);

// No index-based access 
// console.log(number[2]); //undefined

// with String 
// const number = new Set("abc");
// console.log(number);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const items = ['item1', 'item2', 'item3'];
// const number = new Set();
// number.add(1);
// number.add(2);
// number.add(2);

// number.add(items);
// number.add(items); // yeah toh add nahi hua hai

// number.add(['1', '2']);
// number.add(['1', '2']); // yeah add hoga hai 

// console.log(number.has(1));

// console.log(number);


// +++++++++++++++++++++++++++++++++++++++++++++++++++


// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);

// console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }


// const myArr = [1,2,3,4,5,5,6,6];
// const uniqueElement = new Set(myArr);
// // console.log(uniqueElement); //1,2,3,4,5,6
// // console.log(uniqueElement.length); //undefine:
// // console.log(myArr);


// length = 0;
// for(let element of uniqueElement){
//     length += 1;
// }
// console.log(length);


// const mySet1 = new Set();
// const o = { a: 1, b: 2 };
// mySet1.add(o);
// mySet1.add(2);
// mySet1.delete(2)
// console.log(mySet1.size)
// console.log(mySet1);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Maps 

// map is an iterable 
// store data in ordered fashion 
// store key value pair (like object)
// duplicate keys are not allowed like objects 

// different between maps and objects 

// Object can only have string  or symbol as key 

// in map you can use anything as key 
//like array number and string 

// Object literals 
// key -> string 
// key -> Symbol 

// const person = {
//     firstName : 'mohil',
//     age: 7,
//     1 : "one"
// }
// // console.log(person.firstName);
// // console.log(person['firstName'])

// console.log(person['1']);

// for(let key in person){
//     console.log(typeof key);
// }


// maps 


// key value pair 
// const person = new Map();
// console.log(person);

// person.set('firstName',"ram");
// person.set('age', 7);
// person.set(1, "one");
// person.set([1,2,3], "on");
// person.set({1: 'one'}, 'onetwothree');
// console.log(person);

// console.log(person.firstName); //undefine
// console.log(person['firstName']) //undefine 

// console.log(person.get('firstName'));
// console.log(person.get('age'));
// console.log(person.get(1));

// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for(let key of person.values()){
//     console.log(key , typeof key);
// }

// for(let [key, value] of person){
//     console.log(key, value)
// }


// const person = new Map([['firstName','harshit'],['age', 7]]);
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: 'harshit'
// }

// const person2 = {
//     id: 2,
//     firstName: 'harsh'
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: 'male'});
// extraInfo.set(person2, {age: 4, gender: 'male'});
// // console.log(userInfo)

// console.log(person1.id);
// console.log(extraInfo.get(person1));
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person1).firstName);//undefined

// console.log(extraInfo.get(person2).age);
// console.log(extraInfo.get(person2).gender);

// clone using Object.assign

// const obj = {
//     key1: 'value1',
//     key2: 'value2'
// }



// memory is same 
// const obj2 = obj;

// cloning of object 
// const  obj2 = {...obj}; // new approch hai yeah
// const obj2 = Object.assign({}, obj) //old code me use hote hai
// obj.key3 = 'value3';

// console.log(obj);
// console.log(obj2);

const user = {
    firstName: 'harshit',
    // address: {houseNumber: '1234'}
}

// console.log(user.firstName);
// console.log(user.address)//undefined
// console.log(user.address.houseNumber);//properties of undefined (reading 'houseNumber)

// console.log(user?.firstName);
console.log(user?.address?.houseNumber);

