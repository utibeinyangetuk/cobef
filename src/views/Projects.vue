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
      <div class="header-wrapper">
         <div class="header-carousel">
            <ImageCarousel :images="trips" class="image-carousel" />
         </div>
         <div class="header-content">
            <h1>Projects</h1>
            <div class="write-up">
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
      <div class="works">
         <div class="work-wrapper">
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
         <div class="work-wrapper">
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
         <div class="work-wrapper">
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
         <div class="work-wrapper">
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
         <div class="work-wrapper">
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
         <div class="work-wrapper">
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
      margin-top: 50px;
   }

   .header-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
   }

   .header-carousel {
      height: 100%;
   }

   .header-content {
      background-color: var(--sec-background);
   }

   .header-content h1 {
      color: var(--ter-text-color);
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 4em;
   }

   .write-up {
      padding: 30px;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
   }

   .write-up p {
      color: var(--ter-text-color);
      font-size: .8em;
      line-height: 2em;
      text-align: left;
   }

   .works {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      background-color: var(--pry-background);
      padding: 10px;
   }

   .work-wrapper {
      border-right: 1px solid rgba(128, 128, 128, 0.382);
      border-bottom: 1px solid rgba(128, 128, 128, 0.382);
      padding: 5px;
   }

   .link-wrapper {
      border-radius: 5px;
      width: fit-content;
      padding: 6px 2px;
      background-color: var(--sec-background);
   }

   .link-wrapper a {
      font-size: .8em;
      letter-spacing: 1px;
      color: #fff;
      height: 100%;
      padding: 3px;
   }

   .work-heading {
      margin-bottom: 2em;
   }

   .work-heading h1 {
      font-size: 1em;
      margin-bottom: 7px;
   }

   .work-heading span {
      font-style: normal;
      font-weight: bold;
      line-height: 1.7em;
      font-size: .8em;
      color: var(--sec-text-color);
   }

   .work-heading p {
      color: var(--sec-text-color);
      margin-top: 7px;
      margin-bottom: 10px;
      font-size: .8em;
      line-height: 2em;
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
      background-color: var(--sec-background);
      overflow: hidden;
      white-space: nowrap;
      position: relative;
   }

   .logos h1 {
      text-align: center;
      color: var(--ter-text-color);
      font-size: 5em;
      text-transform: uppercase;
   }

   .logos-slide {
      display: inline-block;
      animation: 10s slide linear infinite;
      padding: 30px;
   }

   .logos-slide img {
      height: 100px;
      margin: 0 15px;
      border: 1px solid #f4f4f427;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 5px 5px 5px rgba(253, 252, 252, 0.114);
   }

   @media only screen and (max-width:800px) {
      .header-wrapper {
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      }

      .logos h1 {
         font-size: 3em;
      }

      .logos img {
         height: 70px;
         margin: 0 8px;
      }
   }
</style>