<template>
  <section id="projects" :class="$style.wrapper">
    <h2 :class="$style.title">
      Projects
    </h2>

    <div :class="$style.list">
      <project-card
        v-for="project in projectsList"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const projectsList: Project[] = [
  {
    title: 'AinewsMetrics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    stack: ['Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia'],
    images: ['/ainews-metrics-1.png', '/ainews-metrics-2.png']
  },
  {
    title: 'AinewsMetrics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    stack: ['Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia'],
    images: ['/ainews-metrics-1.png', '/ainews-metrics-1.png']
  },
  {
    title: 'AinewsMetrics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    stack: ['Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia'],
    images: ['/ainews-metrics-1.png', '/ainews-metrics-1.png']
  },
  {
    title: 'AinewsMetrics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    stack: ['Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia'],
    images: ['/ainews-metrics-1.png', '/ainews-metrics-1.png']
  },
  {
    title: 'AinewsMetrics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    stack: ['Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia', 'Vue 3', 'Typescript', 'Pinia'],
    images: ['/ainews-metrics-1.png', '/ainews-metrics-1.png']
  }
]

</script>

<style lang="scss" module>
.wrapper {
  padding: var(--space-4) 0;
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: var(--space-2);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

.title {
  @extend %typo-heading-3;

  position: sticky;
  top: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  z-index: 2;
  width: fit-content;
}
</style>
