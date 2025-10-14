<template>
  <footer class="footer-section">
    <div class="footer-container animate-fade-in-up">
      <!-- Brand / About -->
      <div class="footer-about">
        <h2 class="footer-logo">Serenity<span class="highlight">Spa</span></h2>
        <p>
          Experience ultimate relaxation and rejuvenation with Serenity Spa.
          We combine ancient healing techniques with modern wellness
          therapies to restore balance to your mind, body, and soul.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/book">Book Now</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <p><i class="fa-solid fa-location-dot"></i> 123 Serenity Avenue, Lahore</p>
        <p><i class="fa-solid fa-phone"></i> +92 306 5778113</p>
        <p><i class="fa-solid fa-envelope"></i> contact@serenitymassage.com</p>
      </div>

      <!-- Social Links -->
      <div class="footer-social">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="https://wa.me/923065778113" target="_blank" class="social-link whatsapp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com/YasirAli" target="_blank" class="social-link facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com/in/YasirMasood" target="_blank" class="social-link linkedin">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        © {{ new Date().getFullYear() }} Serenity Spa — All Rights Reserved |
        Designed by <a href="https://yasir45455.github.io/portfolio.github.io/" target="_blank">Yasir Masood</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: linear-gradient(to bottom right, #f4faf8, #e8f5f1, #dff2eb);
  padding: 4rem 2rem 2rem 2rem;
  color: #1f2937;
  font-family: "Poppins", sans-serif;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Brand/About */
.footer-about {
  max-width: 300px;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.highlight {
  color: #3ca380;
}

.footer-about p {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Links */
.footer-links h4,
.footer-contact h4,
.footer-social h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3ca380;
}

/* Contact */
.footer-contact p {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Socials */
.social-icons {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
}

.social-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.whatsapp {
  background: #25d366;
}

.facebook {
  background: #1877f2;
}

.linkedin {
  background: #0a66c2;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid #d1d5db;
  margin-top: 3rem;
  padding-top: 1rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.9rem;
}

.footer-bottom a {
  color: #3ca380;
  text-decoration: none;
  font-weight: 500;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

/* Animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>