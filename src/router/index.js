import Welcome from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {  
    path: "/",
    name: "",
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
