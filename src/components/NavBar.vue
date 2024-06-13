<template>
	<div>
		<!-- Hamburger menu -->
		<button @click="toggleMenu" :class="{ open: isOpen }" class="hamburger-menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<!-- Fullscreen menu -->
		<transition name="slide-fade">
			<div v-if="isOpen" class="fullscreen-menu">
				<!-- Menu items -->
				<nav>
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/about">About us</router-link></li>
						<li><router-link to="/products">Our products</router-link></li>
						<li><router-link to="/projects">Projects</router-link></li>
						<li><router-link to="/contact">Contact us</router-link></li>
					</ul>
				</nav>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() =>
			func.apply(this, args), delay);
	};
};
const toggleMenu = debounce(() => {
	isOpen.value = !isOpen.value;
}, 100);
</script>

<style scoped>
.hamburger-menu {
	position: fixed;
	top: 40px;
	right: 20px;
	z-index: 1000;
	background: none;
	border: none;
	cursor: pointer;
	padding: 10px;
	transition: transform 0.5s ease;
}

.hamburger-menu span {
	display: block;
	width: 35px;
	height: 6px;
	margin-bottom: 5px;
	background-color: #fff;
	border: 1px solid;
	border-radius: 5px;
	transition: transform 0.6s ease, background-color 0.3s ease;
}

.hamburger-menu.open span:nth-child(1) {
	transform: translateY(14px) rotate(45deg);
}

.hamburger-menu.open span:nth-child(2) {
	opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
	transform: translateY(-9px) rotate(-45deg);
}

.hamburger-menu.open span {
	background-color: #ffffff;
}

.slide-fade-enter-active {
	animation: slide-in 0.5s ease forwards;
}

.slide-fade-leave-active {
	animation: slide-out 0.5s ease forwards;
}

@keyframes slide-in {
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateX(0);
		opacity: 1;
	}

	to {
		transform: translateX(100%);
		opacity: 0;
	}
}

.fullscreen-menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #111111;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
}

.fullscreen-menu nav ul {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	padding: 0;
}

.fullscreen-menu nav ul li {
	margin-top: 30px;
	padding: 10px;
	letter-spacing: 1.2px;
	text-transform: uppercase;
}

.fullscreen-menu nav ul li a:hover {
	border: 1px solid #ffffff;
	border-radius: 5px;
}

.fullscreen-menu nav ul li a {
	text-decoration: none;
	font-size: 24px;
	transition: color 0.3s;
	border-radius: 5px;
	padding: 5px;
	color: #ffffff;
	font-weight: bold;
}

@media only screen and (max-width: 600px) {
	.hamburger-menu {
		top: 30px;
		right: 8px;
	}

	.hamburger-menu span {
		width: 30px;
		height: 5px;
	}

	.hamburger-menu.open span:nth-child(1) {
		transform: translateY(10px) rotate(45deg);
	}
}
</style>