<template>
   <div>
      <!-- Hamburger menu -->
      <button @click="toggleMenu" :class="{ open: isOpen }" class="hamburger-menu">
         <span></span>
         <span></span>
         <span></span>
      </button>

      <!-- Fullscreen menu -->
      <div v-if="isOpen" class="fullscreen-menu">
         <!-- Menu items -->
         <nav>
            <ul>
               <li><router-link to="/">Home</router-link></li>
               <li><router-link to="/about">About us</router-link></li>
               <li><router-link to="/products">Our products</router-link></li>
               <li><router-link to="/projects">projects</router-link></li>
               <li><router-link to="/contact">Contact us</router-link></li>
            </ul>
         </nav>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
const toggleMenu = () => {
   isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.hamburger-menu {
   position: fixed;
   top: 40px;
   right: 20px;
   z-index: 1000;
   background: none;
   border: none;
   cursor: pointer;
   padding: 10px;
}

.hamburger-menu span {
   display: block;
   width: 50px;
   height: 8px;
   margin-bottom: 5px;
   background-color: #fdf5e5;
   border-radius: 5px;
   transition: transform 0.6s ease;
}

.hamburger-menu.open span:nth-child(1) {
   transform: translateY(15px) rotate(45deg);
}

.hamburger-menu.open span:nth-child(2) {
   opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
   transform: translateY(-10px) rotate(-45deg);
}

.hamburger-menu.open span {
   background-color: #fdf5e5;
}

.fullscreen-menu {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #020e2a;
   z-index: 999;
   display: flex;
   align-items: center;
   justify-content: center;
}

.fullscreen-menu nav ul {
   list-style: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
}

.fullscreen-menu nav ul li {
   margin-top: 30px;
   padding: 10px;
   letter-spacing: 1.2px;
   text-transform: uppercase;
}

.fullscreen-menu nav ul li:hover {
   border: 1px solid #fdf5e5;
   border-radius: 5px;
}

.fullscreen-menu nav ul li a {
   text-decoration: none;
   color: #fdf5e5;
   font-size: 30px;
}

@media only screen and (max-width: 600px) {
   .hamburger-menu {
      position: fixed;
      top: 30px;
      right: 8px;
   }

   .hamburger-menu span {
      width: 40px;
      height: 5px;
   }

   .hamburger-menu.open span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
   }
}
</style>