<template>
   <div class="container">
      <div class="left" ref="leftDiv">
         <div v-for="(image, index) in images" :key="index" class="box" :data-index="index">
            <img :src="image" alt="Material Image" />
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

   const images = [hdpe, lapeta, tank, pressure, suction, conduit, corrugated, marine_rope, pvc];
   const headings = [
      'hdpe', 'lapeta', 'Plastic tanks',
      'pressure pipes', 'suction hose', 'conduit pipes',
      'corrugated pipes', 'marine rope', 'pvc pipes'
   ];
   const contents = [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
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
         threshold: 0.5
      });

      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
         observer.observe(box);
      });
   });
</script>

<style scoped>
   .container {
      padding: 0 20px;
      margin-top: 40px;
      height: 100vh;
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr;
   }

   .left {
      background-color: var(--background1);
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      flex: 1;
   }

   .box {
      padding: 7px 0;
      width: 100%;
      height: 90vh;
      scroll-snap-align: start;
   }

   .box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .right {
      background: var(--background4);
      height: 90vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      position: sticky;
      top: 0;
   }

   .right h1 {
      text-transform: uppercase;
      font-size: 2em;
      line-height: 1em;
      text-align: left;
      color: var(--pry-text);
   }

   .right p {
      line-height: 2em;
      font-size: .8em;
      color: var(--pry-text);
   }

   @media only screen and (max-width:1000px) {
      .container {
         display: flex;
         flex-direction: column;
      }

      .box {
         height: 85vh;
      }

      .right {
         height: fit-content;
         margin-bottom: 5px;
      }

      .right h1 {
         margin-bottom: 10px;
         font-size: 1.5em;
      }
   }
</style>