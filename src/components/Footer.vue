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
      background: var(--pry-background);
   }

   .container {
      display: flex;
   }

   .index,
   .social {
      height: 100%;
      width: 60vw;
      padding: 10px;
   }

   .links {
      display: flex;
      flex-direction: column;
   }

   .index a,
   .social a {
      border: var(--sec-border);
      transition: 1s ease-in-out;
      margin-top: 10px;
      border-radius: 3px;
      font-size: 0.7em;
      color: var(--pry-text-color);
      padding: 10px;
      letter-spacing: 1.5px;
   }

   .index a:hover,
   .social a:hover {
      background: var(--sec-background);
      color: var(--hover);
      transition: 1s ease-in-out;
   }

   .index h1,
   .social h1 {
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.8em;
      text-transform: uppercase;
      padding: 10px;
      border-radius: 5px;
      color: var(--ter-text-color);
      background-color: var(--sec-background);
   }

   .connect {
      margin: 8px;
      min-width: 450px;
      min-height: 30vh;
      border-radius: 10px;
      position: relative;
      background-color: var(--sec-background);
      background-size: cover;
   }

   .connect h1 {
      font-family: planer;
      font-weight: 600;
      font-size: 1em;
      letter-spacing: 3px;
      line-height: 2rem;
      text-transform: uppercase;
      padding: 10px;
      color: var(--ter-text-color);
   }

   .link-wrapper {
      width: fit-content;
   }

   .link-wrapper a {
      font-size: 0.7em;
      background: var(--pry-background);
      color: #000000;
      padding: 18px;
      position: absolute;
      letter-spacing: 2px;
      font-family: planer;
      font-weight: 600;
      text-transform: uppercase;
      bottom: 0;
      right: 0;
      margin: 6px 6px 6px;
      border-radius: 5px;
      transition: 1s ease-in-out;
   }

   .link-wrapper a:hover {
      padding: 20px 100px;
      transition: 1s ease-in-out;
      background: var(--hover);
      color: #ffffff;
   }

   .bottom-footer {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      border-top: var(--sec-border);
   }

   .bottom-footer p {
      font-size: 0.7em;
      margin-right: 10em;
   }

   @media only screen and (max-width: 700px) {
      .container {
         display: flex;
         flex-direction: column;
      }

      .index,
      .social {
         width: 100%;
         padding: 3px;
      }

      .index h1,
      .social h1 {
         margin-top: 10px;
         margin-bottom: 5px;
      }

      .connect {
         min-width: 100%;
         min-height: 30vh;
         margin: 0;
         border-radius: 2px;
      }

      .bottom-footer {
         display: flex;
         flex-direction: column;
         text-align: center;
         padding: 0;
      }

      .bottom-footer p {
         margin: 0;
         padding:6px;
      }
   }
</style>
<script setup>
   import { ref } from "vue";
   const currentYear = ref(new Date().getFullYear());
</script>