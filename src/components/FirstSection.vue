<template>
  <section :class="$style.wrapper">
    <div :class="$style.titleContainer">
      <h2 :class="$style.subtitle">
        Frontend developer
      </h2>

      <h1 :class="$style.title">
        Orazbay Ualesh
      </h1>

      <p :class="$style.description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti, animi et esse ipsa sapiente iusto ullam distinctio? Dicta facilis vero recusandae voluptatem culpa veniam voluptatibus sapiente cupiditate odit corrupti.
      </p>

      <primary-button>Contact me</primary-button>
    </div>

    <img :class="$style.img" src="/dev-img.png">
  </section>
</template>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - var(--header-height));
  text-align: center;

  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
}

.title {
  @extend %typo-heading-1;

  color: var(--color-primary);
  margin: var(--space-2) 0;
}

.subtitle {
  @extend %typo-heading-2;

  margin: 0;
}

.img {
  order: -1;
  margin-bottom: var(--space-5);

  @include tablet {
    order: 2;
    max-width: 50vw;
  }
}

.description {
  margin-bottom: var(--space-4);
}
</style>
