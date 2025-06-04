<script setup lang="ts">
import TheBottomNav from '@/components/layout/TheBottomNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log(100);

})
const openSidebar = () => {
console.log(100);

}

</script>

<template>
  <div class="flex flex-col">
    <TheHeader
      :show-menu="true"
      :show-cart="true"
      @menu-click="openSidebar"
    />
    <div class="mb-20 px-5">
      <RouterView />
    </div>
    <TheBottomNav class="sm:hidden" />
  </div>
</template>
