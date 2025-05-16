<script setup lang="ts"></script>

<template>
  <div class="fixed inset-0 flex items-center justify-center h-screen bg-primary">
    <img
      src="@/assets/images/logo.svg"
      alt="Logo"
      class="w-28 h-auto opacity-0 scale-90 animate-fade-in"
    />
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 1.6s ease-out 0.8s forwards;
}
</style>
