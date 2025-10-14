<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 fw-bold">💳 Subscribe to Premium Access</h2>

    <div class="card shadow p-4 mx-auto" style="max-width: 500px;">
      <p class="text-muted mb-4">
        Get unlimited access to premium videos and content for just
        <strong>$9/month</strong>.
      </p>

      <div class="mb-3">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Enter your email"
          required
        />
      </div>

      <button
        @click="subscribeNow"
        class="btn btn-primary w-100 fw-bold"
        :disabled="loading || !email"
      >
        <span v-if="!loading">Subscribe Now 🚀</span>
        <span v-else>
          <div class="spinner-border spinner-border-sm me-2" role="status"></div>
          Processing...
        </span>
      </button>

      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const loading = ref(false);
const error = ref(null);

const subscribeNow = async () => {
  try {
    loading.value = true;
    error.value = null;

    // Replace this URL with your backend endpoint
    const response = await fetch("https://cubuubackendlive.vercel.app/api/create-subscription-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await response.json();

    if (!data.url) throw new Error("Failed to create Stripe session");
    window.location.href = data.url; // Redirect to Stripe Checkout
  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
h2 {
  color: #007bff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.card {
  border-radius: 15px;
}
</style>