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
						<li v-for="(link, index) in links" :key="link.path" :class="{ active: isActive(link.path) }">
							<span class="link-number">{{ formatNumber(index + 1) }}/</span>
							<router-link :to="link.path">{{ link.name }}</router-link>
						</li>
					</ul>
				</nav>
				<!-- Footer section -->
				<footer class="menu-footer">
					<h1>Keep in touch with us</h1>
					<ul class="social-icons">
						<li class="uil uil-facebook" />
						<li class="uil uil-linkedin" />
						<li class="uil uil-envelope" />
						<li class="uil uil-whatsapp" />
					</ul>
				</footer>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isOpen = ref(false);
const router = useRouter();

const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
};

const toggleMenu = debounce(() => {
	isOpen.value = !isOpen.value;
}, 100);

const isActive = (route) => {
	return router.currentRoute.value.path === route;
};

const links = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'products', path: '/products' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Contact', path: '/contact' },
	{ name: 'gallery', path: '/#' },
	{ name: 'services', path: '/#' },
	{ name: 'vacancies', path: '/#' },
	{ name: 'careers', path: '/#' },
];

const formatNumber = (number) => {
	return number < 10 ? `0${number}` : number;
};
</script>

<style scoped>
div {
	background-color: #000000;
}

.hamburger-menu {
	position: fixed;
	top: -10px;
	right: 20px;
	z-index: 1000;
	background: none;
	border: none;
	cursor: none;
	padding: 30px;
	transition: transform 0.5s ease;
}

.hamburger-menu span {
	display: block;
	width: 35px;
	height: 3px;
	margin-bottom: 5px;
	background-color: #ffffe3;
	border: none;
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
	transform: translateY(-3px) rotate(-45deg);
}

.hamburger-menu.open {
	position: fixed;
}

.hamburger-menu.open span {
	background-color: #ffffe3;
}

.slide-fade-enter-active {
	animation: slide-in 1s ease forwards;
}

.slide-fade-leave-active {
	animation: slide-out 1s ease forwards;
}

@keyframes slide-in {
	from {
		transform: translateY(100%);
		opacity: 0;
	}

	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
		opacity: 1;
	}

	to {
		transform: translateY(100%);
		opacity: 0;
	}
}

.fullscreen-menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: 40px;
	border: 2px dashed #5353497a;
}

.fullscreen-menu nav {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: calc(100% - 80px);
	overflow-y: auto;
}

.fullscreen-menu nav ul {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 50px;
	list-style: none;
	margin: 0;
	padding: 10px;
	border: 1px dashed #5353497a;
}

.fullscreen-menu nav ul li {
	display: flex;
	align-items: center;
	padding: 10px;
	text-transform: uppercase;
	font-size: 30px;
	letter-spacing: 2px;
	border: 1px dashed #5353497a;
}

.fullscreen-menu nav ul li .link-number {
	margin-right: 10px;
	color: #535349;
	transition: color 0.3s;
	font-size: 12px;
}

.fullscreen-menu nav ul li a {
	text-decoration: none;
	transition: color 0.3s;
	color: #ffffe3;
}

.fullscreen-menu nav ul li:hover .link-number,
.fullscreen-menu nav ul li:hover a {
	color: rgb(27, 72, 72);
}

.fullscreen-menu nav ul li.active a {
	color: rgb(27, 72, 72);
}

.menu-footer {
	border-top: 1px dashed #5353497a;
	;
	width: 94%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
}

.menu-footer h1 {
	font-size: 12px;
	letter-spacing: 2px;
	color: #535349;
	text-transform: uppercase;
}

.social-icons {
	list-style: none;
	display: flex;
	align-items: center;
	text-align: center;
	gap: 6px;
}

.social-icons li {
	padding: 10px;
	font-size: 25px;
	color: #535349;
}

.social-icons li:hover {
	color: rgb(27, 72, 72)
}
</style>