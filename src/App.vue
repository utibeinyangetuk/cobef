<template>
   <RouterView />
   <Navbar />
   <Footer />
</template>

<script setup>
   import Footer from "@/components/Footer.vue";
   import Navbar from "@/components/Navbar.vue";
</script>

<style>
   @import url("https://fonts.cdnfonts.com/css/poppins");

   :root {
      --pry-background: #F9F6E7;
      --sec-background: #0E100F;
      --pry-text-color: #000000;
      --sec-text-color: #625a46;
      --ter-text-color: #ffffff;
      --hover: #2A868D;
      --pry-border: 1px solid #d2c7ab;
      --sec-border: 1px solid #1c1c1c32;
      --box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
   }

   #app {
      font-family: 'poppins', sans-serif;
      -webkit-font-smoothing: subpixel-antialiased !important;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      overflow: auto;
      scroll-behavior: smooth;
      background-color: var(--pry-background);
      /**
      background-image:
         linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
         linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      background-size: 40px 40px;

      **/
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;

      ::-webkit-scrollbar {
         width: 3px;
      }

      ::-webkit-scrollbar-track {
         background: var(--pry-background);
      }

      ::-webkit-scrollbar-thumb {
         background: var(--sec-background);
         border-radius: 10px;
      }
   }
</style>