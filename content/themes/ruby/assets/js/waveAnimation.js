document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("animated-wave-text");
    const text = textContainer.innerText;
    textContainer.innerHTML = ''; // Clear the original text

    // Split the text into letters, but preserve words for spacing
    let counter = 0; // A counter to keep track of individual letters
    text.split('').forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = 'animated-wave-letter';
        // Use the counter to stagger the animation of each letter
        span.style.setProperty('--i', counter++);
        // Preserve spaces for word separation
        if (char === ' ') {
            textContainer.appendChild(document.createTextNode(' '));
        } else {
            textContainer.appendChild(span);
        }
    });
});
