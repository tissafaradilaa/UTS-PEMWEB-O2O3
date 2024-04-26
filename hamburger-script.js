// Function to toggle mobile menu
function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.desktop-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

// Add event listener for hamburger menu click
var hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', toggleMobileMenu);
