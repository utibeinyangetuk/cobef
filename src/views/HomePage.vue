<template>
   <div class="container">
      <div class="hero" />
      <div class="sections-wrapper">
         <section class="section about" id="about">
            <div class="section-content">
               <h2>About Us</h2>
               <p>
                  The About Us section provides an overview of COBEF's mission, history, and values. It highlights the
                  company’s commitment to excellence and innovation, inviting visitors to explore more about COBEF’s
                  background and ethos.
               </p>
               <div class="button-wrapper">
                  <router-link to="about" class="btn-link"> Explore </router-link>
               </div>
            </div>
         </section>

         <section class="section product" id="products">
            <div class="section-content">
               <h2>Products</h2>
               <p>
                  This section showcases COBEF's range of products, emphasizing quality and innovation. Visitors are
                  encouraged to learn about COBEF’s product offerings, which meet industry standards and customer needs,
                  with a link to view the full product catalog.
               </p>
               <div class="button-wrapper">
                  <router-link to="products" class="btn-link">
                     View products
                  </router-link>
               </div>
            </div>
         </section>

         <section class="section project" id="projects">
            <div class="section-content">
               <h2>Projects</h2>
               <p>
                  COBEF’s "Projects" section displays its portfolio of completed and ongoing projects across various
                  regions. This section highlights the company’s impact through successful project implementations and
                  invites users to explore project details.
               </p>
               <div class="button-wrapper">
                  <router-link to="projects" class="btn-link">
                     View projects
                  </router-link>
               </div>
            </div>
         </section>

         <section class="section careers" id="careers">
            <div class="section-content">
               <h2>Careers</h2>
               <p>
                  The "Careers" section outlines opportunities for individuals interested in joining COBEF. It conveys
                  COBEF's supportive work environment and growth opportunities, encouraging potential applicants to get
                  started on their career path with the company.
               </p>
               <div class="button-wrapper">
                  <router-link to="careers" class="btn-link">
                     Get started
                  </router-link>
               </div>
            </div>
         </section>

         <section class="section contact" id="contact">
            <div class="section-content">
               <h2>Contact Us</h2>
               <p>
                  This section provides a convenient way for visitors to reach out to COBEF for inquiries, support, or
                  partnerships. It encourages communication and includes a link for leaving messages, ensuring users
                  feel connected to the company.
               </p>
               <div class="button-wrapper">
                  <router-link to="contact" class="btn-link">
                     Leave us a message
                  </router-link>
               </div>

            </div>
         </section>
      </div>
   </div>
</template>

<style scoped>
   .container {
      scroll-behavior: smooth;
      background-color: var(--background1);
      margin-top: 40px;
   }

   .hero {
      height: 100vh;
      background: url("../assets/homepage-images/home.jpg") no-repeat center center/cover;
      display: flex;
      align-items: last baseline;
      position: relative;
      padding: 5px;
   }

   .sections-wrapper {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   .about {
      background: url("../assets/homepage-images/team.jpg") no-repeat center center/cover;
   }

   .product {
      background: url("../assets/homepage-images/products.jpg") no-repeat center center/cover;
   }

   .project {
      background: url("../assets/homepage-images/projects.webp") no-repeat center center/cover;
   }

   .careers {
      background: url("../assets/homepage-images/hiring.webp") no-repeat center center/cover;
   }

   .contact {
      background: url("../assets/homepage-images/contact.jpg") no-repeat center center/cover;
   }

   .section h1 {
      font-size: 3rem;
      margin: 0;
   }

   .section p {
      font-size: 1.2rem;
   }

   .section {
      border-radius: 8px;
      height: 100vh;
      display: flex;
      align-items: last baseline;
      color: var(--sec-text);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity .4s ease-in-out, transform .4s ease-in-out;
      position: relative;
   }

   .section-content {
      display: flex;
      flex-direction: column;
      align-items: last baseline;
      position: relative;
      padding: 10px 30px;
      background-color: rgba(128, 128, 128, 0.47);
      border-radius: 5px;
      width: 60%;
      margin: 7px;
   }

   .section-content h2 {
      font-size: 2.5em;
      text-transform: uppercase;
   }

   .section-content p {
      font-size: .8em;
      line-height: 2em;
   }

   .section.visible {
      opacity: 1;
      transform: translateY(0);
   }

   .btn-link {
      display: inline-flex;
      align-items: center;
      margin-top: 1rem;
      padding: 0.6rem 2rem;
      background-color: var(--background1);
      color: var(--pry-text);
      font-size: .8rem;
      letter-spacing: 1px;
      font-weight: 600;
      text-transform: capitalize;
      position: relative;
      border: var(--border);
      border-radius: 5px;
   }

   .btn-link:hover {
      background-color: transparent;
      color: var(--sec-text);
   }

   @media only screen and (max-width: 1024px) {
      .sections-wrapper {
         padding: 5px;
      }

      .hero-content {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-left: 0;
      }

      .hero-content p,
      h1 {
         text-align: left;
         width: 100%;
         margin-left: 10px;
      }

      .section-content p {
         font-size: .7em;
      }

      .section-content h2 {
         font-size: 1.5em;
      }
   }

   @media only screen and (max-width: 600px) {
      .hero {
         height: 90vh;
      }

      .section-content,
      .hero-content {
         width: 100%;
         padding: 10px;
      }

      .section-content h2 {
         text-align: left;
         width: 100%;
      }
   }

   @media only screen and (min-width:601px) and (max-width:800px) {
      .section-content {
         width: 70%;
      }
   }

   @media only screen and (max-width:500px) {
      .button-wrapper {
         width: 100%;
      }

      .button-wrapper a {
         width: fit-content;
      }
   }
</style>

<script setup>
   import { onMounted } from "vue";

   const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
               } else {
                  entry.target.classList.remove("visible");
               }
            });
         },
         { threshold: 0.1 }
      );

      document
         .querySelectorAll(".section")
         .forEach((section) => observer.observe(section));
   };

   onMounted(() => {
      setupIntersectionObserver();
   });
</script>