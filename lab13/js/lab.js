/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 11-18-2024
 * Description: This script is an implementation of experimenting with loop functions
 * Credits to WesBot and Professor Modes' javascript file for helping and guiding me on this assignment.
 * 
*/

// Create a function

// Loop from numbers 1 to 200, make sure to list them as "Fizz", "Buzz", "Boom"

// Thanks to Professor Modes' JS code for the help


maxFactors = 4;

outputEl = document.getElementById("output");

// Getting the valuse from the webpage
function getFactorObj(){
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
};
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
};

// given a number and an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and the matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
        debugger;
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the html
        for (var factor in factorObj) {
            // check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // if yes, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
};

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
};

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
});