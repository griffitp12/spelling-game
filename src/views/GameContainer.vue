<template>
  <div class="view-container">
    <GoButton v-if="!state.goClicked" />
    <div class="game-container" v-else-if="state.goClicked && !state.gameOver">
      <ScoreCard />
      <ImageGrid class="fade-in" v-if="state.currentWordData.word === 'none'" />
      <WordGrid class="fade-in" :key="state.wordGridKey" v-else />
    </div>
    <div v-else>
      <GameOver />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GoButton from '../components/GoButton.vue'
import ImageGrid from '../components/ImageGrid.vue'
import WordGrid from '../components/WordGrid.vue'
import ScoreCard from '../components/ScoreCard.vue'
import GameOver from '../components/GameOver.vue'
import { AccessStore } from '../store/store'

export default defineComponent({
  components: {
    GoButton,
    ImageGrid,
    WordGrid,
    ScoreCard,
    GameOver,
  },
  setup() {
    const state = AccessStore()

    const reload = () => {
      //reset page here!
    }

    return { state}
  },
})
</script>

<style scoped>
.view-container {
  background-color: seagreen;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.go-sign {
  height: 30%;
  cursor: pointer;
}
.fade-in {
  animation: fadeIn linear 2s;
}
</style>
