import express from 'express';
import { verifyAdminToken } from '../middleware/authMiddleware';
import { addStudent, assignTask } from '../controllers/adminController';
const router = express.Router();

router.post('/add-student', verifyAdminToken, addStudent);
router.post('/assign-task', verifyAdminToken, assignTask);

export default router;
