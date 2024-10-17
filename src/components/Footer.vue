<script>
   import { ref } from "vue";
   const currentYear = ref(new Date().getFullYear());
</script>
<template>
   <footer>
      <p> © {{ currentYear }}COBEF International Limited. All rights reserved.</p>
      <a href="https://t.me/+2348055041145">website by utibe</a>
   </footer>
</template>
<style scoped>
   footer {
      width: 100%;
      background: var(--background4);
      padding: 8px;
      display: flex;
      justify-content: space-between;
      font-size: .7em;
   }

   footer a {
      color: var(--pry-text);
   }

   @media only screen and (max-width:416px) {
      footer {
         display: flex;
         flex-direction: column;
         line-height: 1.7em;
      }
   }
</style>