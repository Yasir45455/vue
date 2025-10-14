<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 fw-bold text-primary">🎥 Post a New Video</h2>

    <div class="card shadow-lg border-0 rounded-4 p-4 mx-auto" style="max-width: 600px;">
      <form @submit.prevent="submitVideo">
        <div class="mb-3">
          <label class="form-label fw-semibold">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="form-control"
            placeholder="Enter video title"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Video URL (YouTube)</label>
          <input
            v-model="form.url"
            type="url"
            class="form-control"
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Source</label>
          <input
            v-model="form.source"
            type="text"
            class="form-control"
            placeholder="e.g. YouTube"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Category</label>
          <select v-model="form.category" class="form-select" required>
            <option disabled value="">Select Category</option>
            <option value="Short">Short</option>
            <option value="Long">Long</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Tags (comma separated)</label>
          <input
            v-model="form.tags"
            type="text"
            class="form-control"
            placeholder="e.g. kids, learning, rhymes"
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary px-4 py-2 fw-semibold"
            :disabled="loading"
          >
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            {{ loading ? "Posting..." : "Post Video" }}
          </button>
        </div>

        <p v-if="message" class="text-center mt-3" :class="messageColor">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  title: "",
  url: "",
  source: "YouTube",
  category: "",
  tags: "",
  type: "AdminKiVideo",
});

const loading = ref(false);
const message = ref("");
const messageColor = ref("");

// Submit function
const submitVideo = async () => {
  loading.value = true;
  message.value = "";

  try {
    const payload = {
      title: form.value.title,
      url: form.value.url,
      source: form.value.source,
      category: form.value.category,
      tags: form.value.tags.split(",").map((t) => t.trim()),
      type: "AdminKiVideo",
    };

    const response = await axios.post("https://cubuubackendlive.vercel.app/api/admin_videos", payload);
    console.log("Response:", response.data);

    message.value = "✅ Video posted successfully!";
    messageColor.value = "text-success";

    // Reset form
    form.value = {
      title: "",
      url: "",
      source: "YouTube",
      category: "",
      tags: "",
      type: "AdminKiVideo",
    };
  } catch (error) {
    console.error("Error posting video:", error);
    message.value = "❌ Failed to post video. Please try again.";
    messageColor.value = "text-danger";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 16px;
}
button {
  transition: all 0.2s ease;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
}
</style>