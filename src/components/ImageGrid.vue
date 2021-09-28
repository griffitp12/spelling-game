<template>
  <div class="grid-container">
    <ImageCard v-for="(word, index) in randomizedArray" :key="index" :currentWordData="word" class="grid-child" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageCard from './ImageCard.vue'
import { randomizeArray } from '../functions/utils'
import { AccessStore } from '../store/store'

export default defineComponent({
  components: {
    ImageCard,
  },
  setup() {
    let store = AccessStore()
    let randomizedArray = randomizeArray(store.wordBank)

    return { store, randomizedArray }
  },
})
</script>

<style scoped>
.grid-container {
  --imageSize: 100px;
  display: grid;
  grid-template-columns: var(--imageSize) var(--imageSize) var(--imageSize);
  grid-template-rows: var(--imageSize) var(--imageSize) var(--imageSize);
  grid-gap: 30px;
}
.grid-child {
  width: var(--imageSize);
}
</style>
