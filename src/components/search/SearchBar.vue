<script setup lang="ts">
import { Check, Mic, Search, X } from 'lucide-vue-next'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '@/components/ui/combobox'
import Button from '../ui/button/Button.vue'
import { ref, computed } from 'vue'

interface Props {
  placeholder?: string
  searchResults?: SearchResult[]
  recentSearches?: string[]
  popularSearches?: string[]
  loading?: boolean
}

interface SearchResult {
  id: string
  title: string
  type: 'product' | 'category' | 'brand'
  image?: string
  price?: number
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Search...',
  searchResults: () => [],
  recentSearches: () => [],
  popularSearches: () => [],
  loading: false
})

const emit = defineEmits<{
  search: [query: string]
  select: [result: SearchResult]
  voiceSearch: []
  clear: []
}>()

const searchQuery = ref('')
const showResults = computed(() => searchQuery.value.length > 0)

const handleSearch = (query: string) => {
  searchQuery.value = query
  if (query.length > 2) {
    emit('search', query)
  }
}

const handleSelect = (result: SearchResult) => {
  emit('select', result)
  searchQuery.value = result.title
}

const clearSearch = () => {
  searchQuery.value = ''
  emit('clear')
}
</script>

<template>
  <div class="flex w-full justify-between items-stretch gap-2.5">
    <Combobox
      v-model="searchQuery"
      class="flex-1 h-[50px]"
    >
      <ComboboxAnchor class="w-full h-full">
        <div class="relative items-center bg-input rounded-[10px] h-full px-1">
          <ComboboxInput
            class="pl-1 pr-4"
            :placeholder="placeholder"
            :model-value="searchQuery"
            @update:model-value="handleSearch"
          />

          <button
            v-if="searchQuery.length > 0"
            @click="clearSearch"
            class="absolute end-0 inset-y-0 flex items-center justify-center px-3"
          >
            <X class="size-4 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      </ComboboxAnchor>

      <ComboboxList class="max-h-80 overflow-y-auto">
        <div v-if="loading" class="p-4 text-center text-muted-foreground">
          Searching...
        </div>

        <ComboboxEmpty v-else-if="showResults && searchResults.length === 0">
          <div class="p-4 text-center">
            <p class="text-muted-foreground">No results found for "{{ searchQuery }}"</p>
          </div>
        </ComboboxEmpty>

        <ComboboxGroup v-else-if="showResults && searchResults.length > 0">
          <ComboboxItem
            v-for="result in searchResults"
            :key="result.id"
            :value="result"
            @select="handleSelect(result)"
            class="flex items-center gap-3 p-3"
          >
            <img
              v-if="result.image"
              :src="result.image"
              :alt="result.title"
              class="w-10 h-10 rounded object-cover"
            />

            <div class="flex-1">
              <p class="font-medium">{{ result.title }}</p>
              <p class="text-sm text-muted-foreground capitalize">{{ result.type }}</p>
            </div>

            <p v-if="result.price" class="font-medium">
              ${{ result.price }}
            </p>

            <ComboboxItemIndicator>
              <Check class="ml-auto h-4 w-4" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>

        <ComboboxGroup v-else-if="recentSearches.length > 0">
          <div class="px-3 py-2 text-xs font-medium text-muted-foreground">
            Recent Searches
          </div>
          <ComboboxItem
            v-for="recent in recentSearches"
            :key="recent"
            :value="recent"
            @select="handleSearch(recent)"
            class="flex items-center gap-2"
          >
            <Search class="size-4 text-muted-foreground" />
            {{ recent }}
          </ComboboxItem>
        </ComboboxGroup>

        <ComboboxGroup v-if="!showResults && popularSearches.length > 0">
          <div class="px-3 py-2 text-xs font-medium text-muted-foreground">
            Popular Searches
          </div>
          <ComboboxItem
            v-for="popular in popularSearches"
            :key="popular"
            :value="popular"
            @select="handleSearch(popular)"
            class="flex items-center gap-2"
          >
            <Search class="size-4 text-muted-foreground" />
            {{ popular }}
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>

    <Button
      @click="emit('voiceSearch')"
      variant="outline"
      class="h-[50px] w-[50px] p-2.5 bg-primary rounded-[10px] border-none text-primary-foreground hover:bg-primary/90"
    >
      <Mic class="!h-5 !w-5" />
    </Button>
  </div>
</template>