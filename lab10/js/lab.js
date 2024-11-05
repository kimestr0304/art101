/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 11-6-2024
 * Description: This script is an implementation of experimenting with DOM manipulation.
 * Credits to WesBot for helping and guiding me on this assignment.
 * 
*/

// little helper function
function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the random text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the randome text
    return text.slice(randStart, randStart + randLen);
}

// click listener for the button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    
    // append a new div to the output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div');
});

$("#make-convo").click(function(){
    // Get user input value
    const userInput = $("#userInput").val();
    
    // Clear the input field after getting its value
    $("#userInput").val('');

    // Use userInput as one side of conversation (odd messages)
    
});

$("#make-convo").click(function(){
    // Add a white background to the body
    $("#output").css("background-color", "white");
    $("#output").css("border-color", "black");
});