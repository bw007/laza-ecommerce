<script setup lang="ts">
import type { Product } from '@/types/product';
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';

const props = defineProps<{
  products: Product[]
}>();

const products = ref(props.products);
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5">
    <router-link
      to="/products/7878"
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard :product="product" />
    </router-link>
  </div>
</template>