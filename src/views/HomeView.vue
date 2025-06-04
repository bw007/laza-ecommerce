<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue';
import BrandSelector from '@/components/brand/BrandSelector.vue';
import { ref } from 'vue';
import ProductCarousel from '@/components/product/ProductCarousel.vue';

import product_1 from '@/assets/images/products/product-1.png'
import product_2 from '@/assets/images/products/product-2.png'
import product_3 from '@/assets/images/products/product-3.png'

const searchResults = ref([])
const recentSearches = ref(['Nike shoes', 'iPhone 15', 'Gaming headset'])
const popularSearches = ref(['Sneakers', 'Electronics', 'Fashion'])
const isSearching = ref(false)

const newArrivalProducts = ref([
  {
    id: 1,
    name: 'Nike shoes',
    price: 100,
    image: product_1,
    description: 'New Nike shoes collection',
    brand: 'Nike',
    category: 'Shoes',
    subCategory: 'Sports',
    tags: ['sports', 'running'],
    isActive: true,
    isFeatured: true
  },
  {
    id: 2,
    name: 'iPhone 15',
    price: 100,
    image: product_2,
    description: 'New iPhone 15 collection',
    brand: 'Apple',
    category: 'Electronics',
    subCategory: 'Smartphones',
    tags: ['smartphone', 'apple'],
    isActive: true,
    isFeatured: true
  },
  {
    id: 3,
    name: 'Gaming headset',
    price: 100,
    image: product_3,
    description: 'New gaming headset collection',
    brand: 'Sony',
    category: 'Electronics',
    subCategory: 'Gaming',
    tags: ['gaming', 'headset'],
    isActive: true,
    isFeatured: true
  },
  {
    id: 4,
    name: 'Gaming headset',
    price: 100,
    image: product_1,
    description: 'New gaming headset collection',
    brand: 'Sony',
    category: 'Electronics',
    subCategory: 'Gaming',
    tags: ['gaming', 'headset'],
    isActive: true,
    isFeatured: true
  },
  {
    id: 5,
    name: 'Gaming headset',
    price: 100,
    image: product_2,
    description: 'New gaming headset collection',
    brand: 'Sony',
    category: 'Electronics',
    subCategory: 'Gaming',
    tags: ['gaming', 'headset'],
    isActive: true,
    isFeatured: true
  }
])

const searchProducts = async (query: string) => {
  console.log(query)
  return []
}

const handleSelectResult = (result: unknown) => {
  console.log(result)
}

const handleVoiceSearch = () => {
  console.log('voice search')
}

const handleClearSearch = () => {
  console.log('clear search')
}

const handleSearch = async (query: string) => {
  isSearching.value = true
  try {
    const results = await searchProducts(query)
    searchResults.value = results
  } finally {
    isSearching.value = false
  }
}
</script>

<template>
  <div class="space-y-1">
    <h2 class="text-[28px] font-semibold leading-[110%]">Hello</h2>
    <p class="text-muted-foreground text-[15px] ">Welcome to Laza.</p>
  </div>
  <SearchBar
    class="mt-5 sticky top-28 z-10 bg-white py-1"
    :search-results="searchResults"
    :recent-searches="recentSearches"
    :popular-searches="popularSearches"
    :loading="isSearching"
    @search="handleSearch"
    @select="handleSelectResult"
    @voice-search="handleVoiceSearch"
    @clear="handleClearSearch"
  />
  <BrandSelector class="mt-5" />
  <ProductCarousel
    class="mt-5"
    :products="newArrivalProducts"
    title="New Arraival"
    go-to="/products/new-arravial"
  />
  <ProductCarousel
    class="mt-5"
    :products="newArrivalProducts"
    title="Best Selling"
    go-to="/all-items"
  />
  <ProductCarousel
    class="mt-5"
    :products="newArrivalProducts"
    title="Special Offers"
    go-to="/special-offers"
  />
</template>