<template>
  <div class="shorts-feed">
    <div v-if="loading" class="loading-text">Loading videos...</div>

    <div v-else-if="videos.length" class="video-container">
      <!-- 🎬 Video Player -->
      <div class="video-player-wrapper">
        <template v-if="isYouTube(videos[currentIndex].url)">
          <!-- YouTube iframe -->
          <iframe
            class="video-player"
            :src="formatYouTubeUrl(videos[currentIndex].url)"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </template>

        <template v-else>
          <!-- Normal MP4 video -->
          <video
            ref="videoPlayer"
            class="video-player"
            :src="videos[currentIndex].url"
            autoplay
            loop
            playsinline
            :muted="isMuted"
          ></video>
        </template>
      </div>

      <!-- 🎛 Controls -->
      <div class="controls">
        <button class="control-btn" @click="prevVideo" :disabled="currentIndex === 0">⬆️</button>

        <button class="control-btn" @click="toggleMute">
          <span v-if="isMuted">🔇</span>
          <span v-else>🔊</span>
        </button>

        <button class="control-btn" @click="replayVideo">🔁</button>

        <button
          class="control-btn"
          @click="nextVideo"
          :disabled="currentIndex === videos.length - 1"
        >
          ⬇️
        </button>
      </div>
    </div>

    <div v-else class="loading-text">No videos found.</div>

    <div v-if="videos.length" class="video-info">
      <h3>{{ videos[currentIndex].title }}</h3>
      <p>{{ videos[currentIndex].source }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const videos = ref([]);
const currentIndex = ref(0);
const videoPlayer = ref(null);
const isMuted = ref(true);
const loading = ref(true);

// 🧠 Fetch videos
const fetchVideos = async () => {
  try {
    const res = await axios.get("https://cubuubackendlive.vercel.app/api/admin_videos");
    videos.value = res.data;
  } catch (err) {
    console.error("Error fetching videos:", err);
  } finally {
    loading.value = false;
  }
};

// 🔊 Toggle mute (only for <video>)
const toggleMute = () => {
  const video = videoPlayer.value;
  if (video) {
    isMuted.value = !isMuted.value;
    video.muted = isMuted.value;
  }
};

// ⬆️⬇️ Next / Previous
const nextVideo = () => {
  if (currentIndex.value < videos.value.length - 1) currentIndex.value++;
};
const prevVideo = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

// 🔁 Replay (only for <video>)
const replayVideo = () => {
  const video = videoPlayer.value;
  if (video) {
    video.currentTime = 0;
    video.play();
  }
};

// 🧩 Helpers
const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

const formatYouTubeUrl = (url) => {
  const videoId = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted.value ? 1 : 0}`;
};

onMounted(fetchVideos);
</script>

<style scoped>
.shorts-feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000;
  color: white;
}

.loading-text {
  color: #bbb;
  font-size: 1.2rem;
}

.video-container {
  position: relative;
  width: 400px;
  height: 700px;
  background: #111;
  border-radius: 12px;
  overflow: hidden;
}

.video-player-wrapper {
  width: 100%;
  height: 100%;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controls {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.control-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.video-info {
  text-align: center;
  margin-top: 15px;
}

.video-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.video-info p {
  margin: 4px 0 0;
  color: gray;
  font-size: 0.9rem;
}
</style>