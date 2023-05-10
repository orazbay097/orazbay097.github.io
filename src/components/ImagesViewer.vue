<template>
  <slot name="activator" :on-click="toggleAll" />

  <transition-fade>
    <div v-if="isOverlayVisible" :class="$style.overlay">
      <img ref="img" :class="$style.img" :src="currentImageSrc">

      <icon-button ref="closeBtn" :class="$style.buttonClose" @click="toggleAll">
        <icon-close :class="$style.icon" />
      </icon-button>

      <icon-button ref="nextBtn" :class="$style.buttonNext" :disabled="isNextDisabled" @click="setNextImage">
        <icon-chevron-right :class="$style.icon" />
      </icon-button>

      <icon-button ref="prevBtn" :class="$style.buttonPrev" :disabled="isPrevDisabled" @click="setPrevImage">
        <icon-chevron-left :class="$style.icon" />
      </icon-button>
    </div>
  </transition-fade>
</template>

<script setup lang="ts">

import { useToggle, onClickOutside, useSwipe } from '@vueuse/core'

const props = defineProps<{
  images: string[]
}>()

const img = ref(null)
const nextBtn = ref(null)
const prevBtn = ref(null)
const closeBtn = ref(null)

onClickOutside(img, () => {
  toggleAll()
}, { ignore: [nextBtn, closeBtn, prevBtn] })

const { isSwiping, direction } = useSwipe(img)

watch(isSwiping, (value) => {
  if (!value) { return }

  if (direction.value === 'left') {
    setNextImage()
  } else if (direction.value === 'right') {
    setPrevImage()
  }
})

const currentImageIndex = ref(0)
const currentImageSrc = computed(() => props.images[currentImageIndex.value])
const isNextDisabled = computed(() => currentImageIndex.value === props.images.length - 1)
const isPrevDisabled = computed(() => currentImageIndex.value === 0)

const { toggleLock } = useBodyScrollLock()
const [isOverlayVisible, toggleOverlayVisibility] = useToggle()

const toggleAll = () => {
  toggleLock()
  toggleOverlayVisibility()
}

const setNextImage = () => {
  if (!isNextDisabled.value) { currentImageIndex.value++ }
}
const setPrevImage = () => {
  if (!isPrevDisabled.value) { currentImageIndex.value-- }
}

</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-overlay);
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  max-width: 90vw;
  max-height: 90vh;
}

.icon {
  width: 32px;
  height: 32px;
}

.buttonNext {
  position: absolute;
  right: var(--space-2);
  top: 50vh;
}

.buttonPrev {
  position: absolute;
  left: var(--space-2);
  top: 50vh;
}

.buttonClose {
  position: absolute;
  right: var(--space-2);
  top: var(--space-2);
}
</style>
