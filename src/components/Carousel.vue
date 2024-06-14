<template>
	<div class="carousel">
		<!-- Left arrow -->
		<button class="carousel-arrow uil uil-arrow-left" @click="prev" />
		<div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
			<div v-for="(image, index) in images" :key="index" class="carousel-slide">
				<img :src="image" alt="Carousel Slide" class="carousel-image" />
			</div>
		</div>
		<!-- Right arrow -->
		<button class="carousel-arrow uil uil-arrow-right" @click="next" />

		<div class="indicators">
			<span v-for="index in images" :key="index" :class="{ active: index === currentIndex }" @click="goTo(index)" class="indicator"></span>
		</div>
	</div>
</template>

<script setup>
	import { onUnmounted, ref, toRefs } from 'vue';

	const props = defineProps({
		images: {
			type: Array,
			required: true,
		},
	});
	const { images } = toRefs(props);
	const currentIndex = ref(0);

	const next = () => {
		currentIndex.value = (currentIndex.value + 1) % images.value.length;
	};

	const prev = () => {
		currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
	};

	const goTo = (index) => {
		currentIndex.value = index;
	};

	// Automatic sliding
	let timer;
	const autoSlide = () => {
		timer = setInterval(() => {
			next();
		}, 3000);
	};

	autoSlide();

	onUnmounted(() => {
		clearInterval(timer);
	});
</script>

<style scoped>
	.indicators {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		background-color: #000;
		padding:5px;
		border-radius: 10px;
	}

	.indicator {
		width: 10px;
		height: 10px;
		margin: 0 5px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		cursor: pointer;
	}

	.indicator.active {
		background-color:#fff;
	}

	.carousel {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 572px;
	}

	.carousel-inner {
		display: flex;
		transition: transform 0.5s ease;
		height: 100%;
	}

	.carousel-slide {
		min-width: 100%;
		box-sizing: border-box;
		height: 100%;
	}

	.carousel-image {
		width: 100%;
		height: 100%;
	}

	.carousel-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: #000;
		border-radius: 5px;
		border: none;
		color: white;
		font-size: 2.4rem;
		cursor: pointer;
		z-index: 1000;
		opacity: 0.7;
	}
	.uil-arrow-left {
		left: 10px;
	}

	.uil-arrow-right {
		right: 10px;
	}

	.carousel-arrow:hover {
		color: #ddd;
	}

	/** media query **/
	@media only screen and (max-width: 600px) {
		.carousel {
			height: 300px;
		}
	}
</style>
