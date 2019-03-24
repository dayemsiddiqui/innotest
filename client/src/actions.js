export const FETCH_ALL_QUIZES = 'FETCH_ALL_QUIZES'
export const FETCH_ONE_QUIZ = 'FETCH_ONE_QUIZ'
export const FETCH_ALL_RESPONSES = 'FETCH_ALL_RESPONSES'
export const FETCH_RESULT = 'FETCH_RESULT'
export const FETCH_ANALYTICS = 'FETCH_ANALYTICS'

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

export const fetchAllResponses = (payload) => {
  return {
    type: FETCH_ALL_RESPONSES,
    payload
  }
}

export const fetchResult = (payload) => {
  return {
    type: FETCH_RESULT,
    payload
  }
}

export const fetchAnalytics = (payload) => {
  return {
    type: FETCH_ANALYTICS,
    payload
  }
}
