<template>
  <img class="goSign" :class="{ fadeOut: goClicked }" src="../assets/Go Icon.jpg" alt="A go sign" @click="clickHandler" />

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { AccessStore } from '../store/store'

export default defineComponent({
  setup() {
    const state = AccessStore()
    const goClicked = ref(false)

    const clickHandler = () => {
      goClicked.value = true
     /*  setTimeout(() => {
        nextTransition.value = true
      }, 6500) */
      state.goClicked = true
    }

    return { goClicked, clickHandler }
  },
})
</script>

<style scoped>
.goSign {
  position: absolute;
  height: 30%;
  cursor: pointer;
}

.fadeOut {
  opacity: 0;
  transition: all 3s ease-out;
}
</style>









