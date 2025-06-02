<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue';
import BrandSelector from '@/components/brand/BrandSelector.vue';
import { ref } from 'vue';

const searchResults = ref([])
const recentSearches = ref(['Nike shoes', 'iPhone 15', 'Gaming headset'])
const popularSearches = ref(['Sneakers', 'Electronics', 'Fashion'])
const isSearching = ref(false)

const searchProducts = async (query: string) => {
  console.log(query)
  // TODO: Implement actual search logic here, currently returns empty array
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
    // API call
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
    class="mt-5"
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
</template>