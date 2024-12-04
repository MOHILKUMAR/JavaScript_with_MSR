// loops yeah iteration


// 1 for_ loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is the best number")
    }
    //console.log(element)
    
}

// let i = 0
// for( ; i<10; i++ ){
//     console.log(i);
// }

// let i = 0
// for( ; i<10;){
//     console.log(i);
//     i++
// }

// more danger code 
// let i = 0
// for( ; ;){
//     i<10
//     console.log(i);
//     i++
// }




// console.log(element); // referrence error

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`outer loop value: ${j} and inner loop ${i}`)
       // console.log(i + '*' + j + "=" + i*j);
    }
    
}


// let myarray = ["mohil", "hetish", "batman", "superman"]; //undefined
// console.log(myarray.length);
// for (let index = 0; index <= myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }



// break 

// for (let index = 1; index <=20; index++) {
     
//     if( 5 == index){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);

    
// }



// continue 


// for (let index = 1; index <=20; index++) {
     
//     if( 5 == index){
//         console.log(`detected 5`);
//         continue; // skip 
//     }
//     console.log(`value of i is ${index}`);

    
// }


// # while loop

// syntax 
// let i = 0;
// while (i <= 10) {

//     console.log(`Value of index is ${i}`);
//     i = i + 2;
// }


// let myarray = ["batman", "mohil", "flash"];
// let arr = 0
// while ( arr < myarray.length){
//     console.log(`value is ${myarray[arr]}`)
//     arr += 1;
// }



// Do while

let score = 1;
// let score = 11; //  op - Score is 11
do {
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10);













