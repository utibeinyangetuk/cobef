<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<template>
	<footer>
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
					<li><i class="uil uil-linkedin" /> Linkedin</li>
					<li><i class="uil uil-whatsapp" /> Whatsapp</li>
					<li><i class="uil uil-facebook" /> facebook</li>
				</ul>
			</div>
			<div class="learn-more">
				<p>Company</p>
				<ul>
					<li><router-link to="/about"><i class="uil uil-arrow-right" /> About us</router-link></li>
					<li><router-link to="/products"><i class="uil uil-arrow-right" /> Products</router-link></li>
					<li><router-link to="/projects"><i class="uil uil-arrow-right" /> Projects</router-link></li>
				</ul>
			</div>
			<div class="sitemap">
				<p>Site Map</p>
				<ul>
					<li><router-link to="/"><i class="uil uil-arrow-right" /> Home</router-link></li>
					<li><router-link to="/about"><i class="uil uil-arrow-right" /> About us</router-link></li>
					<li><router-link to="/products"><i class="uil uil-arrow-right" /> Products</router-link></li>
					<li><router-link to="/projects"><i class="uil uil-arrow-right" /> Projects</router-link></li>
					<li><router-link to="/contact"><i class="uil uil-arrow-right" /> Contact us</router-link></li>
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
	padding: 0px 40px 40px 40px;
	background-color: #000000;
	background-image: var(--checkered-background);
	background-size: var(--checkered-background-size);

}

.copyright P {
	color: #ffffff;
	font-weight: normal;
	font-size: 15px;
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
	font-size: 22px;
	font-weight: 700;
}

.secondary-container li a:hover,
.secondary-container li:hover {
	color: teal;
}

.secondary-container li a,
.secondary-container li {
	color: gray;
	font-style: normal;
	letter-spacing: 1.5px;
	margin-bottom: 10px;
	font-size: 15px;
}
</style>