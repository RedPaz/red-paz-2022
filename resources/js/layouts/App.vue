<script setup lang="ts">
import HeaderUnal from '../components/HeaderUnal.vue';
import FooterUnal from '../components/FooterUnal.vue';

</script>

<template>
  <section class="red-paz">
    <HeaderUnal/>
  
    <router-view/>

    <FooterUnal/>
  </section>
  <!-- <section class="header">
    <router-link :to="{ name: 'Home' }">Home</router-link> | 
    <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>
  </section> -->
</template>

<style scoped>
</style>
