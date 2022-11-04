<script setup lang="ts">
import { JOB_AREAS, PARTNERS } from '@/constants';
import GridItems from '@/components/GridItems.vue';

</script>

<template>
  <section class="home-content">
    <GridItems
      :items="JOB_AREAS"
      :image-width="60"
      title="Áreas de trabajo"
      cover-image="/images/home/jobs-background.png"
      background="#F8F8F8"
    />

    <div class="partners">
      <h2 class="section-title text-white">Conoce a nuestros aliados</h2>

      <div class="logos">
        <div
          v-for="(partner, index) in PARTNERS"
          :key="index"
          class="logo text-center inline-grid justify-items-center items-center"
          :class="partner.isLarge ? 'col-span-2 xl:col-span-4' : 'col-span-1 xl:col-span-2'"
        >
          <img
            :src="partner.image"
            :alt="partner.name"
            :class="{ 'w-4/5 my-4 xl:w-2/3 xl:my-0': partner.isLarge }"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  @apply bg-green-red px-10 py-8;
  @apply xl:px-60 xl:py-40
}

.logos {
  @apply grid grid-cols-2 gap-10;
  @apply xl:grid-cols-8 xl:gap-20;
}
</style>
