<script setup lang="ts">
import HeaderUnal from '../components/HeaderUnal.vue';
import FooterUnal from '../components/FooterUnal.vue';

</script>

<template>
  <section class="red-paz">
    <HeaderUnal/>
    
    <div class="main-content">
      <router-view/>
      <!-- Notifications -->
      <notifications position="bottom left"/>
    </div>

    <FooterUnal/>
  </section>
  <!-- <section class="header">
    <router-link :to="{ name: 'Home' }">Home</router-link> | 
    <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>
  </section> -->
</template>

<style scoped>
.main-content {
  @apply min-h-[calc(100vh-250px)];
}
</style>
