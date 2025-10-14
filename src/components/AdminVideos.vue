<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 fw-bold">🎥 Admin Videos</h2>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else>
      <div v-if="videos.length > 0" class="row gy-4">
        <div
          v-for="video in videos"
          :key="video._id"
          class="col-md-4 col-sm-6"
        >
          <div class="card h-100 shadow-sm border-0 rounded-4">
            <div class="ratio ratio-16x9">
              <!-- YouTube embed -->
              <iframe
                :src="embedUrl(video.url)"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ video.title }}</h5>
              <p class="card-text text-muted mb-1"><strong>Category:</strong> {{ video.category }}</p>
              <p class="card-text text-muted mb-1"><strong>Source:</strong> {{ video.source }}</p>
              <p class="card-text"><strong>Created At:</strong> {{ formatDate(video.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <p class="text-muted">No videos found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const videos = ref([]);
const loading = ref(true);

const fetchVideos = async () => {
  try {
    const response = await axios.get("https://cubuubackendlive.vercel.app/api/admin_videos");
    videos.value = response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    loading.value = false;
  }
};

// Convert normal YouTube/Shorts URL to embeddable one
const embedUrl = (url) => {
  if (url.includes("shorts/")) {
    return url.replace("shorts/", "embed/");
  }
  return url.replace("watch?v=", "embed/");
};

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleString();
};

onMounted(fetchVideos);
</script>

<style scoped>
.card iframe {
  border-radius: 12px 12px 0 0;
}
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
