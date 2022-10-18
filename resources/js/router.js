import { createWebHistory, createRouter } from "vue-router";

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    name: 'AboutUs',
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
