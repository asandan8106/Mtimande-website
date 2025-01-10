// JavaScript for smooth scrolling when clicking navigation links
document.querySelectorAll('.icon-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector(".navbar a").addEventListener("click", function(event) {
    // Ensure no preventDefault() or stopPropagation() is unintentionally blocking the navbar
});


