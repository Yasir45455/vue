<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div class="container">
        <!-- Logo / Brand -->
        <router-link to="/" class="navbar-brand fw-bold text-white">
          🎬 Video Admin Portal
        </router-link>

        <!-- Toggler (for mobile) -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                active-class="active"
              >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/adminvideos"
                class="nav-link"
                active-class="active"
              >Admin Videos</router-link>
            </li>

             <li class="nav-item">
              <router-link
                to="/postvideo"
                class="nav-link"
                active-class="active"
              >Post Video</router-link>
            </li>

            <li class="nav-item">
  <RouterLink class="nav-link" to="/payment">💳 Payment</RouterLink>
</li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-dark text-light text-center py-3 mt-5">
      <p class="mb-0 small">© 2025 Video Admin Portal | Developed by Yasir Masood</p>
    </footer>
  </div>
</template>

<script setup>
// No extra logic needed here
</script>

<style>
body {
  background-color: #f8f9fa;
  font-family: "Poppins", sans-serif;
}

.navbar .nav-link {
  color: #fff !important;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar .nav-link:hover,
.navbar .nav-link.active {
  color: #ffea00 !important;
}
</style>