<template>
	<div class="container">
		<div class="header">
			<h1>Products</h1>
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
			<h1 class="secondary-header">Catalog</h1>
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
					<img src="../assets/materials/LAPETA.jpg" />
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
					<img src="../assets/materials/pressure.jpg" />
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
					<img src="../assets/materials/conduit.jpg" />
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
					<img src="../assets/materials/marine-rope.jpg" />
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
	margin-top: 50px;
}

.header {
	width: 100%;
	color: var(--ter-text-color);
	margin-top: 20px;
}

.header h1 {
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 2em;
	color: var(--pry-text-color);
	align-content: center;
	height: fit-content;
	text-align: center;
	text-shadow: var(--text-shadow);
}

.header p {
	font-weight: 100;
	font-family: "satoshi", sans-serif;
	font-size: 1.2rem;
	line-height: 1.8em;
	letter-spacing: 2px;
	padding: 0 40px;
	margin-bottom: 1rem;
}

.secondary-header {
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 2em;
	color: var(--pry-text-color);
	align-content: center;
	height: fit-content;
	text-align: center;
	text-shadow: var(--text-shadow);
	margin-bottom: 0.7em;
}
.product-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 10px;
	padding: 0 10px;
}
.product {
	border: var(--pry-border);
	border-radius: 10px;
	transition: 0.7s ease-in-out;
}
.product:hover {
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
	transition: 0.7s ease-in-out;
}

.product-container .product img {
	width: 100%;
	height: 50vh;
	object-fit: cover;
}
.product-description {
	margin-left: 5px;
}

.product-description h1 {
	letter-spacing: 1px;
	font-size: 2em;
	color: var(--pry-text-color);
	text-decoration: underline;
}

.product-description p {
	line-height: 1.7rem;
	font-weight: 300;
	color: var(--pry-text-color);
	letter-spacing: 2px;
	font-size: 0.8em;
}

@media only screen and (max-width: 768px) {
	.header {
		padding: 0 10px;
	}
	.header p {
		padding: 0;
		font-size: 1.2em;
		text-align: center;
		font-weight: 400;
		line-height: 1.6em;
	}
	.product-description h1 {
		font-size: 1.6em;
	}
}
</style>
