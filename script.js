
// Display a message in the browser console
console.log("Welcome to my portfolio website!");

// Find all navigation links
const navigationLinks = document.querySelectorAll(".nav-links a");

// Add a small interaction when a navigation link is clicked
navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You selected: " + link.textContent);
    });
});