const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [{
    id: { type: Number, default: 0 },
    title: String,
    choices: [String],
    answer: Number,
    score: Number
  }],
  created_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('Quiz', QuizSchema)
