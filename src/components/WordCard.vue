<template>
  <div class="word-card" :class="{ correct: flashCorrect, incorrect: flashIncorrect }" @click="clickHandler()">
    <h2>{{ spelling }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { checkAnswer, updateWordBank, finishGame } from '../functions/utils'
import { WordData, AccessStore } from '../store/store'

export default defineComponent({
  props: {
    spelling: {
      type: String as PropType<string>,
    },
    currentWord: {
      type: Object as PropType<WordData>,
    },
  },
  setup(props) {
    const flashCorrect = ref(false)
    const flashIncorrect = ref(false)
    const spelling = props.spelling
    const currentWord = props.currentWord

    const state = AccessStore()

    const clickHandler = () => {
      if (spelling && currentWord) {
        const check = checkAnswer(spelling, currentWord)
        if (check === true) /* if the guess was correct */ {
          flashCorrect.value = true
          updateWordBank(currentWord)
          state.currentGameScore += 5
          console.log("here", state.currentGameScore)
          setTimeout(() => {
            flashCorrect.value = false;
          }, 1000)
          state.wordGridKey++
          if /* if the game isn't unfinished */(state.wordBank.length > 0) {
              state.currentWordData = state.wordBank[0]
          }
          else /* if the game is finished */{
              finishGame()
          }
        } else /* if the guess was incorrect */
        {
          flashIncorrect.value = true
          if (state.currentGameScore > 0) {
            state.currentGameScore --
          }
          setTimeout(() => {
            flashIncorrect.value = false
          }, 1000)
        }
      }
    }

    const flashClass = () => {
      console.log('FLASH')
    }

    return { checkAnswer, flashClass, flashCorrect, flashIncorrect, clickHandler }
  },
})
</script>

<style>
.word-card {
  background: white;
  transition: all 0.5s
}
.correct {
  background: green;
  transition: all 0.5s;
}
.incorrect {
  background: red;
  transition: all 0.5s;
}
</style>
