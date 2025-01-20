// Smooth Scroll for Internal Links
document.querySelectorAll('.icon-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        
        // Check if the target is an internal link (starts with "#")
        if (target.startsWith('#')) {
            e.preventDefault(); // Prevent navigation for internal links
            const element = document.querySelector(target);
            
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // For external links (to other pages), do nothing and let the browser navigate
    });
});

/// Open the modal
function openModal() {
    const modal = document.getElementById('aboutModal');
    modal.style.display = 'block'; // Display the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('aboutModal');
    modal.style.display = 'none'; // Hide the modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
