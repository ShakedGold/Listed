import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from '../services/auth';

import Home from '../views/HomeView.vue';
import ListView from '../views/ListView.vue';
import LogIn from '../views/LogInView.vue';
import NewPost from '../views/NewPostView.vue';
import PostView from '../views/PostView.vue';
import Profile from '../views/ProfileView.vue';
import SignUp from '../views/SignUpView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: Home, name: 'Home', meta: { requiresAuth: true } }, // Add meta field for authentication check
		{
			path: '/user/:username',
			component: Profile,
			name: 'User',
			meta: { requiresAuth: true },
		},
		{
			path: '/post',
			component: NewPost,
			name: 'NewPost',
			meta: { requiresAuth: true },
		},
		{
			path: '/post/:id',
			component: PostView,
			name: 'Post',
			meta: { requiresAuth: true },
		},
		{ path: '/login', component: LogIn, name: 'Login' },
		{ path: '/signup', component: SignUp, name: 'Signup' },
		{
			path: '/post/:id/:imageName',
			component: PostView,
			name: 'Image',
			meta: { requiresAuth: true },
		},
		{
			path: '/list/:name',
			component: ListView,
			name: 'List',
			meta: { requiresAuth: true },
		},
	],
});

export let requestedPath = null; // Variable to store the requested path

// check if user is authenticated
router.beforeEach(async (to, from, next) => {
	let isAuthenticated = false;
	const currentUser = await getCurrentUser();
	isAuthenticated = !!currentUser;
	if (to.meta.requiresAuth && !isAuthenticated) {
		// Redirect the user to the login page
		requestedPath = to.path;
		next('/login');
	} else {
		// Continue to the requested route
		next();
	}
});

export default router;
