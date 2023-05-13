<template>
  <div ref="target">
    <slot :is-visible="targetIsVisible" :was-visible="wasVisible" />
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const wasVisible = ref(false)

const emit = defineEmits(['onElementVisible'])
watch(targetIsVisible, (value) => {
  if (value) {
    wasVisible.value = true
    emit('onElementVisible')
  }
})
</script>
