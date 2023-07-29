import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '../scripts/auth'

import Profile from '../views/ProfileView.vue'
import Home from '../views/HomeView.vue'
import PostCreation from '../views/PostView.vue'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'
import ListView from '../views/ListView.vue'
import Test from '../views/Test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'Home', meta: { requiresAuth: true } }, // Add meta field for authentication check
    { path: '/user/:username', component: Profile, name: 'User', meta: { requiresAuth: true } },
    { path: '/post', component: PostCreation, name: 'Post', meta: { requiresAuth: true } },
    { path: '/login', component: LogIn, name: 'Login', },
    { path: '/signup', component: SignUp, name: 'Signup', },
    { path: '/list/:name', component: ListView, name: 'List', },
  ],
});

export let requestedPath = null; // Variable to store the requested path

// check if user is authenticated
router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  getCurrentUser().then((user) => {
    isAuthenticated = true;

  }).catch((error) => {
    isAuthenticated = false;
  }).finally(() => {
    if (to.meta.requiresAuth && !isAuthenticated) {
      // Redirect the user to the login page
      requestedPath = to.path;
      next('/login');
    }
    else {
      // Continue to the requested route
      next();
    }
  });
});

export default router
