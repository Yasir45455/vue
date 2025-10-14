<script setup>
const services = [
  {
    title: "Deep Tissue Massage",
    description:
      "Relieve chronic tension and muscle soreness with our deep pressure massage, focusing on knots and stress points.",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
  },
  {
    title: "Aromatherapy",
    description:
      "Immerse yourself in calming essential oils blended for stress relief, better sleep, and emotional well-being.",
    image:
      "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
  },
  {
    title: "Hot Stone Therapy",
    description:
      "Heated stones are placed on key energy points to melt away tension, improve circulation, and promote relaxation.",
    image:
      "https://images.pexels.com/photos/4325458/pexels-photo-4325458.jpeg",
  },
  {
    title: "Couples Massage",
    description:
      "Enjoy a rejuvenating experience together with synchronized massages in a serene and romantic setting.",
    image:
      "https://images.pexels.com/photos/6621434/pexels-photo-6621434.jpeg",
  },
  {
    title: "Reflexology",
    description:
      "A soothing foot therapy that stimulates energy pathways, balancing body functions and relieving fatigue.",
    image:
      "https://images.pexels.com/photos/3865570/pexels-photo-3865570.jpeg",
  },
  {
    title: "Swedish Massage",
    description:
      "A gentle, full-body massage designed to improve circulation, reduce stress, and leave you deeply relaxed.",
    image:
      "https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg",
  },
];
</script>

<template>
  <section class="services-section">
    <div class="services-header animate-fade-in-up">
      <h2>Our <span class="highlight">Signature Services</span></h2>
      <p>
        Experience the art of relaxation with our carefully crafted massage therapies designed to rejuvenate your mind, body, and soul.
      </p>
    </div>

    <div class="services-grid animate-fade-in-up">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <img :src="service.image" :alt="service.title" class="service-image" />
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === Layout === */
.services-section {
  background: linear-gradient(to bottom right, #f5faf7, #ffffff, #e8f5ef);
  padding: 5rem 2rem;
  text-align: center;
}

.services-header {
  max-width: 750px;
  margin: 0 auto 3rem auto;
}

.services-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.highlight {
  color: #3ca380;
}

.services-header p {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
}

/* === Grid === */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

/* === Cards === */
.service-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  max-width: 320px;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* === Image === */
.service-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* === Text === */
.service-content {
  padding: 1.5rem;
}

.service-content h3 {
  color: #1f2937;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.service-content p {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
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
</style>
