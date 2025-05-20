<script setup lang="ts">
import { ref, watch } from 'vue';
import { Heart, House, ShoppingCart, Tags } from 'lucide-vue-next';
import Tabs from '../ui/tabs/Tabs.vue';
import TabsList from '../ui/tabs/TabsList.vue';
import TabsTrigger from '../ui/tabs/TabsTrigger.vue';
import { useRouter, useRoute } from 'vue-router';
import mainRoutes from '@/router/routes/main';

const router = useRouter();
const route = useRoute();

const activeTab = ref(route.path);

watch(route.path, (newPath) => {
  activeTab.value = newPath;
});

const iconMap = {
  House,
  Heart,
  Tags,
  ShoppingCart,
};

const getIconComponent = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || House;
};

const goTo = (path: string) => {
  router.push(path)
};

</script>

<template>
  <Tabs default-value="home" class="w-full h-20 bg-white">
    <TabsList class="flex justify-between w-full h-full bg-white">
      <TabsTrigger
        v-for="nav in mainRoutes"
        :key="nav.path"
        :value="nav.path"
        class="rounded-lg flex flex-col items-center justify-center"
        @click="goTo(nav.path)"
      >
        <component :is="getIconComponent(nav.meta.icon)" :size="18" />
        <span class="text-[11px]">{{ nav.name }}</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>