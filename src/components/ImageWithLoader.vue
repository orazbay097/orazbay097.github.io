<template>
  <loader-spin v-if="isLoading" />

  <img v-else :src="src">
</template>

<script lang="ts" setup>
import { useImage } from '@vueuse/core'

const props = defineProps<{
  src: string
}>()

const { isLoading } = useImage({ src: props.src })
</script>
