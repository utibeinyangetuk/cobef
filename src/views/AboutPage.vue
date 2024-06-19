<script setup>
	import CurrentPage from '@/components/CurrentPage.vue';
	import Footer from '@/components/Footer.vue';
</script>

<template>
	<currentPage />
	<div class="container">
		<div class="row">
			<div class="wrapper">
				<h1><span>About</span> Our Company</h1>
				<p>
					<span>COBEF INTERNATIONAL LIMITED</span> values quality the most. All its products are manufactured in a state-of-the-art facility with equipment and technology imported from
					India. Scoring high on the quality quotient, these products are also in strict compliance with DIN and ISO specifications as well as approved by Standard Organization of Nigeria
					(SON). This commitment to quality has brought rich dividends for Cobef. It has made its products highly trusted for applications in construction, farming, water supply, electrical
					wiring, sewage.
				</p>
			</div>
			<div class="image-wrapper">
				<img src="../assets/homepage-images/company.jpg" alt="An image" />
			</div>
		</div>
		<div class="section-wrapper">
			<div class="vision">
				<h1>Our <span>vision</span></h1>
				<p>Our vision is to set a pace in polymer products manufacturing, and ensure the performance and appearance of the products are in accordance with our quality standards.</p>
			</div>
			<div class="mission">
				<h1>our <span>mission</span></h1>
				<p>
					Our mission is to be a world class leader in PVC, HDPE and LLDPE products by offering customer-focused, high quality and exceptional services through precision machining that
					result to outstanding value for our customers and excellent opportunities for our employees.
				</p>
			</div>
		</div>
		<div class="values">
			<h1>Our <span>core values</span></h1>
			<div class="cover">
				<li><span class="heading">Respect</span> ৹-----৹ We demonstrate respect among colleagues, customers and suppliers.</li>
				<li><span class="heading">Integrity</span> ৹-----৹ Trustworthy and undiluted productions.</li>
				<li><span class="heading">Innovation</span> ৹-----৹ We drive change and challenge the status quo to exceed our customer's expectation.</li>
				<li><span class="heading">Consistency</span> ৹-----৹ Constantly maintains high level quality standards.</li>
				<li><span class="heading">Cooperation</span> ৹-----৹ We work as a team to achieve our common vision.</li>
				<li><span class="heading">Customer Convenience</span> ৹-----৹ We serve our customers to save their time and efforts.</li>
				<li><span class="heading">Customer Satisfaction</span> ৹-----৹ Making sure customers' expectations are met timely.</li>
			</div>
		</div>
		<div class="certifications">
			<h1>certifications</h1>
			<div class="images">
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
				<div class="grid-item"><img src="../assets/homepage-images/iso1.avif" alt="#image 1" /></div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
		padding: 20px;
	}

	.row {
		display: flex;
		margin-top: 30px;
	}

	.wrapper {
		width: 50%;
		padding: 5px;
	}

	.wrapper h1 {
		margin-bottom: 15px;
		text-transform: uppercase;
		font-weight: bolder;
		letter-spacing: 2px;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.wrapper span {
		color: orange;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.wrapper p {
		font-size: 16px;
		line-height: 3.2em;
		text-align: left;
		width: 100%;
		letter-spacing: 1px;
	}

	.image-wrapper {
		width: 50%;
		padding: 5px;
	}

	.image-wrapper img {
		width: 100%;
		height: 400px;
		border-radius: 10px;
	}

	.section-wrapper {
		display: flex;
		margin-top: 25px;
	}

	.vision {
		border-right: 1px solid;
		height: 500px;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		text-align: center;
		justify-content: center;
		background-image: url(../assets/homepage-images/vision.avif);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.vision span {
		color: orange;
	}

	.vision h1 {
		font-size: 45px;
		letter-spacing: 2px;
		text-transform: uppercase;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	}

	.vision p {
		font-size: 20px;
		line-height: 2em;
		color: #000000;
	}

	.mission {
		height: 500px;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		text-align: center;
		justify-content: center;
		background-image: url(../assets/homepage-images/mission.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.mission span {
		color: orange;
	}

	.mission h1 {
		font-size: 45px;
		letter-spacing: 2px;
		text-transform: uppercase;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	}

	.mission p {
		font-size: 20px;
		line-height: 2em;
		color: #000000;
	}

	.values h1 {
		font-size: 50px;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-top: 25px;
		margin-bottom: 25px;
		text-align: center;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.values span {
		color: orange;
	}

	.cover .heading {
		color: #ffffff;
		background-color: #000000;
		padding: 10px;
		border-radius: 5px;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 25px;
		letter-spacing: 1.5px;
		line-height: 3.5em;
	}

	.cover li {
		list-style: none;
		line-height: 3.5em;
		font-size: 20px;
	}

	.certifications h1 {
		text-align: center;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: orange;
		font-weight: bolder;
		font-size: 50px;
		margin-top: 50px;
		margin-bottom: 30px;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}

	.images {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}

	.grid-item {
		overflow: hidden;
		padding: 5px;
	}

	.grid-item img:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.grid-item img {
		display: block;
		height: 250px;
		width: 100%;
		transition: transform 0.3s ease;
		border-radius: 5px;
	}

	@media only screen and (max-width: 600px) {
		.images {
			display: flex;
			flex-direction: column;
		}

		.grid-item:hover {
			transform: none;
		}

		.row {
			display: flex;
			flex-direction: column;
		}

		.wrapper {
			width: 100%;
			margin-top: -40px;
		}

		.wrapper h1 {
			font-size: 26px;
		}

		.wrapper span {
			font-weight: bold;
		}

		.wrapper p {
			width: 100%;
		}

		.image-wrapper {
			width: 100%;
		}

		.image-wrapper img {
			width: 100%;
			height: 250px;
		}

		.section-wrapper {
			display: flex;
			flex-direction: column;
		}

		.vision,
		.mission {
			width: 100%;
			height: 100%;
			margin-bottom: 10px;
			border: 1px solid;
			border-radius: 3px;
		}

		.vision p,
		.mission p {
			font-size: 14px;
		}

		.values {
			border: 1px solid;
			padding: 10px;
			border-radius: 3px;
		}

		.values h1 {
			font-size: 25px;
			text-align: center;
			width: 100%;
			margin-bottom: 30px;
		}

		.cover .heading {
			font-size: 20px;
			text-decoration-line: overline;
		}

		.cover li {
			list-style-type: none;
			line-height: 1.5em;
			margin-bottom: 20px;
			font-size: 16px;
		}

		.certifications h1 {
			background-color: #020e2a;
			border-radius: 5px;
			padding: 5px;
		}
	}
</style>
