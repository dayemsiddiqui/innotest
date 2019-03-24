import axios from 'axios'
import * as actions from './actions'

const BASE_URL = 'http://localhost:3005/api/v1/'
export const fetchAllQuizes = () => {
  return (dispatch, getState) => {
    axios.get(`${BASE_URL}admin`)
      .then(res => dispatch(actions.fetchAllQuizes(res.data.payload)))
      .catch(err => console.log('Failed to fetch quizes', err))
  }
}

export const saveQuiz = (data) => {
  console.log('Saving Quiz', data)
  return (dispatch, getState) => {
    axios.post(`${BASE_URL}admin/quiz`, data)
      .then(res => console.log('Successfully saved the quiz'))
      .catch(err => console.log('Failed to save quiz', err))
  }
}
