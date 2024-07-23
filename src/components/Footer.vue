<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<template>
	<footer>
		<div class="container">
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
					<li>
						<router-link to="/about"><i class="uil uil-arrow-right" /> About us</router-link>
					</li>
					<li>
						<router-link to="/products"><i class="uil uil-arrow-right" /> Products</router-link>
					</li>
					<li>
						<router-link to="/projects"><i class="uil uil-arrow-right" /> Projects</router-link>
					</li>
				</ul>
			</div>
			<div class="sitemap">
				<p>Site Map</p>
				<ul>
					<li>
						<router-link to="/"><i class="uil uil-arrow-right" /> Home</router-link>
					</li>
					<li>
						<router-link to="/about"><i class="uil uil-arrow-right" /> About us</router-link>
					</li>
					<li>
						<router-link to="/products"><i class="uil uil-arrow-right" /> Products</router-link>
					</li>
					<li>
						<router-link to="/projects"><i class="uil uil-arrow-right" /> Projects</router-link>
					</li>
					<li>
						<router-link to="/contact"><i class="uil uil-arrow-right" /> Contact us</router-link>
					</li>
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
	padding: 0px 0px 0px 10px;
	background-color: var(--pry-background);
	background-image: var(--ter-background);
	background-size: var(--ter-background-size);
}

.copyright {
	text-align: center;
	margin-top: 20px;
}

.copyright p {
	font-size: .8em;
	color: var(--pry-text);
	letter-spacing: 1px;
}

.container {
	display: flex;
	width: 100%;
	justify-content: space-evenly;
}

.container p {
	color: var(--pry-text);
	letter-spacing: 2px;
	margin-bottom: 5px;
}

.container a,
li {
	color: var(--sec-text);
	font-style: normal;
	letter-spacing: 1px;
	font-size: .9em;
	line-height: 2em;
}

.container li a:hover,
.container li:hover {
	color: var(--link-hover);
}

@media only screen and (min-width:401px) and (max-width:600px) {
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.container p {
		margin-top: 20px;
	}

	.copyright p {
		font-size: .7em;
	}
}

@media only screen and (max-width:490px) {
	.container {
		display: flex;
		flex-direction: column;
		text-wrap: wrap;
	}

	.container p {
		margin-top: 20px;
	}

	.copyright p {
		font-size: .6em;
	}
}
</style>