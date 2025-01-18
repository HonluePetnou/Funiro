const slider = document.querySelector('.slider');
const indicators = document.querySelectorAll('.indicator');
const images = document.querySelectorAll('.slider-image');

let currentIndex = 0;
const totalImages = images.length;
const slideInterval = 2500; // Interval of 2.5 seconds

// Function to update the slider position and active indicator
function updateSlider(index) {
    currentIndex = index;
    const offset = -currentIndex * 100; // Calcul de la position
    slider.style.transform = `translateX(${offset}%)`;

    // update the active indicator
    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentIndex);
    });
}

// Function to go to the next slide
function nextSlide() {
    const nextIndex = (currentIndex + 1) % totalImages; // get back to the first image
    updateSlider(nextIndex);
}

// Auto-slide
let autoSlide = setInterval(nextSlide, slideInterval);

// Attach click event to each indicator and pause auto-slide
indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.dataset.index);
        updateSlider(index);

        // Reset auto-slide timer on manual interaction
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});

// Initialize slider
updateSlider(currentIndex);

document.querySelector('.nav-btn').addEventListener("click", () => {
    // Redirect to the desired URL
    window.location.href = "../Html/form.html";
  });

  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });