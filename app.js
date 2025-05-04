// app.js
import express from 'express';
import cors from 'cors';
import quizRoutes from './routes/quizRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/quiz', quizRoutes); // All quiz-related routes


export default app;
