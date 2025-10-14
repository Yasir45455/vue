<script setup>
const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Marketing Executive",
    message:
      "Absolutely amazing experience! The environment was calming, the therapist was highly skilled, and I felt renewed and stress-free afterward. Highly recommended!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Hassan Ali",
    role: "Fitness Trainer",
    message:
      "Their deep tissue massage was exceptional. It really helped with my post-workout soreness. The staff was professional, and the ambiance was perfect for relaxation.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Sarah Ahmed",
    role: "Graphic Designer",
    message:
      "I booked a couple's massage and it was such a relaxing, romantic experience. The aroma, music, and atmosphere — everything was just perfect!",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Zara Malik",
    role: "Teacher",
    message:
      "From the moment I walked in, I felt at peace. Their aromatherapy session left me feeling calm and rejuvenated. I’ll definitely be coming back soon!",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
];
</script>

<template>
  <section class="testimonials-section">
    <div class="testimonials-header animate-fade-in-up">
      <h2>What Our <span class="highlight">Clients Say</span></h2>
      <p>
        Our guests leave not just relaxed, but transformed. Hear what they have to say 
        about their journey to wellness at <strong>Serenity Massage Center</strong>.
      </p>
    </div>

    <div class="testimonials-grid animate-fade-in-up">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
      >
        <div class="client-info">
          <img :src="testimonial.image" :alt="testimonial.name" class="client-image" />
          <div>
            <h3>{{ testimonial.name }}</h3>
            <p class="role">{{ testimonial.role }}</p>
          </div>
        </div>
        <p class="message">“{{ testimonial.message }}”</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === Layout === */
.testimonials-section {
  background: linear-gradient(to bottom right, #f5faf7, #ffffff, #e8f5ef);
  padding: 5rem 2rem;
  text-align: center;
}

.testimonials-header {
  max-width: 750px;
  margin: 0 auto 3rem auto;
}

.testimonials-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.highlight {
  color: #3ca380;
}

.testimonials-header p {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
}

/* === Grid === */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

/* === Card === */
.testimonial-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem;
  max-width: 340px;
  text-align: left;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* === Client Info === */
.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.client-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #3ca380;
  box-shadow: 0 2px 10px rgba(60, 163, 128, 0.2);
}

.client-info h3 {
  font-size: 1.1rem;
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.role {
  color: #6b7280;
  font-size: 0.95rem;
}

/* === Message === */
.message {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  margin-top: 0.5rem;
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