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
         <div class="connect">
            <h1>Interested in learning more or collaborating?</h1>
            <div class="link-wrapper">
               <router-link to="contact">Leave us a message</router-link>
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
      background:#d7ab768e;
      border: var(--border);
      width: 100%;
   }

   .container {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      padding: 10px;
   }

   .container h1 {
      font-size: 1em;
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: var(--background2);
      padding: 5px;
      color: var(--sec-text);
   }

   .links {
      display: flex;
      flex-direction: column;
   }

   .links a {
      border: var(--border);
      margin-top: 10px;
      padding: 5px;
      color: var(--pry-text);
      font-size: .8em;
      letter-spacing: .6px;
      text-transform: uppercase;
   }

   .links a:hover {
      background-color: var(--background2);
      color: var(--sec-text);
   }

   .connect {
      background-color: var(--background2);
      padding: 10px;
      min-height: 40vh;
      position: relative;
   }

   .link-wrapper a {
      border: var(--sec-border);
      padding: 10px;
      color: var(--sec-text);
      text-transform: uppercase;
      font-size: .8em;
      letter-spacing: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 6px 6px;
   }

   .link-wrapper a:hover {
      background-color: var(--background1);
      color: var(--pry-text);
   }

   .bottom-footer {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      border-top: var(--border);
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