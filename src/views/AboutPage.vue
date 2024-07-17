<script setup>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import TextCarousel from "@/components/TextCarousel.vue";
</script>
<template>
	<Navbar />
	<div class="container">
		<div class="video-wrapper">
			<video autoplay muted loop>
				<source src="../assets/videos/video.mp4" type="video/mp4" />
				Sorry, your browser does not support this video tag.
			</video>
			<!-- <div class="overlay">
				<p>This is cobef</p>
				<h2>Leading company in hdpe manufacturing</h2>
			</div> -->
		</div>
		<div class="company-overview">
			<div class="heading">
				<p>company overview</p>
				<h1>
					<span>Cobef,</span> from <br />
					the ground up
				</h1>
			</div>
			<div class="description">
				<p>
					Esse commodo amet reprehenderit laboris consequat aute ipsum et
					aliquip aute. Cillum quis eu velit excepteur anim quis. Anim
					ipsum in enim quis quis dolore amet in veniam ea magna culpa.
					Dolore sit Lorem pariatur excepteur dolor cupidatat aute velit
					labore. Qui veniam deserunt consectetur culpa eu aliquip enim id.
					Anim magna eu et incididunt non aliqua sint nulla velit
					incididunt.
					<br />
					Dolore eiusmod pariatur labore ea labore quis esse exercitation
					proident nostrud tempor. Sunt esse Lorem do est tempor. Ipsum
					nulla pariatur do ipsum adipisicing cillum enim eiusmod id ex
					aute.
					<br />
					Et dolore mollit cupidatat aute consectetur laborum in. Officia
					consequat minim pariatur cupidatat ullamco veniam anim ut sunt
					mollit ex. Non mollit culpa eiusmod magna cillum labore commodo
					reprehenderit consequat non est. Elit enim in minim minim id id
					irure nulla nulla aute duis ullamco qui. Non veniam aliquip in
					qui nulla eiusmod. Eiusmod nisi nostrud elit laboris sint.
				</p>
			</div>
		</div>
		<div class="mission">
			<p>our mission</p>
			<h1>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero
				nulla quasi, illum veritatis deleniti incidunt nam ratione alias
				doloremque soluta ea asperiores vel temporibus odio cupiditate?
				Distinctio, dicta reiciendis?
			</h1>
		</div>
		<div class="mission">
			<p>our vision</p>
			<h1>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero
				nulla quasi, illum veritatis deleniti incidunt nam ratione alias
				doloremque soluta ea asperiores vel temporibus odio cupiditate?
				Distinctio, dicta reiciendis?
			</h1>
		</div>
		<div class="mission">
			<p>our Quality</p>
			<h1>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero
				nulla quasi, illum veritatis deleniti incidunt nam ratione alias
				doloremque soluta ea asperiores vel temporibus odio cupiditate?
				Distinctio, dicta reiciendis?
			</h1>
		</div>
		<div class="core-values">
			<p>our<br>core<br>values</p>
			<TextCarousel class="carousel" />
		</div>
		<div class="team">
			<div class="team-heading">
				<p>Meet the team</p>
				<h1>Board of<br> <span>directors</span></h1>
			</div>
			<div class="profile-container">
				<div class="profile-card">
					<img src="../assets/homepage-images/iso1.avif" />
					<h2>John Doe</h2>
					<p>Ceo</p>
				</div>
				<div class="profile-card">
					<img src="../assets/homepage-images/iso1.avif" />
					<h2>John Doe</h2>
					<p>Ceo</p>
				</div>
				<div class="profile-card">
					<img src="../assets/homepage-images/iso1.avif" />
					<h2>John Doe</h2>
					<p>Ceo</p>
				</div>
				<div class="profile-card">
					<img src="../assets/homepage-images/iso1.avif" />
					<h2>John Doe</h2>
					<p>Ceo</p>
				</div>
			</div>
		</div>
		<div class="certifications">
			<p>certificatons</p>
			<div class="certifications-wrapper">
				<img src="../assets/certificates/ISO.jpg" alt="certification" />
				<img src="../assets/certificates/Mancap.jpg" alt="certification" />
				<img src="../assets/certificates/MemCert.jpg" alt="certification" />
				<img src="../assets/certificates/MemComence.jpg" alt="certification" />
				<img src="../assets/certificates/ISO.jpg" alt="certification" />
				<img src="../assets/certificates/ISO.jpg" alt="certification" />
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.container {
	background-color: #000000;
}

.video-wrapper {
	border: 1px dashed #5353497a;
	margin-top: 60px;
	margin-right: 40px;
	margin-left: 40px;
	position: relative;
	overflow: hidden;
}

video {
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(3px);
}

/*
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: #ffffe3;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: poppins;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.overlay p {
	letter-spacing: 5px;
	text-transform: uppercase;
	font-size: 15px;
	position: absolute;
	top: 37%;
}

.overlay h2 {
	letter-spacing: 5px;
	text-transform: uppercase;
	font-size: 40px;
}
*/
.company-overview {
	border: var(--solid-border);
	display: flex;
	border-right: none;
}

.heading {
	border: var(--solid-border);
	border-top: 0;
	border-bottom: 0;
	border-right: 0;
	width: 50%;
	margin-left: 40px;
	color: var(--primary-text-color);
	text-transform: uppercase;
	padding: 40px;
}

.heading p {
	margin-bottom: 40px;
	font-size: 16px;
	letter-spacing: 2px;
	color: var(--secondary-text-color);
}

.heading span {
	color: var(--hover-color);
	text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.4);
}

.heading h1 {
	line-height: 1.7em;
	letter-spacing: 2px;
	font-size: 50px;
}

.description {
	border: var(--solid-border);
	width: 70%;
	margin-right: 40px;
	padding: 40px;
	border-top: 0;
	border-bottom: 0;
}

.description p {
	color: var(--secondary-text-color);
	line-height: 2.3em;
}

.mission {
	border-bottom: var(--solid-border);
	padding: 60px;
}

.mission p {
	color: var(--secondary-text-color);
	text-transform: uppercase;
	font-size: 20px;
	margin-bottom: 25px;
	letter-spacing: 1px;
}

.mission h1 {
	color: var(--primary-text-color);
	width: 80%;
	line-height: 1.6em;
	font-size: 40px;
}

.core-values {
	border: var(--solid-border);
	margin-right: 40px;
	margin-left: 40px;
	border-top: 0;
	border-bottom: 0;
	display: flex;
	align-items: center;
}

.core-values p {
	color: var(--secondary-text-color);
	text-transform: uppercase;
	font-size: 45px;
	line-height: 1.6em;
	font-weight: bold;
	letter-spacing: 2px;
	padding: 40px;
}

.carousel {
	border: var(--dashed-border);
	border-radius: 0;
	margin: 5px;
}

.team {
	border: var(--solid-border);
	display: flex;
	padding: 0px 0px 0px 39px;
	border-right: 0;
	height: 450px;
}

.team-heading {
	border: var(--solid-border);
	padding: 40px;
	border-top: 0;
	border-bottom: 0;
}

.team-heading p {
	color: var(--secondary-text-color);
	letter-spacing: 2px;
	font-size: 20px;
	margin-bottom: 20px;
}

.team-heading h1 {
	text-transform: capitalize;
	font-weight: bold;
	letter-spacing: 1px;
	font-size: 25px;
	color: var(--primary-text-color);
	line-height: 2em;
}

.team-heading h1 span {
	font-size: 50px;
	text-transform: uppercase;
}

.profile-container {
	padding: 10px;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	flex: 1;
	overflow-y: scroll;
	border-right: var(--solid-border);
	margin-right: 40px;
}

.profile-card {
	width: fit-content;
	height: fit-content;
	border: var(--dashed-border);
	padding: 3px;
}

.profile-card img {
	width: fit-content;
	height: 350px;
}

.profile-card h2 {
	text-transform: Capitalize;
	color: var(--primary-text-color);
	letter-spacing: 1px;
}

.profile-card p {
	font-size: 20px;
	font-weight: bold;
	color: var(--secondary-text-color);
}

.certifications {
	border: var(--solid-border);
	border-top: 0;
	border-right: 0;
	margin-left: 40px;
	margin-right: 40px;
	display: flex;
	gap: 10px;
	height: 550px;
}

.certifications p {
	color: var(--secondary-text-color);
	text-transform: uppercase;
	font-size: 50px;
	padding: 60px;
	font-weight: bold;
	margin-bottom: 25px;
	width: 15%;
	border: var(--solid-border);
	border-top: 0;
	border-left: 0;
	display: flex;
	letter-spacing: 6px;
	writing-mode: vertical-rl;
	height: 550px;
}

.certifications-wrapper {
	width: 100%;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	flex: 1;
	overflow-y: scroll;
	padding: 3px;
}

.certifications-wrapper img {
	width: 49.4%;
	height: 550px;
	border: var(--dashed-border);
	padding: 5px;
}
</style>