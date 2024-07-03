<template>
	<div class="cursor-container">
		<div ref="cursor" class="custom-cursor"></div>
		<div ref="cursorFollower" class="custom-cursor-follower"></div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const cursor = ref(null);
const cursorFollower = ref(null);

const onMouseMove = (e) => {
	// Calculate the position based on the margin adjustments
	const x = e.clientX - 19; // Adjust based on your margin-left value
	const y = e.clientY - 19; // Adjust based on your margin-top value

	cursor.value.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	cursorFollower.value.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

onMounted(() => {
	document.addEventListener("mousemove", onMouseMove);
	document.body.style.cursor = "none"; // Hide default cursor
});

onUnmounted(() => {
	document.removeEventListener("mousemove", onMouseMove);
	document.body.style.cursor = ""; // Reset default cursor
});
</script>

<style scoped>
.cursor-container {
	position: relative;
}

.custom-cursor,
.custom-cursor-follower {
	position: fixed;
	top: 0;
	left: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	pointer-events: none;
	z-index: 10000;
	transition: transform 0.1s ease-out;
}

.custom-cursor {
	background-color: orange;
	mix-blend-mode: difference;
	margin-left: 19px;
	margin-top: 19px;
}

.custom-cursor-follower {
	width: 50px;
	height: 50px;
	border: 3px solid orange;
	mix-blend-mode: difference;
}
</style>
