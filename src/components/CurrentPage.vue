<template>
	<div>
		<header>
			<div class="logo-container">
				<!-- <img src="../assets/COBEF_LOGO.png" alt="Cobef International Limited Logo" class="logo" /> -->
			</div>
			<div class="route-name">
				<h1>{{ currentRouteName }}</h1>
				<router-link to="/" class="link">COBEF</router-link> / <span>{{ currentPage }}</span>
			</div>
			<navbar />
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
	background-color: #ffffff;
	border: 1px solid;
	border-radius: 5px;
	padding: 5px;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo-container img {
	width: 100px;
	height: 100px;
	border: 5px solid;
	border-radius: 50%;
}

.route-name h1 {
	text-transform: uppercase;
	color: #111111;
	letter-spacing: 2px;
	font-size: 40px;
	margin-bottom: 15px;
}

.route-name span {
	color: orange;
	font-size: 18px;
}

.route-name .link {
	color: #111111;
	font-size: 18px;
}

.route-name .link:hover {
	text-decoration: underline;
}

@media only screen and (max-width: 600px) {
	header {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.logo-container img {
		width: 70px;
		height: 70px;
	}

	.route-name {
		line-height: 15px;
		align-items: center;
		margin-right: 50px;
	}

	.route-name h1 {
		font-size: 25px;
	}

	.route-name span {
		font-size: 15px;
	}

	.route-name .link {
		font-size: 15px;
	}
}
</style>