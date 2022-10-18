<script setup lang="ts">

</script>

<template>
  <section class="header">
    <router-link :to="{ name: 'Home' }">Home</router-link> | 
    <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>
  </section>

  <router-view/>
</template>

<style scoped>
</style>
