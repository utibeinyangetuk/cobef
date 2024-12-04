<script setup>
import image4 from "@/assets/projects/four.jpg";
import image1 from "@/assets/projects/one.jpg";
import image3 from "@/assets/projects/three.jpg";
import image2 from "@/assets/projects/two.jpg";
import ImageCarousel from "@/components/ImageCarousel.vue";
import { ref } from "vue";
const pictures = [image1, image2, image3, image4];

const coreValues = ref([
   {
      id: 1,
      title: "Innovation",
      description: "Pioneering solutions that redefine industries",
      icon: "uil uil-lightbulb",
   },
   {
      id: 2,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all we do",
      icon: "uil uil-shield",
   },
   {
      id: 3,
      title: "Consistency",
      description: "Constantly maintains high level quality standards",
      icon: "uil uil-process",
   },
   {
      id: 4,
      title: "Cooperation",
      description: "We work as a team to achieve our common vision",
      icon: "uil uil-users-alt",
   },
   {
      id: 5,
      title: "Respect",
      description:
         "we demostrate respect among colleagues, customers and suppliers",
      icon: "uil uil-heart",
   },
   {
      id: 6,
      title: "Customer Satisfaction",
      description: `Making sure customers' expectations are met timely`,
      icon: "uil uil-smile",
   },
   {
      id: 7,
      title: "Customer Convenience",
      description: "We serve our customers to save their time and effort",
      icon: "uil uil-shopping-cart",
   },
]);

const timeline = ref([
   {
      id: 1,
      year: "1993",
      description:
         "C.OHAKWE was established to deliver metal materials for construction.",
   },
   {
      id: 2,
      year: "2002",
      description:
         "Cobef International Limited was established to manufacture quality PVC pipes.",
   },
   {
      id: 2,
      year: "2006",
      description:
         "Cobef International Limited expanded to FACO Enterprise Limited",
   },
   {
      id: 3,
      year: "2018",
      description: "The company started venturing into projects.",
   },
   {
      id: 4,
      year: "2021",
      description: "completion of many of our notable projects.",
   },
]);
</script>
<template>
   <div class="container">
      <div class="carousel-wrapper">
         <ImageCarousel :images="pictures" />
      </div>
      <div class="about">
         <h1>About Us</h1>
         <p>
            COBEF INTERNATIONAL LIMITED was established in the year 2002, under
            the laws of the Federal Republic of Nigeria R.C: 312938 with the aim
            to manufacture quality PVC pipes and products and extending into
            water construction projects. A brain-child of Mr. Pawan Tekchandani
            and Chief Christian Ohakwe, both possessing a vast amount of
            experience in the piping business, the company has be successfully
            catering to the discerning tastes of customers of various segments
            through its brand.<br /><br />

            COBEF INTERNATIONAL LIMITED values quality the most. All its
            products are manufactured in a state-of-the-art facility with
            equipment and technology of world class standard. Scoring high on
            the quality quotient, these products are also in strict compliance
            with DIN and ISO specifications as approved Standard Organization of
            Nigeria (SON). This commitment to quality has brought rich dividends
            for Cobef. It has made its products highly trustworthy for
            applications in construction, farming, water supply, electrical and
            sewage, etc. <br /><br />

            COBEF INTERNATIONAL LIMITED as a contracting firm have designed,
            constructed and managed waste projects in different states of the
            federation for both private and government. You can find some of the
            projects in our projects section. We are an indigenous firm with
            expertise and dedicated men and women who bellow that competency is
            a trade mark for perfection. The company also retains quality
            delivery and client satisfaction as its driving force. Based on our
            ISO certifications, we are guided by the highest safety and quality
            standards to ensure that our clients receive the highest levels of
            satisfaction in addition to the commercial experience necessary to
            address technically challenging projects.
         </p>
      </div>
      <div class="mission-container">
         <section class="mission-wrapper">
            <h1>Our Mission</h1>
            <p>
               To drive industry transformation through innovative solutions and
               an unwavering commitment to excellence, creating value for our
               clients and society.
            </p>
         </section>
         <section class="vision-wrapper">
            <h1>Our Vision</h1>
            <p>
               Our vision is to set a pace in polymer products manufacturing,
               and ensure the performance and appearance of the products are in
               accordance with our quality standards.
            </p>
         </section>
         <section class="vision-wrapper quality">
            <h1>Our Quality</h1>
            <p>
               Upholds uncompromising quality management system in line with ISO
               standards among others.
            </p>
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
                  <img src="../assets/azaman.jpg" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1>Stanley</h1>
                  <p>Chairman</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="../assets/azaman.jpg" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1>Stanley</h1>
                  <p>Managing Director</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="../assets/azaman.jpg" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1>Stanley</h1>
                  <p>Admin Director</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="../assets/azaman.jpg" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1>Stanley</h1>
                  <p>Finance Director</p>
               </div>
            </div>
            <div class="profile-card">
               <div class="profile-image">
                  <img src="../assets/azaman.jpg" alt="Profile picture" />
               </div>
               <div class="profile-content">
                  <h1>Stanley</h1>
                  <p>Middleman</p>
               </div>
            </div>
         </div>
      </div>
      <section class="timeline">
         <div class="section-header">
            <h1>Our Journey</h1>
         </div>
         <div class="timeline-container">
            <div
               v-for="event in timeline"
               :key="event.id"
               class="timeline-item"
            >
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

.about {
   padding: 20px;
}

.about h1 {
   text-align: left;
   font-size: 2em;
   text-transform: uppercase;
}

.about p {
   font-size: 0.8em;
   line-height: 2.5em;
   text-align: left;
}

.mission-container {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 10px;
   padding: 0 20px;
   margin-bottom: 20px;
}

.mission-wrapper h1,
.vision-wrapper h1 {
   font-size: 1em;
   text-transform: uppercase;
   margin-bottom: 8px;
}

.mission-wrapper {
   text-align: left;
   padding: 10px;
   background-color: var(--background5);
   border-radius: 5px;
}

.vision-wrapper {
   text-align: left;
   padding: 10px;
   background-color: var(--background3);
   border-radius: 5px;
}

.quality {
   background-color: var(--background4);
}

.vision-wrapper p,
.mission-wrapper p {
   font-size: 0.8rem;
   line-height: 2em;
}

.values {
   margin-bottom: 10px;
   background-color: var(--background4);
   margin: 20px;
   border-radius: var(--border-radius);
   padding: 10px;
}

.values h1 {
   text-align: center;
   text-transform: uppercase;
   letter-spacing: 1px;
   font-size: 2em;
}

.values-wrapper {
   padding: 10px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
   gap: 10px;
}

.value-card {
   background-color: var(--background1);
   padding: 10px;
   border-radius: var(--border-radius);
   text-align: left;
}

.value-icon {
   font-size: 2rem;
   color: var(--pry-text);
   margin-bottom: 10px;
}

.value-card h3 {
   font-size: 1.2rem;
   margin-bottom: 10px;
   color: var(--pry-text);
}

.value-card p {
   font-size: 0.8em;
   line-height: 1.7em;
}

.team {
   padding: 20px;
}

.team h1 {
   text-align: center;
   font-size: 2.5rem;
   text-transform: uppercase;
   letter-spacing: 1px;
   margin-bottom: 10px;
}

.team-wrapper {
   gap: 15px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.profile-card {
   border-radius: 5px;
   overflow: hidden;
   padding: 5px;
   display: flex;
   flex-direction: column;
}

.profile-image {
   height: 300px;
   margin-bottom: 3px;
}

.profile-image img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: var(--border-radius);
}

.profile-content {
   text-align: left;
   padding: 5px;
   border: var(--border);
   border-radius: var(--border-radius);
}

.profile-content h1 {
   font-size: 0.7rem;
   text-align: left;
   letter-spacing: 0;
   margin-bottom: 5px;
}

.profile-content p {
   font-size: 0.7em;
}

.timeline {
   background-color: var(--background4);
}

.timeline h1 {
   font-size: 2em;
   text-transform: uppercase;
   text-align: center;
   padding: 10px;
}

.timeline-container {
   position: relative;
   max-width: 800px;
   margin: 0 auto;
}

.timeline-container::after {
   content: "";
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
   background-color: var(--background5);
   position: relative;
   border-radius: 5px;
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
   font-size: 0.8em;
   line-height: 1.6em;
}
@media only screen and (min-width: 701px) {
   .carousel-wrapper {
      height: fit-content;
   }
}

@media only screen and (max-width: 700px) {
   .carousel-wrapper {
      height: fit-content;
   }

   .profile-content h1 {
      font-size: 1rem;
   }

   .profile-content p {
      font-size: 0.8em;
   }

   .about {
      padding: 20px;
   }

   .mission-container {
      gap: 20px;
   }

   .vision-wrapper h1,
   .mission-wrapper h1 {
      font-size: 1.5em;
   }

   .vision-wrapper p,
   .mission-wrapper p {
      padding: 0;
      font-size: 0.8em;
   }

   .values h1 {
      font-size: 1.5em;
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
   @media only screen and (max-width:415px){
      .team h1{
         font-size: 2rem;
      }
   }
}
</style>
