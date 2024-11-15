/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 11-11-2024
 * Description: This script is an implementation of experimenting with DOM manipulation.
 * Credits to WesBot and Professor Modes' javascript file for helping and guiding me on this assignment.
 * 
*/

// Houses' description
var HogwartshouseArray = [
    {   
        title: "GRYFFINDOR",
        text: "At Gryffindor, you are more likely to possess characteristics such as courage, chivalry, nerve and determination. You are known to be very reckless and stubborn at times, but at the same time you have a heart of gold. You always want to help a friend out and never leave anyone behind.",
    },
    {
        title: "SLYTHERIN",
        text: "At Slytherin, you are most likely someone who is ambitious, shrewd, and possibly destined for greatness. You are very intelligent and charming, which allows you to get anything you want without even trying. But, you are always pushing yourself because you want to be flawless and you are prepared to do anything you can to achieve what you desperately want to gain.",
    },
    {
        title: "RAVENCLAW",
        text: "At Ravenclaw you are most likely someone who demonstrates excellent wisdom, wit, and a skill for learning. You are very studious and take pride in your intelligence and work. No matter what you are studying or practicing, you always want to be #1 and so you will try your hardest at everything.",
    },
    {
        title: "HUFFLEPUFF",
        text: "At Hufflepuff you are seen as the most humble and gentle person. You are very down to earth and you are easy to get along with. You are also good at your studies and you don't really mind how good you are at a subject. You are someone who wants to get through their day without any worries or problems.",
    },
];

// Task X: Bonus!
var housesArray = [
    {
        title: "GRUFFLEPUFF (Gryffindor + Hufflepuff)",
        text: "Grufflepuffs are brave, determined, humble and gentle people, who are willing to do anything for a friend. They are someone who will be there by your side through thick and thin. They will be willing to listen to anything you have to say as they are good listeners and just want to hear what you have to say.",
    },
    {
        title: "RAVENDOR (Ravenclaw + Gryffindor)",
        text: "Ravendors are very smart and outgoing people, who take pride in their work and try to take part in anything they possibly can. They are people who would be at every club meeting, hangout, and trip because they enjoy getting out of the house and going out. They love to travel and meet new people, they are extroverts who enjoy having company.",
    },
    {
        title: "SLYFFINDOR (Slytherin + Gryffindor)",
        text: "Slyffindors are very ambitious people, who are willing to do what they can in order to achieve what they want. They are extroverts who enjoy hanging out with others and they like to get to know people too. They may seem frightening at first, but they are actually very funny and silly when they get to know the people around them.",
    },
    {
        title: "RAVENPUFF (Ravenclaw + Hufflepuff)",
        text: "Ravenpuffs are most likely bookworms, who spend their days at the library studying and practicing what they've learned. They are perfectionists, who often push themselves into doing better. They may come off as stubborn and conceited, but they are generally a nice and easy-going person with the right people.",
    },
    {
        title: "RAVERIN (Ravenclaw + Slytherin)",
        text: "Raverins are known to be introverted people, who don't take kindly to others' company and involvements. They are mostly introverts, who don't really enjoy people's company, they like to keep to themselves most of the time. They are very smart and charming people, who may take advantage of people's kindness and naiveness in order to achieve whatever they have in mind for themselves.",
    },
    {
        title: "SLYTHERPUFF (Slytherin + Hufflepuff)",
        text: "Slytherpuffs are known to be extroverted people, who enjoy the company of others, even if they are random strangers or acquaintances. They are people who like to try out unfamiliar things because they want to gain experience and make new memories. They often like to joke around and get themselves involved with others because they enjoy making friends and building relationships.",
    },
];

creditHTML = '<div class="credits">Hogwarts house descriptions, thanks to <a herf="https://www.harrypotter.com/features/hogwarts-house-meanings">The Wizarding World Team</a></div>'; 

// Sorting Hat function based on hash value
function sortingHatHash(str) {
    let checksumValue = checksum(str);
    let mod = Math.abs(checksumValue) % housesArray.length;
    return housesArray[mod];
}

// Function to generate checksum (hash)
function checksum(s) {
    let hash = 0, strlen = s.length, i, c;
    if (strlen === 0) return hash;
    for (i = 0; i < strlen; i++) {
        c = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + c;
        hash = hash & hash;  // Convert to 32bit integer
    }
    return hash;
}

// Sorting Hat function based on string length
function sortingHatLength(str) {
    let len = str.length;
    let mod = len % 8;
    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    }
};

// Function to display house information
function displayHouseInfo(house) {
    var houseInfo = "<p><strong>" + house.title + "</strong></p>";
    houseInfo += "<p>" + house.text + "</p>";
    document.getElementById("outputs").innerHTML = houseInfo;
}

// Function to create buttons for each house
function createHouseButtons() {
    var buttonContainer = document.getElementById("button-container");
    
    // Loop through HogwartshouseArray to create a button for each house
    HogwartshouseArray.forEach(function(house) {
        // Create a new button element
        var button = document.createElement("button");
        button.textContent = house.title;  // Set the button text to the house title

        // Add an event listener to the button
        button.addEventListener("click", function() {
            displayHouseInfo(house);  // When clicked, display the house info
        });

        // Append the button to the container
        buttonContainer.appendChild(button);
    });
}

// Call the function to create buttons when the page loads
window.onload = function() {
    createHouseButtons();
};

// Button event listener for the main "Sort Me!" button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHatHash(name);

    // Prepare the text to display (house title + description)
    var newText = "<p><strong>You are a...</strong> " + house.title + "</p>";
    newText += "<p>" + house.text + "</p>";

    // Display the result in the output element
    document.getElementById("output").innerHTML = newText;
});