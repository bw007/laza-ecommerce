<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import BrandCarousel from './BrandCarousel.vue';
import adidasLogo from '@/assets/images/brands/adidas.svg'
import nikeLogo from '@/assets/images/brands/nike.svg'
import filaLogo from '@/assets/images/brands/fila.svg'
import { ref } from 'vue'

const selectedBrand = ref('all')
const brands = ref([
  {
    label: 'All',
    image: null,
    value: 'all'
  },
  {
    label: 'Adidas',
    image: adidasLogo,
    value: 'adidas'
  },
  {
    label: 'Nike',
    image: nikeLogo,
    value: 'nike'
  },
  {
    label: 'Fila',
    image: filaLogo,
    value: 'fila'
  }
])

</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between gap-2">
      <h4 class="text-base font-medium">Choose Brand</h4>
      <router-link to="/all-items">
        <Button variant="link" size="sm" class="px-0 text-sm text-muted-foreground hover:text-foreground" asChild>
          <span>View All</span>
        </Button>
      </router-link>
    </div>
    <BrandCarousel
      :brands="brands"
      :selected-brand="selectedBrand"
      @select="selectedBrand = $event"
    />
  </div>
</template>