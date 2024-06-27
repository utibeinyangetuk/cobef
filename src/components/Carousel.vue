<template>
	<div class="carousel">
		<div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
			<div class="carousel-item" v-for="(image, index) in images" :key="index">
				<img :src="image" :alt="'Slide ' + index" />
			</div>
		</div>
		<button class="carousel-control prev" @click="prevSlide">&#10094;</button>
		<button class="carousel-control next" @click="nextSlide">&#10095;</button>
		<div class="carousel-indicators">
			<span v-for="(image, index) in images" :key="index" class="indicator" :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const props = defineProps({
		images: {
			type: Array,
			required: true,
		},
	});
	const currentIndex = ref(0);
	const prevSlide = () => (currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1);
	const nextSlide = () => (currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1);
	const goToSlide = (index) => (currentIndex.value = index);
	let timer;
	const autoSlide = () => (timer = setInterval(() => nextSlide(), 3000));
	autoSlide();
</script>

<style scoped>
	.carousel {
		position: relative;
		width: 100%;
    height: 90vh;
		margin: auto;
		overflow: hidden;
	}

	.carousel-inner {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.carousel-item {
		min-width: 100%;
		box-sizing: border-box;
	}

	.carousel-item img {
		width: 100%;
		height: 90vh;
		display: block;
    background-repeat: no-repeat;
	}

	.carousel-control {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
		color: white;
		font-size: 20px;
		cursor: pointer;
		padding: 10px;
		height: 50px;
    width: 50px;
    border-radius: 50%;
	}

	.carousel-control.prev {
		left: 10px;
	}

	.carousel-control.next {
		right: 10px;
	}

	.carousel-indicators {
		position: absolute;
		bottom: 10px;
		width: 100%;
		text-align: center;
	}

	.indicator {
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 0 5px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		cursor: pointer;
	}

	.indicator.active {
		background-color: white;
	}
</style>
