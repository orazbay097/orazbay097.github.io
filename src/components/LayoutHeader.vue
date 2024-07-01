<template>
  <header :class="$style.wrapper">
    <div :class="$style.content">
      <a
        href="https://github.com/orazbay097"
        aria-label="Github profile"
        target="_blank"
        :class="$style.link">
        <icon-logo-github :class="$style.icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/orazbay097/"
        aria-label="Linkedin profile"
        target="_blank"
        :class="$style.link">
        <icon-logo-linkedin :class="$style.icon" />
      </a>
    </div>
  </header>
</template>

<style lang="scss" module>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-bg-light);
  height: var(--header-height);
  z-index: 1;
}

.content {
  margin: 0 auto;
  max-width: var(--container-max-width);
  height: 100%;
  padding: 0 var(--container-side-margin);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-2);
}

.link:hover,
.link:active {
  color: var(--color-primary);
}

.icon {
  width: 24px;
  height: 24px;

  @include tablet {
    width: 32px;
    height: 32px;
  }
}
</style>
