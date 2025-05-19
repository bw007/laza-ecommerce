<script setup lang="ts">
import { Heart, House, ShoppingCart, Tags } from 'lucide-vue-next';
import Tabs from '../ui/tabs/Tabs.vue';
import TabsList from '../ui/tabs/TabsList.vue';
import TabsTrigger from '../ui/tabs/TabsTrigger.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (path: string) => {
  router.push(path)
};

</script>

<template>
  <Tabs default-value="home" class="w-full h-20 bg-white">
    <TabsList class="flex justify-between w-full h-full bg-white">
      <TabsTrigger
        
        value="home"
        class="rounded-lg flex flex-col items-center justify-center"
      >
        <span class="text-[11px]">Home</span>
        <House :size="18" />
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>