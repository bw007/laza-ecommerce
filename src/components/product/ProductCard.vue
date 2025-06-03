<script setup lang="ts">
import type { Product } from '@/types/product';
import { ref } from 'vue';
import Card from '../ui/card/Card.vue';
import CardContent from '../ui/card/CardContent.vue';
import { Heart } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';

const props = defineProps<{
  product: Product;
}>();

const product = ref(props.product);
</script>

<template>
  <Card class="border-none shadow-none bg-transparent">
    <CardContent class="p-0">
      <div class="w-full bg-background relative rounded-[15px]">
        <Button variant="ghost" size="icon" class="absolute top-3 right-2.5">
          <Heart class="size-6 text-muted-foreground" />
        </Button>
        <img :src="product.image" :alt="product.name" class="object-cover">
      </div>
      
    </CardContent>
  </Card>
</template>