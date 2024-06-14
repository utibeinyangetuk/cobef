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
					<i class="uil uil-location-point">
						<a href="https://www.google.com/maps/place/Cobef+International+Limited/@4.8610877,7.0891647,17.42z/data=!4m9!1m2!2m1!1sKm+17+Port+Harcourt%2FAba+Express+Way+P.+O.+Box,+2769+Port+Harcourt!3m5!1s0x1069d2ad21ae86bd:0x46fb3e4446572965!8m2!3d4.860476!4d7.0880525!16s%2Fg%2F11hzhc6m0m?entry=ttu"
							target="_blank">Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt</a>
					</i>
					<i class="uil uil-envelope"><a href="mailto:info@cobefinternationalltd.com">
							<span> info@cobefinternationalltd.com</span>
						</a></i>
					<i class="uil uil-phone">
						<a href="tel:+1234567890">
							+(234) 567-890-9123
						</a>
					</i>
				</div>
			</div>
			<div class="socials">
				<h1>Follow us on our socials</h1>
				<div class="icons">
					<i class="uil uil-linkedin-alt"><span> Linkedin</span></i>
					<i class="uil uil-whatsapp"><span> Whatsapp</span></i>
				</div>
			</div>
		</div>

		<div class="copyright">
			<p>Copyright © 2024 Cobef International Ltd.</p>
		</div>
	</footer>
</template>

<style scoped>
footer {
	border: 1px solid rgba(128, 128, 128, 0.211);
}

.main-wrapper {
	display: flex;
	justify-content: space-around;
	padding: 8px;
	background-color: whitesmoke;
	line-height: 40px;
}

.main-wrapper h1 {
	color: orange;
	margin-top: 5px;
	margin-bottom:0px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: bold;
	font-size: 18px;
}

.sitemap ul li a {
	color: #000000;
	line-height: 32px;
	letter-spacing: 1.5px;
}

.sitemap ul li a:hover {
	border-radius: 3px;
	border: 1px solid #000;
	padding: 3px;
	background-color: #000;
	color: #fff;
}

.wrapper {
	display: flex;
	flex-direction: column;
}

.wrapper i {
	font-size: 26px;
}

.wrapper a {
	line-height: 40px;
	color: #000000;
	font-style: normal;
	font-size: 14px;
	margin-left: 4px;
}

.wrapper a:hover {
	text-decoration: underline;
}

.icons {
	line-height: 35px;
	display: flex;
	flex-direction: column;
}

.icons i {
	font-size: 20px;
}

.icons span {
	font-style: normal;
	font-size: 15px;
	letter-spacing: 1.5px;
	color: #000000;
}

.copyright {
	text-align: center;
	font-size: 14px;
	letter-spacing: 1px;
	background-color: whitesmoke;
}

@media only screen and (max-width: 600px) {
	footer {
		border: none;
	}

	.sitemap,
	.contact,
	.socials {
		border: 1px solid;
		border-radius: 5px;
		padding: 10px;
		margin: 0%;
		margin-bottom: 15px;
	}

	.main-wrapper {
		display: flex;
		flex-direction: column;
	}

	.copyright {
		padding: 10px;
	}

	.wrapper i {
		font-size: 20px;
		line-height: 35px;
	}

	.wrapper a {
		font-size: small;
	}

	.copyright {
		font-size: 12px;
	}
}
</style>