/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-28-2024
 * Description: This script is an implementation of how to create a function in JavaScript. 
 */
// accepts an array and sorts it in descending order
function reverseSortArray(array){
    // sort array
    let sortedArray = array.sort();
    // reverse array
    let reverseSortedArray = sortedArray.reverse();
    // return array
    return reverseSortedArray;
}
// Define an array
const mixedArray = ["dogs", "cats", "parrots", "horses", "foxes", "red-panda"]
// Call the funtion 
console.log(reverseSortArray(mixArray));