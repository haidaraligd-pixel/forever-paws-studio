// FOREVER PAWS - JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', function() { navLinks.classList.toggle('active'); });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } }); });
  const contactForm = document.getElementById('contactForm');
  if (contactForm) { contactForm.addEventListener('submit', function(e) { e.preventDefault(); const btn = this.querySelector('button[type="submit"]'); const orig = btn.textContent; btn.textContent = 'Request Sent! ✓'; btn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)'; btn.disabled = true; setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; this.reset(); }, 3000); }); }
  const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.1 });
  document.querySelectorAll('.step-card, .gallery-item, .pricing-card, .testimonial-card').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el); });
  console.log('Forever Paws website loaded.');
});