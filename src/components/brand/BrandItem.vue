<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  brand: { label: string; image: string | null; value: string }
  isSelected: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()
</script>

<template>
  <Card
    class="shadow-none border-none p-0 max-w-fit cursor-pointer rounded-[10px]"
    :class="[isSelected ? 'bg-primary/90 hover:bg-primary' : 'bg-background hover:bg-primary/10']"
    @click="emit('select', brand.value)"
  >
    <CardContent class="flex aspect-square items-center justify-center h-[50px] p-[5px] px-2 gap-1">
      <div v-if="brand.image" class="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center">
        <img :src="brand.image" :alt="brand.label" class="object-cover" />
      </div>

      <span
        class="px-2.5 text-sm leading-[110%] font-medium text-nowrap"
        :class="[isSelected ? 'text-white' : 'text-black']"
      >
        {{ brand.label }}
      </span>
    </CardContent>
  </Card>
</template>