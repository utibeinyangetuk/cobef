<template>
	<currentPage />
	<div class="wrapper">
		<p>
			COBEF INTERNATIONAL LIMITED retains quality delivery and clients satisfaction as its driving force. Based on ISO certification, we are guided
			by the highest safety and quality standards to ensure that our clients receive the highest levels of satisfaction in addition to the
			commercial experience necessary to address technically challenging projects.
		</p>
		<div class="projects">
			<h2>projects we have completed.</h2>
			<ul>
				<li>REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS, IN OGONI LAND</li>
				<li>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</li>
				<li>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</li>
				<li>MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN GBARAIN KINGDOM</li>
				<li>RETICULATION OF ELEME WATER SUPPLY SCHEME</li>
				<li>supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni</li>
			</ul>
		</div>
		<div class="gallery">
			<h2>Gallery</h2>
			<div class="carousel">
				<carousel :images="ProjectImages" />
			</div>
		</div>
		<div class="clients">
			<h2>Our clients</h2>
			<div class="client-container">
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Hydrocarbon Pollution Remediation Project (HYPREP)</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/darycet.webp" alt="company logo" />
					<li>Darycent International</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/briscoeGroup.jpg" alt="company logo" />
					<li>Briscoe Group Limited</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Ministry of Water and Rural Development Rivers State</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/shell.jpg" alt="company logo" />
					<li>Shell Petroleum Development Company</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/julius berger.jpg" alt="company logo" />
					<li>Julius Berger</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/kinetic.png" alt="company logo" />
					<li>Kinetic Electromechanic Nigeria Limited</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Top Engineering International</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Felian Ventures</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Cylon Nigeria Limited</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Altruist Ideals</li>
				</div>
				<div class="client-item">
					<img src="../assets/client logos/#" alt="company logo" />
					<li>Alcon Nigeria Limited</li>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
	import image4 from '@/assets/projects/four.jpg';
	import image1 from '@/assets/projects/one.jpg';
	import image3 from '@/assets/projects/three.jpg';
	import image2 from '@/assets/projects/two.jpg';
	import carousel from '../components/Carousel.vue';
	import currentPage from '../components/CurrentPage.vue';
	import Footer from '../components/Footer.vue';

	const ProjectImages = [image1, image2, image3, image4];
</script>
<style scoped>
	.wrapper {
		padding: 20px;
	}

	.wrapper P {
		letter-spacing: 1.3px;
		line-height: 2em;
		font-size: 17px;
		font-weight: 400;
		margin-bottom: 20px;
	}

	.projects {
		border: 1px solid;
		border-radius: 5px;
		padding: 10px;
		background-color: #020e2a;
		color: #ffffff;
		margin-bottom: 2em;
	}

	.projects h2 {
		color: orange;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
	}

	.projects ul {
		margin-left: 30px;
	}

	.projects li {
		list-style-type: disc;
		letter-spacing: 1.3px;
		line-height: 3em;
		font-size: 14px;
		text-transform: uppercase;
	}

	.gallery {
		margin-bottom: 2em;
		background-color: #020e2a;
	}

	.gallery h2 {
		text-align: center;
		color: orange;
		letter-spacing: 2px;
		font-size: 35px;
		text-transform: uppercase;
	}

	.clients {
		margin-top: 0.5em;
		/*border: 1px solid;*/
		border-radius: 5px;
		/*background-color: #020e2a;*/
	}

	.clients h2 {
		text-align: center;
		color: orange;
		letter-spacing: 2px;
		font-size: 35px;
		text-transform: uppercase;
		margin-bottom: 0.5em;
	}

	.client-container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: flex-start;
	}

	.client-item {
		display: flex;
		align-items: center;
		flex: 1 1 auto;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.client-item img {
		max-width: 50px;
		margin-right: 10px;
	}

	.client-item li {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@media only screen and (max-width: 600px) {
		.wrapper {
			padding: 10px;
		}
		.wrapper p {
			line-height: 1.7em;
			font-size: 15px;
			text-align: left;
		}
		.projects h2 {
			font-size: 17px;
			text-align: center;
			margin-bottom: 13px;
		}
		.projects ul {
			margin-left: 15px;
		}
		.projects li {
			letter-spacing: 0px;
			line-height: 1.7em;
			margin-bottom: 20px;
			font-size: 14px;
		}
		.clients li {
			font-size: 14px;
		}
		.clients h2{
			background-color: #020e2a;
			border-radius: 5px;
		}
	}
</style>
