<template>
	<RouterView />
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	#app {
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
		::-webkit-scrollbar {
			width: 6px;
		}
		::-webkit-scrollbar-track {
			background: #000000;
		}
		::-webkit-scrollbar-thumb {
			background: #fdf5e5;
			border-radius: 10px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #fdf5e5;
		}
	}
</style>
