<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
	<div class="main-container">
		<div class="main-wrapper">
			<div class="header">
				<p>
					Great products elevate your business. Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Voluptatem quasi ullam aperiam
					veniam id sunt, ipsa, nemo enim illum quo placeat eaque ipsam
					deleniti, recusandae unde perferendis dolorem nostrum architecto!
				</p>
				<div class="video-wrapper">
					<video autoplay muted loop>
						<source src="../assets/videos/video.mp4" type="video/mp4" />
						Sorry, your browser does not support this video tag.
					</video>
				</div>
			</div>
			<div class="about-us-wrapper">
				<div class="large-header">
					<h1>
						<span>.Beyond visions.</span> <br />
						.within reach.
					</h1>
				</div>
				<div class="content">
					<div class="company-video">
						<video autoplay muted loop>
							<source src="../assets/videos/video.mp4" type="video/mp4" />
							Sorry, your browser does not support this video tag.
						</video>
					</div>
					<div class="vision-text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sunt ducimus blanditiis repudiandae adipisci aspernatur
							laborum corporis unde explicabo commodi officiis, magnam
							quaerat repudiandae adipisci aspernatur laborum corporis
							unde explicabo commodi officiis, magnam quaerat dolor
							saepe, veniam voluptatum maxime. Itaque, dolorem numquam.
							<br /><br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sunt ducimus blanditiis repudiandae adipisci aspernatur
							laborum corporis unde explicabo commodi officiis, magnam
							quaerat repudiandae adipisci aspernatur laborum corporis
							unde explicabo commodi officiis, magnam quaerat dolor
							saepe, veniam voluptatum maxime. Itaque, dolorem numquam.
						</p>
						<router-link to="/about">
							About us <i class="uil uil-arrow-right" />
						</router-link>
					</div>
				</div>
			</div>
			<div class="featured-products">
				<div class="product-heading">
					<h1>Featured Products</h1>
					<div class="description">
						<p>
							A selection of someof our best produts Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Libero, doloremque iste!
							Illum aperiam, maiores eaque eligendi velit aut, provident
							nesciunt tempora accusantium ducimus qui beatae perferendis!
						</p>
						<router-link to="/products">View all products<i class="uil uil-arrow-right" /></router-link>
					</div>
				</div>
				<div class="product-container">
					<div class="product-card">
						<div class="image-wrapper">
							<img src="../assets/materials/hdpe.jpg" />
						</div>
						<h1>Hdpe pipes</h1>
					</div>
					<div class="product-card">
						<div class="image-wrapper">
							<img src="../assets/materials/Tank.jpeg" />
						</div>
						<h1>Tanks</h1>
					</div>
					<div class="product-card">
						<div class="image-wrapper">
							<img src="../assets/materials/pressure.jpg" />
						</div>
						<h1>Pressure pipes</h1>
					</div>
					<div class="product-card">
						<div class="image-wrapper">
							<img src="../assets/materials/LAPETA.jpg" />
						</div>
						<h1>Lapeta</h1>
					</div>
				</div>
			</div>
			<div class="vacancy-container">
				<div class="vacancy-header">
					<h1>Want to work with us?</h1>
					<P>Benefits include Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus et quae eaque
						odio maxime magnam accusantium corrupti modi reiciendis? Totam minus reprehenderit fugiat, numquam
						consectetur omnis rerum aliquid corrupti repellendus?</P>
				</div>
				<div class="vacancy">
					<div class="hiring-image-wrapper">
						<img src="../assets/homepage-images/hiring.jpg" />
					</div>
					<div class="hiring-text-wrapper">
						<span class=""></span>
						<h2>We are hiring</h2>
						<ul>
							<li>Nysc Corpers</li>
							<li>Student Interns</li>
							<li>Full-time workers</li>
							<li>Contract Workers</li>
						</ul>
						<div class="button-wrapper">
							<router-link to="/contact">Contact us<i class="uil uil-arrow-right" /></router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.main-container {
	margin-top: 30px;
	background: var(--ter-background);
	background-size: var(--ter-background-size);
	background-color: var(--pry-background);
}

.main-wrapper {
	border: var(--pry-border);
	border-top: 0;
	border-left: 0;
	border-right: 0;
}

.header {
	padding: var(--pry-padding);
}

.header p {
	width: 50%;
	line-height: 1.5em;
	margin-bottom: 20px;
	color: var(--sec-text);
}

.video-wrapper video {
	border-radius: 20px;
	width: 100%;
	box-shadow: var(--box-shadow);
}

.about-us-wrapper {
	background-color: var(--sec-background);
}

.large-header h1 {
	font-size: 100px;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow: var(--text-shadow);
	line-height: 1.2em;
	color: var(--ter-text);
	margin-left: 20px;
}

.large-header span {
	margin-left: 240px;
}

.content {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	gap: 40px;
}

.company-video {
	width: 200vw;
	margin-top: 10%;
	box-shadow: var(--box-shadow);
	border-radius: 0.4em;
}

.company-video video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.vision-text {
	margin-left: 20px;
}

.vision-text p {
	font-size: 15px;
	font-weight: 400;
	line-height: 1.5em;
	letter-spacing: 1px;
	margin-bottom: 20px;
	padding: 10px;
	color: #001317;
}

.vision-text a {
	background-color: transparent;
	text-transform: capitalize;
	font-weight: bold;
	padding: 13px 20px;
	transition: 1s ease-in-out;
	border-radius: 0.4em;
	margin-left: 10px;
	border: 1px solid #000000;
	font-size: 14px;
	color: var(--ter-text);
	letter-spacing: 1px;
}

.vision-text a:hover {
	transition: 1s ease-in-out;
	background-color: #000000;
	color: #ffffff;
}

.product-heading {
	display: flex;
	align-items: center;
	padding: 10px;
	margin-top: 15px;
}

.product-heading h1 {
	width: 100%;
	font-size: 80px;
	color: var(--pry-text);
}

.product-heading .description {
	width: 40%;
	height: 160px;
}

.description p {
	margin-bottom: 20px;
	color: var(--sec-text);
	font-size: 14px;
	line-height: 1.5em;
}

.description a {
	background-color: transparent;
	text-transform: capitalize;
	font-weight: bold;
	padding: 13px;
	transition: 1s ease-in-out;
	border-radius: 0.4em;
	border: 1px solid #ffffe3a9;
	font-size: 14px;
	color: var(--pry-text);
	letter-spacing: 2px;
}

.description a:hover {
	background: var(--sec-background);
	color: #000000;
}

.product-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	padding: 10px;
	margin-top: 20px;
}

.product-card {
	height: 500px;
	width: 600px;
}

.product-card .image-wrapper {
	border-radius: 20px;
	height: 400px;
}

.product-card .image-wrapper img {
	width: 100%;
	object-fit: cover;
}

.product-card h1 {
	margin-left: 20px;
	margin-top: 5px;
	text-transform: uppercase;
	font-size: 40px;
	color: var(--pry-text);
}

.vacancy-container {
	border: var(--pry-border);
	border-right: none;
	border-left: none;
	border-bottom: 0;
	background: var(--checkered-background);
	background-size: var(--checkered-background-size);
	background-repeat: repeat;
}

.vacancy-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}

.vacancy-header p {
	width: 30%;
	margin-top: 20px;
	color: var(--sec-text);
	font-size: 14px;
	line-height: 1.5em;
}

.vacancy-header h1 {
	font-size: 50px;
	color: #ffffe3;
	text-transform: capitalize;
	margin-left: 40px;
	letter-spacing: 2px;
	margin-top: 20px;
}

.vacancy {
	padding: 50px;
	display: flex;
	position: relative;
	align-items: center;
}

.hiring-image-wrapper {
	height: 400px;
	width: 700px;
	border-radius: 10px;
	margin-left: 100px;
}

.hiring-image-wrapper img {
	width: 100%;
}

.hiring-text-wrapper {
	height: fit-content;
	width: 500px;
	background-color: #B9C089;
	border: var(--solid-border);
	position: absolute;
	left: 750px;
	border-radius: 10px;
	padding: 20px;
	box-shadow: var(--box-shadow);
}

.hiring-text-wrapper h2 {
	color: #001317;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 700;
	font-family: poppins;
	font-size: 2.25rem;
	margin-left: 8px;
}

.hiring-text-wrapper ul {
	padding: 10px;
}

.hiring-text-wrapper ul li {
	color: #001317;
	font-size: 17px;
	font-weight: 700;
	letter-spacing: 1.5px;
	line-height: 1.8em;
	text-transform: uppercase;
}

.button-wrapper {
	margin-top: 10px;
	padding: 13px;
	border: 1px solid #001317;
	width: fit-content;
	border-radius: 5px;
	display: flex;
	align-items: center;
	margin-left: 10px;
	transition: 0.6s ease-in-out;
}

.button-wrapper a {
	color: #001317;
	font-weight: 700;
	letter-spacing: 2px;
	font-size: 0.7em;
	text-transform: uppercase;
}

.button-wrapper a:hover {
	color: #ffffff;
}

.button-wrapper:hover {
	background-color: #000000;
	transition: 0.6s ease-in-out;
}
</style>