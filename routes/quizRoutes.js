// routes/quizRoutes.js
import express from 'express';
import { createQuiz, getQuizzes, getQuizzesByUser, deleteQuiz } from '../controllers/quizController.js';

const router = express.Router();

router.post('/', createQuiz);      // POST /quiz
router.get('/', getQuizzes);       // GET /quiz
router.get("/user/:username", getQuizzesByUser);
router.delete("/:id", deleteQuiz);

export default router;
