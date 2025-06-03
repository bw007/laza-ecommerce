<script setup lang="ts">
import type { Product } from '@/types/product';
import { ref } from 'vue';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import { Heart } from 'lucide-vue-next';

const props = defineProps<{
  product: Product;
}>();

const product = ref(props.product);

const isFavorited = ref(false)

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value
}

const viewProduct = () => {
  console.log('View product:', props.product.id)
}
</script>

<template>
  <Card class="border-none shadow-none bg-transparent p-0">
    <CardContent class="p-0 flex flex-col gap-1.5 cursor-pointer">
      <div class="w-full bg-background flex relative rounded-[15px] aspect-square overflow-hidden min-h-48">
        <Heart
          :stroke-width="1.8"
          @click="toggleFavorite"
          class="absolute top-4 right-3.5 size-5 hover:text-primary/80 rounded-sm cursor-pointer text-muted-foreground"
        />
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-contain"
          style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          loading="lazy"
          @click="viewProduct"
        >
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs leading-[140%]">{{ product.name }}</span>
        <span class="text-sm font-semibold">${{ product.price }}</span>
      </div>
    </CardContent>
  </Card>
</template>