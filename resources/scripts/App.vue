<script setup lang="ts">
import HeaderUnal from './components/HeaderUnal.vue';
import FooterUnal from './components/FooterUnal.vue';
</script>

<template>
  <section class="red-paz">
    <HeaderUnal/>
    
    <div class="main-content">
      <router-view/>
      <!-- Notifications -->
      <notifications
        position="bottom left"
        :close-on-click="true"
        :ignore-duplicates="true"
      >
        <template #body="props">
          <div
            class="red-notification"
            :class="props.item.type"
          >
            <h4 class="title">
              {{ props.item.title }}
            </h4>

            <div v-html="props.item.text"/>
          </div>
        </template>
      </notifications>
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

.red-notification {
  @apply font-sans text-base p-3 mt-0 mx-1.5 mb-1.5 text-white bg-gray-500 border-l-4 border-l-gray-900 cursor-pointer;
}

.red-notification.error {
  @apply bg-red-700 border-l-red-900;
}

</style>
