import { FETCH_ALL_QUIZES, FETCH_ONE_QUIZ, FETCH_ALL_RESPONSES, FETCH_RESULT, FETCH_ANALYTICS } from './actions.js'

const initialState = {
  quizes: [],
  responses: [],
  currentQuiz: {},
  result: { totalScore: 0, score: 0 },
  analytics: { totalQuiz: 0, totalResponse: 0, quizResponseCount: [] }
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_QUIZES:
      return { ...state, quizes: action.payload }
    case FETCH_ONE_QUIZ:
      return { ...state, currentQuiz: action.payload }
    case FETCH_ALL_RESPONSES:
      return { ...state, responses: action.payload }
    case FETCH_RESULT:
      return { ...state, result: action.payload }
    case FETCH_ANALYTICS:
      return { ...state, analytics: action.payload }
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

export const calculateScore = (questions, answers) => {
  let sum = 0
  answers.map((item) => {
    const i = questions.findIndex(_item => _item._id === item.questionId)
    if ((i > -1) && questions[i].answer === item.answer) sum = sum + questions[i].score // (2)
  })
  return sum
}

export const getResponseList = (responses) => {
  return responses.map((response) => {
    let data = {
      _id: response._id,
      quizName: response.quiz.title,
      totalScore: response.quiz.questions.reduce((sum, item) => sum + item.score, 0),
      userName: response.name,
      date: response.created_at,
      userScore: calculateScore(response.quiz.questions, response.answers)
    }
    return data
  })
}
