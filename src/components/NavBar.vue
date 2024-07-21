<script setup>
import NavMenu from "./NavMenu.vue";
</script>

<template>
	<div class="page-container">
		<div class="logo">
			<h1>Cobef</h1>
		</div>
		<div class="nav-links">
			<router-link to="/about">About</router-link>
			<router-link to="/products">Products</router-link>
			<router-link to="/project">Project</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
		<NavMenu />
	</div>
</template>
<style scoped>
.page-container {
	width: 93.8vw;
	position: absolute;
	top: 0;
	left: 10;
	height: 60px;
	border: var(--pry-border);
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	background-color: var(--pry-background);
	margin-top: 10px;
	border-radius: 20px;
}

.logo {
	display: flex;
	justify-content: flex-start;
	padding: 30px 0px 30px;
}

.logo h1 {
	font-size: 20px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke-width: 0.4px;
	-webkit-text-stroke-color: #ffffff;
	white-space: nowrap;
	margin-left: 40px;
}
.nav-links {
	display: flex;
	justify-content: space-between;
	width: 25%;
	margin-right: 140px;
}
.nav-links a {
	text-transform: uppercase;
	font-size: 13px;
	letter-spacing: 1px;
	transition: 0.6s ease-in-out;
	color: var(--sec-text);
}
.nav-links a:hover {
	transition: 0.6s ease-in-out;
	color: var(--link-hover);
}
</style>
