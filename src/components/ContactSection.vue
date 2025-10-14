<script setup>
const contactDetails = {
  address: "123 Serenity Avenue, Gulberg, Lahore, Pakistan",
  phone: "+92 306 5778113",
  email: "contact@serenitymassage.com",
  hours: "Mon - Sun: 10:00 AM - 8:00 PM",
  facebook: "https://facebook.com/YasirAli",
  linkedin: "https://linkedin.com/in/YasirMasood",
  whatsapp: "https://wa.me/923065778113",
};
</script>

<template>
  <section class="contact-section">
    <div class="contact-container animate-fade-in-up">
      <h2 class="section-title">Get In <span class="highlight">Touch</span></h2>
      <p class="intro-text">
        We’d love to hear from you. Visit us, call us, or connect with us online —
        your journey to peace and wellness starts here.
      </p>

      <div class="contact-grid">
        <div class="contact-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <h4>Address</h4>
            <p>{{ contactDetails.address }}</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fa-solid fa-phone"></i>
          <div>
            <h4>Phone</h4>
            <p>{{ contactDetails.phone }}</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fa-solid fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>{{ contactDetails.email }}</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fa-solid fa-clock"></i>
          <div>
            <h4>Working Hours</h4>
            <p>{{ contactDetails.hours }}</p>
          </div>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="social-icons">
        <a :href="contactDetails.whatsapp" target="_blank" class="social-link whatsapp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a :href="contactDetails.facebook" target="_blank" class="social-link facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a :href="contactDetails.linkedin" target="_blank" class="social-link linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(to bottom right, #ffffff, #f4faf8, #e9f6f0);
  padding: 5rem 2rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;

  color: #1f2937;
  margin-bottom: 1rem;
}

.highlight {
  color: #3ca380;
}

.intro-text {
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  line-height: 1.7;
  font-size: 1.1rem;
    text-align: center;

}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  max-width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.contact-item i {
  font-size: 1.8rem;
  color: #3ca380;
  min-width: 30px;
}

.contact-item h4 {
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 0.3rem;
}

.contact-item p {
  font-size: 1rem;
  color: #4b5563;
  margin: 0;
}

/* Social icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.social-link {
  font-size: 1.4rem;
  color: #fff;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
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
