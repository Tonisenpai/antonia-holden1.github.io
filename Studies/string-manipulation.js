/**
* STRING MANIPULATION:
*
* 0. There are multiple ways to manipulate strings. One of those ways is to use 
* operators. The "+" operator allows you to add strings together. This is 
* called "concatenation". You can create variables and then formulate
* sentences and messages with other strings using this method.
*
* 1. Other methods used to manipulate strings include methods that are built in
* to the JavaScript language. These include: ".join", ".concat", ".includes", ".replace",
* ".toLowerCase()", ".toUpperCase()", ".slice"
*
* 2. In order to access certain parts of a string, you can use the indexing 
* method (string[0] accesses the first index of the string) or you can use the
* "charAt()" method, which works much like indexing, except that the index you 
* want to access goes into the parentheses.
*
*/

// concatenation
var time = "9:00 am";

var name = "Jasper";

var message = "Good morning " + name + "! Your interview time tomorrow will be " + time + ".";

console.log(message); // should print sentence: "Good morning Jasper! Your intervire time tomorrow will be 9:00 am."

// this example uses multiple methods

var palindrome = function(string) {
  
  if (string.length < 2) { // the .length property gives the length of the string, returns a number
    return true;
  } 
  
  var newString = string.replace(/[" "]/g, ""); //  the .replace method will replace one value in the string with another

  
  if (newString.charAt(0).toLowerCase() === newString.charAt(newString.length - 1).toLowerCase()) {
    return palindrome(newString.slice(1, newString.length - 1));
  } // charAt accesses the first index of the string and .toLoweCase() changes the values in the string to be lowercase
  // the .slice method slices off the index of 1 and the last index of the string so they can be compared separately
  return false;
};