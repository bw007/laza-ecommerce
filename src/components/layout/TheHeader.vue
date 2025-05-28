<script setup lang="ts">
import { ArrowLeft, FilterIcon, ShoppingBag } from 'lucide-vue-next';
import TheSidebar from './TheSidebar.vue';
import { useRouter } from 'vue-router';
import Button from '../ui/button/Button.vue';

const router = useRouter()

interface Props {
  showBack?: boolean
  showMenu?: boolean
  showFilter?: boolean
  showCart?: boolean
  title?: string
  onBackClick?: () => void
  onMenuClick?: () => void
  onFilterClick?: () => void
  onCartClick?: () => void
}

const rawProps = defineProps<Props>()

const props = {
  showBack: rawProps.showBack ?? false,
  showMenu: rawProps.showMenu ?? false,
  showFilter: rawProps.showFilter ?? false,
  showCart: rawProps.showCart ?? false,
  title: rawProps.title ?? '',
  onBackClick: rawProps.onBackClick ?? (() => router.back()),
  onMenuClick: rawProps.onMenuClick ?? (() => console.log('Menu clicked')),
  onFilterClick: rawProps.onFilterClick ?? (() => console.log('Filter clicked')),
  onCartClick: rawProps.onCartClick ?? (() => console.log('Cart clicked')),
}

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/50 backdrop-blur-sm left-0 right-0 flex items-center justify-between p-5 pt-11">
    <div class="flex items-center">
      <Button
        v-if="showBack"
        @click="props.onBackClick"
        variant="outline"
        class="w-12 h-12 !p-2 border-none bg-background rounded-full flex items-center justify-center active:opacity-75"
      >
        <ArrowLeft :size="24" :stroke-width="1.6" />
      </Button>

      <TheSidebar v-if="showMenu" @click="props.onMenuClick" />
    </div>

    <div class="flex-1 text-center">
      <h1 v-if="title" class="text-lg font-semibold">{{ title }}</h1>
    </div>

    <div class="flex items-center space-x-2">
      <Button
        v-if="showFilter"
        @click="props.onFilterClick"
        variant="outline"
        class="w-12 h-12 !p-2 border-none bg-background hover:bg-neutral-200 hover:text-inherit rounded-full flex items-center justify-center active:opacity-75"
      >
        <FilterIcon :size="24" :stroke-width="1.6" />
      </Button>

      <Button
        v-if="showCart"
        @click="props.onCartClick"
        variant="outline"
        class="w-12 h-12 !p-2 border-none bg-background rounded-full flex items-center justify-center active:opacity-75"
      >
        <ShoppingBag :size="24" :stroke-width="1.6" />
      </Button>
    </div>
  </header>
</template>
