<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import BrandItem from './BrandItem.vue';

defineProps<{
  brands: { label: string; image: string | null; value: string }[]
  selectedBrand: string
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()

</script>

<template>
  <Carousel
    class="relative w-full max-w-fitd"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent>
      <CarouselItem v-for="(brand, index) in brands" :key="index" class="basis-auto not-first:pl-2.5">
        <BrandItem
          :brand="brand"
          :is-selected="selectedBrand === brand.value"
          @select="emit('select', $event)"
        />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>