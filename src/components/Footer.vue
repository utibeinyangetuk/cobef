<template>
   <footer class="wrapper">
      <div class="summary">
         <img src="../assets/COBEF_LOGO.png" alt="Cobef Logo" />
         <p>
            COBEF INTERNATIONAL LIMITED values quality the most. All its products are manufactured
            in a state-of-the-art facility with equipment and technology imported from India.
            Scoring high on the quality quotient, these products are also in strict compliance with
            DIN and ISO specifications as well as approved by Standard Organization of Nigeria
            (SON).
         </p>
      </div>
      <div class="socials">
         <h2>social media</h2>
         <div class="icons">
            <i class="uil uil-facebook" />
            <i class="uil uil-linkedin" />
            <i class="uil uil-twitter" />
            <i class="uil uil-whatsapp" />
         </div>
      </div>
      <div class="links">
         <h2>Links</h2>
         <i class="uil uil-angle-double-right"><a href="/#">Home</a></i>
         <i class="uil uil-angle-double-right"><a href="/#">About us</a></i>
         <i class="uil uil-angle-double-right"><a href="/#">products</a></i>
         <i class="uil uil-angle-double-right"><a href="/#">contact us</a></i>
      </div>
      <div class="contact">
         <h2>Contact us</h2>
         <i class="uil uil-location-point">Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt,</i>
         <i class="uil uil-envelope">info@cobefinternationalltd.com</i>
         <i class="uil uil-phone">
            (+234) xxx xxx xxxx
            (+234) xxx xxx xxxx
            (+234) xxx xxx xxxx
         </i>
      </div>
   </footer>
</template>

<style scoped>
.wrapper {
   background-color: #020e2a;
   height: 100%;
   width: 100%;
   padding: 10px;
   display: flex;
   color: #ffffff;
}

.summary {
   width: 25%;
   padding: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.summary img {
   width: 100px;
   height: 100px;
}

.summary p {
   font-size: 13px;
   line-height: 1.5em;
   text-align: center;
   margin-top: 15px;
}

.socials {
   width: 25%;
   display: flex;
   align-items: left;
   flex-direction: column;
   margin-top: 1em;
   margin-left: 50px;
}

.socials h2 {
   text-transform: capitalize;
   font-weight: bold;
   letter-spacing: 1.6px;
   margin-bottom: 0.5em;
}

.socials i {
   font-size: 30px;
   margin-right: 16px;
   cursor: pointer;
   padding: 4px;
   border-radius: 3px;
}

.socials i:hover {
   color: #fab60f;
}

.icons {
   margin-top: 1em;
}

.links {
   width: 25%;
   display: flex;
   align-items: left;
   flex-direction: column;
   margin-top: 1em;
}

.links h2 {
   letter-spacing: 1.6px;
}

.links i {
   text-transform: capitalize;
   font-style: initial;
   margin-top: 25px;
   font-weight: bold;
   letter-spacing: 1.6px;
   font-size: 18px;
}

.links a {
   color: #ffffff;
}

.limks i,
a:hover {
   color: #fab60f;
}

.contact {
   width: 25%;
   display: flex;
   align-items: left;
   flex-direction: column;
   margin-top: 1em;
}

.contact h2 {
   letter-spacing: 1.6px;
}

.contact i {
   margin-top: 1.5em;
   font-size: 15px;
}
</style>