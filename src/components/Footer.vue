<template>
	<footer>
		<div class="main-wrapper">
			<div class="sitemap">
				<h1>sitemap</h1>
				<ul>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/about">About us</router-link></li>
					<li><router-link to="/products">Products</router-link></li>
					<li><router-link to="/projects">Projects</router-link></li>
					<li><router-link to="/contact">Contact us</router-link></li>
				</ul>
			</div>

			<div class="contact">
				<h1>How to reach us?</h1>
				<div class="wrapper">
					<i class="uil uil-location-point"><span>Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt.</span></i>
					<i class="uil uil-envelope"><span>info@cobefinternationalltd.com</span></i>
					<i class="uil uil-phone">
						<span class="numbers"> (+234) xxx xxx xxxx, (+234) xxx xxx xxxx, (+234) xxx xxx xxxx </span>
					</i>
				</div>
			</div>

			<div class="socials">
				<h1>Follow us on our socials</h1>
				<div class="icons">
					<i class="uil uil-linkedin"><span> Linkedin</span></i>
					<i class="uil uil-whatsapp"><span> Whatsapp</span></i>
					<i class="uil uil-twitter"><span> Twitter</span></i>
					<i class="uil uil-facebook"><span> Facebook</span></i>
				</div>
			</div>
		</div>

		<div class="copyright">
			<span>Copyright © 2024 Cobef International Ltd.</span>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		background-color: #020e2a;
		color: #ffffff;
	}

	.main-wrapper {
		display: flex;
		justify-content: space-around;
		padding: 20px;
	}

	.sitemap h1 {
		font-size: 18px;
		letter-spacing: 2px;
		font-weight: bold;
		text-transform: capitalize;
	}

	.sitemap ul a {
		color: #ffffff6e;
		line-height: 35px;
		letter-spacing: 1.5px;
	}

	.sitemap ul a:hover {
		color: orange;
	}

	.contact h1 {
		font-size: 18px;
		letter-spacing: 2px;
		font-weight: bold;
		text-transform: capitalize;
		margin-bottom: 10px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
	}
	.wrapper i {
		font-size: 25px;
		line-height: 40px;
	}
	.wrapper span {
		color: #ffffff6e;
		font-style: normal;
		font-size: 15px;
		margin-left: 4px;
	}
	.socials {
		margin-left: -10%;
	}
	.socials h1 {
		font-size: 18px;
		margin-bottom: 15px;
	}
	.icons {
		line-height: 35px;
		display: flex;
		flex-direction: column;
	}
	.icons i {
		font-size: 25px;
	}
	.icons span {
		font-style: normal;
		font-size: 15px;
		letter-spacing: 1.5px;
		color: #ffffff6e;
	}
	.copyright {
		text-align: center;
		font-size: 12px;
		letter-spacing: 1px;
	}
</style>
