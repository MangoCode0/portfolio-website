document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add all new sections to the observer
  document.querySelectorAll('.skill-category, .project-card, .about-grid, .timeline-item').forEach(el => {
    observer.observe(el);
  });
});