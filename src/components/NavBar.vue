<script setup>
import NavMenu from './NavMenu.vue';
</script>

<template>
	<div class="page-container">
		<div class="logo">
			<h1>Cobef</h1>
		</div>
		<NavMenu />
	</div>
</template>
<style scoped>
.page-container {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	border-bottom: 1px solid #5353497a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	background-color: var(--primary-background)
}

.logo {
	display: flex;
	justify-content: flex-start;
	padding: 60px;
}

.logo h1 {
	font-size: 20px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke-width: 0.4px;
	-webkit-text-stroke-color: #ffffff;
	white-space: nowrap;
}
</style>