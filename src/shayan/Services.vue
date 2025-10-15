<template>
  <section class="services">
    <div class="container">
      <h2 class="section-title">Our Signature Services</h2>
      <p class="section-subtitle">
        Indulge in a variety of therapeutic treatments crafted to relax your body and calm your mind.
      </p>

      <div class="service-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <img :src="service.image" :alt="service.title" class="service-img" />
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const services = [
  {
    title: "Swedish Massage",
    desc: "A gentle, relaxing massage that improves circulation and promotes deep relaxation.",
    image: "https://images.unsplash.com/photo-1615634260167-63c44b2f36f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Aromatherapy",
    desc: "Essential oils and soothing techniques to rejuvenate your senses and reduce stress.",
    image: "https://images.unsplash.com/photo-1580281657521-81a506d52a94?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hot Stone Massage",
    desc: "Warm basalt stones melt away muscle tension for a deeply therapeutic experience.",
    image: "https://images.unsplash.com/photo-1600508771546-01ecce8a1d5d?auto=format&fit=crop&w=800&q=80",
  },

   {
    title: "Hello",
    desc: "Warm basalt stones melt away muscle tension for a deeply therapeutic experience.",
    image: "https://images.unsplash.com/photo-1600508771546-01ecce8a1d5d?auto=format&fit=crop&w=800&q=80",
  },


];

</script>

<style scoped>
.services {
  background: linear-gradient(to bottom right, #fff8f3, #fefcfb);
  padding: 5rem 1.5rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  color: #4a2c2a;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #6f4f4f;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

.service-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-title {
  font-size: 1.4rem;
  color: #4a2c2a;
  margin: 1rem 0 0.5rem;
}

.service-desc {
  color: #6f4f4f;
  font-size: 1rem;
  padding: 0 1.2rem 1.5rem;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>
