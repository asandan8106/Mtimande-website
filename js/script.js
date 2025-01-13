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
// Open Modal
function openModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'flex'; // Display modal as flex
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none'; // Hide modal
}
// Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
    const modal = document.getElementById('infoModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
function openModal() {
    document.getElementById("fleetModal").style.display = "block";
}

function closeModal() {
    document.getElementById("fleetModal").style.display = "none";
}
