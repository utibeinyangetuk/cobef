<script setup>
const trips = [
   hole_camera,
   pump_reinstallation,
   camera_inspection,
   well_development,
   tripod_setup,
   briefing,
   splashing,
];
import briefing from "@/assets/projects/briefing.png";
import camera_inspection from "@/assets/projects/camera_inspection.png";
import hole_camera from "@/assets/projects/hole_camera.png";
import pump_reinstallation from "@/assets/projects/pump_reinstallation.png";
import splashing from "@/assets/projects/splashing.png";
import tripod_setup from "@/assets/projects/tripod_setup.png";
import well_development from "@/assets/projects/well_development.png";
import ImageCarousel from "@/components/ImageCarousel.vue";
</script>
<template>
   <div class="container">
      <div class="header">
         <div class="carousel-wrapper">
            <ImageCarousel :images="trips" />
         </div>
         <div class="right-content">
            <h1>Projects</h1>
            <p>
               The projects page presents a portfolio of impactful
               infrastructure and water management initiatives led by the
               company, emphasizing its dedication to delivering sustainable and
               reliable solutions across various communities. Each project
               highlights key aspects like project objectives, scope, and
               geographic focus areas, demonstrating a track record of
               addressing community needs through strategic resource management.
               This company retains quality delivery and clients satisfaction as
               its driving force. Based ISO certification, we are guided by the
               highest safety and quality standards to ensure that our clients
               receive the highest levels of satisfaction in addition to the
               commercial experience necessary to address technically
               challenging projects. Key initiatives include:
            </p>
         </div>
      </div>
      <div class="projects">
         <div class="project-wrapper">
            <h1>
               REHABILITATION OF ALESA AGBONCHIA AND ALESA WATER WORKS IN OGONI
               LAND
            </h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               This project focused on the revitalization of critical water
               works facilities in the Ogoni communities of Alesa and Agbonchia.
               The rehabilitation aims to restore water infrastructure for
               reliable distribution, ensuring sustainable access to clean water
               for the local population. Undertaken in January 2021 in Port
               Harcourt, this project supports community well-being and aligns
               with environmental improvement goals..
            </p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>SUPPLY AND PIPE LAYING IN OBAGI COMMUNITY, RIVERS STATE</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               In response to the need for improved water supply, this
               initiative involved the installation of new pipelines within the
               Obagi community. Through precise pipe laying and supply
               logistics, the project aimed to enhance water distribution
               capabilities, making safe and accessible water available for more
               households. Conducted in January 2021, it contributes to
               essential infrastructure upgrades in Port Harcourt.
            </p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>INSTALLATION OF BOREHOLE AND WATER TREATMENT PLANT</h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               As part of efforts to improve local water quality, this project
               focused on constructing a borehole and equipping it with a modern
               water treatment plant. The installation addresses both supply and
               purification needs, ensuring that residents in the area have
               access to potable water. Completed in January 2021, the plant
               stands as a crucial infrastructure for public health in Port
               Harcourt.
            </p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>
               MAINTENANCE OF OBUNAGHA MEGA WATER PROJECT AND TRUNK LINES IN
               GBARAIN KINGDOM
            </h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               Aiming to sustain and enhance water accessibility in Gbarain
               Kingdom, this maintenance project includes the upkeep of the mega
               water project infrastructure and the connected trunk lines. By
               reinforcing these essential facilities, the project ensures
               long-term water supply reliability and supports the community's
               resource needs. Located in Port Harcourt, the maintenance
               initiative commenced in January 2021.
            </p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>
               supply and pipe laying of Obaji Community in Ogba/Egbema/Ndoni
            </h1>
            <div class="timeline">
               <span class="uil uil-clock"> Jan, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               Through strategic pipe laying in Obaji, this project enhances
               local water infrastructure to meet rising demand. Situated in the
               Ogba/Egbema/Ndoni region, it provides a crucial improvement to
               water distribution networks, securing access for residents and
               supporting sustainable development goals. Initiated in January
               2021, the project exemplifies the company’s commitment to
               effective community infrastructure.
            </p>
            <a href="#">Read more</a>
         </div>
         <div class="project-wrapper">
            <h1>RETICULATION OF ELEME WATER SUPPLY SCHEME</h1>
            <div class="timeline">
               <span class="uil uil-clock"> June, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               This project in Eleme addressed water distribution through system
               upgrades, ensuring consistent and efficient water access across
               the area. The reticulation work completed in June 2021, reflects
               the company’s dedication to reliable water infrastructure and its
               role in community development in Port Harcourt.
            </p>
            <a href="#">Read more</a>
         </div>

         <div class="project-wrapper">
            <h1>
               maintenance of four existing water boreholes at the ALESA ELEME
               WATER WORKS
            </h1>
            <div class="timeline">
               <span class="uil uil-clock"> July, 2021</span>
               <span class="uil uil-location-point"> Port Harcourt</span>
            </div>
            <p>
               The aim of this project was the Ogoni Clean Up and to ensure a
               sustainable potable water supply for the Alesa Eleme Community to
               meet their present and future needs.
            </p>
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
   height: fit-content;
}

.right-content {
   padding: 20px;
}

.right-content h1 {
   text-transform: uppercase;
   font-size: 2em;
   text-align: left;
}

.right-content p {
   font-size: 0.8em;
   line-height: 2.5em;
   text-align: left;
}

.projects {
   padding: 20px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 10px;
   background: var(--background4);
   margin: 10px;
   border-radius: var(--border-radius);
}

.project-wrapper {
   background: var(--background1);
   border-radius: var(--border-radius);
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
}

.project-wrapper h1 {
   font-size: 15px;
   text-transform: uppercase;
   margin-bottom: 10px;
}

.project-wrapper .timeline {
   display: flex;
   flex-direction: column;
   gap: 4px;
   justify-content: space-between;
   width: 70%;
   margin-bottom: 15px;
}

.project-wrapper .timeline span {
   font-size: 0.7em;
}

.project-wrapper p {
   font-size: 12px;
   line-height: 2em;
   margin-bottom: 8px;
}

.project-wrapper a {
   color: var(--pry-text);
   border: var(--border);
   font-size: 14px;
   border-radius: 3px;
   padding: 4px;
   text-align: left;
   text-transform: capitalize;
   width: fit-content;
}

.project-wrapper a:hover {
   background-color: var(--background2);
   color: var(--sec-text);
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

@media only screen and (max-width: 670px) {
   .right-content p {
      font-size: 0.7em;
   }

   .right-content {
      padding: 10px;
   }

   .projects {
      padding: 10px;
   }

   .logos h1 {
      font-size: 2em;
   }
}
</style>
