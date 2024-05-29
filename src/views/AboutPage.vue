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
				<h4>Welcome to Cobef International Limited!</h4>
				<p>
					<span>COBEF INTERNATIONAL LIMITED</span> values quality the most. All its products are manufactured in a state-of-the-art facility with
					equipment and technology imported from India. Scoring high on the quality quotient, these products are also in strict compliance with
					DIN and ISO specifications as well as approved by Standard Organization of Nigeria (SON). This commitment to quality has brought rich
					dividends for Cobef. It has made its products highly trusted for applications in construction, farming, water supply, electrical
					wiring, sewage, etc.
				</p>
			</div>
			<div class="image-wrapper">
				<img src="" alt="An image" />
			</div>
		</div>
		<div class="section-wrapper">
			<div class="vision">
				<h1>Our <span>vision</span></h1>
				<p>
					Our vision is to set a pace in polymer products manufacturing, and ensure the performance and appearance of the products are in
					accordance with our quality standards.
				</p>
			</div>
			<div class="mission">
				<h1>our <span>mission</span></h1>
				<p>
					Our mission is to be a world class leader in PVC, HDPE and LLDPE products by offering customer-focused, high quality and exceptional
					services through precision machining that result to outstanding value for our customers and excellent opportunities for our employees.
				</p>
			</div>
		</div>
		<div class="values">
			<h1>Our <span>core values</span></h1>
			<div class="cover">
				<li><span class="heading">Integrity: </span>Trustworthy and undiluted productions.</li>
				<li><span class="heading">Consistency: </span>Constantly maintains high level quality standards.</li>
				<li><span class="heading">Innovation: </span>We drive change and challenge the status quo to exceed our customer's expectation.</li>
				<li><span class="heading">Cooperation:</span> We work as a team to achieve our common vision.</li>
				<li><span class="heading">Respect:</span> We demonstrate respect among colleagues, customers and suppliers.</li>
				<li><span class="heading">Customer Convenience:</span> We serve our customers to save their time and efforts.</li>
				<li><span class="heading">Customer Satisfaction: </span>Making sure customers' expectations are met timely.</li>
			</div>
		</div>
		<div class="certifications">
			<h1>certifications</h1>
			<div class="images">
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
				<div class="grid-item"><img src="#" alt="#image 1" /></div>
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
	}

	.wrapper span {
		color: orange;
	}

	.wrapper h4 {
		color: #020e2a;
		font-weight: 500;
		font-size: 18px;
		margin-bottom: 15px;
	}

	.wrapper p {
		font-size: 15px;
		line-height: 2.2em;
		text-align: left;
		width: 550px;
	}

	.image-wrapper {
		width: 50%;
		border: 1px solid;
		border-radius: 10px;
		padding: 5px;
		background-color: #ededed;
	}

	.section-wrapper {
		display: flex;
		margin-top: 25px;
	}

	.vision {
		height: 400px;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		text-align: center;
		justify-content: center;
	}

	.vision span {
		color: orange;
	}

	.vision h1 {
		font-size: 35px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.vision p {
		font-size: 20px;
		line-height: 2em;
	}

	.mission {
		background-color: #020e2a;
		border: 1px solid #020e2a;
		border-radius: 5px;
		color: #ffffff;
		height: 400px;
		width: 50%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.mission span {
		color: orange;
	}

	.mission h1 {
		font-size: 35px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.mission p {
		font-size: 20px;
		line-height: 2em;
	}

	.values h1 {
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 25px;
	}

	.values span {
		color: orange;
	}

	.cover .heading {
		color: #020e2a;
		font-weight: bold;
		text-transform: capitalize;
		font-size: 23px;
		letter-spacing: 1.5px;
	}

	.cover li {
		list-style: disc;
		line-height: 3.5em;
		font-size: 18px;
	}

	.certifications h1 {
		text-align: center;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: orange;
		font-weight: bolder;
		margin-top: 50px;
		margin-bottom: 30px;
	}

	.images {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}

	.grid-item {
		overflow: hidden;
		/** box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); **/
		border: 1px solid rgba(128, 128, 128, 0.385);
		border-radius: 5px;
		padding: 5px;
		transition: transform 0.3s ease;
	}

	.grid-item:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.grid-item img {
		display: block;
		height: 250px;
		max-width: 100%;
	}
</style>
