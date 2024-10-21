<script setup>
   import image4 from "@/assets/projects/four.jpg";
   import image1 from "@/assets/projects/one.jpg";
   import image3 from "@/assets/projects/three.jpg";
   import image2 from "@/assets/projects/two.jpg";
   import ImageCarousel from "@/components/ImageCarousel.vue";
   import { ref } from "vue";
   const pictures = [image1, image2, image3, image4]; //TODO:Import the pictures and add them to the array

   const coreValues = ref([    //TODO: Add other core values
      { id: 1, title: 'Innovation', description: 'Pioneering solutions that redefine industries', icon: 'uil uil-lightbulb' },
      { id: 2, title: 'Integrity', description: 'Upholding the highest ethical standards in all we do', icon: 'uil uil-shield' },
      { id: 3, title: 'Collaboration', description: 'Fostering partnerships to achieve shared success', icon: 'uil uil-lightbulb' },
      { id: 4, title: 'Excellence', description: 'Pursuing perfection in every aspect of our work', icon: 'uil uil-award' },
   ]);

   const timeline = ref([
      { id: 1, year: '2010', description: 'Cobef founded with a vision to revolutionize the industry' },
      { id: 2, year: '2015', description: 'Launch of our flagship product, setting new industry standards' },
      { id: 3, year: '2018', description: 'Expansion into international markets, establishing global presence' },
      { id: 4, year: '2022', description: 'Achieved 100% carbon neutrality across all operations' },
      { id: 5, year: '2024', description: 'Celebrating a decade of innovation and sustainable growth' },
   ]);
</script>
<template>
   <div class="container">
      <div class="carousel-wrapper">
         <ImageCarousel :images="pictures" class="images" />
      </div>
      <div class="about">
         <h1>About Us</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestiae voluptatum est possimus
            reiciendis, ipsam quidem iure, tempora sapiente recusandae corporis sequi consectetur illum. Veritatis quia
            atque incidunt fugiat ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolores ullam
            perferendis repellat doloremque suscipit earum, unde exercitationem quibusdam natus quaerat alias dolorem
            similique? Inventore ipsa magnam quae facilis eaque. perferendis repellat doloremque suscipit earum, unde
            exercitationem quibusdam natus quaerat alias dolorem
            similique? Inventore ipsa magnam quae facilis eaque.</p>
      </div>
      <div class="mission-container">
         <section class="mission-wrapper">
            <h1>Our Mission</h1>
            <p>To drive industry transformation through innovative solutions and an unwavering commitment to excellence,
               creating value for our clients and society.</p>
         </section>
         <section class="vision-wrapper">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa autem laborum dicta exercitationem,
               commodi, voluptatem facere ipsum nobis animi, ut nostrum cum vitae odio odit repudiandae nulla debitis
               molestiae nisi.</p>
         </section>
      </div>
      <div class="values">
         <h1>Our core values</h1>
         <div class="values-wrapper">
            <div v-for="value in coreValues" :key="value.id" class="value-card">
               <div class="value-icon">
                  <i :class="value.icon"></i>
               </div>
               <h3>{{ value.title }}</h3>
               <p>{{ value.description }}</p>
            </div>
         </div>
      </div>
      <div class="team">
         <h1>Leadership Team</h1>
         <div class="team-wrapper">
            <div class="profile-card">
               <div class="profile-image">
                  <img src="#" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1> Adam Sanders</h1>
                  <p>Chief Technology Officer</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="#" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1> Adam Sanders</h1>
                  <p>Chief Technology Officer</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="#" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1> Adam Sanders</h1>
                  <p>Chief Technology Officer</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="#" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1> Adam Sanders</h1>
                  <p>Chief Technology Officer</p>
               </div>
            </div>
         </div>
      </div>
      <section class="timeline">
         <div class="section-header">
            <h1>Our Journey</h1>
         </div>
         <div class="timeline-container">
            <div v-for="event in timeline" :key="event.id" class="timeline-item">
               <div class="timeline-marker"></div>
               <div class="timeline-content">
                  <h3>{{ event.year }}</h3>
                  <p>{{ event.description }}</p>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<style scoped>
   .container {
      margin-top: 40px;
   }

   .carousel-wrapper {
      height: 94vh;
   }

   .images {
      height: 100%;
   }

   .about {
      padding: 5px;
   }

   .about h1 {
      text-align: center;
      font-size: 2.5em;
      text-transform: uppercase;
   }

   .about p {
      font-size: .8em;
      line-height: 2em;
      text-align: center;
   }

   .mission-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 10px;
      padding: 10px;
      margin-bottom: 10px;
   }

   .mission-wrapper h1,
   .vision-wrapper h1 {
      margin-bottom: 10px;
      font-size: 2.5rem;
   }

   .mission-wrapper {
      text-align: center;
      padding: 0 10px;
      background-color: var(--background4);
      border-radius: 5px;
   }

   .vision-wrapper {
      text-align: center;
      padding: 0 10px;
      background-color: var(--background4);
      border-radius: 5px;
   }

   .vision-wrapper p,
   .mission-wrapper p {
      font-size: .8r3em;
      line-height: 2em;
      padding: 0 50px;
   }

   .values {
      margin-bottom: 10px;
   }

   .values h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2.5em;
   }

   .values-wrapper {
      padding: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 10px;
   }

   .value-card {
      background-color: var(--background4);
      padding: 20px;
      border-radius: 5px;
      transition: transform 0.3s ease;
      text-align: center;
   }

   .value-card:hover {
      transform: translateY(-10px);
   }

   .value-icon {
      font-size: 2.5rem;
      color: var(--pry-text);
      margin-bottom: 20px;
   }

   .value-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--pry-text);
   }

   .team {
      padding: 10px;
      background-color: var(--background4);
   }

   .team h1 {
      text-align: center;
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
   }

   .team-wrapper {
      gap: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   }

   .profile-card {
      background-color: #f0f4f848;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
      padding: 5px;
      display: flex;
      flex-direction: column;
   }

   .profile-image {
      height: 300px;
   }

   .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: fill;
   }

   .profile-content {
      text-align: left;
      padding: 5px;
   }

   .profile-content h1 {
      font-size: .9rem;
      text-align: left;
      letter-spacing: 0;
   }

   .profile-content p {
      font-size: .7em;
   }

   .timeline h1 {
      font-size: 2.5em;
      text-transform: uppercase;
      text-align: center;
      margin: 10px 0;
   }

   .timeline-container {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
   }

   .timeline-container::after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: var(--background2);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
   }

   .timeline-item {
      padding: 10px 40px;
      position: relative;
      background-color: inherit;
      width: 50%;
   }

   .timeline-item:nth-child(odd) {
      left: 0;
   }

   .timeline-item:nth-child(even) {
      left: 50%;
   }

   .timeline-content {
      padding: 20px 30px;
      background-color: white;
      position: relative;
      border-radius: 6px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
   }

   .timeline-marker {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid;
      background: #f0f4f8;
      position: absolute;
      top: 15px;
      right: -8px;
      z-index: 1;
   }

   .timeline-item:nth-child(even) .timeline-marker {
      left: -8px;
   }

   .timeline-content h3 {
      font-size: 1rem;
      margin-bottom: 10px;
      color: var(--pry-text);
   }

   .timeline-content p {
      font-size: .8em;
      line-height: 1.6em;
   }

   @media only screen and (max-width:700px) {
      .carousel-wrapper {
         height: fit-content;
      }

      .about {
         padding: 10px;
      }

      .about h1 {
         text-align: left;
      }

      .about p {
         text-align: left;
      }

      .vision-wrapper h1,
      .mission-wrapper h1 {
         text-align: left;
         font-size: 1.8em;
      }

      .vision-wrapper p,
      .mission-wrapper p {
         padding: 0;
         text-align: left;
      }

      .values h1 {
         font-size: 2em;
      }

      .timeline-container::after {
         left: 31px;
      }

      .timeline-item {
         width: 100%;
         padding-left: 50px;
         padding-right: 25px;
      }

      .timeline-item:nth-child(even) {
         left: 0%;
      }

      .timeline-content {
         padding: 15px 20px;
      }

      .timeline-marker {
         left: 23px;
         right: auto;
      }

      .timeline-item:nth-child(even) .timeline-marker {
         left: 23px;
      }
   }
</style>