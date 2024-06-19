<script setup>
import CurrentPage from '@/components/CurrentPage.vue';
import Footer from '@/components/Footer.vue';
import ImageSlot from '@/slots/Image-slot.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateTo = (path) => router.push(path);
</script>

<template>
	<CurrentPage />
	<div class="main-wrapper">
		<ImageSlot class="container1">
			<template v-slot:title>
				<h2>Our workforce</h2>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/#')" class="button">Take a tour</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container2">
			<template v-slot:title>
				<h2>About us</h2>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/#')" class="button">Learn more</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container3">
			<template v-slot:title>
				<h2>Products/Services</h2>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/#')" class="button">View Catalog</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container4">
			<template v-slot:title>
				<h2>We are hiring</h2>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/#')" class="button">Apply Now</button>
			</template>
		</ImageSlot>
	</div>
	<Footer />
</template>
<style scoped>
.container4 {
	background-image: url(../assets/homepage-images/hiring.jpg);
	background-position: center;
}

.container2 {
	background-image: url(../assets/homepage-images/aboutus.jpg);
	background-position: center;
}

.container3 {
	background-image: url(../assets/homepage-images/bluepipes.jpg);
	background-position: center;
}

.container1 {
	background-image: url(../assets/homepage-images/company.jpg);
}

.container1,
.container2,
.container3,
.container4 {
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	position: relative;
}

h2 {
	letter-spacing: 2px;
	font-size: 8vw;
	text-transform: capitalize;
	margin-top: 10px;
	color: #ffffff;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.button {
	background-color: white;
	border: none;
	border-radius: 5px;
	padding: 15px 30px;
	font-size: 30px;
	font-weight: bold;
	cursor: pointer;
	transition: transform 0.4s ease, box-shadow 0.5s ease;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	letter-spacing: 2px;
	text-transform: uppercase;
}

.button:hover {
	transform: translateY(-5px);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) {
	.button {
		font-size: 15px;
		padding: 14px;
	}

	.container1,
	.container2,
	.container3,
	.container4 {
		height: 60vh;
	}

	.container4 {
		width: 100%;
	}

	h2 {
		margin-top: 100px;
	}
}
</style>
