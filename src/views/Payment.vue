<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 fw-bold">💳 Make a Payment</h2>

    <div class="card shadow p-4 mx-auto" style="max-width: 500px;">
      <p class="text-muted mb-4">
        Click the button below to open the secure Stripe checkout.
      </p>

      <button
        v-if="!checkoutActive"
        @click="handlePayment"
        class="btn btn-primary w-100 fw-bold"
        :disabled="loading"
      >
        <span v-if="!loading">Pay Now 💰</span>
        <span v-else>
          <div class="spinner-border spinner-border-sm me-2" role="status"></div>
          Processing...
        </span>
      </button>

      <!-- ✅ Stripe will mount inside this div -->
      <div
        v-show="checkoutActive"
        id="checkout-container"
        class="mt-4"
        style="min-height: 400px;"
      ></div>

      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

// ✅ Replace this with your own publishable key
const stripePromise = loadStripe('pk_test_51SI2GtC7Wz3ssBRGpOAe8OQx9RErimZHlK6poEFPENSPbavOpAbhmivesKpI1CwjvNTWuZi9DLAslQrsW5wXe0TE00QlQ4B0mB')

const loading = ref(false)
const error = ref(null)
const checkoutActive = ref(false)

// Your backend API endpoint that creates a checkout session
const API_URL = 'https://cubuubackendlive.vercel.app/api/create-checkout-session'

const handlePayment = async () => {
  try {
    loading.value = true
    error.value = null

    // Step 1: Request a checkout session from your backend
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          { id: 1, name: 'Premium Video Package', price: 2000, quantity: 1 },
        ],
      }),
    })

    const session = await response.json()
    if (!session.client_secret) throw new Error('Invalid session response')

    // Step 2: Wait for DOM to render the container
    checkoutActive.value = true
    await nextTick()

    // Step 3: Initialize Stripe Embedded Checkout
    const stripe = await stripePromise
    const checkout = await stripe.initEmbeddedCheckout({
      clientSecret: session.client_secret,
    })

    // ✅ Mount AFTER container is available
    checkout.mount('#checkout-container')
  } catch (err) {
    console.error(err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
h2 {
  color: #007bff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
