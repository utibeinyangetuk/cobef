<template>
	<currentPage />
	<div class="container">
		<p>
			Cobef International Ltd retains quality delivery and clients satisfaction as its driving force. Based ISO certification, we are guided by the
			highest safety and quality standards to ensure that our clients receive the highest levels of satisfaction in addition to the commercial
			experience necessary to address technically challenging projects.
		</p>
		<h1>we manufacture</h1>
		<div class="wrapper">
			<div class="image-container">
				<img src="../assets/materials/HDPE-Pipe.jpg" alt="HDPE pipes" class="grid-image" />
				<div class="image-overlay">HDPE Pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/LAPETA.jpg" alt="Lapeta" class="grid-image" />
				<div class="image-overlay">Lapeta</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/Tank.jpeg" alt="Tanks" class="grid-image" />
				<div class="image-overlay">Tanks</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/Pipe1.jpg" alt="Pipes" class="grid-image" />
				<div class="image-overlay">Pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/PRESURE.jpg" alt="Pressure pipes" class="grid-image" />
				<div class="image-overlay">Pressure pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Suction Hose" class="grid-image" />
				<div class="image-overlay">Suction Hose</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Garden Tubes" class="grid-image" />
				<div class="image-overlay">Garden Tubes</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Jerry Cans" class="grid-image" />
				<div class="image-overlay">Jerry Cans</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Fittings" class="grid-image" />
				<div class="image-overlay">Fittings</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Image 4" class="grid-image" />
				<div class="image-overlay">Image 4</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Image 4" class="grid-image" />
				<div class="image-overlay">Image 4</div>
			</div>
			<div class="image-container">
				<img src="../assets/materials/#" alt="Image 4" class="grid-image" />
				<div class="image-overlay">Image 4</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
	import Footer from '@/components/Footer.vue';
	import currentPage from '../components/CurrentPage.vue';
</script>

<style scoped>
	.container {
		padding: 20px;
	}

	.container p {
		letter-spacing: 1.3px;
		line-height: 2em;
		font-size: 17px;
		font-weight: 400;
		margin-bottom: 20px;
	}

	.container h1 {
		text-align: center;
		color: orange;
		text-transform: capitalize;
		font-size: 40px;
		letter-spacing: 2px;
		margin-bottom: 20px;
	}

	.wrapper {
		gap: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.image-container {
		position: relative;
		overflow: hidden;
		display: inline-block;
	}

	.grid-image {
		width: 100%;
		height: 250px;
		display: block;
		border: 1px solid;
		border-radius: 5px;
		transition: transform 0.5s ease-out;
	}

	.image-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		text-align: center;
		padding: 10px;
		transform: translateY(100%);
		transition: transform 0.5s ease-out;
	}

	.image-container:hover .image-overlay {
		transform: translateY(0);
	}

	@media only screen and (max-width: 600px) {
		.container p {
			font-size: 14px;
		}
		.container h1 {
			font-size: 35px;
		}
		.wrapper {
			display: flex;
			flex-direction: column;
		}
	}
</style>
