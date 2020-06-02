// import { AsyncStorage } from 'react-native'

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    term: 'Apple',
    definition: 'a yummy fruit'
  },
  {
    id: 2,
    term: 'Banana',
    definition: 'a yellow fruit'
  }, {
    id: 3,
    term: 'Orange',
    definition: 'vitamin c source'
  }
]

export const getData = () => {
  return SAMPLE_FLASHCARDS
}

export function addCardToList(list, card) {

}