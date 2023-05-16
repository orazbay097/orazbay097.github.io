<template>
  <section :class="$style.wrapper">
    <div :class="$style.titleContainer">
      <h2 :class="$style.subtitle">
        Hi, my name is Orazbay
      </h2>

      <h1 :class="$style.title">
        I am a <span>front&#8209;end developer</span>
      </h1>

      <p :class="$style.description">
        With over 5 years of experience in software development, I have completed <a>projects</a> that have contributed significantly to my previous employers' revenue and client growth.
        Let's work together and create something amazing!
      </p>

      <!-- <primary-button>Contact me</primary-button> -->
    </div>

    <img :class="$style.img" src="/dev-img.png">

    <nuxt-link to="#projects" :class="$style.scrollDownLink">
      <icon-chevron-down />
    </nuxt-link>
  </section>
</template>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
}

.title {
  @extend %typo-heading-1;

  margin: var(--space-2) 0;

  span {
    color: var(--color-primary);
    text-decoration: none
  }
}

.subtitle {
  @extend %typo-heading-2;

  margin: 0;
}

.img {
  order: -1;
  margin-bottom: var(--space-5);
  max-height: 50vh;
  object-fit: contain;

  @include desktop {
    order: 2;
    max-width: 50vw;
    max-height: none;
  }
}

.description {
  margin-bottom: var(--space-4);
}

.scrollDownLink {
  position: absolute;
  bottom: var(--space-4);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  animation-name: bounce;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  @include tablet {
    width: 48px;
    height: 48px;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-primary);
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }

  50% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px)
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
}
</style>
