/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-31-2024
 * Description: This script is an implementation of adding buttons and event listener using libraries and jQuery.
 * 
*/

// add button to the challenge section

$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add click listener to the section
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$("#reflection").append("<button id='button-reflection'>Make Special</button>");
$("#button-reflection").click(function(){
    $("#reflection").toggleClass("special");
});

$("#results").append("<button id='button-results'>Make Special</button>");
$("#button-results").click(function(){
    $("#results").toggleClass("special");
});
