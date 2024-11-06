<script setup>
const trips = [vest_man, engineer, ict];
import ict from "@/assets/careers/electrical.jpg";
import engineer from "@/assets/careers/engineer.jpg";
import vest_man from "@/assets/careers/pipe-man.jpg";
import ImageCarousel from "@/components/ImageCarousel.vue";
</script>

<template>
   <div class="container">
      <div class="header">
         <div class="carousel-wrapper">
            <ImageCarousel :images="trips" class="images" />
         </div>
         <div class="sec-wrapper">
            <div class="content-wrapper">
               <h1>Careers</h1>
               <p>
                  Join our innovative and dynamic team, where your talents will
                  help shape the future. We're on a mission to create a better
                  tomorrow, and we need passionate individuals to be a part of
                  that journey.
               </p>
            </div>
            <div class="content2-wrapper">
               <h1>why cobef?</h1>
               <p>
                  At COBEF, our mission drives everything we do and shapes how
                  we work. We believe in fostering a collaborative and inclusive
                  environment where every team member can thrive.
               </p>
            </div>
         </div>
         <div class="culture-container">
            <div class="culture">
               <h1>our culture</h1>
               <div class="card-container">
                  <ul>
                     <li>
                        <h3>Innovative Environment</h3>
                        <p>
                           Join a team that is constantly pushing the boundaries
                           of what's possible. We encourage creative thinking
                           and provide the resources needed to turn ideas into
                           reality.
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
                           balance. Our flexible work policies ensure that you
                           can achieve your career goals while maintaining your
                           personal well-being.
                        </p>
                     </li>
                     <li>
                        <h3>Inclusive Culture</h3>
                        <p>
                           Diversity and inclusion are at the heart of our
                           culture. We celebrate differences and strive to
                           create a workplace where everyone feels valued and
                           respected.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.container {
   margin-top: 40px;
}

.sec-wrapper {
   padding: 10px 40px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   text-align: left;
   gap: 50px;
}

.sec-wrapper h1 {
   text-transform: uppercase;
   letter-spacing: 1px;
   font-size: 2em;
}

.sec-wrapper p {
   font-size: 0.8em;
   line-height: 2em;
}

.content-wrapper,
.content2-wrapper {
   padding: 10px;
}

.culture-container {
   padding: 40px;
}

.culture {
   background-color: var(--background4);
   border-radius: var(--border-radius);
   padding: 20px;
}

.culture h1 {
   text-align: center;
   text-transform: uppercase;
   font-size: 2em;
}

.card-container ul {
   padding: 10px;
   gap: 20px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   margin-bottom: 20px;
}

.card-container ul li {
   border-radius: var(--border-radius);
   padding: 10px;
   background-color: var(--background1);
}

.card-container ul h3 {
   margin-bottom: 10px;
}

.card-container ul p {
   font-size: 0.8em;
   line-height: 2.3em;
}

@media only screen and (max-width: 660px) {
   .carousel-wrapper {
      height: 60vh;
   }

   .sec-wrapper {
      display: flex;
      flex-direction: column;
   }

   .sec-wrapper h1 {
      font-size: 1.5em;
      letter-spacing: 1px;
   }

   .sec-wrapper h1,
   .sec-wrapper p {
      text-align: left;
   }

   .culture h1 {
      text-align: left;
      margin-left: 10px;
      font-size: 1.5em;
      letter-spacing: 1px;
   }

   .card-container ul h3 {
      font-size: 0.8em;
      margin-bottom: 7px;
   }
}

@media only screen and (max-width: 900px) {
   .card-container ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   }

   .sec-wrapper {
      gap: 10px;
   }
}

@media only screen and (max-width: 500px) {
   .sec-wrapper {
      padding: 10px;
   }

   .culture-container {
      padding: 20px;
   }

   .culture {
      padding: 10px;
   }

   .carousel-wrapper {
      height: 40vh;
   }

   .carousel-wrapper .images {
      height: 100%;
   }
}
</style>
