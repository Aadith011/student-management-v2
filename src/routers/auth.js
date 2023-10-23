import express from 'express';
import jwt from 'jsonwebtoken';
import { adminEmail, adminPassword, adminSecretKey, studentSecretKey } from '../config/constants';
import { Student } from '../models/studentModel';

const router = express.Router();

router.post('/admin', (req, res) => {
  const { email, password } = req.body;
  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign({ email, role: 'admin' }, adminSecretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

router.post('/student', async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email, password });

    if (student) {
      const token = jwt.sign({ email, role: 'student' }, studentSecretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication error' });
  }
});

export default router;
