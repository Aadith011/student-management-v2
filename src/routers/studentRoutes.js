import express from 'express';
import { verifyStudentToken } from '../middleware/authMiddleware';
import { getTasks, markTaskAsDone } from '../controllers/studentController';

const router = express.Router();

router.get('/tasks', verifyStudentToken, getTasks);
router.put('/done/:taskId', verifyStudentToken, markTaskAsDone);

export default router;
