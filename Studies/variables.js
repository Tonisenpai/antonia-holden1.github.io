/**
* VARIABLES:
*
* 0. Variables in Javascript are containers that hold values to be reused
* in your code and functions in the code. These containers can be refilled
* so to speak throughout the life cycle of the code.
*
* 1. The syntax of a variable consists of the use of the "var" keyword
* and followed by the assignment operator(=) and the name or alias of
* the variable you are creating
*
* 2. The process of declaring a variable is two-fold: (1) Declaration and 
* (2) Assignment. Initialization is when a variable is declared and 
* assigned at the same time.
*
*/


// 1. Declaration //

/*

In terms of the declaration of a variable, the value of myId is undefined
because it has not been assinged a value, nor has it been initialized.

*/

var myId;

console.log(myId);  // prints "undefined" to the console


// 2. Initialization or Assignment //

/*

Here is an example of assigning a value to a variable or initializing a
variable with a value. Assignment and initialization look the same.

*/

var myId = 55259;

console.log(myId);  // prints 55259 to the console

// 3. Re-Assignment //

/*

Variables can be re-assigned. When variables are re-assigned, the previous 
value will no longer be used when calling on the variable, instead the 
new value will be presented as the attached value to the same variable
name. The process for re-assignment is simple, just assign the already 
assigned variable to a new variable using the same methods.

*/

var myName = "Toni";
var myName = "Terry";

console.log(myName); // prints to the console "Terry".


// 4. Var, Let & Const //

/*

In the new version of JavaScript (ES6), variables are not declared as 
often using the "var" keyword. Instead, they are declared with either
"let" or "const". This change is due to scope issues that could cause
problems in the code.

This brings about the concept of Global scope and Function scope. Using
the "var" keyword are used in the Global scope, due to "hoisting" (in
the next section). Global scope variables are variables that can be 
accessed by all of the code. Function scoped variables are variables that
cane only be accessed within the function they were created in.

Let and Const are both block scoped. Let can be reassigned. Const cannot
be re-assigned to another value. It's just like it sounds, it is a 
constant value.

*/

var name = "Victoria";
function whatsYourName() {
	var nickName = "Vicky";
	console.log("Her name is " + name + " and her nickname is " + nickName + ".");
}
whatsYourName(); 
// will print the console.log message inside the function because both variables can be accessed inside the function
console.log(name); 
// works because "name" is a global variable
console.log(nickName); 
// causes an error, because "nickName" can only be accessed inside the function


const car = "honda";
const car = "mazda"; // this will throw an error because const cannot be re-assigned

// 5. Hoisting //

/*

Hoisting is a concept in JavaScript where certain variables can be "hoisted" to the top of your code
and can be accessed before you reach it in the code. However, its values cannot be accessed until
you reach its initialization in the code. Hoisting also depends on the scope in which the variable
lives. Global scoped variables are always hoisted to the top, these are primarily variables initialized
with the "var" keyword. Let variables can also be hoisted to the top, even though they are typically
block or function scoped. However, Const variables cannot be accessed outside of its function or 
block scope.

*/
