<template>
	<div class="main-container">
		<div class="title">
			<h1>Contact us</h1>
		</div>
		<div class="company-info">
			<div class="write-up">
				<h1>Our inbox is open</h1>
				<p>
					The best part of our job is being able to please our customers
					and neighbors. Whether you need help starting a new project, have
					a question about our products and services, or need us to come
					back for a repair, get in touch with our form.
				</p>
			</div>
			<div class="form">
				<div class="image-wrapper">
					<img src="../assets/homepage-images/team.jpg" />
				</div>
				<div class="company-details">
					<div class="location">
						<h1>Our Office</h1>
						<p>
							Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port
							Harcourt
						</p>
						<div class="button">
							<a
								href="https://www.google.com/maps/place/Cobef+International+Limited/@4.8610877,7.0891647,17.42z/data=!4m9!1m2!2m1!1sKm+17+Port+Harcourt%2FAba+Express+Way+P.+O.+Box,+2769+Port+Harcourt!3m5!1s0x1069d2ad21ae86bd:0x46fb3e4446572965!8m2!3d4.860476!4d7.0880525!16s%2Fg%2F11hzhc6m0m?entry=ttu"
								target="_blank"
								>View in maps</a
							>
						</div>
					</div>
					<div class="Phone">
						<h1>Phone</h1>
						<div class="number-wrapper">
							<a href="tel:+1234567890">+(234) 567-890-9123</a>
							<a href="tel:+1234567890">+(234) 567-890-9123</a>
							<a href="tel:+1234567890">+(234) 567-890-9123</a>
						</div>
					</div>
					<div class="email">
						<h1>Email</h1>
						<a href="mailto:info@cobefinternationalltd.com"
							>info@cobefinternationalltd.com</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.main-container {
	margin-top: 50px;
}
.title {
	text-transform: uppercase;
	padding: 20px;
}
.title h1 {
	font-size: 4em;
	text-shadow: 2px 6px 3px rgba(0, 0, 0, 0.7);
	text-align: center;
	letter-spacing: 3px;
	font-family: poppins;
	width: 100%;
}
.company-info {
	width: 100%;
	background: linear-gradient(to top, #fdf5e5, #ffffe3);
	border-top-right-radius: 20%;
	border-top-left-radius: 20%;
}
.write-up {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
}
.write-up h1 {
	width: 80%;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-top: 20px;
	font-size: 1.7em;
}
.write-up p {
	font-size: 1.6em;
	width: 70%;
	line-height: 2em;
	margin-top: 10px;
	font-weight: 200;
}
.form {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.image-wrapper {
	width: 90%;
}
.image-wrapper img {
	width: 100%;
	height: 500px;
	border-radius: 1em;
	object-fit: cover;
}

.company-details {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
}
.company-details h1 {
	font-size: 0.9em;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-top: 20px;
	margin-bottom: 10px;
}
.button {
	padding: 10px 0;
	margin-top: 6px;
}
.button a {
	border: 1px solid;
	padding: 6px;
	border-radius: 3px;
	color: #212121;
}
.button a:hover {
	background-color: #212121;
	color: #ffffe3;
	border: none;
}
.email a,
.number-wrapper a {
	font-size: 0.8em;
	letter-spacing: 1px;
	color: #212121;
}
.email a:hover,
.number-wrapper a:hover {
	color: var(--link-hover);
}
.number-wrapper {
	display: flex;
	flex-direction: column;
	line-height: 2em;
}
.location p {
	font-size: 0.9em;
}

@media only screen and (max-width: 768px) {
	.title h1 {
		font-size: 3em;
		text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.7);
		width: 100%;
	}
	.company-info {
		border-top-right-radius: 10%;
		border-top-left-radius: 10%;
	}
	.write-up h1 {
		font-size: 1em;
		width: 100%;
		letter-spacing: 1px;
		font-family: poppins;
	}
	.write-up p {
		font-size: 1em;
		width: 90%;
	}
	.image-wrapper img {
		height: 250px;
		object-fit: fill;
	}
	.company-details {
		display: flex;
		flex-direction: column-reverse;
		padding: 0 20px;
	}
	.company-details h1 {
		margin-bottom: 5px;
	}
	.location,
	.Phone,
	.email {
		border-bottom: var(--pry-border);
	}
	.email a,
	.number-wrapper,
	.location a {
		margin-bottom: 10px;
	}
}
</style>
