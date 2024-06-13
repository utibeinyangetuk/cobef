<template>
	<Currentpage />
	<section>
		<div class="email">
			<p>Send us a mail</p>
			<form action="#">
				<input type="email" placeholder="your email" />
				<textarea placeholder="your message goes here" cols="30" rows="14" />
				<button type="submit">send email</button>
			</form>
		</div>
		<div class="wrapper2">
			<div class="contact">
				<p>Phone</p>
				<ul>
					<li>(+234) xxx xxx xxxx</li>
					<li>(+234) xxx xxx xxxx</li>
					<li>(+234) xxx xxx xxxx</li>
					<li>(+234) xxx xxx xxxx</li>
					<li>(+234) xxx xxx xxxx</li>
				</ul>
			</div>
			<div class="social">
				<p>E-mail</p>
				<ul>
					<li>adminuser@email.com</li>
					<li>adminuser@email.com</li>
					<li>adminuser@email.com</li>
				</ul>
			</div>
			<div class="location">
				<p>Address</p>
				<ul>
					<li>Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt.</li>
				</ul>
			</div>
		</div>
	</section>
	<Footer />
</template>

<script setup>
	import Currentpage from '../components/CurrentPage.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
	section {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 30px;
	}

	section p {
		padding: 5px;
		border-bottom: 1px solid rgba(128, 128, 128, 0.263);
		text-transform: capitalize;
		letter-spacing: 2px;
		background-color: #111111;
		color: #ffffff;
	}

	.email {
		border: 1px solid rgba(128, 128, 128, 0.263);
		border-radius: 5px;
		width: 50%;
		height: 400px;
	}

	.wrapper2 {
		width: 50%;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		margin-left: 10px;
	}

	.contact,
	.social,
	.location {
		width: 100%;
		border: 1px solid rgba(128, 128, 128, 0.263);
		border-radius: 5px;
	}

	.contact ul {
		padding: 5px;
		line-height: 25px;
	}

	.social ul {
		padding: 5px;
		line-height: 25px;
		list-style: disc;
	}

	.location ul {
		padding: 5px;
		line-height: 25px;
		list-style: disc;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 10px;
		justify-content: center;
	}

	form input {
		border-radius: 3px;
		font-size: 13px;
		height: 40px;
		border: 1px solid gray;
		margin-bottom: 10px;
		padding: 5px;
	}

	form input::placeholder {
		letter-spacing: 1px;
		text-transform: capitalize;
	}

	form textarea {
		border-radius: 5px;
		padding: 3px;
		border: 1px solid gray;
		margin-bottom: 10px;
	}

	form textarea::placeholder {
		letter-spacing: 1px;
		text-transform: capitalize;
	}

	button {
		height: 40px;
		cursor: pointer;
		background-color: #111111;
		border: none;
		color: #ffffff;
		letter-spacing: 2px;
		text-transform: uppercase;
		font-size: 15px;
		border-radius: 3px;
		font-weight: bold;
	}

	button:hover {
		background-color: #111111;
	}

	@media only screen and (max-width: 600px) {
		section {
			margin-top: 10px;
			display: flex;
			flex-direction: column;
			padding: 5px;
		}

		.email {
			width: 100%;
			margin-bottom: 10px;
			border: 1px solid;
		}

		.wrapper2 {
			width: 100%;
			margin: 0px;
		}

		.contact,
		.social,
		.location {
			margin-bottom: 20px;
			border: 1px solid;
		}

		.wrapper2 li {
			font-size: small;
			letter-spacing: 1.5px;
		}
	}
</style>
