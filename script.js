// Flip tutor cards on click
function flipCard(card) {
  card.classList.toggle('flipped');
}

// Sidebar toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Hide nav on scroll down
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.top = '-80px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
});

// Optional: Stardust cursor (to be added later)
