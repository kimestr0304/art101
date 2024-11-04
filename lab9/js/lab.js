/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-31-2024
 * Description: This script is an implementation of adding buttons and event listener using libraries and jQuery.
 * 
*/


$(document).ready(function(){
    // add button to challenge section

    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#button-challenge").click(function(){
    // add or subtract the "special" class to the section
    $("#challenge").toggleClass("special");
    });

    // add button to problem section
    $("#problems").append("<button id='button-problem'>Make Special</button>");
    $("#button-problem").click(function(){
    // add or subtract the "special" class to the section
    $("#problems").toggleClass("special");
    });

    // add button to reflection section
    $("#reflection").append("<button id='button-reflection'>Make Special</button>");
    $("#button-reflection").click(function(){
    // add or subtract the "special" class to the section
    $("#reflection").toggleClass("special");
    });

    // add button to results section
    $("#results").append("<button id='button-results'>Make Special</button>");
    $("#button-results").click(function(){
    // add or subtract the "special" class to the section
    $("#results").toggleClass("special");
    });

    $(".special-selection").append(
    "<button class='special-button'>Make Special</button>"
    );

    $(".special-button").click(function(){
        $(this).parent().toggleClass("special");
    });

});