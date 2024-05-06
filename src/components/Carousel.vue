<template>
   <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
         <div v-for="(image, index) in images" :key="index" class="carousel-slide">
            <img :src="image" alt="Carousel Slide" class="carousel-image" />
         </div>
      </div>
      <div class="indicators">
         <span
            v-for="(image, index) in images"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="goTo(index)"
            class="indicator"
         ></span>
      </div>
   </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'

const images = ref([
   'https://via.placeholder.com/600x300?text=Image+1',
   'https://via.placeholder.com/600x300?text=Image+2',
   'https://via.placeholder.com/600x300?text=Image+3',
   'https://via.placeholder.com/600x300?text=Image+4',
   'https://via.placeholder.com/600x300?text=Image+5'
])

const currentIndex = ref(0)

const next = () => {
   currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prev = () => {
   currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

const goTo = (index) => {
   currentIndex.value = index
}

// Automatic sliding
let timer
const autoSlide = () => {
   timer = setInterval(() => {
      next()
   }, 3000)
}

autoSlide()

onUnmounted(() => {
   clearInterval(timer)
})
</script>

<style scoped>
.indicators {
   position: absolute;
   top: 40%;
   left: 4%;
   transform: translateX(-50%);
   display: flex;
   flex-direction: column;
}

.indicator {
   width: 15px;
   height: 4px;
   background-color: #fab60f;
   border-radius: 5px;
   margin: 0 5px 15px;
   cursor: pointer;
}

.indicator.active {
   background-color: #fab60f;
   width: 60px;
}

.carousel {
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 572px;
}

.carousel-inner {
   display: flex;
   transition: transform 0.5s ease;
}

.carousel-slide {
   flex: 0 0 100%;
}

.carousel-image {
   width: 100%;
   height: 100%;
}
</style>
