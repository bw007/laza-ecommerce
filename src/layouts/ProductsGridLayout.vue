<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log(100);
  
})

const backHandler = () => {
  console.log("Back");
}
</script>

<template>
  <div class="flex flex-col">
    <TheHeader
      :show-back="true"
      @back-click="backHandler"
    />
    <div class="mb-20 px-5">
      <RouterView />
    </div>
  </div>
</template>
