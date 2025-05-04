// models/quizModel.js
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  type: String,
  prompt: String,
  choices: [String],
  correctAnswer: String,
  image_url: String,
});

const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  questions: Array,
  createdBy: String, // 👈 this must exist!
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
