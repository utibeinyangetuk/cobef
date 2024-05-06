<template>
   <div class="container">
      <div class="miniHeader">
         <div class="contact">
            <i class="uil uil-chat" /><span> 24x7 Live Support </span>
            <i class="uil uil-phone" /><span>(+234) xxx xxx xxxx || (+234) xxx xxx xxxx</span>
         </div>
         <div class="social">
            <span>Follow us </span><i class="uil uil-twitter" /><i class="uil uil-facebook-f" /><i
               class="uil uil-linkedin"
            /><i class="uil uil-whatsapp" />
         </div>
      </div>
      <NavBar />
      <Carousel />
      <History />
      <Footer />
   </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import Footer from '../components/Footer.vue'
import History from '../components/History.vue'
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.container {
   height: 100%;
   background-color: #fdf5e5;
}

.miniHeader {
   background-color: #020e2a;
   height: 40px;
   color: #ffffff;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;
}

.contact {
   padding: 9x;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.contact i {
   color: #fab60f;
   font-size: 20px;
   margin-right: 6px;
}

.contact span {
   margin-right: 10px;
   font-size: 12px;
}

.social {
   padding: 5px;
   display: flex;
   align-items: center;
}

.social i {
   margin-right: 10px;
   font-size: 20px;
}

.social i:hover {
   color: #fab60f;
   cursor: pointer;
}

.social span {
   color: #fab60f;
   font-weight: bold;
   letter-spacing: 2px;
   margin-right: 10px;
}

.history {
   border: 2px solid #000;
   height: 500px;
}
</style>