<template>
  <div :class="$style.wrapper">
    <images-slider :images="project.images">
      <template #activator="{ onClick }">
        <img
          :src="project.previewImage || project.images[0]"
          :class="$style.img"
          title="View screenshots"
          @click="onClick"
        >
      </template>
    </images-slider>

    <div :class="$style.titleContainer">
      <h3 :class="$style.title">
        {{ project.title }}
      </h3>
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        :class="$style.link"
      >
        View
      </a>
    </div>

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
  display: flex;
  flex-direction: column;
  background: var(--color-gray-0);
  box-shadow: 2px 2px 32px rgba(40, 38, 44, 0.15);
  border-radius: 6px;
  padding: var(--space-3);
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: var(--space-1) 0;

  @include tablet {
    margin: var(--space-2) 0;
  }
}

.img {
  width: 100%;
  height: 100%;
  object-position: left top;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
}

.link {
  @extend %typo-text-2;

  position: relative;
  font-weight: bold;
  color: var(--color-primary);
  padding: 0 4px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    top: 120%;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:active::after, &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}

.stackContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.chip {
  @extend %typo-text-3;

  color: var(--color-text-light);
  background: var(--color-primary);
  border-radius: 24px;
  padding: 4px var(--space-1);
  white-space: nowrap;
}

.description {
  @extend %typo-text-2;

  margin-bottom: 0;
}
</style>
