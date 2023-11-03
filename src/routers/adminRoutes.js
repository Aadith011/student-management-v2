import express from 'express';
import { verifyAdminToken } from '../services/authService';
import { addStudent, assignTask } from '../controllers/adminController';

const router = express.Router();

router.post('/add-std', verifyAdminToken, addStudent);
router.post('/assign-task', verifyAdminToken, assignTask);

export default router;
