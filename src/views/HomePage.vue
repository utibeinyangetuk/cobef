<template>
	<div class="container">
		<div class="home-container">
			<video autoplay muted loop>
				<source src="../assets/videos/video.mp4" type="video/mp4" />
				Sorry, your browser does not support this video tag.
			</video>
		</div>
		<div class="about-us-container">
			<div class="header">
				<h1>A deep dive into COBEF</h1>
			</div>
			<div class="about-us-content">
				<div class="company-video">
					<video autoplay muted loop>
						<source src="../assets/videos/video.mp4" type="video/mp4" />
						Sorry, your browser does not support this video tag.
					</video>
				</div>
				<div class="description">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						ducimus blanditiis repudiandae adipisci aspernatur laborum
						corporis unde explicabo commodi officiis, magnam quaerat
						repudiandae adipisci aspernatur laborum corporis laborum
						corporis unde explicabo commodi officiis, magnam quaerat
						repudiandae adipisci aspernatur laborum corporis unde
						explicabo commodi officiis, magnam quaerat dolor saepe, veniam
						voluptatum maxime. Itaque, dolorem.
					</p>
					<div class="link-wrapper">
						<router-link to="/about">
							About us <i class="uil uil-arrow-right" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="team">
			<img src="../assets/homepage-images/team.jpg" />
		</div>
		<div class="product">
			<img src="../assets/homepage-images/product.jpg" />
		</div>
		<div class="project">
			<img src="../assets/homepage-images/project.jpg" />
		</div>
		<div class="hiring">
			<img src="../assets/homepage-images/hiring.jpg" />
		</div>
		<div class="contact">
			<img src="../assets/homepage-images/contact-us.jpg" />
		</div>
	</div>
</template>
<style scoped>
.container {
	margin-top: 50px;
}

.home-container {
	width: 100%;
}

.home-container video {
	width: 100%;
}

.contact,
.team,
.product,
.project,
.hiring {
	width: 100%;
	height: 100%;
	position: relative;
}

.contact img,
.team img,
.product img,
.project img,
.hiring img {
	background-size: cover;
	background-repeat: no-repeat;
	object-fit: fill;
	width: 100%;
	height: 100vh;
}

.about-us-container {
	background-color: var(--sec-background);
}

.header h1 {
	font-size: 0.7em;
	text-transform: capitalize;
	letter-spacing: 2px;
	line-height: 1.2em;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 5px;
	width: fit-content;
	padding: 10px;
	background-color: var(--pry-background);
	color: #ffffe3;
}

.about-us-content {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	gap: 40px;
}

.company-video {
	width: 200vw;
	border-radius: 0.4em;
}

.company-video video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.description {
	margin-left: 20px;
}

.description p {
	font-size: 15px;
	font-weight: 400;
	line-height: 1.8em;
	letter-spacing: 1px;
	margin-bottom: 20px;
	padding: 10px;
	color: #001317;
}

.link-wrapper {
	padding: 15px;
}

.link-wrapper a {
	background-color: transparent;
	text-transform: capitalize;
	font-weight: bold;
	padding: 13px 20px;
	transition: 1s ease-in-out;
	border-radius: 0.4em;
	border: 1px solid #000000;
	font-size: 14px;
	color: var(--ter-text);
	letter-spacing: 1px;
}

.link-wrapper a:hover {
	transition: 1s ease-in-out;
	background-color: #000000;
	color: #ffffff;
}
</style>
