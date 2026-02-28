/* =========================
   MENU HAMBURGUESA
========================= */

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}


/* =========================
   ANIMACIONES SCROLL PREMIUM
========================= */

const revealElements = document.querySelectorAll('.reveal, section, .card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));


/* =========================
   SCROLL SUAVE ANCLAS
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

