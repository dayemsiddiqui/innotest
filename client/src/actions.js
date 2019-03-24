export const FETCH_ALL_QUIZES = 'FETCH_ALL_QUIZES'
export const FETCH_ONE_QUIZ = 'FETCH_ONE_QUIZ'

export const fetchAllQuizes = (payload) => {
  return {
    type: FETCH_ALL_QUIZES,
    payload
  }
}

export const fetchOneQuiz = (payload) => {
  return {
    type: FETCH_ONE_QUIZ,
    payload
  }
}
