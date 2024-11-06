<template>
   <div class="carousel">
      <div
         class="carousel-inner"
         :style="{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
         }"
      >
         <div
            class="carousel-item"
            v-for="(image, index) in images"
            :key="index"
            :style="{ width: `${100 / images.length}%` }"
         >
            <img loading="lazy" :src="image" :alt="'Slide ' + index" />
         </div>
      </div>
      <div class="carousel-indicators">
         <span
            v-for="(image, index) in images"
            :key="index"
            class="indicator"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
         ></span>
      </div>
   </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
   images: {
      type: Array,
      required: true,
   },
});

const currentIndex = ref(0);
const timer = ref(null);

const prevSlide = () => {
   currentIndex.value =
      currentIndex.value === 0
         ? props.images.length - 1
         : currentIndex.value - 1;
};

const nextSlide = () => {
   currentIndex.value =
      currentIndex.value === props.images.length - 1
         ? 0
         : currentIndex.value + 1;
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
   margin: auto;
   overflow: hidden;
   height: 94vh;
}

.carousel-inner {
   display: flex;
   transition: transform 0.5s ease-in-out;
   height: 100%;
}

.carousel-item {
   width: 100%;
   height: 100%;
   box-sizing: border-box;
   flex-shrink: 0;
}

.carousel-item img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center;
}

.carousel-indicators {
   position: absolute;
   bottom: 20px;
   left: 0;
   width: 100%;
   text-align: center;
   z-index: 2;
}

.indicator {
   display: inline-block;
   width: 12px;
   height: 12px;
   margin: 0 6px;
   background-color: rgba(255, 255, 255, 0.6);
   border-radius: 50%;
   cursor: pointer;
   transition: all 0.3s ease;
}

.indicator.active {
   background-color: var(--background1);
   transform: scale(1.2);
}

/* Large devices (desktops) */
@media screen and (min-width: 1200px) {
   .carousel {
      height: 94vh;
   }

   .carousel-item img {
      object-fit: fill;
   }
}

/* Medium devices (tablets) */
@media screen and (max-width: 991px) {
   .carousel {
      height: 80vh;
   }
}

/* Small devices (mobile phones) */
@media screen and (max-width: 767px) {
   .carousel {
      height: 60vh;
   }
   .indicator {
      width: 8px;
      height: 8px;
      margin: 0 4px;
   }
}

/* Extra small devices */
@media screen and (max-width: 480px) {
   .carousel {
      height: 50vh;
   }
}
</style>
