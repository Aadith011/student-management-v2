import express from 'express';
import { verifyStudentToken } from '../services/authService';
import { getTasks, markTaskAsDone } from '../controllers/studentController';

const router = express.Router();

router.get('/tasks', verifyStudentToken, getTasks);
router.put('/done/:taskId', verifyStudentToken, markTaskAsDone);

export default router;
