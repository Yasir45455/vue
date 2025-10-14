import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AdminVideos from '../components/AdminVideos.vue';
import PostVideo from '../components/PostVideo.vue';
import Payment from '../views/Payment.vue';
import Subscription from '../components/Subscription.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/adminvideos', name: 'AdminVideos', component: AdminVideos },
  { path: '/postvideo', name: 'PostVideo', component: PostVideo },
   { path: '/payment', name: 'Payment', component: Payment },
   { path: '/subscriptions', name: 'Payment', component: Subscription },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;