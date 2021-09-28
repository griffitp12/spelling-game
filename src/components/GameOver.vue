<template>
  <div class="game-over-container">
    <h1>Nice Job, Shinsei!</h1>
    <p>Your score was:</p>
    <p class="score">{{ state.currentGameScore }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AccessStore } from '../store/store'

export default defineComponent({
  setup() {
    const state = AccessStore()
    return { state }
  },
})
</script>

<style scoped>
h1, p {
    margin: 5px
}
.game-over-container {
  height: 400px;
  width: 300px;
  border: 10px solid darkgreen;
  background: palegreen;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  text-align: center;
  font-size: 1.5em;
}
.score {
    color: darkgreen;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 15rem;
    margin: 0
}
</style>
