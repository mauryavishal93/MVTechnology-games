(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
    // Close menu when clicking a nav link (smooth scroll will happen)
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });
  }

  // Fade-in sections on scroll
  var sections = document.querySelectorAll('.section');
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { rootMargin: '-80px 0px -50px 0px', threshold: 0.1 }
  );
  sections.forEach(function (section) {
    observer.observe(section);
  });
  document.addEventListener('DOMContentLoaded', function () {
    sections.forEach(function (section) {
      if (section.classList.contains('is-visible')) return;
      var rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) section.classList.add('is-visible');
    });
  });
})();
