<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from './MainLayout.vue';
import ProductsGridLayout from './ProductsGridLayout.vue';

const route = useRoute()
const currentLayout = computed(() => {
  return route.meta?.layout || 'main'
})

const layoutComponents = {
  'main': MainLayout,
  'products-grid': ProductsGridLayout
}

</script>

<template>
  <component :is="layoutComponents[currentLayout as keyof typeof layoutComponents]">
    <RouterView />
  </component>
</template>