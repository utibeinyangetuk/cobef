<template>
   <div class="about-container">
      <!-- Header Section -->
      <section class="header fade">
         <h1>Who We Are</h1>
      </section>

      <!-- Story and Mission Section -->
      <section class="company-info fade">
         <div class="company-writeup">
            <div class="section-block">
               <h2>Our Story</h2>
               <p>
                  Welcome to Cobef, where we redefine quality and innovation in the industry. Our journey began with a
                  vision to set new standards in craftsmanship and engineering, and we continue to push boundaries with
                  every project.
               </p>
            </div>

            <div class="section-block">
               <h2>Our Vision</h2>
               <p>
                  To be recognized globally as a benchmark for excellence, driving positive change, and setting new
                  standards for the industry.
               </p>
            </div>

            <div class="section-block">
               <h2>Our Mission</h2>
               <p>
                  To lead the industry with cutting-edge solutions and an unwavering commitment to quality. We aim to
                  exceed expectations and deliver exceptional value.
               </p>
            </div>

            <div class="section-block">
               <h2>Our Values</h2>
               <TextCarousel class="carousel" />
            </div>
         </div>
      </section>

      <!-- Call to Action -->
      <section class="call-to-action fade">
         <h2>Already Peaked Your Interest?</h2>
         <p>Let's recruit together and find your next colleague.</p>
         <router-link to="careers" class="cta-button">I'm Locked In 🫱🏽‍🫲🏽
            <i class="uil uil-arrow-right"></i>
         </router-link>
      </section>

      <!-- Team Section -->
      <section class="team fade">
         <h2>Our Team</h2>
         <p>Meet the brains behind our company</p>
         <div class="team-grid">
            <div v-for="i in 4" :key="i" class="team-card">
               <img src="../assets/homepage-images/hiring.jpg" alt="Team Member" />
               <div class="card-info">
                  <h4>John Doe</h4>
                  <p>CEO</p>
               </div>
            </div>
         </div>
      </section>

      <!-- Certifications Section -->
      <section class="certifications fade">
         <h2>Certifications and Achievements</h2>
         <p>ISO certified? Hell, yes!! Browse through to see some of our notable achievements and certifications.</p>
         <div class="certificates-grid">
            <img v-for="i in 8" :key="i" :src="`../assets/certificates/certificate-${i}.jpg`" alt="certificate" />
         </div>
      </section>

      <!-- Services and Operations Section -->
      <section class="operations fade">
         <h2>Our Operations</h2>
         <div class="video-wrapper">
            <video autoplay loop muted>
               <source src="../assets/videos/factory.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam, quam officia cupiditate mollitia
            fuga accusamus accusantium iusto aperiam eos.
         </p>


         <div class="products-section">
            <div class="video-wrapper">
               <video autoplay loop muted>
                  <source src="../assets/videos/factory.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>
            <div class="products-content">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint ad tenetur est velit quae
                  deleniti vero ex quia provident.</p>
               <router-link to="products" class="cta-button">View Products
                  <i class="uil uil-arrow-right"></i>
               </router-link>
            </div>
         </div>
      </section>
   </div>
</template>

<style scoped>

   /* General Styles */
   .about-container {
      background: var(--background4);
      padding: 50px 20px;
   }

   /* Fade-in Animation */
   .fade {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-in-out, transform 1s ease-in-out;
   }

   .fade.visible {
      opacity: 1;
      transform: translateY(0);
   }

   /* Header */
   .header {
      text-align: center;
      padding-bottom: 40px;
   }

   .header h1 {
      font-size: 4em;
      font-weight: 700;
      text-transform: uppercase;
   }

   /* Company Info */
   .company-info {
      display: grid;
      gap: 40px;
      margin-bottom: 50px;
      text-align: center;
   }

   .section-block {
      border-top: 2px solid var(--pry-border);
      padding-top: 20px;
   }

   .section-block h2 {
      font-size: 2em;
      margin-bottom: 10px;
   }

   .section-block p {
      color: var(--sec-text-color);
      font-size: 1em;
      line-height: 1.8em;
   }

   /* Call to Action */
   .call-to-action {
      text-align: center;
      background-color: var(--highlight-color);
      padding: 40px;
      border-radius: 8px;
      margin: 50px 0;
      position: relative;
   }

   .call-to-action h2 {
      font-size: 2.5em;
      margin-bottom: 20px;
   }

   .call-to-action p {
      font-size: 1.2em;
      margin-bottom: 20px;
   }

   .cta-button {
      background-color: var(--cta-background);
      color: var(--cta-text);
      padding: 10px 30px;
      border-radius: 5px;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      position: relative;
      transition: background-color 0.3s, color 0.3s;
   }

   .cta-button i {
      margin-left: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s;
   }

   .cta-button:hover {
      background-color: var(--cta-hover-background);
      color: #fff;
   }

   .cta-button:hover i {
      opacity: 1;
   }

   /* Team Section */
   .team {
      text-align: center;
      margin: 50px 0;
   }

   .team h2 {
      font-size: 3em;
      margin-bottom: 10px;
   }

   .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
   }

   .team-card {
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease;
   }

   .team-card:hover {
      transform: scale(1.05);
   }

   .team-card img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin-bottom: 10px;
   }

   /* Certifications */
   .certifications {
      padding: 50px 0;
      text-align: center;
   }

   .certifications h2 {
      font-size: 3em;
   }

   .certificates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
   }

   .certificates-grid img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      transition: transform 0.3s ease;
   }

   .certificates-grid img:hover {
      transform: scale(1.05);
   }

   /* Operations Section */
   .operations {
      padding: 50px 0;
      text-align: center;
   }

   .operations h2 {
      font-size: 3em;
      margin-bottom: 30px;
   }

   .video-wrapper video {
      width: 100%;
      border-radius: 10px;
   }

   .products-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 50px;
   }

   .products-content p {
      margin-bottom: 20px;
      font-size: 1.1em;
   }
</style>


<script setup>
   import { onMounted } from 'vue';
   import TextCarousel from "@/components/TextCarousel.vue";

   // Function to observe the fade-in effect
   const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('visible');
            } else {
               entry.target.classList.remove('visible');
            }
         });
      }, { threshold: 0.1 }); // Adjust threshold as needed

      document.querySelectorAll('.fade').forEach(el => observer.observe(el));
   };

   onMounted(() => {
      observeElements();
   });
</script>