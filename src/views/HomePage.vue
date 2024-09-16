<template>
   <div id="app">
      <!-- Hero Section -->
      <section class="hero">
         <div class="hero-content">
            <h1>Welcome to Our Company</h1>
            <p>Innovating the future with clean energy solutions.</p>
         </div>
      </section>

      <!-- About Section -->
      <section class="section" id="about">
         <div class="section-content">
            <h2>About Us</h2>
            <p>We are pioneers in sustainable technologies that drive innovation.</p>
         </div>
      </section>

      <!-- Products Section -->
      <section class="section" id="products">
         <div class="section-content">
            <h2>Our Products</h2>
            <p>We offer a range of energy-efficient solutions for the modern world.</p>
         </div>
      </section>

      <!-- Projects Section -->
      <section class="section" id="projects">
         <div class="section-content">
            <h2>Our Projects</h2>
            <p>Explore the groundbreaking projects we've completed worldwide.</p>
         </div>
      </section>

      <!-- Careers Section -->
      <section class="section" id="careers">
         <div class="section-content">
            <h2>Careers</h2>
            <p>Join our team and help shape the future of sustainable energy.</p>
         </div>
      </section>

      <!-- Contact Section -->
      <section class="section" id="contact">
         <div class="section-content">
            <h2>Contact Us</h2>
            <p>Reach out to us for more information on our services and solutions.</p>
         </div>
      </section>
   </div>
</template>
<style scoped>
   #app {
      scroll-behavior: smooth;
   }

   .hero {
      height: 100vh;
      background: url('../assets/homepage-images/team.jpg') no-repeat center center/cover;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
   }

   .hero-content {
      text-align: center;
      color: #fff;
   }

   h1 {
      font-size: 3rem;
      margin: 0;
   }

   p {
      font-size: 1.2rem;
   }

   .section {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../assets/homepage-images/team.jpg') no-repeat center center/cover;
      color: #fff;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-in-out, transform 1s ease-in-out;
   }

   .section-content {
      text-align: center;
   }

   .section.visible {
      opacity: 1;
      transform: translateY(0);
   }

   @media (max-width: 768px) {
      h1 {
         font-size: 2rem;
      }

      p {
         font-size: 1rem;
      }
   }
</style>

<script>
   export default {
      mounted() {
         // Create an intersection observer to observe each section
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
               } else {
                  entry.target.classList.remove('visible');
               }
            });
         }, { threshold: 0.1 }); // Adjust threshold as needed

         // Observe each section
         const sections = document.querySelectorAll('.section');
         sections.forEach(section => observer.observe(section));
      }
   };
</script>