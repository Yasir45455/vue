<template>
  <section class="admin-videos">
    <header class="controls">
      <h1>Admin Videos</h1>

      <div class="filters">
        <input
          v-model="q"
          placeholder="Search title..."
          class="input"
          @input="page = 1"
        />

        <select v-model="category" class="select" @change="page = 1">
          <option value="">All Categories</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>

        <select v-model="source" class="select" @change="page = 1">
          <option value="">All Sources</option>
          <option v-for="s in sources" :key="s" :value="s">{{ s }}</option>
        </select>

        <input
          v-model="tag"
          placeholder="Filter by tag..."
          class="input tag-input"
          @input="page = 1"
        />

        <div class="meta">
          <small>{{ filtered.length }} result(s)</small>
          <button class="btn" @click="resetFilters">Reset</button>
        </div>
      </div>
    </header>

    <main>
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading videos...</p>
      </div>

      <div v-if="error" class="error">
        <p>Error loading videos: {{ error }}</p>
      </div>

      <div v-if="!loading && !error && filtered.length === 0" class="empty">
        <p>No videos match your filters.</p>
      </div>

      <div class="grid" v-if="!loading && !error && filteredPage.length">
        <article v-for="video in filteredPage" :key="video._id" class="card">
          <a :href="video.url" target="_blank" rel="noopener noreferrer" class="thumb-link">
            <img :src="thumbnailFor(video.url)" :alt="video.title" class="thumb" />
          </a>

          <div class="card-body">
            <h3 class="title">{{ video.title }}</h3>

            <div class="meta-row">
              <span class="badge">{{ video.category || '—' }}</span>
              <span class="muted">• {{ video.source || '—' }}</span>
            </div>

            <p class="created">Added: {{ formatDate(video.createdAt) }}</p>

            <div class="tags">
              <span
                v-for="t in cleanTags(video.tags)"
                :key="t + video._id"
                class="tag"
                @click="applyTag(t)"
              >{{ t }}</span>
            </div>
          </div>
        </article>
      </div>

      <footer class="pagination" v-if="filtered.length > perPage">
        <button class="pg-btn" :disabled="page === 1" @click="page--">Prev</button>
        <span>Page {{ page }} / {{ totalPages }}</span>
        <button class="pg-btn" :disabled="page === totalPages" @click="page++">Next</button>
      </footer>
    </main>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

// state
const videos = ref([])
const loading = ref(false)
const error = ref('')
const q = ref('')
const category = ref('')
const source = ref('')
const tag = ref('')
const page = ref(1)
const perPage = ref(12) // cards per page

// fetch
const fetchVideos = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await axios.get('https://cubuubackendlive.vercel.app/api/admin_videos')
    // expect array
    videos.value = Array.isArray(res.data) ? res.data : []
  } catch (err) {
    console.error(err)
    error.value = err?.response?.data?.message || err.message || 'Failed to fetch'
  } finally {
    loading.value = false
  }
}

onMounted(fetchVideos)

// computed helpers
const categories = computed(() => {
  const s = new Set()
  videos.value.forEach(v => { if (v.category) s.add(v.category) })
  return [...s].sort()
})

const sources = computed(() => {
  const s = new Set()
  videos.value.forEach(v => { if (v.source) s.add(v.source) })
  return [...s].sort()
})

const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()
  const tagTerm = tag.value.trim().toLowerCase()

  return videos.value.filter(v => {
    // title filter
    if (term && !(v.title || '').toLowerCase().includes(term)) return false

    // category filter
    if (category.value && (v.category || '') !== category.value) return false

    // source filter
    if (source.value && (v.source || '') !== source.value) return false

    // tag filter (check any tag contains)
    if (tagTerm) {
      const tags = (v.tags || []).map(t => (t || '').toLowerCase().trim())
      if (!tags.some(t => t.includes(tagTerm))) return false
    }

    return true
  })
})

// pagination
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))

const filteredPage = computed(() => {
  // clamp page
  if (page.value > totalPages.value) page.value = totalPages.value
  const start = (page.value - 1) * perPage.value
  return filtered.value.slice(start, start + perPage.value)
})

// small utilities
const parseYouTubeId = (url = '') => {
  // supports watch?v=, short, embed etc.
  // try multiple regexes
  const patterns = [
    /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([A-Za-z0-9_-]{6,})/,
  ]
  for (const r of patterns) {
    const m = url.match(r)
    if (m && m[1]) return m[1]
  }
  return null
}

const thumbnailFor = (url) => {
  const id = parseYouTubeId(url)
  if (!id) return placeholderThumb()
  // use maxres if possible but fallback to default
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

const placeholderThumb = () => {
  // SVG data URI placeholder
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">
      <rect width="100%" height="100%" fill="#e9eef6"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#7b8aa5" font-size="20">No Thumbnail</text>
    </svg>
  `)
}

const formatDate = (iso) => {
  if (!iso) return '—'
  try {
    const d = new Date(iso)
    if (isNaN(d)) return iso
    return d.toLocaleString()
  } catch {
    return iso
  }
}

const cleanTags = (tags = []) => {
  return (Array.isArray(tags) ? tags : [])
    .map(t => (t || '').trim())
    .filter(t => t.length > 0)
}

// UI interactions
const resetFilters = () => {
  q.value = ''
  category.value = ''
  source.value = ''
  tag.value = ''
  page.value = 1
}

const applyTag = (t) => {
  tag.value = t
  page.value = 1
}
</script>

<style scoped>
/* Layout */
.admin-videos {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem 2rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #0f172a;
}

/* Header & filters */
.controls {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.controls h1 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.2px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  background: #fbfdff;
  padding: 0.6rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(12, 20, 40, 0.04);
}

.input, .select, .tag-input {
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  border: 1px solid #e6eef7;
  min-width: 180px;
  outline: none;
  font-size: 0.95rem;
}

.select {
  background: white;
}

.meta {
  margin-left: auto;
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.btn {
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  color: white;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(3, 102, 214, 0.12);
}

/* Loading / error */
.loading, .error, .empty {
  text-align: center;
  padding: 2rem 0;
  color: #334155;
}

.spinner {
  width: 48px;
  height: 48px;
  margin: 0 auto 0.6rem;
  border-radius: 50%;
  border: 5px solid rgba(15,23,42,0.08);
  border-top-color: #0ea5e9;
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg) } }

/* Grid & card */
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 980px) { .grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1200px) { .grid { grid-template-columns: repeat(4, 1fr); } }

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(12,20,40,0.06);
  display: flex;
  flex-direction: column;
  transition: transform .18s ease, box-shadow .18s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(12,20,40,0.09);
}

.thumb-link {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  position: relative;
  overflow: hidden;
}

.thumb {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Card body */
.card-body {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 700;
  color: #07203a;
}

.meta-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: #475569;
  font-size: 0.86rem;
}

.badge {
  background: #eff6ff;
  color: #1e40af;
  padding: 0.18rem 0.45rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.78rem;
}

.created {
  margin: 0;
  color: #6b7280;
  font-size: 0.82rem;
}

.tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.tag {
  background: #f1f5f9;
  padding: 0.25rem 0.45rem;
  border-radius: 999px;
  font-size: 0.78rem;
  cursor: pointer;
  user-select: none;
}
.tag:hover { transform: translateY(-2px); }

/* pagination */
.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pg-btn {
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid #e6eef7;
  background: white;
  cursor: pointer;
}
.pg-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>