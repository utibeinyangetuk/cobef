<template>
   <div class="container">
      <div class="header">
         <h1>Products</h1>
         <p>
            Cobef International Ltd retains quality delivery and clients
            satisfaction as its driving force. Based on ISO certification, we
            are guided by the highest safety and quality standards to ensure
            that our clients receive the highest levels of satisfaction in
            addition to the commercial experience necessary to address
            technically challenging projects.
         </p>
      </div>
      <div class="catalog">
         <div class="product-container">
            <div class="product">
               <img src="../assets/materials/hdpe.jpg" />
               <div class="product-description">
                  <h1>HDPE PIPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/LAPETA.jpg" />
               <div class="product-description">
                  <h1>LAPETA</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/Tank.jpeg" />
               <div class="product-description">
                  <h1>TANKS</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/pressure.jpg" />
               <div class="product-description">
                  <h1>PRESSURE PIPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/suction-hose.jpg" />
               <div class="product-description">
                  <h1>SUCTION HOSE</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/conduit.jpg" />
               <div class="product-description">
                  <h1>CONDUIT PIPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/corrugated-pipe.jpg" />
               <div class="product-description">
                  <h1>CORRUGATED PIPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/marine-rope.jpg" />
               <div class="product-description">
                  <h1>MARINE ROPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
            <div class="product">
               <img src="../assets/materials/pvc.jpg" />
               <div class="product-description">
                  <h1>PVC PIPES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta, nesciunt sed vero sequi molestias quos quod
                     expedita beatae perspiciatis, blanditiis ratione aliquid
                     dignissimos dolores corrupti assumenda earum eum nihil.
                     Est.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .container {
      margin-top: 50px;
      background-color: var(--pry-background);
   }

   .header {
      width: 100%;
      margin-top: 20px;
      text-align: center;
   }

   .header h1 {
      text-transform: uppercase;
      font-size: 5em;
      font-weight: 700;
      color: var(--pry-text-color);
      height: fit-content;
      letter-spacing: 2px;
   }

   .header p {
      font-size: 1em;
      line-height: 1.8em;
      padding: 0 60px;
      margin-bottom: 1rem;
   }

   .product-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 10px;
      padding: 0 10px;
   }

   .product {
      border-radius: 10px;
      border: var(--pry-border);
      transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
      margin-bottom: 20px;
      padding: 1px;
   }

   .product:hover {
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
   }

   .product-container .product img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      border-radius: 5px;
      transition: filter 0.3s ease-in-out;
      filter: grayscale(1);
   }

   .product-container .product:hover img {
      filter: brightness(0.9);
   }

   .product-description {
      margin-left: 5px;
   }

   .product-description h1 {
      font-size: 1.7em;
      letter-spacing: 1px;
      color: var(--pry-text-color);
   }

   .product-description p {
      line-height: 1.5rem;
      font-weight: 300;
      color: var(--pry-text-color);
      font-size: 0.9em;
   }

   @media only screen and (max-width: 1024px) {
      .header {
         padding: 0 10px;
      }

      .header h1 {
         font-size: 3em;
      }

      .header p {
         padding: 0;
         font-size: .8em;
         text-align: center;
         font-weight: 400;
         line-height: 2em;
      }
.product-container{
   display: flex;
   flex-direction: column;
}
      .product-description h1 {
         font-size: 1.4em;
      }
      .product-description p{
         font-size: .7em;
      }
   }
</style>