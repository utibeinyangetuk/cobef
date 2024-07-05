<template>
	<div class="card">
		<div class="profile-picture">
			<img :src="profilePicture" alt="Profile Picture" />
		</div>
		<div class="card-content">
			<h2>{{ name }}</h2>
			<p>{{ role }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	profilePicture: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	}
});
</script>

<style scoped>
.card {
	border-radius: 40px;
	width: 35vw;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.profile-picture {
	border: 1px solid #ffffff;
	border-radius: 40px;
	height: 450px;
	width: 100%;
}

.profile-picture img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.card-content {
	height: 60px;
	text-align: center;
	font-family: Montserrat;
}

.card-content h2 {
	color: #ffffff;
	text-transform: capitalize;
	font-weight: normal;
	margin-top: 10px;
	letter-spacing: 1px;
	font-size: 16px;
}

.card-content p {
	color: gray;
	font-size: 13px;
	letter-spacing: 1px;
}
</style>