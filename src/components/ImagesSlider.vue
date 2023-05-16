<template>
  <fullscreen-modal ref="modal">
    <template #activator="{ onClick }">
      <slot name="activator" :on-click="onClick" />
    </template>

    <div :class="$style.slidesContainer">
      <div
        v-for="(image, idx) in images"
        :key="idx"
        ref="slides"
        :class="$style.slide"
        @click.self="modal?.hide()"
      >
        <use-element-visibility
          v-slot="{ wasVisible }"
          @on-element-visible="handleSlideChage(idx)"
        >
          <transition-fade>
            <image-with-loader v-if="wasVisible" :class="$style.img" :src="image" />
          </transition-fade>
        </use-element-visibility>
      </div>
    </div>

    <icon-button :class="$style.buttonClose" @click="modal?.hide()">
      <icon-close :class="$style.icon" />
    </icon-button>

    <icon-button :class="$style.buttonNext" :disabled="isNextBtnDisabled" @click="goToNextSlide()">
      <icon-chevron-right :class="$style.icon" />
    </icon-button>

    <icon-button :class="$style.buttonPrev" :disabled="isPrevBtnDisabled" @click="goToPrevSlide()">
      <icon-chevron-left :class="$style.icon" />
    </icon-button>
  </fullscreen-modal>
</template>

<script setup lang="ts">
import FullscreenModal from './FullscreenModal.vue'

const props = defineProps<{
  images: string[]
}>()

const modal = ref<InstanceType<typeof FullscreenModal> | null>(null)
const slides = ref<HTMLElement[]>([])

const currentSlideIndex = ref(0)

const isNextBtnDisabled = computed(() => currentSlideIndex.value === props.images.length - 1)
const isPrevBtnDisabled = computed(() => currentSlideIndex.value === 0)

const goToNextSlide = () => {
  if (!isNextBtnDisabled.value) {
    slides.value[currentSlideIndex.value + 1].scrollIntoView()
  }
}
const goToPrevSlide = () => {
  if (!isPrevBtnDisabled.value) {
    slides.value[currentSlideIndex.value - 1].scrollIntoView()
  }
}

const handleSlideChage = (index: number) => {
  currentSlideIndex.value = index
}

</script>

<style lang="scss" module>

.slidesContainer {
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.slide {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  max-height: 100vh;
}

.icon {
  width: 24px;
  height: 24px;

  @include tablet {
    width: 32px;
    height: 32px;
  }
}

.buttonNext, .buttonPrev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (hover: none) and (pointer: coarse){
    display: none;
  }
}

.buttonNext {
  right: var(--space-2);
}

.buttonPrev {
  left: var(--space-2);
}

.buttonClose {
  position: absolute;
  right: var(--space-2);
  top: var(--space-2);
}
</style>
