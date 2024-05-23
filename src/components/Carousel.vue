<template>
	<div class="carousel">
		<div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
			<div v-for="(image, index) in images" :key="index" class="carousel-slide">
				<img :src="image" alt="Carousel Slide" class="carousel-image" />
			</div>
		</div>
		<div class="indicators">
			<span
				v-for="(image, index) in images"
				:key="index"
				:class="{ active: index === currentIndex }"
				@click="goTo(index)"
				class="indicator"
			></span>
		</div>
	</div>
</template>

<script setup>
	import { defineProps, onUnmounted, ref, toRefs } from 'vue';

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

	// const prev = () => {
	// 	currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
	// };

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
		background-color: rgba(255, 255, 255, 1);
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

	/** media query **/
	@media only screen and (max-width: 600px) {
		.carousel {
			height: 300px;
		}
	}
</style>
