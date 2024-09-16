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

   const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
   };
</script>

<template>
   <div class="container">
      <div class="main-wrapper">
         <div class="logo">
            <h1>Cobef</h1>
         </div>
         <div class="nav-links">
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Project</router-link>
            <router-link to="/products">Product</router-link>
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
                  <!-- Menu items -->
                  <ul>
                     <li v-for="(link, index) in links" :key="link.path" :class="{ active: isActive(link.path) }">
                        <router-link :to="link.path" @click.native="closeMenu">
                           <span class="link-number">
                              {{ formatNumber(index + 1) }}/</span>{{ link.name }}</router-link>
                     </li>
                  </ul>
               </div>
            </transition>
         </div>
      </div>
   </div>
</template>
<style scoped>
   .container {
      background: var(--pry-background);
      height: 50px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }

   .main-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .logo {
      width: fit-content;
      padding: 5px;
   }

   .logo h1 {
      font-size: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke-width: 0.06rem;
      -webkit-text-stroke-color: #000000;
      white-space: nowrap;
   }

   .nav-links {
      display: flex;
      justify-content: space-evenly;
      width: 30%;
   }

   .nav-links a {
      letter-spacing: 2px;
      font-size: 13px;
      transition: 0.6s ease-in-out;
      color: var(--sec-text);
   }

   .nav-links a:hover {
      transition: 0.6s ease-in-out;
      color: var(--link-hover);
   }

   .hamburger-menu {
      transition: transform 0.6s ease-in-out;
      background: transparent;
      border: none;
      padding: 10px;
   }

   .hamburger-menu span {
      display: block;
      height: 2px;
      width: 2em;
      margin-bottom: 5px;
      background-color: var(--pry-text-color);
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
      transform: translateY(13px) rotate(45deg);
   }

   .hamburger-menu.open span:nth-child(2) {
      opacity: 0;
   }

   .hamburger-menu.open span:nth-child(3) {
      transform: translateY(-2px) rotate(-45deg);
   }

   .hamburger-menu.open {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000;
   }

   .hamburger-menu.open span {
      background-color: var(--sec-background);
   }

   .slide-fade-enter-active {
      animation: slide-in 1s ease forwards;
   }

   .slide-fade-leave-active {
      animation: slide-out 1s ease forwards;
   }

   .fullscreen-menu {
      position: fixed;
      top: 50px;
      right: 2px;
      background-color: var(--pry-background);
      background-image: var(--ter-background);
      background-size: var(--ter-background-size);
      z-index: 999;
      width: fit-content;
      height: fit-content;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: var(--pry-border);
      padding: 20px;
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
      border: var(--pry-border);
      height: fit-content;
   }

   .fullscreen-menu ul li a {
      padding: 5px;
      letter-spacing: 1px;
      font-size: 1.3em;
      transition: 0.6s ease-in-out;
      color: var(--pry-text);
      text-transform: capitalize;
   }

   .fullscreen-menu ul li a:hover {
      color: var(--link-hover);
      transition: 0.6s ease-in-out;
   }

   .fullscreen-menu ul li span {
      color: var(--sec-text);
      font-size: 0.6em;
      margin-right: 6px;
   }

   .fullscreen-menu ul li.active {
      font-size: 0.8rem;
      background-color: var(--sec-background);
      width: fit-content;
      border: none;
   }

   @media only screen and (max-width: 600px) {
      .nav-links {
         display: none;
      }

      .fullscreen-menu {
         width: fit-content;
         padding: 20px 10px;
      }
   }

   @media only screen and (min-width: 601px) {
      .nav-links {
         width: fit-content;
      }

      .nav-links a {
         margin-right: 10px;
      }
   }
</style>