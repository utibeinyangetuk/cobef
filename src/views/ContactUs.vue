<script setup>
import CurrentPage from '@/components/CurrentPage.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
	<currentPage />
	<div class="container">
		<div class="header">
			<p>Contact us</p>
			<h2>Do you want to <a href="#">start a project</a>,<br> <a href="#">join the team</a> or just say hi?<br> we'd
				love to hear from you.</h2>
		</div>
		<div class="office">
			<p>Our Office</p>
			<div class="information">
				<img src="../assets/homepage-images/company.avif" />
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
	background-color: #10100E;
	padding: 60px;
}

.header {
	width: 70%;
	color: #535349;
	margin-bottom: 70px;
}

.header p {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 14px;
	margin-bottom: 20px;
	font-weight: 700;
	color:#ffffe3
}

.header h2 {
	font-weight: 400;
	font-size: 45px;
	letter-spacing: 1px;
	line-height: 1.6em;
}

.header h2 a {
	color: #ffffe3;
	text-decoration: underline;
	text-transform: uppercase;
}

.office {
	border-top: 1px solid #535349;
	border-bottom: 1px solid #535349;
}

.office p {
	text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 14px;
		margin-bottom: 40px;
		margin-top: 40px;
		font-weight: 700;
		color: #ffffe3
}

.information {
	display: flex;
	gap: 40px;
}

.information img {
	height: 500px;
	border-radius: 10px;
	margin-bottom: 70px;
}

.details {
	display: flex;
	flex-direction:column;
	line-height: 3em;
	color:#ffffe3;
}
.details h1{
	margin-bottom: 20px;
}
.details h2{
	font-size: 1rem;
}
.details a{
	text-decoration: underline;
	letter-spacing: 2px;
	color: #ffffe3;
}
</style>