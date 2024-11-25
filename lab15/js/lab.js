/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 11-25-2024
 * Description: This script is an implementation of experimenting with jQuery and AJAX.
 * Credits to Chat GPT for helping and guiding me on this assignment. Also, credits to https://pokeapi.co/docs/v2#info for the API Doc 
 * 
*/

$(document).ready(function() {
    // Add a click event listener to the button
    $('#fetchButton').click(function() {
        // Get the Pokémon name or ID from the input field
        var pokemon = $('#pokemonInput').val().toLowerCase().trim();

        // Check if the input is not empty
        if (!pokemon) {
            alert("Please enter a Pokémon name or ID.");
            return;
        }

        // Show the loading GIF and set the status message to "Loading..."
        $('#loadingGif').show();
        $('#pokedex').hide(); // Hide the Pokedex initially
        $('#statusMessage').text('Loading...'); // Set loading text

        // Fetch data from the Pokémon API
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,  // API URL
            type: "GET",  // GET request
            dataType: "json",  // Expect JSON response
            success: function(data) {
                // Hide the loading GIF once data is loaded
                $('#loadingGif').hide();

                // Display the Pokedex container with the fetched data
                $('#pokedex').show();

                // Change the status message to success
                $('#statusMessage').text('Data Loaded Successfully!');

                // Display Pokémon name and ID
                $('#pokemonName').text(`Name: ${data.name}`);
                $('#pokemonID').text(`ID: ${data.id}`);

                // Display types
                $('#pokemonTypes').html(data.types.map(type => `<li>${type.type.name}</li>`).join(''));

                // Display abilities
                $('#pokemonAbilities').html(data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join(''));

                // Display stats
                $('#pokemonStats').html(data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join(''));
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Hide the loading GIF if there is an error
                $('#loadingGif').hide();

                // Change the status message to error
                $('#statusMessage').text('Error fetching data!');
                $('#statusMessage').removeClass('loading').addClass('error'); // Apply error style

                // Display an error message
                $('#pokedex').hide();
                $('#output').html('<p>Error fetching data!</p>');
            }
        });
    });
});
