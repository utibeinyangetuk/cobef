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
							<router-link :to="link.path" @click.native="closeMenu">{{ link.name }}</router-link>
						</li>
					</ul>
				</nav>
				<!-- Footer section -->
				<footer class="menu-footer">
					<!-- <h1>Keep in touch with us</h1> -->
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
import { ref } from "vue";
import { useRouter } from "vue-router";

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

const closeMenu = () => {
	isOpen.value = false;
};

const isActive = (route) => {
	return router.currentRoute.value.path === route;
};

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Products", path: "/products" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

const formatNumber = (number) => {
	return number < 10 ? `0${number}` : number;
};
</script>

<style scoped>
div {
	background-color: var(--pry-background);
}

.hamburger-menu {
	position: absolute;
	top: -5px;
	right: 0px;
	z-index: 1000;
	background: none;
	border: none;
	cursor: none;
	padding: 30px;
	transition: transform 0.5s ease;
	border-left: var(--pry-border);
}

.hamburger-menu span {
	display: block;
	width: 30px;
	height: 2px;
	margin-bottom: 5px;
	background-color: var(--sec-background);
	border: none;
	border-radius: 5px;
	transition: transform 0.6s ease, background-color 0.3s ease;
}

.hamburger-menu.open span:nth-child(1) {
	transform: translateY(13px) rotate(45deg);
}

.hamburger-menu.open span:nth-child(2) {
	opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
	transform: translateY(-2px) rotate(-45deg);
}

.hamburger-menu.open {
	position: absolute;
}

.hamburger-menu.open span {
	background-color: var(--sec-background);
}

.slide-fade-enter-active {
	animation: slide-in 1s ease forwards;
}

.slide-fade-leave-active {
	animation: slide-out 1s ease forwards;
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
		transform: translateY(0);
		opacity: 1;
	}

	to {
		transform: translateY(100%);
		opacity: 0;
	}
}

.fullscreen-menu {
	border-radius: 20px;
	position: fixed;
	top: 1.6%;
	left: 61.6%;
	width: 35vw;
	height: 98vh;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background: var(--ter-background);
	background-size: var(--ter-background-size);
	background-color: var(--pry-background);
	box-shadow: var(--box-shadow);
	border: var(--pry-border);
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
	list-style: none;
	margin: 0;
	padding: 10px;
	border: var(--sec-border);
}

.fullscreen-menu nav ul li {
	display: flex;
	align-items: center;
	padding: 10px;
	text-transform: uppercase;
	font-size: 30px;
	letter-spacing: 2px;
	border: var(--sec-border);
	margin-bottom: 10px;
}

.fullscreen-menu nav ul li .link-number {
	margin-right: 10px;
	color: var(--sec-text);
	transition: color 0.6s ease-in-out;
	font-size: 12px;
}

.fullscreen-menu nav ul li a {
	text-decoration: none;
	transition: color 0.6s ease-in-out;
	color: #ffffe3a6;
}

.fullscreen-menu nav ul li:hover .link-number,
.fullscreen-menu nav ul li:hover a {
	color: var(--link-hover);
	transition: 0.6s ease-in-out;
}

.fullscreen-menu nav ul li.active {
	background-color: var(--sec-background);
	border-radius: 10px;
}

.fullscreen-menu nav ul li.active a {
	color: var(--pry-text);
}

/*
.menu-footer {
	width: 94%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
}

.menu-footer h1 {
	font-size: 12px;
	letter-spacing: 2px;
	color: #ffffe381;
	text-transform: uppercase;
}
*/
.social-icons {
	list-style: none;
	display: flex;
	align-items: center;
	text-align: center;
	gap: 6px;
}

.social-icons li {
	padding: 10px;
	font-size: 30px;
	color: var(--sec-text);
	transition: 0.6s ease-in-out;
}

.social-icons li:hover {
	color: var(--link-hover);
	transition: 0.6s ease-in-out;
}
</style>