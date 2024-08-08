<script setup>
const trips = [image1, image2, image3, image4];
import image4 from "@/assets/projects/four.jpg";
import image1 from "@/assets/projects/one.jpg";
import image3 from "@/assets/projects/three.jpg";
import image2 from "@/assets/projects/two.jpg";
import ImageCarousel from "@/components/ImageCarousel.vue";
</script>
<template>
	<div class="container">
		<div class="header">
			<h1 class="heading">Projects</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
				alias, iste atque laboriosam ab soluta officiis, qui, vitae
				accusantium assumenda aliquid. Ipsa consectetur delectus repellendus
				numquam perspiciatis molestias suscipit! Est. Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Iusto beatae soluta eius delectus
				atque veniam nam quisquam, excepturi ab alias quod id rem, error,
				blanditiis pariatur harum similique illum nihil. Lorem ipsum dolor
				sit, amet consectetur adipisicing elit. Eligendi, architecto! Quasi
				tempora numquam odio? Excepturi sit hic, similique eius distinctio
				tempore ullam fugiat cupiditate voluptates recusandae? Vero qui aut
				maiores.
			</p>
		</div>
		<div class="content">
			<h1 class="heading">Portfolio</h1>
			<div class="works-wrapper">
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>
						REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS IN
						OGONI LAND
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>
						MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN
						GBARAIN KINGDOM
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>RETICULATION OF ELEME WATER SUPPLY SCHEME</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
				<div class="works">
					<h2>Jan 29, 2022</h2>
					<h1>
						supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia possimus aperiam corrupti a necessitatibus
						accusantium porro! Voluptatum libero rem eos officia porro ex,
						nesciunt illum hic eum debitis exercitationem voluptates.
					</p>
				</div>
			</div>
		</div>
		<div class="carousel">
			<h1 class="heading">Visuals from our trips</h1>
			<ImageCarousel :images="trips" class="image-carousel" />
		</div>
		<div class="logos">
			<h1 class="heading">Clients</h1>
			<div class="logos-slide">
				<img src="../assets/client logos/ALCON.png" />
				<img src="../assets/client logos/briscoegroup.png" />
				<img src="../assets/client logos/darycet.webp" />
				<img src="../assets/client logos/julius-berger.png" />
				<img src="../assets/client logos/kinetic.png" />
				<img src="../assets/client logos/shell.png" />
				<img src="../assets/client logos/rivers-state.png" />
				<img src="../assets/client logos/Hyprep.png" />
			</div>
			<div class="logos-slide" aria-hidden="true">
				<img src="../assets/client logos/ALCON.png" />
				<img src="../assets/client logos/briscoegroup.png" />
				<img src="../assets/client logos/darycet.webp" />
				<img src="../assets/client logos/julius-berger.png" />
				<img src="../assets/client logos/kinetic.png" />
				<img src="../assets/client logos/shell.png" />
				<img src="../assets/client logos/rivers-state.png" />
				<img src="../assets/client logos/Hyprep.png" />
			</div>
		</div>
	</div>
</template>
<style scoped>
.container {
	margin-top: 50px;
}

.header {
	padding: 0 40px;
	text-align: center;
}

.heading {
	text-transform: uppercase;
	font-size: 2em;
	color: var(--pry-text-color);
	margin-bottom: 0.4em;
	text-align: center;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header p {
	line-height: 2.3em;
	font-size: 1rem;
	text-align: center;
	letter-spacing: 1px;
	margin-bottom: 1em;
	color: var(--sec-text-color);
}

.works-wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	width: 100%;
	padding: 0 40px;
}

.works {
	width: fit-content;
	border: var(--pry-border);
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 1em;
}

.works h1 {
	color: var(--pry-text-color);
	font-size: 1.6em;
	text-transform: uppercase;
	line-height: 1.4em;
	margin-bottom: 10px;
}

.works h2 {
	color: var(--sec-text);
	font-size: 12px;
	margin-bottom: 10px;
}

.works p {
	width: 100%;
	color: var(--sec-text-color);
	line-height: 2em;
}
.carousel .heading {
	width: 100%;
}

.logos {
	overflow: hidden;
	white-space: nowrap;
	position: relative;
}
.logos .heading {
	padding: 10px;
	width: 100%;
	margin-top: 30px;
}

@keyframes slide {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-100%);
	}
}

.logos-slide {
	display: inline-block;
	animation: 30s slide linear infinite;
	padding: 20px;
}

.logos-slide img {
	height: 50px;
	margin: 0 40px;
}

@media only screen and (max-width: 768px) {
	.header {
		padding: 0 10px;
	}
	.header p {
		text-align: center;
	}
	.works-wrapper {
		display: flex;
		flex-direction: column;
		padding: 0 10px;
	}
	.works {
		width: 100%;
	}
	.works h1 {
		font-size: 1.2em;
		width: 100%;
	}
	.works p {
		width: 100%;
	}
	.carousel .heading {
		font-size: 1.5em;
	}
}
</style>
