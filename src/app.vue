<template>
  <layout-header />

  <main :class="$style.container">
    <nuxt-page />
  </main>
</template>

<style lang="scss" module>
.container {
  padding: 0 var(--container-side-margin);
  margin: var(--header-height) auto 0;
  max-width: var(--container-max-width);
}
</style>
