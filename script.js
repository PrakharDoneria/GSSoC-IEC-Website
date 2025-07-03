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

function copyReferralCode() {
  const referralInput = document.getElementById('referralCode');
  const copyBtn = document.querySelector('.copy-btn');
  referralInput.select();
  referralInput.setSelectionRange(0, 99999);
  try {
    document.execCommand('copy');
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    copyBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    showNotification('Referral code copied! 🎉', 'success');
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
      copyBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #feca57)';
    }, 2000);
  } catch (err) {
    showNotification('Failed to copy. Try again maybe?', 'error');
  }
}

function showNotification(message, type) {
  document.querySelectorAll('.notification').forEach(n => n.remove());
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed; top: 20px; right: 20px;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white; padding: 1rem 2rem; border-radius: 10px;
    z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    opacity: 0; transform: translateX(100px); transition: all 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.feature-card, .role-card, .step, .link-card');
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.feature-card, .role-card, .step, .link-card');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
  });
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  const breakingNews = document.querySelector('.breaking-news');
  if (breakingNews) {
    breakingNews.addEventListener('mouseenter', () => breakingNews.style.animation = 'pulse 0.5s ease-in-out');
    breakingNews.addEventListener('mouseleave', () => breakingNews.style.animation = 'pulse 2s infinite');
  }
});

function toggleMobileMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
