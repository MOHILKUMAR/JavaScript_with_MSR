// Types of JavaScript Operators
// There are different types of JavaScript operators:
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator


// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
// And  the precedence can be changed by using parentheses.
// When using parentheses, the operations inside the parentheses are computed first:
// When many operations have the same precedence (like addition and subtraction or multiplication and division), 
// they are computed from left to right:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arithmetic Operators

//1. +
// let a = 20;
// let b = 45;
// console.log(a+b);  //65

// 2. -
// let a = 40;
// let b = 45;
// console.log(a-b);  //-5

// 3. * 
// let a = 4;
// let b = 2;
// console.log(4*2);  //8

// 4. /
// let a = 4;
// let b = 2;
// console.log(4/2);  /2

// 5. % MODULAS remainder
// let a = 4;
// let b = 2;
// console.log(4%2);    //0
// console.log(8%3);   //2

// 6. Increment OR Decrement

//  let a = 10;
//  console.log(++a);   //10
//  console.log(a++);   //10 
//  console.log(a);     //11

// let a = 10;          
// console.log(--a);      //9
// console.log(a--);      //9
// console.log(a);        //8


// 7. Expontional

// let a = 10;
// console.log(a**2);    //100
// console.log(a**3);    //1000
// let b = a**2;          //100
// console.log(Math.pow(b,2));  //10000

// 8. Operator Pecedence => {(),{left to right}, /, *, +, -}

//2. Assignment Operator{=}

// 1. Arithmetic Operator {+=, -=, *=, /=, %=, **= };
// example =>{ a = a + b} = {a += b};
// 2. Shift Assignment Operators
// {<<=, >>=, >>>=}  example=> {x = x << y} = {x <<= y} 
// 3.Bitwise Assignment Operators
// Operator{&=, ^=, |=}
// Example=> x = x & y = {x &= y} 
// 4. Logical Assignment OperatorsNote
// Operator { &&=  ||=  ??=}  example=> {x = x && (x = y)}= { x &&= y}

// 3.Comparison Operators   output  in true false

// Important think
// operator{==, ===, !=, !==, >, <, >=, <= }

// console.log(1==2);
// console.log(1==1);


// {!=, !==}

// console.log(1!='1');     
// console.log(1!=1);
// console.log(1!=2);
// console.log(1!="s");
// console.log(1!==1);
// console.log(1!==2);
// console.log(1!=="1")
// console.log(1!=="a");

// {>,<,>=,<=}
// console.log(1<1);
// console.log(1<=1);
// console.log(1>1);
// console.log(1>=1);
// console.log(1<=1);


// // Unexpected behavior of javascript 
// console.log(1=='1');
// console.log(1=="1");

// // soluntion is "===" datatype be batha hai

// console.log(1==='1');
// console.log(1==="1");

// ------------------------------------------
// comparing different DataTpye

// console.log(1<"2");   //true
// console.log(3>"2");    // true
// console.log(3<"mohil")  //false
// console.log("mohil">3)   //false
// console.log("m">3);       //false

// // -------------------
// console.log("m"+1);  
// console.log(1+"m");
// console.log("1"+1);
// console.log(1+"3"+3);

// console.log(1+1+"m");   //2m unexpected behaveir
// console.log("m"+2+2);

// console.log(true);
// console.log(false);

// console.log(true + 1);    //2
// console.log(false + 1);    //1

// console.log(true + "1");      //ture1
// console.log(false + "2");      //false2

// console.log("1"+ true);   // 1true
// console.log("s"+ false);  //sfalse

// console.log(+true);    // 1
// console.log(true+);//  error

// -------------------------------------------------


// =====================



// logical Operator
// {&&, ||, !} Use in control flow {if-else, loops, ternaryoperator}

// console.log(2>1 && 4>1);  
// console.log(2<1 && 4>1);

// console.log(2>1 || 4>1);
// console.log(2<1 || 4>1);
// console.log(2>3 || 4<1);

// console.log(!(2>5));
// console.log(!(2<5));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript Bitwise Operators

// Operator{&, |, ^, ~, <<, >>, >>> yeah negative k liya use hote hm}

// console.log(4&2);    
// console.log(4|2);
// console.log(4^2)
// console.log(3^2)

// console.log(4<<1);
// console.log(4<<2);

// console.log(4>>1);
// console.log(2>>1);
// console.log(4>>2);

// let x = Number.MAX_VALUE;
// console.log(x);
// console.log(x<<1);   //0

// a = 12 , b = 2
// console.log(a >>> b);

// a = -10, b = 3;
// console.log(a>>>b)




// important property of XOR 

let a = 3;
let b = 7;
let c = 6;

// 1.Commutative property: A ^ B = B ^ A
// console.log((a^b) == (b^a));
// console.log(a^b);console.log(b^a);

// 2.Associative property : (A ^ B) ^ C = A ^ (B ^ C)
// console.log(((a^b)^c )== (a^(b^c)));
// console.log((a^b)^c);
// console.log((a^(b^c)));

// 3.Identity property: A ^ 0 = A
// console.log(a^0);   //3

// 4.Negation property: A ^ A = 0
// console.log(a^a);  //

// 5.Distributive property:(exception case) A ^ (B | C) = (A ^ B) | (A ^ C)
// console.log(a^(b|c));
// console.log((a^b)|(a^c));

// 6.  Bitwise complement property  :A ^ ~0 = ~A
//    console.log((a^~0)==(~a));
//    console.log(~a);


// #negation
console.log(~5);

// 5.Conditional (Ternary) Operator

//  variableName = (condition)?value1:value2;
// let age = prompt();
// let voteable = (age<18)?"TOO Young":"Old enough";
// console.log(voteable);14

// 6.The Nullish Coalescing Operator (??)

// let name = null;
// let name ;
// let text = "missing";
// let result = name??text;
// console.log(result);

// // 7.The Optional Chaining Operator (?.)
// const car = {type:"fait", Model:"null", color:"white"};
// console.log(car.type);
// console.log(car?.name);
// console.log(car?.Model);

