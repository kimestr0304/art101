
// Function to handle the image selection
function selectCharacter(event) {
	const imageElement = event.target; // The clicked image
	if (!imageElement) {
		console.error('imageElement is undefined or null');
		return;
	}

	// Add 'selected' class to the clicked image
	imageElement.classList.add("selected");

	// Update the selected character text
	document.getElementById("selected-character").innerText = "You selected: " + imageElement.alt;

	// Show the "You have selected a character!" message
	document.getElementById("selection-message").style.display = "block";

	// Show the "Go to Next Page" button
	document.getElementById("continue-button").style.display = "block";
}

// Attach event listeners to each image
document.querySelectorAll(".character-img").forEach(function(img) {
	img.addEventListener("click", selectCharacter);
});

// Redirect to another page when the "Go to Next Page" button is clicked
function redirectToNextPage() {
	window.location.href = "./index3.html";  // Change this to your next page URL
}