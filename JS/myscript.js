/**
 * Starbucks Modern Interactive Script
 * Handles Drink Switcher, Animations, Mobile Navigation, Toast Notifications,
 * Cart Counter Sync, and Footer Legal Accordion.
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initBackToTop();
  syncCartBadge();
  initMobileNav();
  initThumbnails();
});

/* ==========================================================================
   Hero Image & Color Switcher with Smooth Animation
   ========================================================================== */
function imgSlider(imageSrc) {
  const heroImg = document.querySelector('.starbucks');
  if (!heroImg) return;

  // Trigger smooth transition
  heroImg.style.opacity = '0';
  heroImg.style.transform = 'translateY(15px) scale(0.92)';

  setTimeout(() => {
    heroImg.src = imageSrc;
    heroImg.style.opacity = '1';
    heroImg.style.transform = 'translateY(0) scale(1)';
  }, 220);
}

function changeCircleColor(color) {
  const circulo = document.querySelector('.circulo');
  if (circulo) {
    circulo.style.background = color;
  }
}

function initThumbnails() {
  const thumbs = document.querySelectorAll('.abajo li');
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');
    });
    if (idx === 0) thumb.classList.add('active-thumb');
  });
}

/* ==========================================================================
   Mobile Navigation Drawer & Backdrop
   ========================================================================== */
function toggleMenu() {
  const menuToggle = document.querySelector('.toggle-menu-btn') || document.querySelector('.toggle');
  const navegador = document.querySelector('.navegador');
  const header = document.querySelector('header.site-header') || document.querySelector('header');
  let backdrop = document.querySelector('.nav-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    if (header) {
      header.appendChild(backdrop);
    } else {
      document.body.appendChild(backdrop);
    }
    backdrop.addEventListener('click', closeMenu);
  } else if (header && backdrop.parentElement !== header) {
    header.appendChild(backdrop);
  }

  const isActive = navegador && navegador.classList.contains('active');
  if (isActive) {
    closeMenu();
  } else {
    if (menuToggle) menuToggle.classList.add('active');
    if (navegador) navegador.classList.add('active');
    if (header) header.classList.add('menu-open');
    document.body.classList.add('menu-open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  const menuToggle = document.querySelector('.toggle-menu-btn') || document.querySelector('.toggle');
  const navegador = document.querySelector('.navegador');
  const header = document.querySelector('header.site-header') || document.querySelector('header');
  const backdrop = document.querySelector('.nav-backdrop');

  if (menuToggle) menuToggle.classList.remove('active');
  if (navegador) navegador.classList.remove('active');
  if (header) header.classList.remove('menu-open');
  document.body.classList.remove('menu-open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function initMobileNav() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  document.querySelectorAll('ul.navegador li a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });
}

/* ==========================================================================
   Sticky Header on Scroll
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  let btt = document.querySelector('.back-to-top');
  if (!btt) {
    btt = document.createElement('button');
    btt.className = 'back-to-top';
    btt.setAttribute('aria-label', 'Volver arriba');
    btt.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(btt);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }
  }, { passive: true });

  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-msg ${type === 'error' ? 'toast-error' : type === 'info' ? 'toast-info' : ''}`;

  let iconHtml = '<i class="fas fa-check-circle toast-icon"></i>';
  if (type === 'error') {
    iconHtml = '<i class="fas fa-exclamation-circle toast-icon"></i>';
  } else if (type === 'info') {
    iconHtml = '<i class="fas fa-info-circle toast-icon"></i>';
  }

  toast.innerHTML = `${iconHtml} <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.add('closing');
    setTimeout(() => {
      toast.remove();
    }, 320);
  }, 3500);
}

/* ==========================================================================
   Cart Badge Synchronization
   ========================================================================== */
function syncCartBadge(count) {
  let savedCount = count;
  if (savedCount === undefined) {
    const raw = localStorage.getItem('sb_cart_count');
    savedCount = raw ? parseInt(raw, 10) : 0;
  } else {
    localStorage.setItem('sb_cart_count', savedCount);
  }

  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = savedCount;
    badge.style.display = savedCount > 0 ? 'inline-flex' : 'none';
    badge.classList.remove('bump');
    void badge.offsetWidth; // trigger reflow
    badge.classList.add('bump');
  });
}

/* ==========================================================================
   Footer Legal Disclaimer Accordion
   ========================================================================== */
function toggleLegal() {
  const btn = document.querySelector('.legal-toggle-btn');
  const body = document.querySelector('.legal-content-body');
  if (btn && body) {
    btn.classList.toggle('open');
    body.classList.toggle('open');
  }
}
