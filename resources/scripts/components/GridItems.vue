<script setup lang="ts">
import { PropType } from 'vue';
import { GridItem } from '@/interfaces';

defineProps({
  items: {
    type: Array as PropType<GridItem[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageWidth: {
    type: Number,
    required: false,
    default: 100,
  },
  background: {
    type: String,
    required: false,
    default: '#fff',
  },
  coverImage: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div
    class="grid-items"
    :style="{ backgroundColor: background }"
  >
    <h2 class="section-title">{{ title }}</h2>

    <div class="items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :style="{ backgroundColor: item.color }"
      >
        <img
          v-if="item.image"
          :src="item.image"
          class="item-image"
          :style="{ 'width': `${imageWidth}px` }"
        />

        <div
          class="item-content"
          :class="{ '!justify-center': !item.description && !item.cta }"
        >
          <div class="description">
            <h4 class="item-title">{{ item.title }}</h4>

            <p
              v-if="item.description"
              class="item-description"
            >
              {{ item.description }}
            </p>
          </div>

          <button
            v-if="item.cta"
            class="item-action"
            :style="{ color: item.color }"
          >
            {{ item.cta }}
          </button>
        </div>

        <div 
          v-if="coverImage"
          class="mask"
          :style="{ backgroundImage: `url(${coverImage})` }">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-items {
  @apply px-5 py-8;
  @apply xl:px-28 xl:py-40;
}

.items {
  @apply grid grid-cols-2 gap-5;
  @apply xl:grid xl:grid-cols-3 xl:gap-8;
}

.item {
  @apply relative px-4 py-5 font-bold text-white flex items-center rounded-lg min-h-[140px];
  @apply xl:p-5 xl:justify-between xl:items-start xl:min-h-0;
}

.item-content {
  @apply flex flex-col justify-between h-full w-full z-10;
}

.item-description {
  @apply my-4 italic text-lg leading-5 font-normal;
}

.item-image {
  @apply hidden object-cover mr-5 z-10;
  @apply xl:block;
}

.item-action {
  @apply bg-white rounded-lg text-lg w-32 leading-8;
}

.item-title {
  @apply text-lg text-center leading-6;
  @apply xl:text-2xl xl:text-left;
}

.mask {
  @apply absolute w-full h-full top-0 left-0 opacity-25 bg-cover;
}
</style>
