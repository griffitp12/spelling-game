<template>
  <img :src="currentWord.url" alt="" class="head-image" />
  <div class="grid-container">
    <WordCard v-for="(spelling, index) of spellings" :key="index" :spelling="spelling" :currentWord="currentWord" class="grid-child-word">
      <h2>{{ spelling }}</h2>
    </WordCard>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { AccessStore } from '../store/store'
import { buildNewSpellingArray, finishGame } from '../functions/utils'
import { WordData } from '../store/store'
import WordCard from '../components/WordCard.vue'

export default defineComponent({
  components: {
    WordCard
  },
  setup(_, context) {
    const state = AccessStore()
    let currentWord: WordData = state.currentWordData
    let spellings: string[] = buildNewSpellingArray(currentWord)

    return { currentWord, spellings }
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
.grid-child-word {
  height: var(--imageSize);
  border: 5px solid darkgreen;
  /* background-color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.head-image {
  height: 150px;
}
</style>
