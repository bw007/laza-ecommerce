<script setup lang="ts">
import TheBottomNav from '@/components/layout/TheBottomNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';

</script>

<template>
  <div class="flex flex-col">
    <TheHeader />
    <div class="flex-1 h-full mb-20">
      <RouterView />
    </div>
    <TheBottomNav class="sm:hidden" />
  </div>
</template>
