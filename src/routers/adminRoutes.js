import express from 'express';
import { verifyAdminToken } from '../services/authService.js';
import { addStudent, assignTask } from '../controllers/adminController.js';

const router = express.Router();

router.post('/admin/add-std', verifyAdminToken, addStudent);
router.post('/admin/assign-task', verifyAdminToken, assignTask);

export default router;
