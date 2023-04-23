<template>
  <header :class="$style.wrapper">
    <div :class="$style.content">
      <nuxt-link to="/">
        Home
      </nuxt-link>

      <nuxt-link :class="$style.projectsLink" to="/">
        About me
      </nuxt-link>

      <nuxt-link to="/">
        Projects
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" module>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);

}

.content {
  margin: 0 auto;
  max-width: var(--container-max-width);
  height: 100%;
  padding: 0 var(--container-side-margin);
  display: flex;
  align-items: center;
}

.projectsLink {
  margin-left: auto;
  margin-right: var(--space-2);
}
</style>
