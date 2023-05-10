<template>
  <transition
    v-bind="$attrs"
    mode="out-in"
    :leave-from-class="$style.visible"
    :leave-to-class="$style.hidden"
    :leave-active-class="$style.active"
    :enter-from-class="$style.hidden"
    :enter-to-class="$style.visible"
    :enter-active-class="$style.active"
  >
    <slot />
  </transition>
</template>

<style module lang="scss">
.active {
  transition: opacity 0.15s ease-in;
}

.visible {
  opacity: 1;
}

.hidden {
  opacity: 0;
}
</style>
