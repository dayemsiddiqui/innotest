import { FETCH_ALL_QUIZES, FETCH_ONE_QUIZ } from './actions.js'

const initialState = {
  quizes: [],
  responses: [],
  currentQuiz: {}
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_QUIZES:
      return { ...state, quizes: action.payload }
    case FETCH_ONE_QUIZ:
      return { ...state, currentQuiz: action.payload }
    default:
      break
  }
  return state
}

export default asyncReducer

export const getQuizList = (quizes) => {
  return quizes.map((quiz) => ({
    name: quiz.title,
    date: quiz.created_at,
    maxScore: quiz.questions.reduce((sum, item) => sum + item.score, 0),
    link: `${window.location.origin}/attempt/${quiz._id}`

  })
  )
}
