typeText('typed'), " Towards the smell of food ";

// Typing effect on the main text
function typeText(elementId, text) {
    const element = document.getElementById(elementId);
    let i = 0;
    function type() {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50); // Adjust the speed by changing the delay
        }
    }
    type();
};