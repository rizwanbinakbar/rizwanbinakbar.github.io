// Smooth scroll for links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    window.location.href = href;
  });
});
