<template>
  <button :class="$style.wrapper">
    <slot />
  </button>
</template>

<style lang="scss" module>
.wrapper {
  display: inline-block;
  border-radius: 50%;
  background-color: var(--color-bg-light);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  padding: var(--space-1);
  outline: none;
  border: none;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
