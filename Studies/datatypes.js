/**
* DATA TYPES:
*
* 0. There are many different types of data that is parsed throughout your code.
* These data types make up the values that are assigned to variables.
*
* 1. The types of data that you will come across include the following: numbers, 
* strings, boolean values, arrays, objects, functions, undefined values, null,
* NaN, Infinity and -Infinity.
*
* 2. There are primitive (simple) data types and complex data types.
*
* 3. Copying by reference and Copying by value are two different concepts to garner some attention.
* This concept has to do with the sharing of values with more than one variable. 
*
*/


// 1. Number //

/* 

One data type is a number. It is exactly what it sounds like, a number, whether
it is an integer or decimal. They can be used for different purposes , calculated,
or come in a data set of information. A number is a primitive data type. 

*/

let x = 5; // the variable "x" has been assigned the number 5


// 2. String //

/*

Another primitive data type is a string. A string can be made up of any number of symbols. 
A string is recognized by a pair of single or double quotes with your string inside and 
a semicolon following the ending quotation mark. The quotation marks must match and be on
both ends of the string, otherwise you'll get an error.

*/

let myBook = "Alice in Wonderland"; // the variable myBook has been assigned a string

let string = "nS579&@24pi"; // a string can be nay number of type of character if it is in quotation marks


// 3. Boolean //

/*

In JavaScript, there is a primitive data type called a boolean. A boolean is a value that 
resolves to either true or false and often times is the result of a conditional statement (see Control Flow).
A boolean can also be the value attached to a variable or a value attached to a key in an 
objects (see objects part). It can also exist as a value inside an array.

*/

let myBool = true;  // value attached to a variable

let car = {
	make: "Honda",
	model: "Civic",
	isRed: true  // boolean value attached to a key in an object
}

let myArray = [1, "Halley", false]  // the last value in the array is a boolean value


// 4. Array //

/*
	
An array is a complex data type that holds an ordered list of values, counted by index.
The index of an array begins at 0 (the 0th index) and starts at 1 for the second value
in the ordered list. Therefore, the number of indexes will always be one less than the 
length of the array. The syntax of an array uses square brackets [], called an array literal 
and is assigned much like any variable. Each element in the array is separated by a comma and 
the entire expression ends with a semicolon. Arrays can also hold other arrays, these are called
Nested Arrays, and can also hold objects and functions.
	
*/

let sampleArray = ["Sally", "Marcus", "Mae", "Hogarth"]; // the length of this array is 4, but has an index of up to 3
// indices            0         1       2        3

let newArray = [75, 23, 59, [5, 7, 3], 41, {name: "Perry"}]   // the array [5, 7, 3] is a nested array and the last element is an object

	
	
// 5. Object //

/*

An object is an unordered collection of simple data types. However, it can also house arrays, functions and other objects.
Assigning or initializing an object is done the same way everything else is, but the data is presented with key/value pairs
inside of an object literal, or curly braces {}. Each key and value are given separated by a colon and each pair is separated
by a comma. Finish out the initialization with a semicolon for proper syntax.

*/

let obj = {
	city: "New Orleans",
	music: "jazz",
	tourism: "french quarter",
	topTenCities: true
};  // the keys are before the colon and the values are after


var patient = {
	name: “Jesse”,
	idNumber: 520141,
	prescription: “bedrest”,
	dateOfVisit: “4 Oct 2021”
	};



// 6. Function //

/*

A function is delcared a little differently than everything else. First, you must use the function keyword. Then 
place parentheses and then curly braces. Inside of the parentheses would be where your paramenters go that 
you want your function to act on. Inside of the curly braces would be the meat of your function and how the function 
was to act on the given parameters. To get something returned from the function, you would need to call the function
and give an argument to replace the given parameters and produce an output.

*/

let function(age) { // age is the parameter
	console.log("I am " + age + " years old today!"); // this is the action to take with the given parameter
}

function(25); // will print to the console: "I am 25 years old today!" This is a function call. The number 25 is the argument.


// 7. undefined //

/*
	
The undefined value is similar to null and is used for undeclared variables or if the 
variable was never declared with an initial value.
	
*/

let name;

console.log(name); // will return undefined, because the variable was declared but never assigned a value


// 8. null //

/*

The null value is used to indicate an empty object. When using the "typeof" operator, it will say that null
is an object.It is treated as a falsy value.
	
*/

let myObj = null;


// 9. NaN //

/*
	
NaN is an acronym that stands for Not a Number.	
	
*/


// 10. Infinity and -Infinity //

//


// 11. Primitive (Simple) vs Complex Data Types //

/*

Primitive or simple data types are data types that are in the simplest form of data and can easily be 
manipulated and used in simple calculations or comparisons. They are values with a 1:1 ratio and cannot
hold more than one value at a time. Complex data types on the other hand are viewed as collections of 
data. These are arrays and objects. These can also be manipulated, but the process requires more steps 
than that of primitive data types.

Manipulating complex data first involves accessing the data types inside of the collection, either by 
the index in the case of arrays or by the key/value pairs in the case of objects. Complex data types 
can also hold other complex data types. For example, it is possible to have an array of objects or 
objects that have arrays as a value attached to a key.

*/


// 12. BY COPY vs BY REFERENCE //

/*

Copying by value essentially means that one variable makes a full copy of the value that was assigned 
to another value. Copying by reference means that two variables are initialized pointing to the same 
value.

*/

