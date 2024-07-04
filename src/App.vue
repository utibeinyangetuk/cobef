<template>
	<RouterView />
	<CustomCursor />
</template>

<script setup>
import CustomCursor from "./components/CustomCursor.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html {
	scroll-behaviour: smooth;
}
body, a, * {
	overflow: hidden;
	cursor:none;
}
#app {
	font-family: "Poppins", sans-serif;
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
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: #000000;
	}

	::-webkit-scrollbar-thumb {
		background: orange;
		border-radius: 10px;
	}
}
</style>
