<script setup lang="ts">
import TheBottomNav from '@/components/layout/TheBottomNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';

const openSidebar = () => {
console.log(100);

}

const openFilter = () => {
console.log(200);

}

</script>

<template>
  <div class="flex flex-col">
    <TheHeader
      :show-menu="true"
      :show-filter="true"
      @menu-click="openSidebar"
      @filter-click="openFilter"
    />
    <div class="mb-20 px-5">
      <RouterView />
    </div>
    <TheBottomNav class="sm:hidden" />
  </div>
</template>
