const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  score: Number,
  answers: [
    {
      id: Number,
      answer: Number
    }
  ],
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  created_at: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
