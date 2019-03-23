const Quiz = require('./../models/Quiz.model')

exports.createQuiz = async (data) => {
  data.questions.map((item, index) => {
    item.id = index
  })
  const quiz = new Quiz(data)
  try {
    const saved = await quiz.save(quiz)
    return saved
  } catch (err) {
    console.log('Failed to save quiz', err)
    return { error: 'Failed to save quiz' }
  }
}

exports.getAllQuizes = async () => {
  try {
    const quizes = await Quiz.find({}).exec()
    return quizes
  } catch (error) {
    console.log('Failed to fetch quizes', error)
    return { error: 'Failed to save quizes' }
  }
}

exports.getQuiz = async (quizId) => {
  try {
    const quiz = await Quiz.find({ _id: quizId }).exec()
    return quiz
  } catch (error) {
    console.log('Failed to fetch quiz', error)
    return { error: 'Failed to save quiz' }
  }
}
