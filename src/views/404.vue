<template>
   <div class="container">
      <p>Oops, you have hit a FOUR-OH-FOUR!</p>
      <router-link to="/">Go Home</router-link>
   </div>
</template>

<style scoped>
   .container {
      height: 85dvh;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
   }

   p {
      font-size: 1em;
      text-transform: capitalize;
      margin-bottom: 10px;
      letter-spacing: 1px;
   }

   a {
      border: var(--border);
      border-radius: 5px;
      padding: 10px;
      width: fit-content;
      color: var(--pry-text);
      font-size: .7em;
      letter-spacing: 2px;
   }

   a:hover {
      background: var(--background2);
      color: #fff;
   }
</style>