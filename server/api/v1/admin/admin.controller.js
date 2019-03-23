const QuizService = require('./../../../services/Quiz')

exports.index = async (req, res) => {
  const result = await QuizService.getAllQuizes()
  return res.status(200).json({ status: 'success', payload: result })
}

exports.createQuiz = async (req, res) => {
  const result = await QuizService.createQuiz(req.body)
  return res.status(200).json({ status: 'success', payload: result })
}

exports.getQuiz = async (req, res) => {
  const result = await QuizService.getQuiz(req.params.id)
  return res.status(200).json({ status: 'success', payload: result })
}
