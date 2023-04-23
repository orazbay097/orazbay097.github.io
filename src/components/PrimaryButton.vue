<template>
  <button v-bind="$attrs" type="button" :class="$style.button">
    <slot />
  </button>
</template>

<style lang="scss" module>
.button {
  border: 0;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  padding: var(--space-3) var(--space-4);
  background: var(--color-primary);
  color: var(--color-text-light);
  text-align: center;
  text-transform: uppercase;

  transition: color 0.2s ease,
              background-color 0.2s ease;

  &:active, &:hover {
    background: var(--color-violet-dark);
  }

  &:disabled {
    color: var(--color-gray-50);
    cursor: not-allowed;
    background: var(--color-gray-90);
  }
}
</style>
