/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-31-2024
 * Description: This script is an implementation of how to create and use anon functions and callbacks.
 * Credits to WesBot for helping and guiding me on this code.
*/

// Functions
function divideTwo(x){
  var result = x / 2;
  return result;
}

// My array
mainArray = [2, 24, 36, 48, 52, 64]
console.log("My array", mainArray);


// Testing the functions
let newArray = mainArray.map(divideTwo);
console.log("Testing the evenness of the array:", newArray);

let isEven = mainArray.map(function(x){
  return (x % 2 ==0);
})

// Printing the results on the console
console.log("Are each numbers even %2==0: ", isEven);

// Mapping Results
var mapResults = "Original Array: " + mainArray + "\n" +  
"newArray: " + newArray + "\n" + 
"Are each numbers even: " +  isEven;

// Use $ to select the element by ID and set on HTML
$("#output").html("<pre>" + mapResults + "</pre>");
