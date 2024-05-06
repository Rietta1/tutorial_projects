// Form validation on Contact page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let valid = true;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            valid = false;
        }
        
        if (!validateEmail(email)) {
            alert('Please provide a valid email address.');
            valid = false;
        }
        
        if (!valid) {
            e.preventDefault();
        }
    });
});

// Function to validate email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simple image slider/carousel for Home page
let currentIndex = 0;
const slides = document.querySelectorAll('.hero img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initialize the slider by showing the first slide
showSlide(currentIndex);

// Add event listener for filtering on Listings page
const filterOptions = document.querySelectorAll('.filter-option');
const properties = document.querySelectorAll('.listing');

if (filterOptions.length > 0) {
    filterOptions.forEach((option) => {
        option.addEventListener('change', () => {
            const filterValue = option.value;
            filterProperties(filterValue);
        });
    });
}

function filterProperties(filterValue) {
    properties.forEach((property) => {
        const propertyValue = property.getAttribute('data-type');
        if (filterValue === 'all' || propertyValue === filterValue) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}

function adjustLayout() {
    const width = window.innerWidth;
    if (width < 768) {
        // Adjust layout for mobile screens
        // For example, you might change the grid layout for properties
    } else {
        // Adjust layout for larger screens
        // For example, you might display properties in a different layout
    }
}

window.addEventListener('resize', adjustLayout);
adjustLayout(); // Call function on page load
