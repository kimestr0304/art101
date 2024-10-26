/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-28-2024
 * Description: This script is an implementation of how to create a function in JavaScript. 
 */
// accepts an array and sorts it in descending order
function sortUserName() {
    var userName = window.prompt("Hello & welcome, may you please tell me your name and something exciting will occur.");
    console.log("userName =", userName);

    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// Output
document.getElementById("output").innerHTML = "See, something exciting did occur: " + result + "<br>";
console.log("JavaScript file loaded successfully!");
