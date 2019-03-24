import axios from 'axios'
import * as actions from './actions'
import { calculateScore } from './reducers'

const BASE_URL = 'http://134.209.244.189:3005/api/v1/'
export const fetchAllQuizes = () => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}admin`)
      .then(res => dispatch(actions.fetchAllQuizes(res.data.payload)))
      .catch(err => console.log('Failed to fetch quizes', err))
  }
}

export const fetchOneQuiz = (id) => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}admin/quiz/${id}`)
      .then(res => dispatch(actions.fetchOneQuiz((res.data.payload) ? res.data.payload[0] : {})))
      .catch(err => console.log('Failed to fetch quiz', err))
  }
}

export const saveQuiz = (data) => {
  return (dispatch, getState) => {
    axios.post(`${BASE_URL}admin/quiz`, data)
      .then(res => dispatch(fetchAllQuizes()))
      .catch(err => console.log('Failed to save quiz', err))
  }
}

export const saveResponse = (data, quizId, cb) => {
  console.log('Saving Response', data)
  return (dispatch, getState) => {
    axios.post(`${BASE_URL}user/quiz/${quizId}`, data)
      .then(res => {
        console.log('Response successfully saved')
        if (cb) cb()
      })
      .catch(err => console.log('Failed to save quiz', err))
  }
}

export const fetchAllResponses = () => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}user/responses`)
      .then(res => dispatch(actions.fetchAllResponses(res.data.payload)))
      .catch(err => console.log('Failed to fetch quizes', err))
  }
}

export const computeResult = (id, answers) => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}admin/quiz/${id}`)
      .then(res => {
        const questions = (res.data.payload && res.data.payload[0]) ? res.data.payload[0].questions : []
        const score = calculateScore(questions, answers)
        const totalScore = questions.reduce((sum, item) => sum + item.score, 0)
        dispatch(actions.fetchResult({ score, totalScore }))
      })
      .catch(err => console.log('Failed to fetch quiz', err))
  }
}

export const fetchAnalytics = () => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}admin/analytics`)
      .then(res => dispatch(actions.fetchAnalytics(res.data.payload)))
      .catch(err => console.log('Failed to fetch quizes', err))
  }
}