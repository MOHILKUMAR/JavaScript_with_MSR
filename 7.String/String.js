
// Strings 

// 1. Declaring the strings 

// // Method 1 
// const name = "mohl";
// console.log(name);

// // Method 2
// const  gameName = new String('Mohil kumar');
// console.log(gameName);

// method 3 =
// const name = 'mohil';
// console.log(name);

// method 4
// const name1 = `mohil kumar `;
// console.log(name1);
// ++++++++++++++++++++++++++++++++++++++++++++++++

// STRING METHOD;
// ______________________________________________________
// 1. Length : Propety hoti hai Method nahi hota 

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length); //26
// __________________________________________________________
// 2.Extracting String Characters

// 2.a) at()  
// ES6 2022 introduced the string method at():

// It return letter

// const name = "W3Schools";
// let letter = name.at(2);

// let letter1 = name.at(2, 4); // NOT ALLOWED
// console.log(letter);  // S


// 2.b)charAt()

// The charAt() method returns the character at a specified index (position) in a string:

// let text = "HELLO WORLD";
// let char = text.charAt(0); //H
// console.log(char);



// 2.c) Property Access [ ]

// let text = "HELLO WORLD";
// let char = text[3];
// // let char = text[0, 5]; NOT allowed 
// console.log(char); // 3

// Note
// Property access might be a little unpredictable:
// It makes strings look like arrays (but they are not)

// let text = ""; //undefine 
// let text = null;  // null + error 
// let char = text[0];   
// console.log(char) 

// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)


// 2.d)charCodeAt()

// The charCodeAt() method returns the code of the character at a specified index in a string:
//  The method returns a UTF-16 code (an integer between 0 and 65535).

// basically return ASSCii value and also count the space 

// let text = "hello All";
// let index = 6;
// let char = text.charCodeAt(3);

// console.log(char);   //108 
// console.log(text.charCodeAt(index)); //65


// 2.e) codePointAt()

// The codePointAt() method returns the Unicode value at an index (position) in a string.
// The index of the first position is 0, the second is 1, ....

// let text = "HELLO WORLD";
// let code = text.codePointAt(1);
// console.log(code); //69

// Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).


// 2.6) fromCharCode()

// How to convert Unicode values to characters:

// let char = String.fromCharCode(65);
// console.log(char);  // A

// let text = String.fromCharCode(72, 69, 76, 76, 79);
// console.log(text);  //HELLO 
 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3) Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)  OLd Method hai
// ___________________________________________________________

// 3.1)  slice()
// slice() extracts a part of a string and returns the extracted part in a new string.


//a) The method takes 2 parameters: start position, and end position (end not included).

// Syntax
// slice(indexStart)
// slice(indexStart, indexEnd)

// slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character through the eighth character (characters indexed 4, 5, 6, and 7):

// indexStart        indexEnd
// ↓               ↓
// | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
// | T | h | e |   | m | i | r | r | o | r |

// m   i   r   r
// _______________
//     ↑
//   Result



// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"


// #Using slice() to create a new string

// const str1 = "The morning is upon us."; // The length of str1 is 23.
// const str2 = str1.slice(1, 8);
// const str3 = str1.slice(4, -2);
// const str4 = str1.slice(12);
// const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""


// # Using slice() with negative indexes
// const str = "The morning is upon us.";
// str.slice(-3); // 'us.'
// str.slice(-3, -1); // 'us'
// str.slice(0, -1); // 'The morning is upon us'
// str.slice(4, -1); // 'morning is upon us'
// console.log(str.slice(-11, 16)); // "is u"
// console.log(str.slice(11, -7)); // " is u"
// console.log(str.slice(-5, -1)); // "n us"
// console.log(str.slice(-1)); // "n us"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//3. 2) substring()

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// Syntax
// substring(indexStart)
// substring(indexStart, indexEnd)


// substring() extracts characters from indexStart up to but not including indexEnd. In particular:

// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.


// Examples
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"



// Examples

// const anyString = "Mozilla";

// console.log(anyString.substring(0, 1)); // "M"
// console.log(anyString.substring(1, 0)); // "M"  SWAP 

// console.log(anyString.substring(0, 6)); // "Mozill"

// console.log(anyString.substring(4)); // "lla"
// console.log(anyString.substring(4, 7)); // "lla" 
// console.log(anyString.substring(7, 4)); // "lla"  SWAP

// console.log(anyString.substring(0, 7)); // "Mozilla"  
// console.log(anyString.substring(0, 10)); // "Mozilla"

// ----------------------

// const text = "Mozilla";

// // Takes 4 last characters of string
// console.log(text.substring(text.length - 4)); // prints "illa"

// // Takes 5 last characters of string
// console.log(text.substring(text.length - 5)); // prints "zilla"


// -------------------------------------------

// Differences between substring() and slice()
// The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

// const text = "Mozilla";
// console.log(text.substring(5, 2)); // "zil"
// console.log(text.slice(5, 2)); // ""

// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

// const text = "Mozilla";
// console.log(text.substring(-5, 2)); // "Mo"
// console.log(text.substring(-5, -2)); // ""

// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

// const text = "Mozilla";
// console.log(text.slice(-5, 2)); // ""
// console.log(text.slice(-5, -2)); // "zil"

// ______________________________________________



// 3.3)  substr()

// substr() is similar to slice()

// The difference is that the second parameter specifies the length of the extracted part.

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6); //Banana
// console.log(part);

// If you omit the second parameter, substr() will slice out the rest of the string.

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7); 
// console.log(part);  //Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string 

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-6);  
// console.log(part);  //, Kiwi


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/ /

// 4) toUpperCase()

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2); //HELLO WORLD!

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5) toLowerCase()

// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
// console.log(text2);  //hello world!

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 6)concat()

// 1. concat() joins two or more strings:

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);  //Hello World

// let name = "mohil";
// console.log(name.concat(" ", "kumar"));  //mohil kumar

//2. The concat() method can be used instead of the plus operator. These two lines do the same

// text1 = "Hello" + " " + "World!";
// text2 = "Hello".concat(" ", "World!");
// console.log(text1);   //Hello World!
// console.log(text2);   //Hello World!


// Note
// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// 7) trim()

// 1.The trim() method removes whitespace from both sides of a string:

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);   //Hello World!

// 2.)  trimStart()

// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);  //Hello World!________

// 3) trimEnd()

// ECMAScript 2019 added the string method trimEnd() to JavaScript.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log(text2);    //__________Hello World!


// 8)  Padding 

// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// a) padStart()

// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// 1) Pad a string with "0" until it reaches the length 4:

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);  //0005

// 2) Pad a string with "x" until it reaches the length 4:

// let text = "5";
// let padded = text.padStart(4,"x");
// console.log(padded);  // xxx5


// Note
// The padStart() method is a string method.
// To pad a number, convert the number to a string first.

// See the example below.

// let numb = 5;
// let text = numb.toString();  //Make number first string
// let padded = text.padStart(4,"0");
// console.log(padded);   //0005

// b) padEnd() 
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(padded);  // 5000

// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded);  //5xxx

// Note
// The padEnd() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

// let numb = 5;
// let text = numb.toString();
// let padded = text.padEnd(4,"0");
// console.log(padded);   //5000

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 9) repeat()

// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

// :-Syntax- string.repeat(count)

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result); //Hello world!Hello world!

// let text = "Hello world!";
// let result = text.repeat(4);
// console.log(result);  //Hello world!Hello world!Hello world!Hello world!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 10) replace()

//1. The replace() method replaces a specified value with another value in a string:

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);  //Please visit W3Schools!

// Note
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.


//2. By default, the replace() method replaces only the first match

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);  //Please visit W3Schools and Microsoft!


//3. By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText); //Please visit Microsoft!



// --------------------------------------------------------
// regular expression
//  (It is the big topic so finish the javascript)
// Note
// Regular expressions are written without quotes.
// _________________________________________________________

// 1.To replace case insensitive, use a regular expression with an /i flag (insensitive):

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText); // Please visit W3Schools!


// 2.To replace all matches, use a regular expression with a /g flag (global match):

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText);  //Please visit W3Schools and W3Schools!

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 11) ReplaceAll()

// 1.In 2021, JavaScript introduced the string method replaceAll():

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);  // I love dogs. Dogs are very easy to love. Dogs are very popular.

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");
// console.log(text);  //I love dogs. Dogs are very easy to love. Dogs are very popular.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 12) split()

// A string can be converted to an array with the split() method:
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray); //(6) ['a', 'b', 'c', 'd', 'e', 'f']


// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe


// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters:



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 13) includes()

// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.

// Check if a string includes "world":

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result); //true


// Start at position 12:

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world", 12);
// console.log(result); // false
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 14) endsWith()

// The endsWith() method returns true if a string ends with a specified string.
// Otherwise it returns false.
// The endsWith() method is case sensitive.

// let text = "Hello world";
// let result = text.endsWith("world");
// console.log(result);  //true


// let text = "Hello World";
// let result = text.endsWith("world"); // CASE SENSITIVE
// console.log(result);  //false

// Check if the 11 first characters of a string ends with "world":

// let text = "Hello world, welcome to the universe.";
// let result = text.endsWith("world", 11);
// console,console.log(result);  //true


 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 15) startsWith()

// The startsWith() method returns true if a string starts with a specified string.
// Otherwise it returns false.
// The startsWith() method is case sensitive

// Start at position 0 (true)

// let text = "Hello world, welcome to the universe.";
// result = text.startsWith("Hello");
// console.log(result);  //true


// Start at position 1 (false):

// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("Hello", 1);
// console.log(result); //false


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 16) indexOf()

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

//1. Search a string for "welcome":

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result);  //13

// 2.Search a string for "Welcome":
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");
// console.log(result); //-1

// 3.Find the first occurrence of "e":
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e");
// console.log(result); //1

// 4.Find the first occurrence of "e", starting at position 5:
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e", 5);
// console.log(result);  //14 because it start with 5


// 17) lastIndexOf() 

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
// The lastIndexOf() method searches the string from the end to the beginning.
// The lastIndexOf() method returns the index from the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive.


//1. Search for the last occurrence of "planet":

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);  //36

// case sensitive 

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("Planet");
// console.log(result);  // -1


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 18) match()

// The match() method matches a string against a regular expression **
// The match() method returns an array with the matches.
// The match() method returns null if no match is found.


// A search for "ain" using a string:

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match("ain");
// console.log(result);  //['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]


// A search for "ain" using a regular expression:

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/);
// console.log(result);  //['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]

// A global search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/g);
// console.log(result);  //(3) ['ain', 'ain', 'ain']

// A global, case-insensitive search:

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi);
// console.log(result);  //(4) ['ain', 'AIN', 'ain', 'ain']


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 19)  search()

// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// he search() method is case sensitive.

// Search for "Blue":

// let text = "Mr. Blue has a blue house";
// let position = text.search("Blue");
// console.log(position); //4


// Search for "blue" in sentence:

// let text = "Mr. Blue has a blue house";
// let position = text.search("blue");
// console.log(position);  //15

// Search for /Blue/:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/Blue/);
// console.log(position); //4

// Search for /blue/:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/blue/);
// console.log(position); //15

// Search case insensitive:

// let text = "Mr. Blue has a blue house";
// let position = text.search(/blue/i);
// console.log(position); //4  // i  is a modifier (modifies the search to be case-insensitive).

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// localeCompare(), toLocaleLowerCase(),toLocaleUpperCase()} older version me use hota tha 
// toString(), valueof() => optional in string 


// String HTML Wrapper Methods (learn after dom and events)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript Template Strings

// 1.Back-Tics Syntax

// let text = `Hello World!`;

// 2.Quotes Inside Strings

// let text = `He's often called "Johnny"`;

// 3.Multiline Strings
// Template Strings allow multiline strings:

// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// 4.Interpolation

// Template String provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// ${...}

// 5.Variable Substitutions

// Template Strings allow variables in strings:

// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;

// Automatic replacing of variables with real values is called string interpolation.

// 6.Expression Substitution

// Template Strings allow expressions in strings:

// let price = 10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// Automatic replacing of expressions with real values is called string interpolation.



// String with Quotes 

// 1)  " ' "
// let text = "hi there i am 'mohil' kumar ";
// console.log(text);

// 2) ' "  '
// let text = 'hi there i am "mohil" kumar ';
// console.log(text);

// 3)  " " "
// let text = "hi there i am " mohil kumar ";
// console.log(text);  // not allowed

// 4) '  '  '
// let text = 'hi there i am 'mohil kumar ';
// console.log(text);  // not allowed






