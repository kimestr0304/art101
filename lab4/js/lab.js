/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-16-2024
 * Description: This script is an implementation of the game, Hang Man. 
 */
// Chose the word
    // Game selects random word that player needs to guess
// Show the player the blanks
    // Display a series of blank spaces representing each letter in the word
    // Player will know how may letters in the word based on the number of blank spaces
// Player guesses a letter
// Check if the guess is correct
    // If the guess is correct, the game reveals where the letter appear in the word
    // If the guess is incorrect, the game counts it as wrong and updates a visual (drawing a part of the hangman)
// Repeat until win or loss
    // If player guesses all the letters in the word before making too many wrong guesses, they win
    // If player makes too many wrong guessses (usually 6 wrong guesses will draw the full hangman), they lose the game
// End Game
    // If player wins, the games shows a successs message
    // If player loses, the games reveals the correct word