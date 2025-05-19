<template>
  <div class="loader w-[50px] aspect-square grid relative before:content-[''] after:content-['']">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style scoped>
.loader::before,
.loader::after {
  grid-area: 1 / 1;
  --c: no-repeat radial-gradient(farthest-side, #9775fa 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  animation: l12 1s infinite;
}

.loader::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear;
}

@keyframes l12 {
  100% {
    transform: rotate(0.5turn);
  }
}
</style>
