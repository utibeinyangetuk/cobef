<template>
	<currentPage />
	<div class="container">
		<p>
			Cobef International Ltd retains quality delivery and clients satisfaction as its driving force. Based ISO
			certification, we are guided by the
			highest safety and quality standards to ensure that our clients receive the highest levels of satisfaction in
			addition to the commercial
			experience necessary to address technically challenging projects.
		</p>
		<h1>we manufacture</h1>
		<div class="wrapper">
			<div class="image-container">
				<img src="../assets/HDPE-Pipe.jpg" alt="HDPE pipes" class="grid-image" />
				<div class="image-overlay">HDPE Pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/LAPETA.jpg" alt="Lapeta" class="grid-image" />
				<div class="image-overlay">Lapeta</div>
			</div>
			<div class="image-container">
				<img src="../assets/Tank.jpeg" alt="Tanks" class="grid-image" />
				<div class="image-overlay">Tanks</div>
			</div>
			<div class="image-container">
				<img src="../assets/Pipe1.jpg" alt="Pipes" class="grid-image" />
				<div class="image-overlay">Pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/PRESURE.jpg" alt="Pressure pipes" class="grid-image" />
				<div class="image-overlay">Pressure pipes</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Suction Hose" class="grid-image" />
				<div class="image-overlay">Suction Hose</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Garden Tubes" class="grid-image" />
				<div class="image-overlay">Garden Tubes</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Jerry Cans" class="grid-image" />
				<div class="image-overlay">Jerry Cans</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Fittings" class="grid-image" />
				<div class="image-overlay">Fittings</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Image 4" class="grid-image" />
				<div class="image-overlay">Image 4</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Image 4" class="grid-image" />
				<div class="image-overlay">Image 4</div>
			</div>
			<div class="image-container">
				<img src="../assets/#" alt="Image 4" class="grid-image" />
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
	min-height: 250px;
	min-width: 300px;
	padding: 5px;
}

.grid-image {
	width: 100%;
	height: 250px;
	display: block;
	border: 1px solid;
	border-radius: 5px;
	transition: filter 0.3s ease;
}

.image-overlay {
	font-size: 25px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/**background-color: rgba(255, 255, 255, 0.8);**/
	text-align: center;
	color: #000000;
	font-weight: bold;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	opacity: 0;
	transition: opacity 0.3s ease;
	pointer-events: none;
}

.image-container:hover .grid-image {
	filter: blur(15px);
}

.image-container:hover .image-overlay {
	opacity: 1;
}
</style>