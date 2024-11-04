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
      --background1: #FDF5E5;
      --background2: #231F20;
      --background3: #EDEEE7;
      --background4: #F2EBDB;
      --background5: #ADB3C2;
      --pry-text: #231F20;
      --sec-text: #FDF5E5;
      --border: 1px solid #8784848b;
      --box-shadow: -4px 8px 0 0 var(--background2);
      --border-radius: 5px;
   }

   #app {
      font-family: 'poppins', sans-serif;
      -webkit-font-smoothing: subpixel-antialiased !important;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      overflow: auto;
      scroll-behavior: smooth;
      background-color: var(--background1);
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;

      ::-webkit-scrollbar {
         width: 5px;
         display: none;
      }

      ::-webkit-scrollbar-track {
         background: var(--background1);
      }

      ::-webkit-scrollbar-thumb {
         background: var(--background2);
         border-radius: var(--border-radius);
      }
   }
</style>