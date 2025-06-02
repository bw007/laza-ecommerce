<script setup lang="ts">
import type { Product } from '@/types/product';
import Button from '../ui/button/Button.vue';
import ProductCard from './ProductCard.vue';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

defineProps<{
  products: Product[];
  title: string;
  goTo: string;
}>();

</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between gap-2">
      <h4 class="text-base font-medium">{{ title }}</h4>
      <router-link to="/all-items">
        <Button variant="link" size="sm" class="px-0 text-sm text-muted-foreground hover:text-foreground" asChild>
          <span>View All</span>
        </Button>
      </router-link>
    </div>
    <Carousel
      class="relative w-full max-w-fit"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="product in products"
          :key="product.id"
          class="basis-1/2"
        >
          <ProductCard :product="product" class="w-full" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>