<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Relax, Refresh & Rejuvenate</h1>
      <p class="hero-subtitle">
        Experience the art of healing through touch — unwind your mind, body, and soul.
      </p>
      <button class="hero-btn">Book Your Massage</button>
    </div>
  </section>
</template>

<script setup>
// No logic needed for now; static hero section
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #fefcfb, #f5ebe0);
  background-image: url('https://images.unsplash.com/photo-1587019153580-9b8e68f7a4e2?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 0 1rem;
  max-width: 700px;
  animation: fadeInUp 1.5s ease;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-btn {
  background: #d4a373;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  padding: 0.75rem 1.8rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.hero-btn:hover {
  background: #b5835a;
  transform: scale(1.05);
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>