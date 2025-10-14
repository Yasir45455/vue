<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function bookNow() {
  router.push('/book')
}
</script>

<template>
  <section class="book-banner animate-fade-in-up">
    <div class="banner-content">
      <h2>
        Relax. Refresh. Renew.  
        <span class="highlight">Book Your Massage Today!</span>
      </h2>

      <p>
        Your well-being matters — escape the daily stress and indulge in 
        our personalized massage therapies designed to restore balance and harmony.
      </p>

      <button class="btn primary" @click="bookNow">Book Now</button>
    </div>

    <div class="banner-image">
      <img 
        src="https://images.pexels.com/photos/3865523/pexels-photo-3865523.jpeg" 
        alt="Massage Therapy Relaxation" 
      />
    </div>
  </section>
</template>

<style scoped>
/* === Layout === */
.book-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, #e8f5ef, #ffffff, #f5faf7);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin: 4rem auto;
  max-width: 1100px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  text-align: center;
  overflow: hidden;
  position: relative;
}

/* === Text Content === */
.banner-content {
  max-width: 600px;
  z-index: 2;
}

.banner-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.highlight {
  color: #3ca380;
}

.banner-content p {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.7;
}

/* === Button === */
.btn {
  padding: 0.9rem 2rem;
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

/* === Banner Image === */
.banner-image {
  position: absolute;
  right: -60px;
  bottom: 0;
  top: 0;
  display: none;
  z-index: 1;
}

.banner-image img {
  height: 100%;
  width: 500px;
  object-fit: cover;
  border-top-left-radius: 120px;
  border-bottom-left-radius: 120px;
  opacity: 0.9;
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
  .book-banner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 5rem 4rem;
  }

  .banner-content {
    flex: 1;
  }

  .banner-image {
    display: block;
    flex: 1;
  }

  .banner-content h2 {
    font-size: 2.5rem;
  }
}
</style>