/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 11-11-2024
 * Description: This script is an implementation of experimenting with DOM manipulation.
 * Credits to WesBot for helping and guiding me on this assignment.
 * 
*/

// Sort the characters of a string abc order

function sortString(inputString){

    // convert string into an array and back to sort it
    return inputString.split('').sort().join('');
}

// Function to create an anagram (shuffle the characters)

function createAnagram(userName) {
    const nameArray = userName.replace(/\s+/g, '').split('');
    for (let i = nameArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nameArray[i], nameArray[j]] = [nameArray[j], nameArray[i]]; // Swap
    }
    return nameArray.join('');
}

// add an event listener for button

$("#submit").click(function(){

    
    // get value of input field
    const userName = $("#user-name").val();

    var outputHtml = `
       <div class="user-output">
           <p>Sorted Name: ${sortString(userName)}</p>
           <p>Anagram: ${createAnagram(userName)}</p>
       </div>`;
        
   $('#output').html(outputHtml);
});

// Function to simulate a page glitch effect
function glitch() {
    // Get all text nodes on the page
    const elements = document.getElementsByTagName('*');

    for (let element of elements) {
      if (element.childNodes.length === 1 && element.textContent.trim() !== '') {
        const originalText = element.textContent;
        let glitchedText = originalText.split('');

        // Apply random character swaps or replacements
        for (let i = 0; i < glitchedText.length; i++) {
          if (Math.random() < 0.05) { // Adjust the probability as needed
            const j = Math.floor(Math.random() * glitchedText.length);
            [glitchedText[i], glitchedText[j]] = [glitchedText[j], glitchedText[i]];
          };
        };

        // Set the modified text content back to the node
       element.textContent=glitchedText.join('');
      };
};
};

// Function to start and stop repeated calls to glitch()
var intervalId=null;
function startGlitch(){
if(intervalId===null){
// Call glitch every half second until we stop it later

intervalId=setInterval(glitch,500);}};