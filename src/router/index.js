import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage,
			meta: { title: 'Home' },
		},
		{
			path: '/about',
			name: 'About Us',
			component: () => import('../views/AboutPage.vue'),
			meta: { title: 'About Us' },
		},
		{
			path: '/contact',
			name: 'Contact Us',
			component: () => import('../views/ContactUs.vue'),
			meta: { title: 'Contact Us' },
		},
		{
			path: '/products',
			name: 'Products',
			component: () => import('../views/Products.vue'),
			meta: { title: 'Products' },
		},
		{
			path: '/projects',
			name: 'Projects',
			component: () => import('../views/Projects.vue'),
			meta: { title: 'Projects' },
		},
	],
});

export default router;
