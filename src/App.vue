<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SplashScreen from './components/onboarding/SplashScreen.vue';
import AppLoader from './components/common/AppLoader.vue';
import { RouterView } from 'vue-router';

const showSplash = ref(true);
const isLoading = ref(true)

onMounted(() => {
  const hasSeenSplash = sessionStorage.getItem('has-seen-splash')

  if (hasSeenSplash) {
    showSplash.value = false;

    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  } else {
    setTimeout(() => {
      showSplash.value = false;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
      sessionStorage.setItem('has-seen-splash', 'true');
    }, 3000);
  }
});

</script>

<template>
  <SplashScreen v-if="showSplash" />
  <AppLoader v-else-if="false" />
  <RouterView v-else />
</template>
