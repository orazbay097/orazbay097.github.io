<template>
  <slot name="activator" :on-click="show" />

  <transition-fade>
    <div v-if="isOverlayVisible" :class="$style.overlay">
      <slot />
    </div>
  </transition-fade>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const { toggleLock } = useBodyScrollLock()
const [isOverlayVisible, toggleOverlayVisibility] = useToggle()

const show = () => {
  toggleLock(true)
  toggleOverlayVisibility(true)
}

const hide = () => {
  toggleLock(false)
  toggleOverlayVisibility(false)
}

defineExpose({
  show,
  hide
})
</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-overlay);
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
