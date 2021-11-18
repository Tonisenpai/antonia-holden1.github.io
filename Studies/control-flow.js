/**
* CONTROL FLOW:
*
* 0. The flow of your code is controlled using conditional statements. These are If, If/Else, 
* If/Else-If/Else and Switch statements.
*
* 1. These conditional statements often have boolean statements passed as the condition in
* which the function will test to get a certain outpus. These tests will test for every
* condition that might come up and thwart the output you may have been looking for. 
*
*/

// 1. If/Else-If/Else //

/*

These statements give conditional logic where the outcome of each statement is a boolean value.
This lets you sort through the function and only act on the values you want to act on by eliminating
the erroneous values included in the data set that don't fit in what you want your result to be.

*/

function isEven(wholeNum) {
	if (wholeNum % 2 === 0) {
		return true;
	} else if (wholeNum % 2 !== 0) {
		return false;
	} else {
		return false;
	}
}

// 2. Switch statements //

/*

This is also conditional logic formatted in a different way. The switch statement is evaluated per block
of code. If the condition of that block of code is not met, then it moves on to the next block of code.
This will continue until there is a block of the code that can be acted upon.

The syntax follows this format =>
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/


function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) { // this is the start of the switch statement, where the cases are indicated with a colon
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}