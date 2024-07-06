<script setup>
import CurrentPage from '@/components/CurrentPage.vue';
import Footer from '@/components/Footer.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import TextCarousel from '@/components/TextCarousel.vue';
</script>
<template>
	<CurrentPage />
	<div class="main-container">
		<div class="video-wrapper">
			<video autoplay muted loop>
				<source src="../assets/videos/video.mp4" type="video/mp4">
				Sorry, your browser does not support this video tag.
			</video>
			<div class="overlay">
				<p>This is cobef</p>
				<h2>Leading company in hdpe manufacturing</h2>
			</div>
		</div>
		<div class="overview">
			<div class="headers">
				<h2>company overview</h2>
				<p>Cobef, from <br> the ground up</p>
			</div>
			<div class="overview-content">
				<p>Esse commodo amet reprehenderit laboris consequat aute ipsum et aliquip aute. Cillum quis eu velit
					excepteur anim quis. Anim ipsum in enim quis quis dolore amet in veniam ea magna culpa. Dolore sit Lorem
					pariatur excepteur dolor cupidatat aute velit labore. Qui veniam deserunt consectetur culpa eu aliquip
					enim id. Anim magna eu et incididunt non aliqua sint nulla velit incididunt.
					<br>
					<br>
					Dolore eiusmod pariatur labore ea labore quis esse exercitation proident nostrud tempor. Sunt esse Lorem
					do est tempor. Ipsum nulla pariatur do ipsum adipisicing cillum enim eiusmod id ex aute.
					<br>
					<br>
					Et dolore mollit cupidatat aute consectetur laborum in. Officia consequat minim pariatur cupidatat
					ullamco veniam anim ut sunt mollit ex. Non mollit culpa eiusmod magna cillum labore commodo reprehenderit
					consequat non est. Elit enim in minim minim id id irure nulla nulla aute duis ullamco qui. Non veniam
					aliquip in qui nulla eiusmod. Eiusmod nisi nostrud elit laboris sint.
				</p>
			</div>
		</div>
		<div class="goals">
			<div class="mission">
				<div class="mission-overlay">
					<h1>Our mission</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero nulla quasi, illum veritatis
						deleniti incidunt nam ratione alias doloremque soluta ea asperiores vel temporibus odio cupiditate?
						Distinctio, dicta reiciendis?</p>
				</div>
			</div>
			<div class="vision">
				<div class="vision-overlay">
					<h1>Our vision</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero nulla quasi, illum veritatis
						deleniti incidunt nam ratione alias doloremque soluta ea asperiores vel temporibus odio cupiditate?
						Distinctio, dicta reiciendis?</p>
				</div>
			</div>
		</div>
	</div>
	<div class="secondary-container">
		<div class="profile">
			<p>Leadership</p>
			<h2>The big brains<br> behind the company</h2>
			<div class="profile-container">
				<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CE0" />
				<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CHAIRMAN" />
			</div>
			<section class="executives">
				<h3 executive class="line-text">executive leadership</h3>
				<div class="image-wrapper">
					<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CE0"
						class="exec-images" />
					<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CE0"
						class="exec-images" />
					<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CE0"
						class="exec-images" />
					<ProfileCard profilePicture="@/assets/certificates/ISO.jpg" name="John Doe" role="CE0"
						class="exec-images" />
				</div>
			</section>
			<div class="values">
				<h3>our core values</h3>
				<TextCarousel />
			</div>
			<div class="certifications">
				<p>our certificatons</p>
				<div class="certifications-wrapper">
					<img src="../assets/certificates/ISO.jpg" alt="certification" />
					<img src="../assets/certificates/Mancap.jpg" alt="certification" />
					<img src="../assets/certificates/MemCert.jpg" alt="certification" />
					<img src="../assets/certificates/MemComence.jpg" alt="certification" />
					<img src="../assets/certificates/ISO.jpg" alt="certification" />
					<img src="../assets/certificates/ISO.jpg" alt="certification" />
					<img src="../assets/certificates/ISO.jpg" alt="certification" />
					<img src="../assets/certificates/ISO.jpg" alt="certification" />
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style scoped>
.main-container {
	width: 100vw;
	background-color: #ffffff;
	padding: 50px;
	border-radius: 40px;
}

.video-wrapper {
	height: 90vh;
	border-radius: 40px;
	position: relative;
	width: 100%;
	overflow: hidden;
}

video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(3px)
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: Montserrat;
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

.overview {
	height: 90vh;
	width: 100%;
	display: flex;
	margin-top: 70px;
}

.headers {
	width: 40%;
}

.headers h2 {
	color: #00978c;
	font-family: Montserrat, sans-serif;
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom: 10px;
}

.headers p {
	color: #000000;
	font-family: poppins;
	font-size: 40px;
	letter-spacing: 2px;
	text-transform: uppercase;
}

.overview-content {
	width: 60%;
}

.overview-content p {
	color: #6c6f73b9;
	line-height: 40px;
}

.goals {
	display: flex;
	gap: 50px;
	margin-top: 30px;
}

.goals h1 {
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 15px;
	font-weight: normal;
	margin-bottom: 10px;
}

.goals p {
	font-size: 20px;
	line-height: 40px;
	color: #ffffff8e;
	font-family: Montserrat;
	letter-spacing: 2px;
}

.goals .mission,
.goals .vision {
	height: 90vh;
	width: 50%;
	border-radius: 40px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}

.mission {
	background-image: url(../assets/homepage-images/mission.jpg);
}

.vision {
	background-image: url(../assets/homepage-images/vision.avif);
}

.mission-overlay,
.vision-overlay {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	text-align: center;
	justify-content: center;
	text-transform: uppercase;
	color: #00978c;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.8);
	box-sizing: border-box;
}

.profile {
	background-color: #131414;
	border: 1px solid;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.profile p {
	color: #00978c;
	text-transform: uppercase;
	margin-top: 100px;
	letter-spacing: 3px;
	font-size: 12px;
}

.profile h2 {
	color: #ffffff;
	text-transform: uppercase;
	padding: 15px;
	letter-spacing: 4px;
	text-align: center;
}

.profile-container {
	width: 100%;
	margin-top: 20px;
	padding: 40px;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
}

.executives {
	width: 100%;
	padding: 40px;
	height: 100%;
}

.line-text {
	display: flex;
	align-items: center;
	text-align: center;
	color: #00978c;
	font-size: 12px;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 3px;
}

.line-text::before,
.line-text::after {
	content: '';
	flex: 1;
	border-bottom: 1px solid rgba(128, 128, 128, 0.501);
	margin: 0 10px;
}

.executives .image-wrapper {
	display: flex;
	justify-content: space-evenly;
	gap: 10px;
	margin-top: 80px;
}

.exec-images {
	height: 400px;
}

.profile .values {
	width: 100%;
	height: 100%;
	text-align: center;
	background-color: #ffffff;
}

.profile .values h3 {
	color: #00978c;
	font-weight: 500;
	font-size: 12px;
	margin-top: 50px;
	text-transform: uppercase;
	letter-spacing: 3px;
}

.profile .certifications {
	width: 100%;
	height: 100%;
}

.profile .certifications p {
	text-align: center;
	margin-top: 50px;
	margin-bottom: 30px;
}

.certifications-wrapper {
	width: 100%;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
}

.certifications-wrapper img {
	width: 30vw;
	border-radius: 40px;
}
</style>