/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-28-2024
 * Description: This script is an implementation of how to create a function in JavaScript.
 * Credits to Chat GPT for the references and help on this assignment.
 */



// Function to sort, omit spaces, and handle case sensitivity
function sortUserName(userName) {

    // Remove spaces and sort ignoring case
    const nameSorted = userName.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return nameSorted;
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

// Function to capitalize the first letter of each word

function capitalizeName(userName) {
    return userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Get user input outside the function
const userName = window.prompt("Hi & welcome, please tell me your name & something will occur.");

// Output with styled <div>
const sortedName = sortUserName(userName);
const anagram = createAnagram(userName);
const capitalizedName = capitalizeName(userName);

document.writeln(`
    <div class="user-output">
        <p>See something did occur.</p>
        <p>Sorted Name: ${sortedName}</p>
        <p>Anagram: ${anagram}</p>
        <p>Capitalized Name: ${capitalizedName}</p>
    </div>
`);