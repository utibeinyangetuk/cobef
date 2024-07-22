<template>
	<RouterView />
	<CustomCursor />
	<Navbar />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/satoshi");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
	--pry-background: #000000;
	--sec-background: #b9c089;
	--ter-background: linear-gradient(90deg, #cccccc14 1%, transparent 1%),
		linear-gradient(-1deg, #cccccc14 1%, transparent 5%);
	--ter-background-size: 70.6px 60px;
	--btn-background: #ffb655;
	--pry-text: #ffffe3;
	--sec-text: #535349;
	--ter-text:#001317;
	--link-hover: #b9c089;
	--pry-border: 1px solid #5353497a;
	--sec-border: 1px dashed #5353497a;
	--text-shadow: 2px 9px 3px rgba(0, 0, 0, 1);
	--box-shadow: 5px 5px 5px rgba(0, 0, 0, 1);
	--pry-padding: 40px;
}

body,
a,
* {
	overflow: hidden;
	cursor: none;
}

#app {
	font-family: "Satoshi", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100vh;
	overflow: auto;
	scroll-behavior: smooth;
	padding: 40px 40px 0px;
	background-color: var(--pry-background);
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
		background: var(--pry-background);
	}

	::-webkit-scrollbar-thumb {
		background: var(--sec-background);
		border-radius: 10px;
	}
}
</style>
