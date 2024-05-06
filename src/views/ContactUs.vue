<template>
   <Currentpage />
   <section>
      <div class="email">
         <p>Send us a mail</p>
      </div>
      <div class="wrapper2">
         <div class="contact">
            <p>Phone</p>
            <ul>
               <li>(+234) xxx xxx xxxx</li>
               <li>(+234) xxx xxx xxxx</li>
               <li>(+234) xxx xxx xxxx</li>
               <li>(+234) xxx xxx xxxx</li>
               <li>(+234) xxx xxx xxxx</li>
            </ul>
         </div>
         <div class="social">
            <p>E-mail</p>
            <ul>
               <li>adminuser@email.com</li>
               <li>adminuser@email.com</li>
               <li>adminuser@email.com</li>
            </ul>
         </div>
         <div class="location">
            <p>Address</p>
            <ul>
               <li>Km 17 Port Harcourt/Aba Express Way P. O. Box, 2769 Port Harcourt,</li>
            </ul>
         </div>
      </div>
   </section>
</template>

<script setup>
import Currentpage from '../components/CurrentPage.vue'
</script>

<style scoped>
section {
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding: 30px;
}

section p {
   padding: 5px;
   border-bottom: 1px solid rgba(128, 128, 128, 0.263);
   text-transform: capitalize;
   letter-spacing: 2px;
   background-color: #020e2a;
   color: #ffffff;
}

.email {
   border: 1px solid rgba(128, 128, 128, 0.263);
   border-radius: 5px;
   width: 50%;
   height: 400px;
}

.wrapper2 {
   width: 50%;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   margin-left: 10px;
}

.contact,
.social,
.location {
   width: 100%;
   border: 1px solid rgba(128, 128, 128, 0.263);
   border-radius: 5px;
}
.contact ul {
   padding: 5px;
   line-height: 25px;
}
.social ul {
   padding: 5px;
   line-height: 25px;
   list-style: disc;
}
.location ul {
   padding: 5px;
   line-height: 25px;
   list-style: disc;
}
</style>
