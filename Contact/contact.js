const images = [
    "../assets/hero1.jpg",
    "../assets/hero2.jpg",
    "../assets/hero3.jpg",
    "../assets/hero4.jpg",
    "../assets/chairs1.jpg",
];

// Target the slider
const slider = document.querySelector(".left");
let currentIndex = 0;

// Function to change the background image
function changeImage() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the array
}

// Set interval to change image every 3 seconds
setInterval(changeImage, 2000);

// Initialize slider
changeImage();