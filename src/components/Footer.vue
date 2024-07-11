<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<template>
	<footer>
		<div class="main-container">
			<div class="top-wrapper">
				<section class="description">
					<div class="image-container">
						<img src="../assets/COBEF_LOGO.png" />
						<h2>Cobef international limited</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem aperiam a ullam labore provident! Aperiam non,
						a sed dolorum necessitatibus, iste, ea dolorem explicabo quasi
						vitae facere excepturi commodi iusto!
					</p>
				</section>
				<img src="../assets/footer/ISO.png" class="iso-image" />
			</div>
			<div class="section-wrapper">
				<div class="year">
					<p>year founded</p>
					<h1>2001</h1>
				</div>
				<div class="location">
					<p>Location</p>
					<h1>Port Harcourt, Nigeria</h1>
				</div>
			</div>
		</div>
		<div class="secondary-container">
			<div class="get-in-touch">
				<p>Get in touch</p>
				<ul>
					<li>
						<i class="uil uil-envelope">
							<a href="mailto:info@cobefinternationalltd.com">
								<span> info@cobefinternationalltd.com</span>
							</a>
						</i>
					</li>
					<li>
						<i class="uil uil-phone">
							<a href="tel:+1234567890"> +(234) 567-890-9123 </a></i>
					</li>
					<li></li>
				</ul>
			</div>
			<div class="connect">
				<p>Connect</p>
				<ul>
					<li>> Linkedin</li>
					<li>> Whatsapp</li>
					<li>> facebook</li>
				</ul>
			</div>
			<div class="learn-more">
				<p>Company</p>
				<ul>
					<li><router-link to="/about">> About us</router-link></li>
					<li><router-link to="/products">> Products</router-link></li>
					<li><router-link to="/projects">> Projects</router-link></li>
				</ul>
			</div>
			<div class="sitemap">
				<p>Site Map</p>
				<ul>
					<li><router-link to="/">> Home</router-link></li>
					<li><router-link to="/about">> About us</router-link></li>
					<li><router-link to="/products">> Products</router-link></li>
					<li><router-link to="/projects">> Projects</router-link></li>
					<li><router-link to="/contact">> Contact us</router-link></li>
				</ul>
			</div>
		</div>
		<div class="copyright">
			<p>&copy; {{ currentYear }} COBEF. All rights reserved.</p>
		</div>
	</footer>
</template>

<style scoped>
footer {
	padding: 0px 20px 20px 20px;
	background-color: #10100E;
}

.main-container {
	background: linear-gradient(90deg, #0e0d0d, #1f1f0087, rgb(2, 21, 21));
	background-size: 400% 400%;
	animation: gradientAnimation 15s ease infinite;
	border: 1px solid #ffffe32b;
	height: 400px;
	border-radius:10px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
	padding: 30px;
}

@keyframes gradientAnimation {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}

.top-wrapper {
	display: flex;
	justify-content: space-between;
	height: fit-content;
}

.description {
	width: 40%;
	height: 100%;
}

.description p {
	color: #535349;
	padding: 0px 0px 0px 10px;
	font-size: 14px;
	letter-spacing: 1px;
	line-height: 25px;
}

.image-container {
	display: flex;
	align-items: center;
	gap: 5px;
}

.image-container img {
	height: 80px;
	width: 20%;
}

.image-container h2 {
	color: #ffffff;
	text-transform: capitalize;
	font-size: 1.9vw;
	letter-spacing: 1px;
	font-weight: bold;
	text-shadow: 2px 2px 5px rgba(0, 0.5, 0.5, 0.5);
	width: fit-content;
}

.top-wrapper .iso-image {
	height: 130px;
	width: 40%;
}

.section-wrapper {
	color: #ffffff;
	margin-top: 80px;
	display: flex;
	justify-content: space-between;
}

.section-wrapper .year {
	border-top: 1px solid #ffffff4b;
	display: flex;
}

.section-wrapper .location {
	border-top: 1px solid #ffffff4b;
	display: flex;
}

.section-wrapper p {
	font-size: 13px;
	letter-spacing: 2px;
	text-transform: capitalize;
	height: fit-content;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 255, 0.173);
	box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.5);
	margin-top: 2px;
}

.section-wrapper h1 {
	font-size: 60px;
	letter-spacing: 2px;
	margin-left: 20px;
	font-weight: bold;
}

.copyright P {
	color: #ffffff;
	font-weight: normal;
	font-size: 11px;
	text-align: center;
	letter-spacing: 1px;
}

.secondary-container {
	margin-top: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: first baseline;
	color: #ffffff;
}

.secondary-container p {
	color: #ffffff;
	letter-spacing: 2px;
	margin-bottom: 10px;
	font-size: 20px;
}

.secondary-container li a:hover, .secondary-container li:hover{
	color: teal;
}

.secondary-container li a, .secondary-container li {
	color: gray;
	font-style: normal;
	letter-spacing: 1.5px;
	margin-bottom: 10px;
	font-size: 12px;
}

</style>
