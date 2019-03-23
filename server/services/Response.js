const Quiz = require('./../models/Quiz.model')
const User = require('./../models/User.model')

exports.createResponse = async (data, quizId) => {
  console.log('QuizId', quizId)
  return data
}
