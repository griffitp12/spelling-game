import { WordData, AccessStore } from '../store/store'

export function randomizeArray(arr: any[]) {
  let currentIndex = arr.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }

  return arr
}

export function buildNewSpellingArray(words: WordData) {
  let wordArray: string[] = []
  for (let misspelling of words.misspellings) {
    wordArray.push(misspelling)
  }
  wordArray.push(words.word)
  wordArray = randomizeArray(wordArray)
  return wordArray
}

export function checkAnswer(spelling: string, currentWord: WordData): boolean {
  if (spelling === currentWord.word) {
    return true
  } else {
    return false
  }
}

export function updateWordBank(currentWord: WordData): void {
  let state = AccessStore()
  let wordBank = state.wordBank
  for (let wordData of wordBank) {
    if (wordData.id === currentWord.id) {
      let index = wordBank.indexOf(wordData)
      wordBank.splice(index, 1)
    }
  }
}

export function finishGame(): void {
  const state = AccessStore()
  state.gameOver = true
}


/*  */