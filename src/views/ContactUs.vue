<template>
   <div class="container">
      <div class="section1"></div>
      <div class="section2">
         <h1>Get in touch.</h1>
         <div class="find-us">
            <h2>Find us</h2>
            <p>Km 17 Port Harcourt/Aba Express Way, P. O. Box 2769, Port Harcourt</p>
            <a href="https://www.google.com/maps/place/Cobef+International+Limited" target="_blank" class="button">
               View in Maps
            </a>
         </div>
         <div class="enquiry">
            <h2>Have an enquiry?</h2>
            <p>Whether you have a question about a future project,want to know more about how
               we work or are interested in a career with us,you can email us or give us a call by
               using the links below.
            </p>
         </div>
         <div class="links">
            <div class="telephone">
               <h2>Phone</h2>
               <i class="uil uil-phone" /><a href="tel:+2345678909123">+(234) 567-890-9123</a><br>
               <i class="uil uil-phone" /><a href="tel:+2345678909123">+(234) 567-890-9123</a><br>
               <i class="uil uil-phone" /><a href="tel:+2345678909123">+(234) 567-890-9123</a><br>
            </div>
            <div class="email">
               <h2>Email</h2>
               <i class="uil uil-envelope" />
               <a href="mailto:info@cobefinternationalltd.com">info@cobefinternationalltd.com</a><br>
               <i class="uil uil-envelope" />
               <a href="mailto:info@cobefinternationalltd.com">info@cobefinternationalltd.com</a><br>
            </div>
         </div>
      </div>
   </div>
</template>
<style scoped>
   .container {
      display: flex;
      margin-top: 40px;
   }

   .section1 {
      width: 100%;
      background: url('../assets/homepage-images/team.jpg');
      background-repeat: no-repeat;
      object-fit: cover;
      background-size: cover;
   }

   .section2 {
      width: 100%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      background-color: var(--background3);
      border: var(--border);
   }

   .section2 a {
      color: var(--pry-text);
      font-size: .8em;
      font-weight: 700;
      letter-spacing: .7px;
      margin-left: 7px;
   }

   .section2 i {
      width: 23px;
      height: 23px;
      text-align: center;
      font-size: 14px;
      margin-bottom: .7em;
      color: var(--sec-text-color);
   }

   .section2 h1 {
      color: var(--pry-text-color);
      letter-spacing: 2px;
      font-size: 3.8em;
      margin-bottom: 20px;
      text-transform: uppercase;
   }

   .find-us,
   .links,
   .enquiry {
      margin-bottom: 2em;
      border-top: var(--border);
   }

   .find-us h2,
   .enquiry h2,
   .links h2 {
      font-weight: 600;
      font-size: .6em;
      margin-bottom: 6px;
      margin-top: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
   }

   .find-us p {
      font-size: .8em;
      letter-spacing: .4px;
      margin-bottom: 20px;
      font-weight: 700;
   }

   .find-us a {
      border: var(--border);
      padding: 10px;
      margin: 0;
   }

   .find-us a:hover {
      background-color: var(--background2);
      color: var(--background3);
   }

   .enquiry p {
      font-size: .73em;
      letter-spacing: .4px;
      margin-bottom: 6px;
      line-height: 2em;
   }

   .links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   }

   .links a:hover {
      text-decoration: underline;
   }

   .logo-wrapper img {
      height: 80px;
      width: 80px;
   }

   .footer-wrapper {
      width: 35%;
      display: flex;
      justify-content: space-between;
   }

   @media only screen and (max-width:920px) {
      .section2 h1 {
         font-size: 2.5em;
      }

      .section2 {
         padding: 20px;
      }

      .container {
         display: flex;
         flex-direction: column;
      }

      .links h2 {
         margin-top: 20px;
      }
   }
</style>