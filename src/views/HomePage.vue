<template>
   <div class="container">
      <div class="hero">
         <div class="hero-content">
            <h1>Welcome to COBEF</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
               a recusandae quis dolore velit mollitia dignissimos, consectetur
               iste exercitationem similique neque cumque atque reprehenderit
               minima quam nostrum repellat eveniet culpa?
            </p>
         </div>
      </div>

      <div class="sections-wrapper">
         <section class="section about" id="about">
            <div class="section-content">
               <h2>About Us</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatum optio possimus eaque, dolor corrupti
                  dignissimos sunt reiciendis provident laboriosam, laborum nihil
                  nemo ex! Praesentium ab expedita eaque pariatur et.
               </p>
               <router-link to="about" class="btn-link"> Explore </router-link>
            </div>
         </section>

         <section class="section product" id="products">
            <div class="section-content">
               <h2>Products</h2>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                  similique laudantium distinctio debitis quia, unde sequi harum.
                  Quisquam debitis aspernatur culpa labore beatae reprehenderit.
                  Mollitia velit odit cum inventore quis?
               </p>
               <router-link to="products" class="btn-link">
                  View products
               </router-link>
            </div>
         </section>

         <section class="section project" id="projects">
            <div class="section-content">
               <h2>Projects</h2>
               <p>
                  Explore the groundbreaking projects we've completed worldwide. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum sint illo amet hic sequi ut, fuga optio id culpa corrupti, deserunt rerum
                  beatae quis perspiciatis omnis natus laboriosam voluptatem? Veniam!
               </p>
               <router-link to="projects" class="btn-link">
                  View projects
               </router-link>
            </div>
         </section>

         <section class="section careers" id="careers">
            <div class="section-content">
               <h2>Careers</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  quae voluptatibus provident nemo, similique iusto vero sed
                  dolores cumque inventore explicabo natus est molestias esse sequi
                  quo enim magnam facere!
               </p>
               <router-link to="careers" class="btn-link">
                  Get started
               </router-link>
            </div>
         </section>

         <section class="section contact" id="contact">
            <div class="section-content">
               <h2>Contact Us</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, maxime officia ut unde cum aliquid
                  facere aperiam cupiditate illum, culpa nulla quidem quod distinctio dicta sapiente excepturi nisi?
                  Repellendus, dignissimos.
               </p>
               <router-link to="contact" class="btn-link">
                  Leave us a message
               </router-link>
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

   .hero-content {
      color: var(--sec-text);
      background-color: rgba(128, 128, 128, 0.47);
      width: 50%;
      padding: 10px 30px;
      border-radius: 5px;
   }

   .hero-content h1 {
      text-transform: uppercase;
   }

   .hero-content p {
      font-size: .7em;
      line-height: 2em;
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
      background: url("../assets/homepage-images/contact2.jpg") no-repeat center center/cover;
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
      transition: opacity .5s ease-in-out, transform .5s ease-in-out;
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
      border: 1px solid #ffffff;
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

      .btn-link {
         padding: 0.8rem 2rem;
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
         font-size: 2.5em;
      }
   }

   @media only screen and (max-width: 550px) {
      .hero {
         height: 90vh;
      }

      .section-content,
      .hero-content {
         width: 100%;
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