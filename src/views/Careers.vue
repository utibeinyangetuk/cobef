<template>
   <div class="container">
      <header>
         <h1>Careers at COBEF</h1>
         <p>
            Join our innovative and dynamic team, where your talents will help
            shape the future. We’re on a mission to create a better tomorrow, and we need passionate individuals to be a
            part of that journey.
         </p>
      </header>
      <div class="write-up-container">
         <div class="heading-wrapper">
            <h2>Our Culture</h2>
            <h1>Why <span>COBEF?</span></h1>
            <p>
               At COBEF, our mission drives everything we do and shapes how we work. We believe in fostering a
               collaborative and inclusive environment where every team member can thrive.
            </p>
         </div>
         <div class="list-wrapper">
            <ul>
               <li>
                  <h3>Innovative Environment</h3>
                  <p>
                     Join a team that is constantly pushing the boundaries of what's possible. We encourage creative
                     thinking and provide the resources needed to turn ideas into reality.
                  </p>
               </li>
               <li>
                  <h3>Growth Opportunities</h3>
                  <p>
                     At COBEF, your growth is our priority. We offer ample opportunities for professional development
                     and career advancement within our organization.
                  </p>
               </li>
               <li>
                  <h3>Work-Life Balance</h3>
                  <p>
                     We understand the importance of a healthy work-life balance. Our flexible work policies ensure that
                     you can achieve your career goals while maintaining your personal well-being.
                  </p>
               </li>
               <li>
                  <h3>Inclusive Culture</h3>
                  <p>
                     Diversity and inclusion are at the heart of our culture. We celebrate differences and strive to
                     create a workplace where everyone feels valued and respected.
                  </p>
               </li>
            </ul>
         </div>
      </div>
      <div class="open-positions">
         <h1>Open Positions</h1>
         <div class="position-wrapper">
            <section>
               <h1>Cobef Internships</h1>
               <p>
                  Start your career with us! Our internship program provides hands-on experience and an opportunity to
                  learn from industry experts.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
            <section>
               <h1>NYSC Corpers</h1>
               <p>
                  Join us during your service year and gain valuable experience while making a difference. We offer a
                  supportive environment for NYSC corp members.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
            <section>
               <h1>NYSC Corpers</h1>
               <p>
                  Join us during your service year and gain valuable experience while making a difference. We offer a
                  supportive environment for NYSC corp members.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
            <section>
               <h1>NYSC Corpers</h1>
               <p>
                  Join us during your service year and gain valuable experience while making a difference. We offer a
                  supportive environment for NYSC corp members.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
            <section>
               <h1>NYSC Corpers</h1>
               <p>
                  Join us during your service year and gain valuable experience while making a difference. We offer a
                  supportive environment for NYSC corp members.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
            <section>
               <h1>NYSC Corpers</h1>
               <p>
                  Join us during your service year and gain valuable experience while making a difference. We offer a
                  supportive environment for NYSC corp members.
               </p>
               <ul>
                  <li>Transport Manager</li>
                  <li>Legal Head</li>
                  <li>Machine Operator</li>
                  <li>Canteen</li>
               </ul>
               <div class="link-wrapper">
                  <router-link to="/contact">Apply Now</router-link>
               </div>
            </section>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      margin-top: 50px;
      padding: 20px;
   }

   header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
   }

   header h1 {
      color: var(--sec-text-color);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 2.5em;
      margin-bottom: 10px;
   }

   header p {
      color: var(--ter-text-color);
      font-size: 1.2em;
      width: 80%;
      line-height: 1.5em;
      letter-spacing: 1px;
   }

   .write-up-container {
      display: flex;
      padding: 20px;
      background-color: var(--sec-background);
      border-radius: 10px;
   }

   .heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      margin-right: 2%;
   }

   .write-up-container .heading-wrapper h2 {
      font-size: 1.2em;
      font-weight: 400;
      color: var(--sec-text-color);
      margin-bottom: 10px;
   }

   .write-up-container .heading-wrapper h1 {
      color: var(--sec-text-color);
      font-size: 2.5em;
      font-weight: 500;
      margin-bottom: 15px;
   }

   .write-up-container .heading-wrapper span {
      color: rgb(18, 18, 244);
      font-weight: 700;
   }

   .write-up-container .heading-wrapper p {
      color: var(--ter-text-color);
      line-height: 1.8em;
      font-size: 1.1em;
      margin-bottom: 20px;
   }

   .list-wrapper ul {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
   }

   .list-wrapper li {
      list-style: none;
      background-color: var(--ter-background);
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
   }

   .list-wrapper li:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
   }

   .list-wrapper li h3 {
      letter-spacing: 1px;
      color: var(--pry-text-color);
      font-size: 1.2em;
      margin-bottom: 15px;
   }

   .list-wrapper li p {
      color: var(--text);
      font-size: 1em;
      line-height: 1.6em;
   }

   .open-positions h1 {
      text-align: center;
      font-size: 3em;
      color: var(--sec-text-color);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 40px;
      margin-bottom: 40px;
   }

   .position-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
   }

   .position-wrapper > section {
      background-color: var(--ter-background);
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
   }

   .position-wrapper > section:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
   }

   .position-wrapper > section h1 {
      text-align: left;
      font-size: 2em;
      letter-spacing: 2px;
      color: var(--pry-text-color);
      margin-bottom: 10px;
   }

   .position-wrapper > section p {
      color: var(--pry-text-color);
      text-align: left;
      line-height: 1.8em;
      margin-bottom: 20px;
   }

   .position-wrapper > section ul {
      margin-left: 20px;
      list-style: none;
      padding-left: 0;
   }

   .position-wrapper > section ul li {
      margin-bottom: 10px;
      color: var(--pry-text-color);
      font-size: 1.1em;
      text-align: left;
   }

   .position-wrapper > section ul li::before {
      content: '•';
      color: #000000;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
   }

   .position-wrapper > section .link-wrapper {
      text-align: left;
      margin-top: 20px;
   }

   .position-wrapper > section .link-wrapper a {
      border-radius: 5px;
      padding: 10px 20px;
      letter-spacing: 2px;
      color: var(--pry-text-color);
      border: 1px solid #000000;
      font-weight: bold;
      font-size: 0.9em;
      transition: background-color 0.5s ease-in-out;
   }

   .position-wrapper > section .link-wrapper a:hover {
      background-color: var(--sec-background);
      color: var(--sec-text-color);
      border: none;
      transition: background-color 0.5s ease-in-out;
   }

   @media only screen and (max-width:1024px) {
      .container {
         padding: 5px;
      }

      header {
         text-align: center;
      }

      header h1 {
         margin-top: 10px;
         margin-bottom: 0px;
         font-size: 1.5em;
         width: 100%;
      }

      header p {
         font-size: .9em;
         line-height: 2em;
         width: 100%;
         text-align: center;
      }

      .write-up-container {
         display: flex;
         flex-direction: column;
         padding: 0;
         text-align: center;
         margin-top: -20px;
      }

      .heading-wrapper {
         width: 100%;
      }

      .write-up-container .heading-wrapper h2 {
         margin-bottom: 0px;
      }

      .write-up-container .heading-wrapper h1 {
         margin-top: 0px;
         font-size: 2em;
         letter-spacing: 2px;
         margin-bottom: 0;
      }

      .write-up-container .heading-wrapper p {
         margin-bottom: 0;
         margin-top: 0;
         font-size: .9em;
         letter-spacing: 1px;
      }

      .open-positions h1 {
         font-size: 2em;
      }

      .position-wrapper {
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      .position-wrapper > section {
         width: 100%;
      }

      .position-wrapper > section h1 {
         font-size: 1.5em;
         margin-top: -1px;
      }

      .position-wrapper > section p {
         font-size: .8em;
      }

      .position-wrapper > section ul > li {
         font-size: .8em;
      }
   }
</style>