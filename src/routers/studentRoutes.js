import express from 'express';
import { verifyStudentToken } from '../services/authService.js';
import { getTasks, markTaskAsDone } from '../controllers/studentController.js';

const router = express.Router();

router.get('/student/tasks', verifyStudentToken, getTasks);
router.put('/student/done/:taskId', verifyStudentToken, markTaskAsDone);

export default router;
