<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log("Grid layout");

})

</script>

<template>
  <div class="flex flex-col">
    <TheHeader
      :show-back="true"
      :show-cart="true"
    />
    <div class="mb-20 px-5">
      <RouterView />
    </div>
  </div>
</template>
