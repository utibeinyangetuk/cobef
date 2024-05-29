<template>
	<div>
		<navbar />
		<header>
			<h1>{{ currentRouteName }}</h1>
			<router-link to="/" class="link">Home / </router-link> <span>{{ currentPage }}</span>
		</header>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';
	import navbar from '../components/NavBar.vue';

	const router = useRouter();
	const currentPage = ref('');
	const currentRouteName = ref('');

	onMounted(() => {
		updateCurrentPageInfo(); // Call the function to initially update current page info
	});

	// Function to update current page info
	function updateCurrentPageInfo() {
		currentPage.value = getCurrentPage(); // Update current page title
		currentRouteName.value = getCurrentRouteName(); // Update current route name
	}

	// Helper function to get the current page title
	function getCurrentPage() {
		const currentRoute = router.currentRoute.value; // Access the current route from the router
		return currentRoute.meta.title || 'Unknown'; // Return the title from meta or 'Unknown' if not found
	}

	// Helper function to get the current route name
	function getCurrentRouteName() {
		const currentRoute = router.currentRoute.value; // Access the current route from the router
		return currentRoute.name || 'Unknown';
	}

	// Subscribe to route changes to update currentPage and currentRouteName
	router.afterEach(() => {
		updateCurrentPageInfo(); // Call the function to update current page info on route changes
	});
</script>

<style scoped>
	header {
		background-color: #020e2a;
		padding: 20px;
		text-align: center;
	}

	header h1 {
		text-transform: uppercase;
		color: #ffffff;
		letter-spacing: 2px;
		font-size: 40px;
		margin-bottom: 15px;
	}

	header span {
		color: orange;
		font-size: 18px;
	}

	header .link {
		color: #ffffff;
		font-size: 18px;
		font-weight: bold;
	}

	@media only screen and (max-width: 600px) {
		header {
			text-align: center;
		}

		header h1 {
			font-size: 25px;
			margin-bottom: 10px;
			letter-spacing: 2px;
		}

		header span {
			font-size: 15px;
		}

		header .link {
			font-size: 15px;
		}
	}
</style>
