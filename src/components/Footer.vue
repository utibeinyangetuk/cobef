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
	padding: 0px 40px 40px 40px;
	background-color: var(--pry-background);
	background-image: var(--ter-background);
	background-size: var(--ter-background-size);
}

.copyright P {
	color: var(--pry-text);
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
	color: var(--pry-text);
}

.secondary-container p {
	color: var(--pry-text);
	letter-spacing: 2px;
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: 700;
}

.secondary-container li a:hover,
.secondary-container li:hover {
	color: var(--link-hover);
}

.secondary-container li a,
.secondary-container li {
	color: var(--sec-text);
	font-style: normal;
	letter-spacing: 1.5px;
	margin-bottom: 10px;
	font-size: 15px;
}

/*Tablets*/
@media only screen and (min-width:650px) and (max-width:900px) {
	footer {
		padding: 0;
	}

	.copyright p {
		font-size: .7rem;
	}

	.secondary-container p {
		font-size: 1.1em;
	}

	.secondary-container li,
	.secondary-container li a {
		font-size: .8em;
	}
}

/*Phones*/
@media only screen and (max-width:649px) {
	footer {
		padding: 0;
	}

	.copyright p {
		font-size: .6em;
	}

	.secondary-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		width: 100%;
	}

	.secondary-container p {
		font-size: 1em;
		margin-top: 10px;
	}

	.secondary-container li,
	.secondary-container li a {
		font-size: .8em;
	}

	.get-in-touch,
	.connect,
	.learn-more,
	.sitemap {
		text-align: center;
	}
}
</style>