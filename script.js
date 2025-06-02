// Flip tutor cards on click
function flipCard(card) {
  card.classList.toggle('flipped');
}

// Sidebar toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Hide navbar on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scroll down - hide navbar
    navbar.style.top = '-80px';
  } else {
    // Scroll up - show navbar
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
});
