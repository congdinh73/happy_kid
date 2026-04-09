import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Functionality
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menuBtn');
  const nav = document.querySelector('.nav ul');
  
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Close menu when clicking a link on mobile
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  // 3. Scroll Reveal Animations utilizing Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  const fadeElems = document.querySelectorAll('.fade-up');
  fadeElems.forEach(elem => {
    observer.observe(elem);
  });
  
  // 4. Staggered Delays for Grid Elements
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});
