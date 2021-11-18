/**
* LOOPS:
*
* 0. There are a few types of loops in the JavaScript language. There are the for loop, for-in loop,
* and the while loop. 
*
* 1. Loops have the ability to iterate over an array or object and they can do so going forwards, and
* backwards depending on how you implement your code and some loops can iterate any number of times.
* These loops allow you to run the same code repeatedly over different values.
*
* 2. Looping over an array requires a different type of loop than looping over an object.
*
*/


// 1. For loop //

/*

The for loop has an iteration method that uses an index [i] that is assigned a starting value, has 
an indication of the ending value and uses either the increment or decrement operator to create the 
iteration process. Typically you are looping over an array or a string using this for loop.

*/

function flatten(array) { // the array is the parameter you are looping over in the function
    let newArray = [];
    for (var i = 0; i < array.length; i++) { // this is where the iteration happens
      newArray = newArray.concat(array[i]); // this is what you want to happen at each iteration
    }
    return newArray;
  }
  
  
  // 2. For-in loop //
  
  /*
  
  This loop takes in a key and an object and this loop is used to loop over the keys inside of an object.
  You use this loop for objects because objects are unordered, so there are no indices really to loop
  over in this case.
  
  */
  
  function valuesToString(object) {
      var results = "";
      for (var keys in object) { // this is where the iteration happens
          if (typeof object[keys] === "string") { // this is the condition we are testing here
              results += object[keys] + " "; // this is the action you want the iteration to take
          }
      } 
      return results.trim();
  }
  
  
  // 3. While loop //
  
  /*
  
  The while loop loops through a block of code as long as a specified condition is true.
  
  */
  
  function reverseArrayInPlace(array) {
    var i = 0;
    while (i < array.length - 1) { // this is where the start and end points are indicated
      array.splice(i, 0, array.pop()); // this is what you want to happed at each iteration
      i++; // this is the incrementation that allows it to loop
    }
    return array;
  }