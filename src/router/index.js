import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomePage.vue'),
		},
		{
			path: '/about',
			name: 'About Us',
			component: () => import('../views/AboutPage.vue'),
		},
		{
			path: '/contact',
			name: 'Contact Us',
			component: () => import('../views/ContactUs.vue'),
		},
		{
			path: '/careers',
			name: 'careers',
			component: () => import('../views/Careers.vue')
		},
		{
			path: '/products',
			name: 'Products',
			component: () => import('../views/Products.vue'),
		},
		{
			path: '/projects',
			name: 'Projects',
			component: () => import('../views/Projects.vue'),
		},
	],
});

export default router;
