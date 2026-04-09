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

// Block Context Menu (Right Click)
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Block F12, Ctrl+U, Ctrl+Shift+I, and prevent code inspection keys
document.addEventListener('keydown', (e) => {
  // F12 key
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
  }
  // Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
    e.preventDefault();
  }
  // Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
    e.preventDefault();
  }
  // Ctrl+U (Windows) or Cmd+U (Mac) - View Source
  if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
    e.preventDefault();
  }
  // Ctrl+C (Prevent Copying key shortcut)
  if ((e.ctrlKey || e.metaKey) && (e.key === 'C' || e.key === 'c')) {
    e.preventDefault();
  }
});

// Disable text selection globally
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';

// Print warning to console just in case they manage to open it
console.log("%cSTOP!", "color: red; font-size: 50px; font-weight: bold; text-shadow: 1px 1px 2px black;");
console.log("%cHành động này bị chặn để bảo vệ bản quyền mã nguồn của Happy Kids.", "font-size: 20px; color: #444;");
