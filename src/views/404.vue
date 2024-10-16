<template>
   <div class="container">
      <p>Oops, you have hit a FOUR-OH-FOUR!</p>
      <router-link to="/">Go Home</router-link>
   </div>
</template>
<script setup>
   // import { onMounted } from 'vue';
   // import { useRouter } from 'vue-router';
   // const router = useRouter();

   // onMounted(() => {
   //    setTimeout(() => {
   //       router.push('/');
   //    }, 3000);
   // });
</script>
<style scoped>
   .container {
      height: 100vh;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   p {
      font-size: 2em;
      text-transform: uppercase;
      margin-bottom: 10px;
      letter-spacing: 2px;
   }

   a {
      border: var(--border);
      padding: 10px;
      color: var(--pry-text);
      font-size: 1.4em;
      border-radius: 3px;
      font-weight: bold;
      transition: 1s ease-in-out;
      letter-spacing: 2px;
   }

   a:hover {
      background: var(--background2);
      color: #fff;
      transition: 1s ease-in-out;
   }
</style>