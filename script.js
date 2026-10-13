// FOREVER PAWS - JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', function() { navLinks.classList.toggle('active'); });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } }); });
  const contactForm = document.getElementById('contactForm');
  if (contactForm) { contactForm.addEventListener('submit', function(e) { e.preventDefault(); const btn = this.querySelector('button[type="submit"]'); const origText = btn.textContent; btn.textContent = 'Request Sent! Redirecting to WhatsApp...'; btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)'; btn.disabled = true; setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; this.reset(); window.open('https://wa.me/923001234567?text=Salam!%20Main%20pet%20portrait%20banwana%20chahta%20hoon.', '_blank'); }, 1500); }); }
  const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.1 });
  document.querySelectorAll('.step-card, .gallery-item, .pricing-card, .testimonial-card, .order-card').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el); });
  console.log('Forever Paws website loaded — ready to take orders!');
});