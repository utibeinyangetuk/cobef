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
	const x = e.clientX - 16; // Adjust based on your margin-left value
	const y = e.clientY - 18; // Adjust based on your margin-top value

	cursor.value.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	cursorFollower.value.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

const onMouseEnter = () => {
	cursorFollower.value.classList.add("hover");
};

const onMouseLeave = () => {
	cursorFollower.value.classList.remove("hover");
};

onMounted(() => {
	document.addEventListener("mousemove", onMouseMove);
	document.body.style.cursor = "none"; // Hide default cursor

	// select the elements you want to apply the hover effects on
	const hoverableElements = document.querySelectorAll(
		"a,button,span,li"
	);
	hoverableElements.forEach((element) => {
		element.addEventListener("mouseenter", onMouseEnter);
		element.addEventListener("mouseleave", onMouseLeave);
	});
});

onUnmounted(() => {
	document.removeEventListener("mousemove", onMouseMove);
	document.body.style.cursor = ""; // Reset default cursor

	const hoverableElements = document.querySelectorAll(
		"a,button,span,li"
	);
	hoverableElements.forEach((element) => {
		element.removeEventListener("mouseenter", onMouseEnter);
		element.removeEventListener("mouseleave", onMouseLeave);
	});
});
</script>

<style scoped>
.cursor-container {
	position: relative;
}

.custom-cursor-follower {
	position: fixed;
	top: 0;
	left: 0;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	pointer-events: none;
	z-index: 10000;
	transition: transform 0.2s ease-out;
	background-color: var(--sec-background);
}

.custom-cursor-follower {
	width: 30px;
	height: 30px;
	border: 1px solid #ffffe3;
	mix-blend-mode: difference;
	transition: transform 0.2s ease-out, width 0.3s ease-out,
		height 0.3s ease-out;
}

.custom-cursor-follower.hover {
	width: 60px;
	height: 60px;
}
</style>