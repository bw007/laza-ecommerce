<script setup lang="ts">
import BottomNav from '@/components/layout/TheBottomNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheSidebar from '@/components/layout/TheSidebar.vue';

</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <TheSidebar />
    <div class="flex-1">
      <RouterView />
    </div>
    <BottomNav class="sm:hidden" />
  </div>
</template>
