<template>
  <div :class="$style.wrapper">
    <img :src="project.images[0]" :class="$style.img">

    <h3 :class="$style.title">
      {{ project.title }}
    </h3>

    <div :class="$style.stackContainer">
      <span v-for="stackItem in project.stack" :key="stackItem" :class="$style.chip">
        {{ stackItem }}
      </span>
    </div>

    <p :class="$style.description">
      {{ project.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{project: Project}>()
</script>

<style module lang="scss">
.wrapper {
  background: var(--color-gray-0);
  box-shadow: 2px 2px 32px rgba(40, 38, 44, 0.15);
  border-radius: 6px;
  padding: var(--space-2);
}

.title {
  @extend %typo-heading-3;

  margin: var(--space-1) 0;

  @include tablet {
    margin: var(--space-2) 0;
  }
}

.img {
  max-width: 100%;
  border-radius: 6px;
}

.stackContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.chip {
  @extend %typo-text-2;

  color: var(--color-text-light);
  background: var(--color-primary);
  border-radius: 24px;
  padding: var(--space-1);
  white-space: nowrap;
}

.description {
  margin-bottom: 0;
}
</style>
