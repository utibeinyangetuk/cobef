<template>
	<div>
		<currentPage />
		<div class="container">
			<p>
				Cobef International Ltd retains quality delivery and clients satisfaction as its driving force. Based on ISO certification, we are guided by the highest safety and quality standards to
				ensure that our clients receive the highest levels of satisfaction in addition to the commercial experience necessary to address technically challenging projects.
			</p>
			<h1>We Manufacture</h1>
			<div class="grid-wrapper">
				<div class="image-card" v-for="image in images" :key="image.alt">
					<img :src="image.src" :alt="image.alt" class="card-image" />
					<div class="card-overlay">{{ image.alt }}</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script setup>
	import currentPage from '@/components/CurrentPage.vue';
	import Footer from '@/components/Footer.vue';

	const images = [
		{ src: new URL('../assets/materials/HDPE-Pipe.jpg', import.meta.url).href, alt: 'HDPE Pipes' },
		{ src: new URL('../assets/materials/LAPETA.jpg', import.meta.url).href, alt: 'Lapeta' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Tanks' },
		{ src: new URL('../assets/materials/Pipe1.jpg', import.meta.url).href, alt: 'Pipes' },
		{ src: new URL('../assets/materials/PRESURE.jpg', import.meta.url).href, alt: 'Pressure pipes' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Suction Hose' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Garden Tubes' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Jerry Cans' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Fittings' },
		{ src: new URL('../assets/materials/Tank.jpeg', import.meta.url).href, alt: 'Fittings' },
	];
</script>
<style scoped>
	.container {
		padding: 20px;
		max-width: 1200px;
		margin: auto;
		text-align: center;
	}

	.container p {
		letter-spacing: 1.3px;
		line-height: 2em;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 20px;
	}

	.container h1 {
		color: #f57c00;
		text-transform: capitalize;
		font-size: 2.8rem;
		letter-spacing: 2px;
		margin-bottom: 20px;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.image-card {
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
		transition: transform 0.3s ease-in-out;
	}

	.card-image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.card-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		color: #fff;
		text-align: center;
		padding: 10px;
		transition: transform 0.3s ease-in-out;
	}

	.image-card:hover {
		transform: translateY(-10px);
	}

	.image-card:hover .card-overlay {
		transform: translateY(0);
	}

	@media (max-width: 600px) {
		.container p {
			font-size: 0.875rem;
		}
		.container h1 {
			font-size: 2rem;
		}
		.grid-wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
