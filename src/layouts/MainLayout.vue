<script setup lang="ts">
import BottomNav from '@/components/layout/TheBottomNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';

</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <div class="flex-1">
      <RouterView />
    </div>
    <BottomNav />
  </div>
</template>
