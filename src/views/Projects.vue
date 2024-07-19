<script setup>
import image4 from '@/assets/projects/four.jpg';
import image1 from '@/assets/projects/one.jpg';
import image3 from '@/assets/projects/three.jpg';
import image2 from '@/assets/projects/two.jpg';
import Footer from '@/components/Footer.vue';
import ImageCarousel from '@/components/ImageCarousel.vue';
import Navbar from '@/components/Navbar.vue';
const trips = [image1, image2, image3, image4];
</script>
<template>
	<Navbar />
	<div class="container">
		<div class="header">
			<p>Our Projects</p>
			<h2>
				COBEF INTERNATIONAL LIMITED retains quality delivery and clients satisfaction as its driving force. Based on
				ISO certification, we are guided by the highest safety and quality standards to
				ensure that our clients receive the highest levels of satisfaction in addition to the commercial experience
				necessary to address technically challenging projects.
			</h2>
		</div>
		<p class="heading">Our Portfolio</p>
		<div class="content">
			<div class="works-wrapper">
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS IN OGONI LAND</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN GBARAIN KINGDOM</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>RETICULATION OF ELEME WATER SUPPLY SCHEME</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus aperiam corrupti a
						necessitatibus accusantium porro! Voluptatum libero rem eos officia porro ex, nesciunt illum hic eum
						debitis exercitationem voluptates.</p>
				</div>
			</div>
		</div>
		<p class="heading">Visuals from our trips</p>
		<div class="carousel">
			<ImageCarousel :images="trips" class="image-carousel" />
		</div>
		<p class="client-heading">Our Clients</p>
		<div class="logos">
			<div class="logos-slide">
				<img src="../assets/client logos/ALCON.png" />
				<img src="../assets/client logos/briscoegroup.jpg" />
				<img src="../assets/client logos/darycet.webp" />
				<img src="../assets/client logos/julius berger.jpg" />
				<img src="../assets/client logos/kinetic.png" />
				<img src="../assets/client logos/shell.jpg" />
			</div>
			<div class="logos-slide" aria-hidden="true">
				<img src="../assets/client logos/ALCON.png" />
				<img src="../assets/client logos/briscoegroup.jpg" />
				<img src="../assets/client logos/darycet.webp" />
				<img src="../assets/client logos/julius berger.jpg" />
				<img src="../assets/client logos/kinetic.png" />
				<img src="../assets/client logos/shell.jpg" />
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.container {
	background-color: #000000;
}

.header {
	padding: 60px;
}

.header p {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 50px;
	margin-top: 40px;
	margin-bottom: 40px;
	font-weight: bold;
	color: #ffffe3;
}

.header h2 {
	font-weight: 400;
	font-size: 34px;
	letter-spacing: 1px;
	line-height: 1.6em;
	color: #535349;
	border-bottom: 1px dashed #5353497a;
	padding-bottom: 50px;
}

.heading {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 50px;
	margin-top: 0px;
	margin-bottom: 40px;
	font-weight: bold;
	color: #ffffe3;
	padding: 0px 0px 0px 60px;
	border: 1px dashed #5353497a;
	align-content: center;
	height: 100px;
}

.content {
	border: 1px dashed #5353497a;
	padding: 0px 60px 0px 0px;
}

.works-wrapper {
	display: flex;
	flex-wrap: wrap;
	padding: 0 200px 0px 60px;
	border: 1px dashed #5353497a;
}

.works {
	width: 50%;
	border: 1px dashed #5353497a;
	border-top: none;
	padding: 40px;
}

.works h2 {
	text-transform: capitalize;
	margin-bottom: 20px;
	color: #ffffe3;
}

.works h1 {
	color: #ffffe3;
	font-size: 30px;
	font-family: poppins;
	letter-spacing: 1px;
	margin-bottom: 20px;
	text-transform: uppercase;
}

.works p {
	color: #535349;
	line-height: 1.9em;
}

.carousel {
	border: 1px dashed #5353497a;
}

.image-carousel {
	border: 1px dashed #5353497a;
}

.client-heading {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 50px;
	margin-top: 0px;
	/* margin-bottom: 40px; */
	font-weight: bold;
	color: #ffffe3;
	padding: 0px 0px 0px 60px;
	border: 1px dashed #5353497a;
	align-content: center;
	height: 100px;
}

.logos {
	overflow: hidden;
	padding: 60px 0;
	background-image: var(--checkered-background);
	background-size: var(--checkered-background-size);
	white-space: nowrap;
	position: relative;
}

.logos:hover .logos-slide {
	animation-play-state: paused;
}

/*
.logos::before,
.logos::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 150px;
	height: 100%;
	content: "";
	z-index: 2;
	background: linear-gradient( #000000ca,#000000);
}
*/
.logos-slide {
	display: inline-block;
	animation: 30s slide linear infinite;
}

.logos-slide img {
	height: 70px;
	margin: 0 40px;
	filter: grayscale();
}

@keyframes slide {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-100%);
	}
}
</style>