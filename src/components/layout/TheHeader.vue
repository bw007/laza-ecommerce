<script setup lang="ts">
import { FilterIcon } from 'lucide-vue-next';
import TheSidebar from './TheSidebar.vue';
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex bg-[#00000030] items-center justify-between p-5">
    <TheSidebar />
    <div class="w-12 h-12 bg-background rounded-full flex items-center justify-center active:opacity-65">
      <FilterIcon :size="24" :stroke-width="1.6" />
    </div>
  </div>
</template>
