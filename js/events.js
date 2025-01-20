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
    });
});

// Function to open the modal
function openModal(service) {
    const modal = document.getElementById(service); // Get the modal by service ID
    if (modal) {
        modal.style.display = 'block'; // Display the modal
    }
}

// Function to close the modal
function closeModal(service) {
    const modal = document.getElementById(service); // Get the modal by service ID
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
    }
}

// Event listener to close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});
