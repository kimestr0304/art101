/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 12-2-2024
 * Description: This script is an implementation of experimenting with JSON and API.
 * Credits to Chat GPT for helping and guiding me on this assignment.
 * Credits to https://xkcd.com/614/info.0.json for the JSON code, API and comics!
 * 
*/

src="https://code.jquery.com/jquery-3.6.4.min.js"
                // Start with a default comic number
                let comicObj = { num: 614 };
        
                // Function to fetch comic data from XKCD and display it
                function getAndPutData(comicNumber) {
                    $.ajax({
                        url: `https://cors-anywhere.herokuapp.com/https://xkcd.com/${comicNumber}/info.0.json`,
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        type: "GET",
                        dataType: "json",
                        success: function(data) {

                            console.log('Request URL:', this.url);

                            // Update comic title, image, and alt text
                            $('#comic-title').text(data.title);
                            $('#comic-image').attr('src', data.img);
                            $('#comic-image').attr('alt', data.alt);
                            $('#comic-alt').text(data.alt);
        
                            // Update the comic number
                            comicObj.num = data.num;
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log("Error:", textStatus, errorThrown);
                        }
                    });
                }
        
                // Event listener for the Previous button
                $('#prev-btn').on('click', function() {
                    if (comicObj.num > 1) { // Prevent going below comic #1
                        comicObj.num -= 1;
                        getAndPutData(comicObj.num); // Fetch the previous comic
                    }
                });
        
                // Event listener for the Next button
                $('#next-btn').on('click', function() {
                    comicObj.num += 1;
                    getAndPutData(comicObj.num); // Fetch the next comic
                });
        
                // Initially load the first comic (or any default comic)
                getAndPutData(comicObj.num);