<script setup>
   import TextCarousel from "@/components/TextCarousel.vue";
</script>

<template>
   <div class="container">
      <div class="header">
         <h1>who we are</h1>
      </div>
      <div class="content-container">
         <div class="company-image">
            <img src="../assets/homepage-images/product.jpg" alt="company image" class="image1" />
            <img src="../assets/homepage-images/product.jpg" alt="company image" class="image2" />
            <img src="../assets/homepage-images/product.jpg" alt="company image" class="image3" />
         </div>
         <div class="company-writeup">
            <div class="story">
               <h1>Our story</h1>
               <p>
                  Welcome to Cobef, where we redefine quality and innovation in
                  the industry. Our journey began with a vision to set new
                  standards in craftsmanship and engineering, and we continue to
                  push boundaries with every project.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  architecto incidunt? Illum non cum labore doloremque enim
                  quidem, quisquam, unde molestiae quasi vel, veritatis
                  necessitatibus maiores vitae cupiditate at rerum. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Consequuntur
                  incidunt commodi voluptate aliquid quae ducimus consectetur
                  rerum molestias, officiis minima expedita repudiandae illum
                  dignissimos dolorem nihil iusto reprehenderit nemo et.
               </p>
            </div>
            <div class="vision">
               <h1>We are dedicated to</h1>
               <p>
                  To be recognized globally as a benchmark for excellence,
                  driving positive change and setting new standards for the
                  industry.
               </p>
            </div>
            <div class="mission">
               <h1>Our mission</h1>
               <p>
                  To lead the industry with cutting-edge solutions and
                  unwavering commitment to quality. We aim to exceed
                  expectations and deliver exceptional value.
               </p>
            </div>
            <div class="values">
               <h1>Our values</h1>
               <TextCarousel class="carousel" />
            </div>
         </div>
      </div>
      <div class="ad-wrapper">
         <div class="ad">
            <h1>Already peaked your interest?</h1>
            <p>Let's recruit together and find your next colleague.</p>
            <router-link to="careers">I'm locked in 🫱🏽‍🫲🏽</router-link>
         </div>
      </div>
      <div class="team">
         <h1>Our Team</h1>
         <h2>Meet the brains behind our company</h2>
         <div class="image-wrapper">
            <div class="card-container">
               <div class="profile-wrapper">
                  <img src="../assets/homepage-images/hiring.jpg" alt="#team member" />
               </div>
               <div class="card-info">
                  <h4>John Doe</h4>
                  <p>CEO</p>
               </div>
            </div>
            <div class="card-container">
               <div class="profile-wrapper">
                  <img src="../assets/homepage-images/hiring.jpg" alt="#team member" />
               </div>
               <div class="card-info">
                  <h4>John Doe</h4>
                  <p>CEO</p>
               </div>
            </div>
            <div class="card-container">
               <div class="profile-wrapper">
                  <img src="../assets/homepage-images/hiring.jpg" alt="#team member" />
               </div>
               <div class="card-info">
                  <h4>John Doe</h4>
                  <p>CEO</p>
               </div>
            </div>
            <div class="card-container">
               <div class="profile-wrapper">
                  <img src="../assets/homepage-images/hiring.jpg" alt="#team member" />
               </div>
               <div class="card-info">
                  <h4>John Doe</h4>
                  <p>CEO</p>
               </div>
            </div>
         </div>
      </div>
      <div class="certifications">
         <h1>Certifications and Achievements</h1>
         <p>
            ISO certified? Hell, yes!! Browse through to see some of our notable
            achievements and certifications.
         </p>
         <div class="certificate-wrapper">
            <img src="../assets/certificates/MemComence.jpg" alt="certificates" />
            <img src="../assets/certificates/Mancap.jpg" alt="certificates" />
            <img src="../assets/certificates/MemCert.jpg" alt="certificates" />
            <img src="../assets/certificates/ISO.jpg" alt="certificates" />
            <img src="../assets/certificates/MemComence.jpg" alt="certificates" />
            <img src="../assets/certificates/Mancap.jpg" alt="certificates" />
            <img src="../assets/certificates/MemCert.jpg" alt="certificates" />
            <img src="../assets/certificates/ISO.jpg" alt="certificates" />
         </div>
      </div>
      <div class="services">
         <h1>Our Operations</h1>
         <div class="video-wrapper">
            <video autoplay loop muted>
               <source src="../assets/videos/factory.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div class="services-content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam, quam officia cupiditate
               mollitia
               fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam, quam officia cupiditate
               mollitia
               fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam, quam officia cupiditate
               mollitia fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               mollitia fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               mollitia fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam, quam officia cupiditate
               mollitia
               fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               ex?
               mollitia
               fuga accusamus accusantium iusto aperiam eos, ex saepe ducimus vero, vitae magnam. Tenetur delectus totam
               ex?
            </p>
         </div>
         <div class="products-link">
            <div class="products-video">
               <video autoplay loop muted>
                  <source src="../assets/videos/factory.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>
            <div class="products-content">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sint ad tenetur est velit quae
                  deleniti vero ex quia provident. Laborum quo rerum eaque possimus. Ducimus dicta adipisci vero ea!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sint ad tenetur est velit quae
                  deleniti vero ex quia provident. Laborum quo rerum eaque possimus. Ducimus dicta adipisci vero ea!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sint ad tenetur est velit quae
                  deleniti vero ex quia provident. Laborum quo rerum eaque possimus. Ducimus dicta adipisci vero ea!
               </p>
               <router-link to="products">View Products</router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      background: var(--pry-background);
      margin-top: 50px;
   }

   .header {
      padding: 40px;
   }

   .header h1 {
      font-size: 6em;
      font-weight: 700;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
   }

   .content-container {
      display: flex;
   }

   .content-container h1 {
      font-weight: 600;
      font-size: 0.8em;
      margin-bottom: 12px;
   }

   .content-container p {
      font-size: 0.7em;
      line-height: 2em;
      margin-bottom: 30px;
      color: var(--sec-text-color);
   }

   .company-image {
      position: relative;
      width: 64%;
      height: 70vh;
   }

   .company-image img {
      width: 300px;
      position: absolute;
      border-radius: 10px;
      filter: grayscale();
   }

   .company-image .image1 {
      transform: translateX(40px) translateY(440px) rotate(36deg);
      transition: 1s ease-in-out;
   }

   .company-image .image1:hover {
      transition: 1s ease-in-out;
      transform: translateY(300px) translateX(30px);
      width: 500px;
      filter: none;
      z-index: 1;
   }

   .company-image .image2 {
      transform: translateX(150px) translateY(210px) rotate(-36deg);
      transition: 1s ease-in-out;
   }

   .company-image .image2:hover {
      transition: 1s ease-in-out;
      transform: translateY(100px) translateX(30px);
      filter: none;
      width: 500px;
      z-index: 1;
   }

   .company-image .image3 {
      transform: translateX(40px) translateY(-10px) rotate(36deg);
      transition: 1s ease-in-out;
   }

   .company-image .image3:hover {
      transition: 1s ease-in-out;
      width: 500px;
      transform: translateY(30px) translateX(20px);
      filter: none;
   }

   .company-writeup {
      width: 100%;
      padding: 30px;
   }

   .story,
   .vision,
   .mission,
   .values {
      border-top: var(--pry-border);
      padding: 10px 5px;
   }

   .ad-wrapper {
      display: flex;
      justify-content: center;
      margin: 20px;
   }

   .ad {
      border: var(--pry-border);
      border-radius: 10px;
      padding: 75px;
      width: 100%;
      text-align: center;
      line-height: 3em;
   }

   .ad h1 {
      color: #000;
      letter-spacing: 2px;
      font-size: 3em;
   }

   .ad p {
      color: #000;
      font-size: 1em;
      letter-spacing: 1px;
   }

   .ad a {
      border-radius: 5px;
      padding: 13px 50px;
      color: #000;
      font-size: 0.8em;
      border: 1px solid;
      letter-spacing: 1px;
   }

   .ad a:hover {
      background-color: #000;
      color: #fff;
      border: none;
   }

   .team {
      padding: 30px;
   }

   .team h1 {
      font-size: 6em;
      text-align: center;
      text-transform: uppercase;
   }

   .team h2 {
      font-weight: normal;
      font-size: 1em;
      margin-top: -1em;
      margin-bottom: 2em;
      text-align: center;
      color: var(--sec-text-color);
   }

   .team .image-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
   }

   .image-wrapper .card-container {
      padding: 1px;
      cursor: pointer;
      border-top: var(--pry-border);
   }

   .image-wrapper .card-container:nth-child(even) {
      transform: translateY(40px);
      transition: 1s ease-in-out;
   }

   .image-wrapper .card-container:nth-child(even):hover {
      transition: 1s ease-in-out;
      transform: translateY(0px);
   }

   .card-container img {
      height: 350px;
      width: 100%;
      border-radius: 5px;
      object-fit: cover;
      background-size: cover;
      margin-top: 20px;
   }

   .certifications {
      padding: 30px;
   }

   .certifications h1 {
      font-size: 4em;
      text-align: center;
      text-transform: uppercase;
   }

   .certifications p {
      text-align: right;
      color: var(--sec-text-color);
      font-size: 0.5em;
      letter-spacing: 1px;
      margin-right: 4rem;
      margin-bottom: 20px;
   }

   .certificate-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
      gap: 10px;
   }

   .certificate-wrapper img {
      height: 400px;
      width: 320px;
      border-radius: 5px;
      border: var(--pry-border);
   }

   .services {
      background-color: var(--sec-background);
      color: var(--ter-text-color);
   }

   .services h1 {
      text-align: center;
      font-size: 6em;
      letter-spacing: 2px;
      padding: 10px;
      text-transform: uppercase;
   }

   .services .video-wrapper {
      padding: 5px;
   }

   .services .video-wrapper video {
      width: 100%;
      border: none;
      border-radius:10px;
   }

   .services-content {
      display: flex;
      justify-content: center;
   }

   .services p {
      padding: 50px;
      line-height: 3em;
      font-size: .8em;
      width: 70%;
   }

   .products-link {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
   }

   .products-video {
      display: flex;
   }

   .products-video video {
      width: 100%;
      border: none;
      border-radius: 10px;
   }

   .products-content p {
      padding: 0 30px;
      margin-bottom: 30px;
      font-size: .7em;
   }

   .products-content a {
      border: 1px solid #fff;
      margin-left: 30px;
      padding: 20px;
      color: #fff;
      letter-spacing: 1px;
      font-size:.7em;
   }
</style>