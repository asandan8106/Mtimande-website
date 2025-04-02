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

// Hero Image Slideshow
const heroImage = document.getElementById("hero-img");
const images = [
    "images/Deco1.jpg",
    "images/toilet1.jpg",
    "images/toilet2.jpg",
    "images/Deco2.jpg",
    "images/hero5.jpg",
    "images/hero6.jpg",
    "images/hero7.jpg"
];

let currentImageIndex = 0;

function changeHeroImage() {
    heroImage.style.opacity = "0"; // Fade out
    setTimeout(() => {
        heroImage.src = images[currentImageIndex];
        heroImage.style.opacity = "1"; // Fade in
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 500);
}

// Change hero image every 5 seconds
setInterval(changeHeroImage, 5000);
// Get Modal Elements
const modal = document.getElementById("infoModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Open Modal When Button Clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal When Close Button Clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal When Clicking Outside the Modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

