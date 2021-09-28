<template>
  <div class="score-card">
    <p class="score-card-text">Your score is:</p>
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
.score-card {
  position: absolute;
  left: 0;
  margin: 20px;
  height: 20vh;
  padding: 5px;
  border: 10px solid darkgreen;
  box-shadow: -5px 5px 5px black;
  background: palegreen;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.score-card-text {
    margin: 0
}
.score {
    color: darkgreen;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    
    font-size: 4rem;
    margin: 0
}
</style>
