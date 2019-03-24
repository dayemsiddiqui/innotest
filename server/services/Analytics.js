const Quiz = require('./../models/Quiz.model')
const User = require('./../models/User.model')
var mongoose = require('mongoose')

exports.getAnalytics = async () => {
  const data = {
    totalQuiz: await Quiz
      .count({})
      .exec(),
    totalResponse: await User
      .count({})
      .exec(),
    quizResponseCount: await User
      .aggregate([{ $group: {
        _id: '$quiz',
        count: { $sum: 1 }
      } }])
      .exec()
  }
  try {
    let result = data
    return result
  } catch (error) {
    return { error }
  }
}
