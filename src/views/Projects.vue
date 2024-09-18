<script setup>
   const trips = [image1, image2, image3, image4];
   import image4 from "@/assets/projects/four.jpg";
   import image1 from "@/assets/projects/one.jpg";
   import image3 from "@/assets/projects/three.jpg";
   import image2 from "@/assets/projects/two.jpg";
   import ImageCarousel from "@/components/ImageCarousel.vue";

   import { onMounted } from 'vue';

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
<template>
   <div class="container">
      <div class="header-wrapper fade">
         <div class="header-carousel fade">
            <ImageCarousel :images="trips" class="image-carousel" />
         </div>
         <div class="header-content">
            <h1>Projects</h1>
            <div class="write-up fade">
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
      </div>
      <div class="works fade">
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1> REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS IN
                  OGONI LAND</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1> MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN
                  GBARAIN KINGDOM</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1> supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
         <div class="work-wrapper fade">
            <div class="work-heading">
               <h1> RETICULATION OF ELEME WATER SUPPLY SCHEME</h1>
               <span class="uil uil-clock"> Jan 14, 2021</span><br>
               <span class="uil uil-location-point"> Port Harcourt</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas explicabo optio dolor,
                  molestiae delectus tempora facere magni laborum sunt placeat minima aliquam, quae mollitia fugiat sint
                  dolores nostrum.</p>
               <div class="link-wrapper">
                  <a href="#">Read more</a>
               </div>
            </div>
         </div>
      </div>
      <div class="logos fade">
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
   .fade {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-in-out, transform 1s ease-in-out;
   }

   .fade.visible {
      opacity: 1;
      transform: translateY(0);
   }

   .container {
      background-color: var(--background1);
      margin-top: 60px;
   }

   .header-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
   }

   .header-carousel {
      height: 100vh;
      border: var(--border);
   }

   .image-carousel {
      height: 100%;
   }

   .header-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .header-content h1 {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 4em;
   }

   .write-up {
      padding: 0 30px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
   }

   .write-up p {
      font-size: .8em;
      line-height: 2.3em;
      text-align: center;
   }

   .works {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      padding: 10px;
      gap: 10px;
   }

   .work-wrapper {
      border: var(--border);
      padding: 5px;
      box-shadow: var(--box-shadow);
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   .work-heading h1 {
      font-size: 1.4em;
      margin-bottom: 7px;
   }

   .work-heading span {
      font-style: normal;
      font-weight: 600;
      line-height: 1.7em;
      font-size: .8em;
   }

   .work-heading p {
      margin-top: 7px;
      margin-bottom: 10px;
      font-size: .8em;
      line-height: 2em;
   }

   .link-wrapper {
      margin-top: 20px;
      margin-bottom: 10px;
   }

   .link-wrapper a {
      font-size: .8em;
      letter-spacing: 1px;
      height: 100%;
      border: var(--border);
      color: var(--pry-text);
      font-weight: bold;
      padding: 10px;
   }

   .link-wrapper a:hover {
      background: var(--background2);
      color: var(--sec-text);
   }

   @keyframes slide {
      from {
         transform: translateX(0);
      }

      to {
         transform: translateX(-100%);
      }
   }

   .logos {
      background-color: var(--background2);
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      height: 100%;
   }

   .logos h1 {
      text-align: center;
      color: var(--sec-text);
      font-size: 5em;
      text-transform: uppercase;
      padding: 10px;
   }

   .logos-slide {
      display: inline-block;
      animation: 14s slide linear infinite;
      padding: 30px 0;
   }

   .logos-slide img {
      height: 100px;
      margin: 0 5px;
      padding: 20px;
      filter: grayscale();
   }

   @media only screen and (max-width:1024px) {
      .header-wrapper {
         display: flex;
         flex-direction: column;
      }

      .header-carousel {
         height: 100%;
         border: none;
      }

      .write-up {
         padding: 0 10px;
      }

      .logos h1 {
         font-size: 3em;
      }

      .logos img {
         height: 90px;
         margin: 0 8px;
      }
   }
</style>