<template>
	<div class="content-container">
		<slot name="title"></slot>
		<div class="button-container">
			<slot name="button1"></slot>
			<slot name="button2"></slot>
		</div>
	</div>
</template>

<style scoped>
	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100vh;
		padding: 80px;
		position: relative;
		overflow: hidden;
		text-align: center;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 50px;
	}
	@media screen and (max-width: 600px) {
		.button-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding: 50px;
		}
		.content-container {
			padding: 0px;
		}
	}
</style>
