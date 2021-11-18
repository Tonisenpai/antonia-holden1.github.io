/**
* FUNCTIONS:
*
* 0. To use a function, first we must declare the function. We do this by using the keyword "function" and then
* followed by parentheses and curly braces. At the end a semicolon is placed. This is called an anonymous function.
*
* 1. A function has parameters that serve as placeholders for values called arguments that are "passed through" 
* the function to gain a certain output.
*
* 2. The syntax for a named function involves using the function keyword and then 
* providing the function's name (using camel case), followed by parentheses and curly braces.
*
* 3. Assigning a function to a variable requires that you declare a variable first, then place the anonymous function 
* behind the assignment operator, followed by a semicolon.
* 
* 4. The inputs of a function are found in the parentheses at the beginning of the function. These values are called
* parameters. The outputs are what is returned or printed to the console after the function is called with arguments
* that are passed in.
*
*/

// 1. Declaration //

/*

A function is delcared a little differently than everything else. First, you must use the function keyword. If it is 
an anonymous function, you would then use parentheses and then curly braces. Inside of the parentheses would be where
you would place your paramenters you want your function to act on. Inside of the curly braces would be the meat 
of your function and how the funciton was to act on the given parameters. If it is a named function, you use the 
keyword and whatever you will name the function, and then the parameter as well as the action inside of the curly
braces.

*/

function (parameter) { // this is an anonymous function
	console.log("action goes here");
}

function funcTitle (param1, param2, …,) { // this is a named function
	return (“perform some action”);
	}


// 2. Assignment //

/*

Assigning a function to a variable requires that you declare a variable first, then place the anonymous 
function behind the assignment operator, followed by a semicolon.

*/

var reverse = function(string) { // the assignment happens here with the name, assignment operator and function
  if(string.length <= 1){
    return string;
}
else {
    return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
}

};


// 3. Parameters vs Arguments //

/*

Parameters are found in the parentheses. Arguments are passed into the placeholders (parameters)
as values to be acted on in the function.

*/

let animeList = {
  myHeroAcademia: {
    "genre": "action",
    "rating": "14",
    "rankingThru10": 8,
  },
  fullmetalAlchemistBrotherhood: {
    "genre": "action",
    "rating": "16+",
    "rankingThru10": 7,
  },
  attackOnTitan: {
    "genre": "action",
    "rating": "18+",
    "rankingThru10": 9,
  }
};

 function getArrayOfAnime(obj) { // obj is the parameter, a placeholder for an argument to pass in
    // Your Code Below Here
  console.log(Object.keys(obj));
    // Your Code Above Here
  }



getArrayOfAnime(animeList); // animeList is the argument being passed into the function to be acted on

// 4. Arrow Functions //

/*

These are simpler and quicker ways to write a function. The reason they are
called arrow functions is because they point to the action using an arrow =>
and sometimes curly braces aren't necessary, unless the function requires more
than one line. This is a new addition to JavaScript (ES6) to cut down on the 
time it requires to produce code. 

*/

// normal function 
function (x){
  return x + 2;
}

// arrow function
x => x + 2;

// 5. Closure //

/*

A closure is a function that gives you access to an outer function's scope 
from an inner function. 

*/