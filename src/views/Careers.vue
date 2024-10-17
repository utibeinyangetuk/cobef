<script setup>
   const trips = [image1, image2, image3, image4];
   import image4 from "@/assets/projects/four.jpg";
   import image1 from "@/assets/projects/one.jpg";
   import image3 from "@/assets/projects/three.jpg";
   import image2 from "@/assets/projects/two.jpg";
   import ImageCarousel from "@/components/ImageCarousel.vue";
</script>
<template>
   <div class="container">
      <div class="header">
         <div class="image-wrapper">
            <ImageCarousel :images="trips" />
         </div>
         <div class="header-content">
            <h1>Careers</h1>
            <div class="content-wrapper">
               <p>
                  Join our innovative and dynamic team, where your talents will
                  help shape the future. We're on a mission to create a better
                  tomorrow, and we need passionate individuals to be a part of
                  that journey.
               </p>
               <router-link to="contact">Join us now</router-link>
            </div>
         </div>
      </div>
      <div class="write-up-container">
         <div class="heading-wrapper">
            <h2>Our Culture</h2>
            <h1>Why COBEF?</h1>
            <p>
               At COBEF, our mission drives everything we do and shapes how we
               work. We believe in fostering a collaborative and inclusive
               environment where every team member can thrive.
            </p>
         </div>
         <div class="list-wrapper">
            <ul>
               <li>
                  <h3>Innovative Environment</h3>
                  <p>
                     Join a team that is constantly pushing the boundaries of
                     what's possible. We encourage creative thinking and provide
                     the resources needed to turn ideas into reality.
                  </p>
               </li>
               <li>
                  <h3>Growth Opportunities</h3>
                  <p>
                     At COBEF, your growth is our priority. We offer ample
                     opportunities for professional development and career
                     advancement within our organization.
                  </p>
               </li>
               <li>
                  <h3>Work-Life Balance</h3>
                  <p>
                     We understand the importance of a healthy work-life
                     balance. Our flexible work policies ensure that you can
                     achieve your career goals while maintaining your personal
                     well-being.
                  </p>
               </li>
               <li>
                  <h3>Inclusive Culture</h3>
                  <p>
                     Diversity and inclusion are at the heart of our culture. We
                     celebrate differences and strive to create a workplace
                     where everyone feels valued and respected.
                  </p>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      min-height: 100vh;
      background-color: var(--background5);
      margin-top: 40px;
   }

   .header {
      display: flex;
   }

   .image-wrapper {
      width: 60%;
   }

   .header-content {
      width: 40%;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
   }

   .header-content h1 {
      font-size: 80px;
      text-align: left;
      text-transform: uppercase;
   }

   .content-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
   }

   .content-wrapper p {
      line-height: 2em;
      margin-bottom: 10px;
      font-size: 1em;
   }

   .content-wrapper a {
      border: var(--border);
      padding: 10px;
      width: fit-content;
      letter-spacing: 1px;
      color: var(--pry-text);
   }

   .content-wrapper a:hover {
      color: var(--background5);
      background-color: var(--background2);
   }

   .write-up-container {
      display: flex;
      padding: 20px;
   }

   .heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      margin-right: 2%;
   }

   .heading-wrapper h2 {
      font-size: .7em;
      letter-spacing: 1px;
   }

   .heading-wrapper h1 {
      font-size: 2em;
      margin-bottom: 10px;
   }

   .heading-wrapper p {
      line-height: 2em;
      font-size: 0.8em;
      margin-bottom: 0px;
   }

   .list-wrapper ul {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
   }

   .list-wrapper li {
      border: var(--border);
      list-style: none;
      padding: 20px;
      box-shadow: var(--box-shadow);
   }

   .list-wrapper li h3 {
      font-size: 1em;
      margin-bottom: 15px;
      text-transform: capitalize;
   }

   .list-wrapper li p {
      font-size: .7em;
      line-height: 1.6em;
   }

   @media only screen and (max-width:1000px) {
      .header-content h1 {
         font-size: 3.5em;
      }

      .header-content p {
         font-size: .9em;
      }
   }

   @media only screen and (max-width: 768px) {
      .header {
         display: flex;
         flex-direction: column;
      }

      .image-wrapper {
         width: 100%;
         padding: 10px;
      }

      .header-content {
         width: 100%;
         padding: 0 10px;
      }

      .header-content h1 {
         font-size: 4em;
         margin-top: -10px;
         text-align: left;
      }

      .content-wrapper {
         width: 100%;
         padding: 5px;
      }

      .content-wrapper p {
         font-size: 0.9em;
         text-align: left;
         margin-top: -10px;
      }

      .write-up-container {
         display: flex;
         flex-direction: column;
         align-items: center;
      }

      .heading-wrapper {
         width: 100%;
         text-align: left;
      }

      .heading-wrapper h2 {
         margin-top: 2em;
      }

      .list-wrapper ul {
         display: grid;
         grid-template-columns: 1fr 1fr;
      }
   }

   @media only screen and (max-width:450px) {
      .list-wrapper ul {
         display: flex;
         flex-direction: column;
      }

      .header-content h1 {
         font-size: 3em;
      }
   }
</style>