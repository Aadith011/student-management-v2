import express from 'express';
import { verifyAdminToken } from '../services/authService.js';
import { addStudent, assignTask } from '../controllers/adminController.js';

const router = express.Router();

router.post('/add-std', verifyAdminToken, addStudent);
router.post('/assign-task', verifyAdminToken, assignTask);

export default router;
