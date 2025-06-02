<script setup lang="ts">
import type { Product } from '@/types/product';
import { ref } from 'vue';

const props = defineProps<{
  product: Product;
}>();

const product = ref(props.product);
</script>

<template>
  <div class="border border-gray-200 rounded-lg p-4">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-lg mb-4">
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-gray-600">{{ product.price }}</p>
  </div>
</template>