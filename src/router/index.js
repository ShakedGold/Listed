import { createRouter, createWebHistory } from 'vue-router'

import Profile from '../views/ProfileView.vue'
import Home from '../views/HomeView.vue'
import PostCreation from '../views/PostView.vue'
import LogIn from '../views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/post', component: PostCreation },
    { path: '/login', component: LogIn },
  ]
})

export default router
