<template>
	<div class="container">
		<div class="header">
			<h1>Our Products</h1>
			<p>
				Cobef International Ltd retains quality delivery and clients
				satisfaction as its driving force. Based on ISO certification, we
				are guided by the highest safety and quality standards to ensure
				that our clients receive the highest levels of satisfaction in
				addition to the commercial experience necessary to address
				technically challenging projects.
			</p>
		</div>
		<div class="catalog">
			<p class="secondary-header">Our Catalog</p>
			<div class="product-container">
				<div class="product">
					<img src="../assets/materials/hdpe.jpg" />
					<div class="product-description">
						<h1>HDPE PIPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
				</div>
				<div class="product">
					<div class="product-description">
						<h1>LAPETA</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
					<img src="../assets/materials/LAPETA.jpg" />
				</div>
				<div class="product">
					<img src="../assets/materials/Tank.jpeg" />
					<div class="product-description">
						<h1>TANKS</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
				</div>
				<div class="product">
					<div class="product-description">
						<h1>PRESSURE PIPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
					<img src="../assets/materials/pressure.jpg" />
				</div>
				<div class="product">
					<img src="../assets/materials/suction-hose.jpg" />
					<div class="product-description">
						<h1>SUCTION HOSE</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
				</div>
				<div class="product">
					<div class="product-description">
						<h1>CONDUIT PIPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
					<img src="../assets/materials/conduit.jpg" />
				</div>
				<div class="product">
					<img src="../assets/materials/corrugated-pipe.jpg" />
					<div class="product-description">
						<h1>CORRUGATED PIPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
				</div>
				<div class="product">
					<div class="product-description">
						<h1>MARINE ROPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
					<img src="../assets/materials/marine-rope.jpg" />
				</div>
				<div class="product">
					<img src="../assets/materials/pvc.jpg" />
					<div class="product-description">
						<h1>PVC PIPES</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Soluta, nesciunt sed vero sequi molestias quos quod
							expedita beatae perspiciatis, blanditiis ratione aliquid
							dignissimos dolores corrupti assumenda earum eum nihil.
							Est.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.container {
	margin-top: 30px;
}

.header {
	width: 100%;
	color: var(--ter-text-color);
	margin-top: 20px;
	border-bottom: var(--pry-border);
}

.header h1 {
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: var(--pry-font-size);
	font-weight: bold;
	color: var(--pry-text-color);
	align-content: center;
	height: fit-content;
	margin-top: 0.4em;
	margin-bottom: 0.3em;
	text-align: center;
}

.header p {
	font-weight: 100;
	font-family: "satoshi", sans-serif;
	font-size: 1.25rem;
	line-height: 1.6em;
	letter-spacing: 2px;
	padding: 0 40px;
	margin-bottom: 1rem;
}

.secondary-header {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: var(--pry-font-size);
	margin-top: 0px;
	font-weight: bold;
	color: var(--pry-text-color);
	text-align: center;
	height: 100px;
	border-bottom: var(--pry-border);
	align-content: center;
}

.product-container .product {
	display: flex;
	gap: 30px;
	align-items: center;
	border: var(--pry-border);
	border-top: 0;
	padding: 10px;
}

.product-container .product img {
	width: 100%;
	height: 50vh;
	border-radius: 10px;
	border: var(--pry-border);
	object-fit: fill;
}

.product-container .product-description h1 {
	letter-spacing: 2px;
	font-size: var(--pry-font-size);
	color: var(--pry-text-color);
}

.product-container .product-description p {
	width: 80%;
	line-height: 2rem;
	font-weight: 300;
	color: var(--pry-text-color);
	letter-spacing: 2px;
	font-size: 1em;
	margin-top: 1em;
	margin-right: -50em;
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
	.header p {
		line-height: 1.7em;
		text-align: center;
	}

	.product {
		display: flex;
		flex-direction: column;
	}

	.product:nth-child(even) {
		display: flex;
		flex-direction: column-reverse;
	}

	.product-container .product img {
		height: 50vh;
		background-size: cover;
		object-fit: fill;
		margin-bottom: -1em;
	}

	.product-container .product-description h1 {
		font-size: 2em;
	}

	.product-container .product-description p {
		font-size: 1em;
		margin-top: 0em;
		line-height: 2em;
		width: 100%;
		font-weight: 300;
	}
}

@media only screen and (max-width: 600px) {
	.container {
		margin-top: 55px;
	}
	.header {
		margin-top: 0.1rem;
	}

	.header p {
		font-weight: 400;
		font-size: 1em;
		padding: 0.4em;
		text-align: center;
	}

	.product {
		display: flex;
		flex-direction: column;
	}
	.product:nth-child(even) {
		display: flex;
		flex-direction: column-reverse;
	}

	.product-container .product img {
		height: 40vh;
		background-size: cover;
		object-fit: fill;
	}

	.product-container .product-description h1 {
		font-size: 1.4em;
		margin-bottom: 0.2em;
	}

	.product-container .product-description p {
		font-size: 1em;
		line-height: 2em;
		width: 100%;
		margin-top: 0px;
		letter-spacing: 1px;
		font-weight: 400;
	}
}
</style>
