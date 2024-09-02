<template>
   <footer>
      <div class="container">
         <div class="index">
            <h1>Cobef Index</h1>
            <ul>
               <li><router-link to="/">Home</router-link></li>
               <li><router-link to="about">About</router-link></li>
               <li><router-link to="workforce">Workforce</router-link></li>
               <li><router-link to="products">Products</router-link></li>
               <li><router-link to="projects">Projects</router-link></li>
               <li><router-link to="careers">Careers</router-link></li>
               <li><router-link to="contact">Contact</router-link></li>
            </ul>
         </div>
         <div class="social">
            <h1>Social</h1>
            <ul>
               <li><a href="#">Linkedin</a></li>
               <li><a href="#">Whatsapp</a></li>
            </ul>
         </div>
         <div class="connect">
            <h1>Interested in learning more?</h1>
            <div class="link-wrapper">
               <router-link to="contact">Let's connect</router-link>
            </div>
         </div>
      </div>
      <div class="bottom-footer">
         <p>© {{ currentYear }} . COBEF International Limited . All rights reserved.</p>
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
      background-color: #ffffff;
   }

   .index,
   .social {
      height: 100%;
      width: 60vw;
      padding: 10px;
   }

   .index li,
   .social li {
      list-style-type: decimal;
      list-style-position: inside;
      border-bottom: var(--sec-border);
      padding: 3px;
      font-size: .8em;
      transition: 1s ease-in-out;
   }

   .index li:hover,
   .social li:hover {
      background: #000000;
      cursor: pointer;
      color: #ffffff;
      transition: 1s ease-in-out;
   }

   .index a:hover,
   .social a:hover {
      color: #ffffff;
      transition: 1s ease-in-out;
   }

   .index a,
   .social a {
      color: var(--pry-text-color);
      margin-left: 50px;
   }

   .index h1,
   .social h1 {
      border-bottom: 1px solid;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 1em;
   }

   .connect {
      margin: 8px;
      min-width: 450px;
      min-height: 40vh;
      border-radius: 10px;
      position: relative;
      background-image: url(../assets/homepage-images/team.jpg);
      background-size: cover;
   }

   .connect h1 {
      font-weight: normal;
      font-size: 1.1em;
      letter-spacing: 1px;
      padding: 10px;
      color: #ffffff;
   }

   .link-wrapper {
      width: fit-content;
   }

   .link-wrapper a {
      background: #ffffff;
      color: #000000;
      border: 1px solid;
      padding: 30px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 6px 6px 6px;
      border-radius: 5px;
   }

   .bottom-footer {
      padding: 8px;
      display: flex;
      justify-content: space-between;
      border-top: var(--sec-border);
   }

   .bottom-footer p {
      font-size: .7em;
      margin-right: 10em;
   }

   @media only screen and (max-width:850px) {
      .container {
         display: flex;
         flex-direction: column;
      }

      .index,
      .social {
         width: 100%;
         padding: 3px;
      }

      .index a,
      .social a {
         margin-left: 10px;
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
         padding: 2px;
      }
   }
</style>
<script setup>
   import { ref } from 'vue';
   const currentYear = ref(new Date().getFullYear());
</script>