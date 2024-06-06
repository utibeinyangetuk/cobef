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
			<template v-slot:button1>
				<button @click="navigateTo('/products')" class="button1">View More</button>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/products')" class="button2">Order Now</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container1">
			<template v-slot:title>
				<h2>Our workforce</h2>
			</template>
			<template v-slot:button1>
				<button @click="navigateTo('/products')" class="button1">View More</button>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/products')" class="button2">Order Now</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container1">
			<template v-slot:title>
				<h2>Our workforce</h2>
			</template>
			<template v-slot:button1>
				<button @click="navigateTo('/products')" class="button1">View More</button>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/products')" class="button2">Order Now</button>
			</template>
		</ImageSlot>
		<ImageSlot class="container1">
			<template v-slot:title>
				<h2>Our workforce</h2>
			</template>
			<template v-slot:button1>
				<button @click="navigateTo('/products')" class="button1">View More</button>
			</template>
			<template v-slot:button2>
				<button @click="navigateTo('/products')" class="button2">Order Now</button>
			</template>
		</ImageSlot>
	</div>
	<Footer />
</template>
<style scoped>
	.container1 {
		/* background-image: url(../assets/projects/three.jpg);
  background-repeat: no-repeat;
  background-size: cover; /* Change from 'cover' to 'contain' */
		background-position: center; /* Optional: Center the image */
		height: 100vh; /* Set height to cover the entire viewport */
		position: relative;
	}
	h2 {
		letter-spacing: 2px;
		font-size: 30px;
		text-transform: capitalize;
		margin-top: 100px;
	}
	button {
		padding: 10px 80px;
		border-radius: 5px;
		border: 1px solid gray;
		letter-spacing: 2px;
		cursor: pointer;
		background: transparent;
		font-weight: bold;
		font-size: 17px;
	}
	.button1 {
		background-color: #fff;
		color: #000;
	}
	.button1:hover {
		background-color: #000;
		color: #fff;
	}
	.button2 {
		background-color: #000;
		color: #fff;
	}
	.button2:hover {
		background-color: #fff;
		color: #000;
	}

	@media screen and (max-width: 600px) {
		button {
			font-size: 15px;
			padding: 14px;
		}
		.container1 {
			height: 60vh;
		}
	}
</style>
