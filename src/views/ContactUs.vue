<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>

	<div class="container">
		<Navbar />
		<div class="header">
			<p>Get in touch</p>
			<h2>Do you want to <a href="#">start a project</a>,<br> <a href="#">join the team</a> or just say hi?<br> we'd
				love to hear from you.</h2>
		</div>
		<div class="location-container">
			<p>Our Office</p>
			<div class="information">
				<img src="../assets/homepage-images/cobef-building.jpeg" />
				<div class="details">
					<h1>Port Harcourt, Nigeria</h1>
					<h2>Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt</h2>
					<a href="mailto:info@cobefinternationalltd.com">info@cobefinternationalltd.com</a>
					<a href="tel:+1234567890">+(234) 567-890-9123</a>
					<a href="https://www.google.com/maps/place/Cobef+International+Limited/@4.8610877,7.0891647,17.42z/data=!4m9!1m2!2m1!1sKm+17+Port+Harcourt%2FAba+Express+Way+P.+O.+Box,+2769+Port+Harcourt!3m5!1s0x1069d2ad21ae86bd:0x46fb3e4446572965!8m2!3d4.860476!4d7.0880525!16s%2Fg%2F11hzhc6m0m?entry=ttu"
						target="_blank">View in maps</a>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.container {
	background-color: #000000;
	background-image: var(--checkered-background);
	background-size: var(--checkered-background-size);
}

.header {
	margin-top: 0px;
	border-left: 1px dashed #5353497a;
	border-right: 1px dashed #5353497a;
	margin: 60px 40px 0 40px;
	padding: 40px;
	display: flex;
	align-items: center;
}

.header p {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 70px;
	line-height: 2em;
	margin-bottom: 40px;
	font-weight: bolder;
	color: #ffffe3;
	width: 50%;
}

.header h2 {
	padding: 20px;
	font-weight: 400;
	font-size: 35px;
	line-height: 2.5em;
	color: #535349;
	width: 50%;
	border: 1px dashed #5353497a;
}

.header h2 a {
	color: #ffffe3;
	text-decoration: underline;
	text-transform: uppercase;
	line-height: 1.6em;
}

.location-container {
	border: 1px solid #5353497a;
}

.location-container p {
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

.information {
	display: flex;
	padding: 0px 0px 0px 40px;
}

.information img {
	border: 1px dashed #5353497a;
	padding: 7px;
}

.details {
	display: flex;
	flex-direction: column;
}

.details h1,
.details h2,
.details a {
	border: 1px dashed #5353497a;
	padding: 20px;
	margin-left: 10px;
	margin-right: 40px;
	margin-top: 5px;
	margin-bottom: 5px;
	color: #ffffe3;
	font-size: 36px;
	letter-spacing: 2px;
}

.details a:hover {
	text-decoration: underline;
}
</style>