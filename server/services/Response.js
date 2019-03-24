const Quiz = require('./../models/Quiz.model')
const User = require('./../models/User.model')
var mongoose = require('mongoose')

exports.createResponse = async (data, quizId) => {
  const response = new User({
    name: data.name,
    answers: data.answers,
    quiz: mongoose.mongo.ObjectId(quizId)
  })
  try {
    let result = await response.save()
    return result
  } catch (error) {
    return { error }
  }
}

exports.fetchQuizResponse = async (quizId) => {
  try {
    const response = await User
      .find({ quiz: quizId })
      .populate({ path: 'quiz' })
      .exec()
    return response
  } catch (error) {
    console.log('Failed to fetch response', error)
    return { error: 'Failed to save response' }
  }
}

exports.fetchAllResponse = async () => {
  try {
    const response = await User
      .find({})
      .populate({ path: 'quiz' })
      .exec()
    return response
  } catch (error) {
    console.log('Failed to fetch response', error)
    return { error: 'Failed to save response' }
  }
}
