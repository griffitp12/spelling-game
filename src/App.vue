<template>
  <GameContainer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GameContainer from './views/GameContainer.vue'
import data from "./data.json"
import { AccessStore } from './store/store'
export default defineComponent({
  components: {
    GameContainer
  },
  setup() {
    const state = AccessStore()
    for (let word of data.animals) {
      state.wordBank.push(word)
    }
    return
  },
})
</script>



<style>


body {
  margin: 0 auto;
}
</style>
