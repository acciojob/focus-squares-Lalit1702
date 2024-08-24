function handleMouseEnter(event) {
    console.log('Mouse entered:', event.target.id); // Log when mouse enters a square
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37'; // Change to Coffee color
        }
    });
}

function handleMouseLeave(event) {
    console.log('Mouse left:', event.target.id); // Log when mouse leaves a square
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Change back to Lavender color
    });
}
