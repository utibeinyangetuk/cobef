<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<template>
	<footer>
		<div class="main-container">
			<div class="top-wrapper">
				<h2>Cobef international limited</h2>
			<img src="../assets/footer/ISO.png"/>
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
				<p>Get in touch
				<ul>
					<li>
						<i class="uil uil-envelope"><a href="mailto:info@cobefinternationalltd.com">
								<span> info@cobefinternationalltd.com</span>
							</a></i>
					</li>
					<li>
						<i class="uil uil-phone">
							<a href="tel:+1234567890">
								+(234) 567-890-9123
							</a></i>
					</li>
					<li></li>
				</ul>
				</p>
			</div>
			<div class="connect">
				<p>Connect</p>
				<ul>
					<li>Linkedin</li>
					<li>Whatsapp</li>
					<li>facebook</li>
				</ul>
			</div>
			<div class="learn-more">
				<p>Company</p>
				<ul>
					<li><router-link to="/about">About us</router-link></li>
					<li><router-link to="/products">Products</router-link></li>
					<li><router-link to="/projects">Projects</router-link></li>
				</ul>
			</div>
			<div class="sitemap">
				<p>Site Map</p>
				<ul>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/about">About us</router-link></li>
					<li><router-link to="/products">Products</router-link></li>
					<li><router-link to="/projects">Projects</router-link></li>
					<li><router-link to="/contact">Contact us</router-link></li>
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
	background-color: #1D1D1D;
}

.main-container {
	background: linear-gradient(90deg, #001009, #004d40, #01458560);
	background-size: 400% 400%;
	animation: gradientAnimation 15s ease infinite;
	border-top: 3px solid #1D1D1D;
	height: 400px;
	border-radius: 0px 0px 10px 10px;
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
.top-wrapper{
	display: flex;
	justify-content: space-between;
	height: 130px;
}
.top-wrapper h2{
		color: #ffffff;
	text-transform: capitalize;
	font-size: 15px;
	letter-spacing: 2px;
	font-weight: 500;
	border-bottom: 1px solid #ffffff4b;
	width: 30%;
	height: fit-content;
}
.top-wrapper img{
	width:50%;
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
	margin-top:2px;
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
	font-size: 13px;
	text-align: center;
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
	margin-bottom: 5px;
	font-size: 13px;
}

.secondary-container li {
	color: gray;
	margin-bottom: 10px;
}

.secondary-container li a {
	color: gray;
	font-style: normal;
	letter-spacing: 2px;
}

.get-in-touch {
	border: 1px solid;
}
</style>