<script setup>
import Footer from '@/components/Footer.vue';
</script>
<template>
	<div class="container">
		<div class="header">
			<p>Our Products</p>
			<h2>
				Cobef International Ltd retains quality delivery and clients
				satisfaction as its driving force. Based on ISO certification, we
				are guided by the highest safety and quality standards to ensure
				that our clients receive the highest levels of satisfaction in
				addition to the commercial experience necessary to address
				technically challenging projects.
			</h2>
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
	<Footer />
</template>
<style scoped>
.container {
	background-color: var(--pry-background);
	background: var(--ter-background);
	background-size: var(--ter-background-size);
	margin-top: 30px;
	padding: 0 40px;
}

.header {
	width: 100%;
	color: #fafafa;
	margin-bottom: 70px;
}

.header p {
	text-transform: capitalize;
	letter-spacing: 2px;
	font-size: 50px;
	margin-top: 0px;
	margin-bottom: 30px;
	font-weight: bold;
	color: var(--pry-text);
	align-content: center;
	height: 100px;
}

.header h2 {
	font-weight: 400;
	font-size: 34px;
	letter-spacing: 1px;
	line-height: 1.6em;
}

.secondary-header {
	text-transform: capitalize;
	letter-spacing: 2px;
	font-size: 50px;
	margin-top: 0px;
	margin-bottom: 30px;
	font-weight: bold;
	color: #ffffe3;
	align-content: center;
	height: 100px;
}

.product-container .product {
	display: flex;
	gap: 30px;
	margin-top: 70px;
	align-items: center;
	justify-content: center;
}

.product-container .product img {
	width: 100%;
	height: 80vh;
	margin-bottom: 70px;
	border-radius: 10px;
}

.product-container .product-description h1 {
	letter-spacing: 2px;
	font-size: 70px;
	color: #ffffe3;
}

.product-container .product-description p {
	width: 80%;
	line-height: 50px;
	font-weight: normal;
	color: #fafafa;
	margin-right: -780px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 14px;
	margin-top: 40px;
	margin-bottom: 40px;
}
</style>