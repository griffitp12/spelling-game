<template>
  <img :src="currentWordData.url" alt="Select a picture!" @click="checker" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AccessStore, WordData } from '../store/store'

export default defineComponent({
  props: {
    currentWordData: Object,
  },
  setup(props) {
    const state = AccessStore()
    const checker = () => {
      if (props.currentWordData) {
        let currentWordData: WordData = { id: props.currentWordData.id, word: props.currentWordData.word, url: props.currentWordData.url, misspellings: props.currentWordData.misspellings }
        state.currentWordData = currentWordData
      }
    }
    return { checker }
  },
})
</script>
