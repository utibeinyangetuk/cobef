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
         <div class="carousel-wrapper">
            <ImageCarousel :images="trips" class="image-carousel" />
         </div>
         <div class="right-content">
            <h1>Projects</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vero vitae possimus, qui ab molestias
               non voluptates eum recusandae, officia nesciunt repellat temporibus eos, asperiores saepe magnam?
               Ipsum, sunt nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
               alias, iste atque laboriosam ab soluta officiis, qui, vitae
               accusantium assumenda aliquid. Ipsa consectetur delectus repellendus
               numquam perspiciatis molestias suscipit! Est. Lorem ipsum, dolor sit
               amet consectetur adipisicing elit. Iusto beatae soluta eius delectus
               atque veniam nam quisquam, excepturi ab alias quod id rem, error,
               blanditiis pariatur harum similique illum nihil. Lorem ipsum dolor
               sit, amet consectetur adipisicing elit. Eligendi, architecto! Quasi
               tempora numquam odio? Excepturi sit hic, similique eius distinctio
               tempore ullam fugiat cupiditate voluptates recusandae? Vero qui aut
               maiores.
            </p>
         </div>
      </div>
      <div class="projects">
         <div class="project-wrapper">
            <h1> REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS IN
               OGONI LAND</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1> MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN
               GBARAIN KINGDOM</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1> supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1> RETICULATION OF ELEME WATER SUPPLY SCHEME</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan 14, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
               molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
               dolores nostrum.</p>
            <a href="#">Read more</a>
         </div>
      </div>
      <div class="logos">
         <h1>Trusted By</h1>
         <div class="logos-slide">
            <img src="../assets/client logos/ALCON.png" />
            <img src="../assets/client logos/briscoegroup.png" />
            <img src="../assets/client logos/darycet.webp" />
            <img src="../assets/client logos/julius-berger.png" />
            <img src="../assets/client logos/kinetic.png" />
            <img src="../assets/client logos/shell.png" />
            <img src="../assets/client logos/rivers-state.png" />
            <img src="../assets/client logos/Hyprep.png" />
         </div>
         <div class="logos-slide" aria-hidden="true">
            <img src="../assets/client logos/ALCON.png" />
            <img src="../assets/client logos/briscoegroup.png" />
            <img src="../assets/client logos/darycet.webp" />
            <img src="../assets/client logos/julius-berger.png" />
            <img src="../assets/client logos/kinetic.png" />
            <img src="../assets/client logos/shell.png" />
            <img src="../assets/client logos/rivers-state.png" />
            <img src="../assets/client logos/Hyprep.png" />
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      background: var(--background1);
      margin-top: 40px;
   }

   .carousel-wrapper {
      height: 100%;
   }

   .image-carousel {
      height: 50vh;
   }

   .right-content {
      padding: 20px;
   }

   .right-content h1 {
      text-transform: uppercase;
      font-size: 4em;
   }

   .right-content p {
      font-size: .8em;
      line-height: 2.5em;
   }

   .projects {
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 5px;
   }

   .project-wrapper {
      border: var(--border);
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
   }

   .project-wrapper h1 {
      font-size: 15px;
      text-transform: uppercase;
      text-decoration: underline;
      margin-bottom: 10px;
   }

   .project-wrapper .timeline {
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: space-between;
      width: 70%;
      margin-bottom: 8px;
   }

   .project-wrapper .timeline span {
      font-size: .7em;
   }

   .project-wrapper p {
      font-size: 12px;
      line-height: 2em;
      margin-bottom: 8px;
   }

   .project-wrapper a {
      color: var(--pry-text);
      border: var(--border);
      padding: 4px;
      text-align: center;
      text-transform: capitalize;
   }

   .project-wrapper a:hover {
      background-color: var(--background2);
      color: #ffffff;
   }

   .logos {
      padding: 20px;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      height: 100%;
   }

   .logos h1 {
      text-align: center;
      font-size: 4em;
      text-transform: uppercase;
   }

   @keyframes slide {
      from {
         transform: translateX(0);
      }

      to {
         transform: translateX(-100%);
      }
   }

   .logos-slide {
      display: inline-block;
      animation: 14s slide linear infinite;
      padding: 5px 0;
   }

   .logos-slide img {
      height: 100px;
      margin: 0 5px;
      padding: 25px;
   }

   @media only screen and (max-width:500px) {
      .right-content {
         padding: 10px;
      }

      .right-content h1 {
         font-size: 35px;
      }

      .right-content p {
         font-size: .7em;
      }

      .projects {
         padding: 0 10px;
      }

      .logos h1 {
         font-size: 2.5em;
      }
   }
</style>