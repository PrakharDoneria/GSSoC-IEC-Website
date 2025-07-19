document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById("navLinks").classList.remove("active");
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 100 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)';
});

function toggleMobileMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}