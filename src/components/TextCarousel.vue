<template>
	<div class="carousel-container">
		<div class="carousel-content" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
			<h2>{{ slide.header }}</h2>
			<p>{{ slide.text }}</p>
		</div>
		<div class="carousel-controls">
			<button @click="prevSlide"><i class="uil uil-angle-left" /></button>
			<div class="indicators">
				<span v-for="(slide, index) in slides" :key="index" :class="{ 'active': currentSlide === index }"
					@click="goToSlide(index)">
				</span>
			</div>
			<button @click="nextSlide"><i class="uil uil-angle-right" /></button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
let timer = 0;
// Define slides data
const slides = ref([
	{ header: 'Respect', text: 'We demonstrate respect among colleagues, customers and suppliers.' },
	{ header: 'Integrity ', text: ' Trustworthy and undiluted productions.' },
	{ header: 'Innovation ', text: 'We drive change and challenge the status quo to exceed our customers expectation. ' },
	{ header: 'Consistency ', text: ' Constantly maintains high level quality standards.' },
	{ header: 'Cooperation ', text: 'We work as a team to achieve our common vision. ' },
	{ header: 'Customer Convenience', text: 'We serve our customers to save their time and efforts. ' },
	{ header: 'Customer Satisfaction ', text: 'Making sure customers expectations are met timely. ' },
]);

// Current slide index
const currentSlide = ref(0);

// Navigate to the next slide
const nextSlide = () => {
	currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

// Navigate to the previous slide
const prevSlide = () => {
	currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// Navigate to a specific slide
const goToSlide = (index) => {
	currentSlide.value = index;
};
const autoSlide = () => (timer = setInterval(() => nextSlide(), 3000));
autoSlide();
</script>

<style scoped>
.carousel-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: auto;
	padding: 20px;
	height: 60vh;
	border-radius: 0 40px;
}

.carousel-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-bottom: 20px;
}

.carousel-content h2 {
	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;
	font-size: 60px;
	color:var(--hover-color);
}

.carousel-content p {
	font-size: 1em;
	font-weight: 200;
	letter-spacing: 2px;
	margin-top: 12px;
	color:var(--pry-text);
}

.carousel-controls {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 25%;
}

.carousel-controls button {
	background: transparent;
	color: #ffffff;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 30px;
}

.indicators {
	display: flex;
	gap: 10px;
}

.indicators span {
	display: block;
	width: 10px;
	height: 10px;
	background-color: var(--sec-text);
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.indicators span.active {
	background-color: #ffffe3;
}

.indicators span:hover {
	background-color: #ffffe3;
}
</style>