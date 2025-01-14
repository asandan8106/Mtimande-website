// Function to open the modal when "View Our Fleet" button is clicked
function openModal() {
    var modal = document.getElementById("fleetModal");
    modal.style.display = "block"; // Display the modal
}

// Function to close the modal when the close button (×) is clicked
function closeModal() {
    var modal = document.getElementById("fleetModal");
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when clicking anywhere outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("fleetModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
