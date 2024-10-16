<template>
   <footer>
      <div class="container">
         <div class="index">
            <h1>Cobef Index</h1>
            <div class="links">
               <router-link to="/">Home</router-link>
               <router-link to="about">About</router-link>
               <router-link to="products">Products</router-link>
               <router-link to="projects">Projects</router-link>
               <router-link to="careers">Careers</router-link>
               <router-link to="contact">Contact</router-link>
            </div>
         </div>
         <div class="social">
            <h1>Social</h1>
            <div class="links">
               <a href="#">Linkedin</a>
               <a href="#">Whatsapp</a>
               <a href="#">Facebook</a>
            </div>
         </div>
      </div>
      <div class="bottom-footer">
         <p>
            © {{ currentYear }} . COBEF International Limited . All rights
            reserved.
         </p>
         <p>Website by utibe</p>
      </div>
   </footer>
</template>
<style scoped>
   footer {
      background: #ffffff;
      width: 100%;
   }

   .container {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      padding: 20px;
   }

   .container h1 {
      font-size: 1em;
      text-transform: uppercase;
      letter-spacing: 1px;
      background-color: var(--background2);
      padding: 5px;
      color: var(--sec-text);
      border-radius: 5px;
   }

   .links {
      display: flex;
      flex-direction: column;
   }

   .links a {
      width: fit-content;
      margin-top: 10px;
      padding: 5px;
      color: var(--pry-text);
      font-size: .7em;
      letter-spacing: .6px;
      text-transform: capitalize;
   }

   .links a:hover {
      text-decoration: underline;
   }

   .bottom-footer {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: rgb(229, 227, 227);
   }

   .bottom-footer p {
      font-size: .7em;
   }

   @media only screen and (max-width:500px) {
      .bottom-footer {
         display: flex;
         flex-direction: column;
      }
   }
</style>
<script setup>
   import { ref } from "vue";
   const currentYear = ref(new Date().getFullYear());
</script>