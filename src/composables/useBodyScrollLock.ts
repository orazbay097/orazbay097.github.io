import { useScrollLock } from '@vueuse/core'

export const useBodyScrollLock = () => {
  const documentBody = ref<HTMLElement>()

  onMounted(() => {
    documentBody.value = document.body
  })

  const scrollLock = useScrollLock(documentBody)

  const toggleLock = (val?: boolean) => {
    scrollLock.value = val ?? !scrollLock.value
  }

  return {
    toggleLock
  }
}
