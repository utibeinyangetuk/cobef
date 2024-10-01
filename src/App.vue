<template>
   <RouterView />
   <Navbar />
   <Footer />
</template>

<script setup>
   import Footer from "@/components/Footer.vue";
   import Navbar from "@/components/NavBar.vue";
</script>

<style>
   @import url("https://fonts.cdnfonts.com/css/poppins");

   :root {
      --background1: #F9F6E7;
      --background2: #0E100F;
      --background3: #D7AB76;
      --background4: #DB5850;
      --background5: #459EB1;
      --pry-text: #040405;
      --sec-text: #ffffff;
      --border: 2px solid #040405;
      --sec-border: 2px solid #ffffff;
      --box-shadow: -4px 8px 0 0 var(--background2);
   }

   #app {
      font-family: 'poppins', sans-serif;
      -webkit-font-smoothing: subpixel-antialiased !important;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      overflow: auto;
      scroll-behavior: smooth;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;

      ::-webkit-scrollbar {
         width: 5px;
      }

      ::-webkit-scrollbar-track {
         background: var(--background1);
      }

      ::-webkit-scrollbar-thumb {
         background: var(--background2);
         border-radius: 10px;
      }
   }
</style>