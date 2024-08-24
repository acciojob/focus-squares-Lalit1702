// Function to handle mouse enter event
function handleMouseEnter(event) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37'; // Change to Coffee color
        }
    });
}

// Function to handle mouse leave event
function handleMouseLeave(event) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Change back to Lavender color
    });
}

// Attach event listeners once the DOM is fully loaded
window.onload = function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', handleMouseEnter);
        square.addEventListener('mouseleave', handleMouseLeave);
    });
};
