<template>
   <div class="container">
      <div class="header">
         <div class="image-wrapper">
            <video autoplay loop muted>
               <source src="../assets/videos/factory.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div class="header-content">
            <h1>Careers</h1>
            <div class="content-wrapper">
               <p>
                  Join our innovative and dynamic team, where your talents will
                  help shape the future. We're on a mission to create a better
                  tomorrow, and we need passionate individuals to be a part of
                  that journey.
               </p>
               <router-link to="contact">Join us now</router-link>
            </div>
         </div>
      </div>
      <div class="write-up-container">
         <div class="heading-wrapper">
            <h2>Our Culture</h2>
            <h1>Why<span> COBEF?</span></h1>
            <p>
               At COBEF, our mission drives everything we do and shapes how we
               work. We believe in fostering a collaborative and inclusive
               environment where every team member can thrive.
            </p>
         </div>
         <div class="list-wrapper">
            <ul>
               <li>
                  <h3>Innovative Environment</h3>
                  <p>
                     Join a team that is constantly pushing the boundaries of
                     what's possible. We encourage creative thinking and provide
                     the resources needed to turn ideas into reality.
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
                     balance. Our flexible work policies ensure that you can
                     achieve your career goals while maintaining your personal
                     well-being.
                  </p>
               </li>
               <li>
                  <h3>Inclusive Culture</h3>
                  <p>
                     Diversity and inclusion are at the heart of our culture. We
                     celebrate differences and strive to create a workplace
                     where everyone feels valued and respected.
                  </p>
               </li>
            </ul>
         </div>
      </div>
      <div class="open-positions">
         <h1>open positions</h1>
         <table>
            <thead>
               <tr>
                  <th>Open Positions</th>
                  <th>Department</th>
                  <th>Location</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Transport Manager</td>
                  <td>Transport</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>NYSC Corpers</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
               <tr>
                  <td>Internships</td>
                  <td>Any</td>
                  <td>Port Harcourt</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<style scoped>
   .container {
      min-height: 100vh;
      margin-top: 50px;
   }

   .header {
      display: flex;
   }

   .image-wrapper {
      width: 60%;
      height: 100vh;
      background-color: var(--sec-background);
   }

   .image-wrapper video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      border: none;
   }

   .header-content {
      background: var(--sec-background);
      width: 40%;
      color: #ffffff;
      display: flex;
      flex-direction: column;
   }

   .header-content h1 {
      font-size: 6em;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 20px;
   }

   .content-wrapper {
      height: 100%;
      text-align: bottom;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 30px;
   }

   .content-wrapper p {
      line-height: 2em;
      margin-bottom: 20px;
   }

   .content-wrapper a {
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 10px;
      width: fit-content;
      color: #fff;
      letter-spacing: 1px;
   }

   .content-wrapper a:hover {
      background-color: #ffffff;
      color: #000000;
   }

   .write-up-container {
      display: flex;
      padding: 20px;
      background-color: var(--sec-background);
   }

   .heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      margin-right: 2%;
   }

   .write-up-container .heading-wrapper h2 {
      font-size: 1em;
      letter-spacing: 2px;
      font-weight: 400;
      color: var(--ter-text-color);
      margin-bottom: 5px;
   }

   .write-up-container .heading-wrapper h1 {
      color: var(--ter-text-color);
      letter-spacing: 2px;
      font-size: 2.5em;
      font-weight: 500;
      margin-bottom: 15px;
   }

   .write-up-container .heading-wrapper span {
      font-weight: bold;
   }

   .write-up-container .heading-wrapper p {
      color: var(--ter-text-color);
      line-height: 2em;
      font-size: 0.8em;
      margin-bottom: 20px;
   }

   .list-wrapper ul {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
   }

   .list-wrapper li {
      border: 1px solid #fdf1f128;
      list-style: none;
      background-color: var(--ter-background);
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(49, 48, 48, 0.228);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
   }

   .list-wrapper li:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
   }

   .list-wrapper li h3 {
      letter-spacing: 1px;
      color: var(--ter-text-color);
      font-size: 1.2em;
      margin-bottom: 15px;
   }

   .list-wrapper li p {
      font-size: 0.8em;
      line-height: 1.6em;
      color: #fdf1f150;
   }

   .open-positions {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .open-positions h1 {
      font-size: 4em;
      text-transform: uppercase;
      margin-top: 20px;
      letter-spacing: 2px;
   }

   table {
      width: 80%;
      border-collapse: collapse;
      text-align: left;
      margin-bottom: 20px;
   }

   th,
   td {
      border: var(--pry-border);
      padding: 10px;
   }

   th {
      background-color: var(--sec-background);
      color: var(--ter-text-color);
   }

   @media only screen and (max-width: 768px) {
      .header {
         display: flex;
         flex-direction: column;
      }

      .image-wrapper {
         width: 100%;
         height: 50vh;
         padding: 2px;
      }

      .image-wrapper video {
         width: 100%;
         height: 100%;
         border-radius: 5px;
      }

      .header-content {
         width: 100%;
         padding: 5px;
      }

      .header-content h1 {
         font-size: 4em;
         margin-top: 10px;
         text-align: left;
      }

      .content-wrapper {
         width: 100%;
         padding: 5px;
      }

      .content-wrapper p {
         font-size: 0.9em;
         text-align: left;
         margin-bottom: 10px;
      }

      .write-up-container {
         display: flex;
         flex-direction: column;
         align-items: center;
      }

      .heading-wrapper {
         width: 100%;
         text-align: left;
      }

      .heading-wrapper h2 {
         margin-top: 2em;
      }

      .open-positions h1 {
         font-size: 2em;
         letter-spacing: 1px;
         margin-bottom: .6em;
      }

      .open-positions table {
         width: 100%;
      }
   }
</style>