<template>
   <div class="carousel">
      <div class="carousel-inner"
         :style="{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }">
         <div class="carousel-item" v-for="(image, index) in images" :key="index"
            :style="{ width: `${100 / images.length}%` }">
            <img :src="image" :alt="'Slide ' + index" />
         </div>
      </div>
      <div class="carousel-indicators">
         <span v-for="(image, index) in images" :key="index" class="indicator"
            :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
      </div>
   </div>
</template>

<script setup>
   import { onMounted, onUnmounted, ref } from 'vue';

   const props = defineProps({
      images: {
         type: Array,
         required: true,
      },
   });

   const currentIndex = ref(0);
   const timer = ref(null);

   const prevSlide = () => {
      currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
   };

   const nextSlide = () => {
      currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1;
   };

   const goToSlide = (index) => {
      currentIndex.value = index;
   };

   const autoSlide = () => {
      timer.value = setInterval(() => {
         nextSlide();
      }, 3000);
   };

   onMounted(() => {
      autoSlide();
   });

   onUnmounted(() => {
      clearInterval(timer.value);
   });
</script>

<style scoped>
   .carousel {
      position: relative;
      width: 100%;
      height: 94vh;
      margin: auto;
      overflow: hidden;
   }

   .carousel-inner {
      display: flex;
      transition: transform 0.5s ease-in-out;
   }

   .carousel-item {
      width: 100%;
      box-sizing: border-box;
   }

   .carousel-item img {
      width: 100%;
      height: 94vh;
      object-fit: cover;
   }

   .carousel-indicators {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: left;
   }

   .indicator {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      cursor: pointer;
   }

   .indicator.active {
      background-color: var(--background1);
   }

   @media only screen and (max-width:768px) {
      .carousel {
         height: 70vh;
      }

      .carousel-item img {
         height: 100%;
      }

      .indicator {
         height: 10px;
         width: 10px;
      }
   }
</style>