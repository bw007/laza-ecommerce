<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Heart, House, ShoppingCart, Tags } from 'lucide-vue-next';
import Tabs from '../ui/tabs/Tabs.vue';
import TabsList from '../ui/tabs/TabsList.vue';
import TabsTrigger from '../ui/tabs/TabsTrigger.vue';
import { useRouter, useRoute } from 'vue-router';
import mainRoutes from '@/router/routes/main';

const router = useRouter();
const route = useRoute();

const activeTab = ref<string>(route.path)

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

const bottomNavRoutes = computed(() =>
  mainRoutes.filter(route => route.meta?.bottomNav)
);

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
        v-for="navitem in bottomNavRoutes"
        :key="navitem.path"
        :value="navitem.path"
        class="rounded-none flex flex-col items-center justify-center"
        :class="[activeTab === navitem.path ? '!bg-purple-50' : '']"
      >
        <component
          v-if="activeTab !== navitem.path"
          :is="getIconComponent(navitem.meta.icon)"
          :size="18"
          class="text-muted-foreground"
        />
        <span v-else class="text-[11px] text-primary">{{ navitem.name }}</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>