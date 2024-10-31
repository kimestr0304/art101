// calculator from section D


// rectangle

// numbers 0-9 for input arrays, prompt,

function userInput(){

    let number;
    number = window.prompt("plaese provide a number between 0 and 9");
    console.log(number);
    return number;

}

let numberFirst = userInput();
let numberSecond = userInput();

console.log("numberFirst is " + numberFirst);
console.log("numberSecond is " + numberSecond);

// addition operation

results = numberFirst + numberSecond;

$(".calculator").append(numberFirst + " * ");

$(".calculator").append(numberSecond + " * ");

$(".calculator").append(results);

console.log(results);

// output 
