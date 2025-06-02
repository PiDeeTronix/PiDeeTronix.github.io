// Flip tutor cards on click
function flipCard(card) {
  if (card) {
    card.classList.toggle('flipped');
  }
}

// Sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Hide navbar on scroll down and show on scroll up
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.style.top = '-80px';
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
  });
}

// Optional: Stardust cursor (to be added later)
