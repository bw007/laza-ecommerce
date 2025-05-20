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

watch(() => route.path, (newPath) => {
  activeTab.value = newPath;
}, { immediate: true });

const onTabChange = (value: string) => {
  if (value !== route.path) {
    router.push(value);
  }
};

const iconMap = {
  House,
  Heart,
  Tags,
  ShoppingCart,
};

const getIconComponent = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || House;
};

</script>

<template>
  <Tabs
    :default-value="route.path"
    class="w-full h-20 bg-white"
    v-model="activeTab"
    @update:model-value="onTabChange as any"
  >
    <TabsList class="flex justify-between w-full h-full bg-white">
      <TabsTrigger
        v-for="nav in mainRoutes"
        :key="nav.path"
        :value="nav.path"
        class="rounded-none flex flex-col items-center justify-center"
      >
        <component
          v-if="activeTab !== nav.path"
          :is="getIconComponent(nav.meta.icon)"
          :size="18"
          class="text-muted-foreground"
        />
        <span v-else class="text-[11px] text-primary">{{ nav.name }}</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>