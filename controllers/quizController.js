// controllers/quizController.js
import Quiz from '../models/quizSchema.js';

export const createQuiz = async (req, res) => {
    try {
      const { title, description, category, questions, createdBy } = req.body;
  
      const quiz = new Quiz({
        title,
        description,
        category,
        questions,
        createdBy, // 👈 make sure this is included
      });
  
      await quiz.save();
      res.status(201).json(quiz);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

  export const getQuizzesByUser = async (req, res) => {
    try {
      const username = req.params.username;
      const quizzes = await Quiz.find({ createdBy: username });
      res.status(200).json(quizzes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
    

export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteQuiz = async (req, res) => {
    try {
      const quiz = await Quiz.findByIdAndDelete(req.params.id);
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }
      res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
