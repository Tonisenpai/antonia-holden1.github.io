/**
* OPERATORS:
*
* 0. An operator is a symbol used for some form of operation, either for assignment, comparison, a
* simple mathematical calculation or some kind of conditional statement.
*
* 1. There are six different types of operators: arithmetic, comparison, logical, assignment, 
* conditional and unary operators
*
*/

// 1. Arithmetic Operators //

/*

There are a number of arithmetic operators, used to calculate different simple mathematical
expressions.

The "+" operator is used for addition, to add two or more values together. These values can be 
numbers or strings or anything else that can be added together. It can also be used to concatenate
two or more strings together. The "-" operator is used to subtract values. This subtraction can
also be used inside of a function for a particular output.

The "*" operator is used to multiply values. The "/" operator is used to divide values. The "%"
operator or "modulus" operator represents the remainder after the division of two numbers. It is 
used a lot in comparing values and in conditional statements.

*/

// addition operator
let myNumber = a + b; // this is using the addition operator
let a = 5;
let b = 6;
console.log(myNumber);  // should print 11 to the console

let function(years) { // an example of concatenation with strings and a value.
	console.log("I've worked here for " + years + " years."); // when called will print a full sentence to the console
}

// subtraction operator
let newNumber = x - y; // this is using the subtraction operator
let x = 4;
let y = 2;
console.log(newNumber);  // should print 2 to the console

// multiplication operator
let multipliedNums = num1 * num2; // this is using the addition operator
let num1 = 50;
let num2 = 2;
console.log(multipliedNums);  // should print 100 to the console

// division operator
let dividedNum = num / other; // this is using the addition operator
let num = 30;
let other = 5;
console.log(myNumber);  // should print 6 to the console

// modulus operator
if (16 % 2 === 0) {
	return true; // conditional statement that returns true if given value is divided by 2 with remainder of 0
}


// 2. Comparison Operators //

/*

There are quite a few comparison operators, used to compare different values.
These comparisons are often used as conditional statements to get to a certain
outcome in a function. Comparison operators reult in boolean values (true or false).

The "==" operator means "loosely equal". It means that the first value is equal, but not 
strictly equal to the second value. It is best not to use this one. The "===" operator means 
the first value is "strictly equal" to the second value. It will return false if the values 
are not strictly equal to each other.


The ">" operator means "greater than" and the "<" operator means "less than", similar to 
math class. The ">=" operator means "greater than or equal to". The "<=" operator means 
"less than or equal to". The last two mentioned are also used to assign the value of 
less than or greater than to a value. The "!=" operator means "not equal". 

*/

let a = 5;
let b = 7; 

a === b; // returns false

a < b; // returns true

b > a; // returns true

let x = "Jackie";
let y = "Wilfred";

x != y; // returns true




// 3. Logical Operators //

/*

There are three logical operators. These operators allow you to add conditions
in a conditional statement. These are "&&" the "and" operator, "||" the "or"
operator, and "!" the "not" operator

*/

let num1 = 52;
let num2 = 12;

If (num1 && num2 != 0) { // will return true because neither number is equal to 0
	return true;
}

If (num1 || num2 === 0) { // will return false because neither number is equal to 0
	return true;
}

!(num1 === num2); // will return true because num1 is not equal to num2


// 4. Assignment Operators //

/*

Assignment operators are used to assign values to variables. There is the simple
assignment operator "=" (this does not mean to be equal to), The add and assignment
operator "+=", the divide and assignment operator "/=", the multiply and assignment
operator "*=" and the modulus and assignment operator "%=". 

*/

var street = "Frenchmen"; // the variable "street" is assigned a string


let x = 10;
let y = 15;
x += y; // adds both values and assigns the result to the left operand, result of 25 will be assigned to x

let x = 5;
let y = 4;
x -= y; // adds both values and assigns the result to the left operand, result of 1 will be assigned to x

let x = 6;
let y = 5;
x *= y; // adds both values and assigns the result to the left operand, result of 30 will be assigned to x


let x = 20;
let y = 2;
x /= y; // divides both values and assigns the result to the left operand, result of 10 will be assigned to x

