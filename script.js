// FOREVER PAWS - JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  var navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', function() { navLinks.classList.toggle('active'); });
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) { anchor.addEventListener('click', function(e) { e.preventDefault(); var target = document.querySelector(this.getAttribute('href')); if (target) { window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } }); });
  var contactForm = document.getElementById('contactForm');
  if (contactForm) { contactForm.addEventListener('submit', function(e) { e.preventDefault(); var btn = this.querySelector('button[type="submit"]'); var origText = btn.textContent; btn.textContent = 'Request Sent! Redirecting to WhatsApp...'; btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)'; btn.disabled = true; setTimeout(function() { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; contactForm.reset(); window.open('https://wa.me/923010668408?text=Salam!%20Main%20pet%20portrait%20banwana%20chahta%20hoon.', '_blank'); }, 1500); }); }
  var observer = new IntersectionObserver(function(entries) { entries.forEach(function(e) { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.1 });
  document.querySelectorAll('.step-card, .gallery-item, .pricing-card, .testimonial-card, .order-card').forEach(function(el) { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el); });
  console.log('Forever Paws website loaded — ready to take orders!');
});