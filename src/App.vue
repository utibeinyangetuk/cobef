<template>
	<RouterView />
	<CustomCursor />
</template>

<script setup>
import CustomCursor from "./components/CustomCursor.vue";
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
	--primary-background: #000000;
	--primary-text-color: #ffffe3;
	--secondary-text-color: #535349;
	--hover-color: rgb(27, 72, 72);
	--solid-border: 1px solid #5353497a;
	--dashed-border: 1px dashed #5353497a;
}

body,
a,
* {
	overflow: hidden;
	cursor: none;
}

#app {
	/*font-family: "Poppins", sans-serif; */
	font-family: 'Satoshi', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100vh;
	overflow: auto;
	scroll-behavior: smooth;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-decoration: none;
	list-style: none;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-track {
		background: var(--primary-background);
	}

	::-webkit-scrollbar-thumb {
		background: var(--primary-text-color);
		border-radius: 10px;
	}
}
</style>