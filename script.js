document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting me. I will get back to you shortly!');
});

// Show/Hide the button based on the scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block"; // Show the button when scrolled down 300px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button when less than 300px
    }
}

// Scroll to the top when the button is clicked
document.getElementById("scrollToTopBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll to top
});