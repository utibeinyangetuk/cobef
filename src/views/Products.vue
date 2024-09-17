<template>
   <div class="container">
      <div class="left" ref="leftDiv">
         <div v-for="(image, index) in images" :key="index" class="box" :style="{ backgroundImage: `url(${image})` }"
            :data-index="index">
            <!-- Image will be set via CSS background -->
         </div>
      </div>
      <div class="right">
         <h1>{{ currentHeading }}</h1>
         <p>{{ currentContent }}</p>
      </div>
   </div>
</template>

<script setup>
   import { onMounted, ref } from 'vue';
   import conduit from '../assets/materials/conduit.jpg';
   import corrugated from '../assets/materials/corrugated-pipe.jpg';
   import hdpe from '../assets/materials/hdpe.jpg';
   import lapeta from '../assets/materials/LAPETA.jpg';
   import marine_rope from '../assets/materials/marine-rope.jpg';
   import pressure from '../assets/materials/pressure.jpg';
   import pvc from '../assets/materials/pvc.jpg';
   import suction from '../assets/materials/suction-hose.jpg';
   import tank from '../assets/materials/Tank.jpeg';

   // Create an array of the images
   const images = [hdpe, lapeta, tank, pressure, suction, conduit, corrugated, marine_rope, pvc];

   // Define headings and corresponding contents
   const headings = [
      'hdpe', 'lapeta', 'Plastic tanks',
      'pressure pipes', 'suction hose', 'conduit pipes',
      'corrugated pipes', 'marine rope', 'pvc pipes'
   ];

   const contents = [
      '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.',
      '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.',
      '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quaerat quis doloribus, natus nisi, rerum amet nobis vel ullam enim. In odit eligendi architecto repellendus et illo dolorum delectus.',
   ];

   const currentHeading = ref(headings[0]);
   const currentContent = ref(contents[0]);

   const updateRightDivContent = (entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            currentHeading.value = headings[index];
            currentContent.value = contents[index];
         }
      });
   };

   onMounted(() => {
      const observer = new IntersectionObserver(updateRightDivContent, {
         root: document.querySelector('.left'),
         threshold: 0.5 // Trigger update when 50% of the box is visible
      });

      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
         observer.observe(box);
      });
   });
</script>

<style scoped>
   .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      height: 100vh;
      width: 100%;
      background-color: var(--background2);
   }

   .left {
      flex: 1;
      gap: 10px;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      border-right: var(--border);
      filter: grayscale();
   }

   .right {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      width: 100%;
      height: 100vh;
      padding: 1rem;
      background-color: var(--background2);
      transition: background-color 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .right h1 {
      text-transform: uppercase;
      text-align: left;
      letter-spacing: 1px;
      font-size: 3em;
      color: var(--sec-text);
   }

   .right p {
      font-size: .8em;
      line-height: 2em;
      color: var(--sec-text);
   }

   .box {
      height: 100vh;
      scroll-snap-align: start;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border: var(--border);
   }

   @media (max-width: 1024px) {
      .container {
         display: flex;
         flex-direction: column;
         height: 100vh;
      }

      .right {
         position: relative;
         padding-top: 2rem;
         height: fit-content;
         border: 2px solid #fff;
      }

      .right h1 {
         font-size: 2em;
         margin-bottom: .3em;
      }

      .box {
         background-size: contain;
      }
   }
</style>