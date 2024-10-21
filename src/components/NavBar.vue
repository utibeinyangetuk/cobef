<script setup>
   import { ref } from "vue";
   import { useRouter } from "vue-router";

   const isOpen = ref(false);
   const router = useRouter();

   const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
         clearTimeout(timeout);
         timeout = setTimeout(() => func.apply(this, args), delay);
      };
   };

   const toggleMenu = debounce(() => {
      isOpen.value = !isOpen.value;
   }, 100);

   const closeMenu = () => {
      isOpen.value = false;
   };

   const isActive = (route) => {
      return router.currentRoute.value.path === route;
   };

   const links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Products", path: "/products" },
      { name: "Projects", path: "/projects" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
   ];
</script>

<template>
   <div class="main-wrapper">
      <div class="logo">
         <h1>Cobef</h1>
      </div>
      <div class="nav-links">
         <router-link to="/">Home</router-link>
         <router-link to="/about">About</router-link>
         <router-link to="/projects">Projects</router-link>
         <router-link to="/products">Products</router-link>
         <router-link to="/careers">Careers</router-link>
         <router-link to="/contact">Contact</router-link>
      </div>
      <div class="hamburger">
         <button @click="toggleMenu" :class="{ open: isOpen }" class="hamburger-menu">
            <span />
            <span />
            <span />
         </button>
         <transition name="slide-fade">
            <div v-if="isOpen" class="fullscreen-menu">
               <ul>
                  <li v-for="(link, index) in links" :key="link.path" :class="{ active: isActive(link.path) }">
                     <router-link :to="link.path" @click.native="closeMenu">
                        {{ link.name }}</router-link>
                  </li>
               </ul>
            </div>
         </transition>
      </div>
   </div>
</template>
<style scoped>
   .main-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--background1);
      height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
   }

   .logo {
      width: fit-content;
      padding: 5px;
   }

   /*FIXME: Find a better font for the logo*/
   .logo h1 {
      font-size: 1.5em;
      text-transform: uppercase;
   }

   .nav-links {
      display: flex;
      justify-content: space-evenly;
      width: 50%;
   }

   .nav-links a {
      text-transform: capitalize;
      letter-spacing: 1px;
      font-size: .7em;
      color: var(--pry-text);
      padding: 0 8px;
   }

   .nav-links a:hover {
      text-decoration: underline;
   }

   .hamburger-menu {
      transition: transform 0.6s ease-in-out;
      background: inherit;
      border: none;
      padding: 10px;
      height: 100%;
      display: none;
   }

   .hamburger-menu span {
      display: block;
      height: 2px;
      width: 2em;
      margin-bottom: 5px;
      background-color: var(--pry-text);
      transition: transform 0.6s ease, background-color 0.3s ease;
   }

   @keyframes slide-in {
      from {
         transform: translateX(100%);
         opacity: 0;
      }

      to {
         transform: translateX(0);
         opacity: 1;
      }
   }

   @keyframes slide-out {
      from {
         transform: translateX(0);
         opacity: 1;
      }

      to {
         transform: translateX(100%);
         opacity: 0;
      }
   }

   .hamburger-menu.open span:nth-child(1) {
      transform: translateY(5px);
   }

   .hamburger-menu.open span:nth-child(2) {
      transform: rotate(90deg) translateY(0px);
   }

   .hamburger-menu.open span:nth-child(3) {
      transform: translateY(-5px);
   }

   .hamburger-menu.open {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000;
   }

   .slide-fade-enter-active {
      animation: slide-in 1s ease forwards;
   }

   .slide-fade-leave-active {
      animation: slide-out 1s ease forwards;
   }

   .fullscreen-menu {
      position: fixed;
      top: 44px;
      right: 6px;
      background-color: var(--background1);
      z-index: 999;
      width: fit-content;
      height: fit-content;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0 20px;
   }

   .fullscreen-menu ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 10px;
      justify-content: space-between;
      align-items: left;
      width: fit-content;
      height: fit-content;
   }

   .fullscreen-menu ul li {
      margin-bottom: 15px;
      border: 1px solid #00000013;
      border-radius: 5px;
   }

   .fullscreen-menu ul li a {
      padding: 5px;
      letter-spacing: 1px;
      font-size: 1.1em;
      transition: 0.6s ease-in-out;
      color: var(--pry-text);
      text-transform: capitalize;
   }

   .fullscreen-menu ul li:hover {
      transition: 0.6s ease-in-out;
      background-color: var(--background4);
   }

   .fullscreen-menu ul li.active {
      transition: 0.6s ease-in-out;
      background-color: var(--background4);
   }

   @media only screen and (max-width: 600px) {
      .nav-links {
         display: none;
      }

      .fullscreen-menu {
         width: fit-content;
         padding: 20px 10px;
      }

      .hamburger-menu {
         display: block;
      }
   }
</style>