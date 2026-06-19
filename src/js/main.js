// ============================================================
// SIDEMOUNT AUTHORITY — Main JS
// ============================================================

// --- Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav    = document.getElementById('primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

// --- Header scroll shadow
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(10,10,11,0.98)';
    } else {
      header.style.background = 'rgba(10,10,11,0.92)';
    }
  }, { passive: true });
}

// --- HUD tick animation (subtle pulse on load)
const hudCells = document.querySelectorAll('.hud-cell');
hudCells.forEach((cell, i) => {
  cell.style.animationDelay = `${i * 120}ms`;
});

// --- Lazy load images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
}
