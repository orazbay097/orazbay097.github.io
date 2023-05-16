<template>
  <layout-header />

  <main :class="$style.container">
    <nuxt-page />
  </main>

  <footer :class="$style.footer">
    © 2023 Orazbay
  </footer>
</template>

<style lang="scss" module>
.container {
  padding: 0 var(--container-side-margin);
  margin: 0 auto;
  max-width: var(--container-max-width);
}

.footer {
  margin: 0 var(--container-side-margin);
  padding: var(--space-3) 0;
  text-align: center;
  border-top: 1px solid var(--color-gray-90);
}
</style>
