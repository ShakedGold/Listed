import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '../scripts/auth'

import Profile from '../views/ProfileView.vue'
import Home from '../views/HomeView.vue'
import PostCreation from '../views/PostView.vue'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, meta: { requiresAuth: true } }, // Add meta field for authentication check
    { path: '/profile', component: Profile, meta: { requiresAuth: true }, props: { user: getCurrentUser() } },
    { path: '/post', component: PostCreation, meta: { requiresAuth: true } },
    { path: '/login', component: LogIn },
    { path: '/signup', component: SignUp },
  ],
});

// check if user is authenticated
router.beforeEach((to, from, next) => {
  const isAuthenticated = getCurrentUser() !== null;

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect the user to the login page
    next('/login');
  } else {
    // Continue to the requested route
    next();
  }
});

export default router
