<script setup lang="ts">
import type { Product } from '@/types/product';
import { ref } from 'vue';
import Button from '../ui/button/Button.vue';
import ProductGrid from './ProductGrid.vue';

const props = defineProps<{
  products: Product[];
  title: string;
  goTo: string;
}>();

const products = ref(props.products);

</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between gap-2">
      <h4 class="text-base font-medium">{{ title }}</h4>
      <router-link :to="goTo">
        <Button variant="link" size="sm" class="px-0 text-sm text-muted-foreground hover:text-foreground" asChild>
          <span>View All</span>
        </Button>
      </router-link>
    </div>
    <ProductGrid :products="products" />
  </div>
</template>