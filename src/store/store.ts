import { reactive } from 'vue'

export interface WordData {
  id: number
  word: string
  url: string
  misspellings: string[]
}

interface StoreContents {
  goClicked: boolean
  currentWordData: WordData
  wordBank: WordData[]
  wordGridKey: number
  currentGameScore: number
  gameOver: boolean
}

const store: StoreContents = reactive({
  goClicked: false,
  currentWordData: {
    id: 0,
    word: 'none',
    url: '',
    misspellings: [''],
  },
  wordBank: [],
  wordGridKey: 0,
  currentGameScore: 0,
  gameOver: false
})

export function AccessStore() {
  return store
}
