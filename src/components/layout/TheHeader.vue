<script setup lang="ts">
import { ArrowLeft, ShoppingCart, } from 'lucide-vue-next';
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
  selectedBrand?: {
    logo?: string
    name?: string
  }
  showBrandSelector?: boolean
  onBrandSelectorClick?: () => void
  onBackClick?: () => void
  onMenuClick?: () => void
  onCartClick?: () => void
}

const rawProps = defineProps<Props>()

const props = {
  showBack: rawProps.showBack ?? false,
  showMenu: rawProps.showMenu ?? false,
  showCart: rawProps.showCart ?? false,
  title: rawProps.title ?? '',
  onBackClick: rawProps.onBackClick ?? (() => router.back()),
  onMenuClick: rawProps.onMenuClick ?? (() => console.log('Menu clicked')),
  onCartClick: rawProps.onCartClick ?? (() => console.log('Cart clicked')),
}

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/50 backdrop-blur-sm left-0 right-0 flex items-center justify-between p-5 pt-11 h-28">
    <div class="flex items-center">
      <Button
        v-if="showBack"
        @click="props.onBackClick"
        variant="outline"
        class="w-12 h-12 opacity-85 !p-2 border-none bg-background rounded-full flex items-center justify-center"
      >
        <ArrowLeft :size="24" :stroke-width="1.6" />
      </Button>

      <TheSidebar v-if="showMenu" @click="props.onMenuClick" />
    </div>

    <div class="flex-1 text-center">
      <h1 v-if="title" class="text-lg font-semibold">{{ title }}</h1>
    </div>

    <router-link to="/cart">
      <Button
        v-if="showCart"
        variant="outline"
        class="w-12 h-12 !p-2 opacity-85 border-none bg-background rounded-full flex items-center justify-center"
      >
        <ShoppingCart
          :size="24"
          :stroke-width="1.6"
          class="size-5"
        />
      </Button>
    </router-link>
  </header>
</template>
