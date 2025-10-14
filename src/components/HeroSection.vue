<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function bookAppointment() {
  router.push('/book')
}

function exploreServices() {
  router.push('/services')
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-content animate-fade-in-up">
      <h1 class="hero-title">
        Rejuvenate Your Body & Mind at 
        <span class="highlight"> Serenity Massage Center </span>
      </h1>

      <p class="hero-subtitle">
        Escape the chaos and rediscover your calm. 
        Our certified therapists help you relax, heal, and restore balance through holistic touch.
      </p>

      <div class="hero-buttons">
        <button class="btn primary" @click="bookAppointment">Book Appointment</button>
        <button class="btn secondary" @click="exploreServices">Explore Services</button>
      </div>

      <div class="hero-extra">
        <p>🌿 Personalized treatments | 🕯️ Aromatherapy | 💆‍♂️ Deep Tissue & Hot Stone Therapy</p>
        <p>Open Daily — Step into peace, leave with bliss.</p>
      </div>
    </div>

    <!-- Layered Image Gallery -->
    <div class="hero-images animate-fade-in-up">
      <div class="image-layer layer1">
        <img src="https://images.pexels.com/photos/5889957/pexels-photo-5889957.jpeg" alt="Spa Stones" />
      </div>
      <div class="image-layer layer2">
        <img src="https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg" alt="Massage Therapy" />
      </div>
      <div class="image-layer layer3">
        <img src="https://images.pexels.com/photos/4506161/pexels-photo-4506161.jpeg" alt="Aromatherapy Candles" />
      </div>
      <div class="image-layer layer4">
        <img src="https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg" alt="Spa Towels and Oils" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === Layout === */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  background: linear-gradient(to bottom right, #f5faf7, #ffffff, #e8f5ef);
  overflow: hidden;
}

/* === Text === */
.hero-content {
  max-width: 700px;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #1f2937;
}

.highlight {
  color: #3ca380; /* calming green accent */
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-extra {
  margin-top: 1.5rem;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
}

/* === Buttons === */
.hero-buttons {
  display: flex;
  justify-content: start;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn.primary {
  background-color: #3ca380;
  color: white;
  box-shadow: 0 6px 14px rgba(60, 163, 128, 0.2);
}

.btn.primary:hover {
  background-color: #2f8b6b;
  transform: translateY(-3px);
}

.btn.secondary {
  background-color: transparent;
  border: 2px solid #3ca380;
  color: #3ca380;
}

.btn.secondary:hover {
  background-color: #3ca380;
  color: white;
  transform: translateY(-3px);
}

/* === Layered Images === */
.hero-images {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 420px;
  margin-top: 2rem;
}

.image-layer {
  position: absolute;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.image-layer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Individual layer sizes and placements */
.layer1 {
  width: 220px;
  height: 280px;
  top: 0;
  left: 0;
  z-index: 1;
}

.layer2 {
  width: 250px;
  height: 320px;
  top: 40px;
  left: 120px;
  z-index: 2;
}

.layer3 {
  width: 180px;
  height: 240px;
  top: 150px;
  left: 250px;
  z-index: 3;
}

.layer4 {
  width: 200px;
  height: 260px;
  top: 100px;
  left: 50px;
  z-index: 0;
  opacity: 0.8;
}

/* Hover effect for subtle movement */
.image-layer:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

/* === Animation === */
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

/* === Responsive === */
@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    padding: 6rem 4rem;
  }

  .hero-content {
    flex: 1;
    text-align: left;
    margin-bottom: 0;
  }

  .hero-images {
    flex: 1;
    margin-top: 0;
  }
}
</style>