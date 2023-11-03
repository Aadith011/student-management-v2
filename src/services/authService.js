import jwt from 'jsonwebtoken';
import express from 'express';
import Student from '../models/studentModel.js';

const adminSecretKey = 'admin1234';
const studentSecretKey = 'std1234';
const app = express();
/*export const generateAdminToken = (email) => {
  return jwt.sign({ email }, adminSecretKey, { expiresIn: '1h' });
};

export const generateStudentToken = (email) => {
  return jwt.sign({ email }, studentSecretKey, { expiresIn: '1h' });
};*/

app.use(express.json());

app.post('/admin', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = 'admin@aadmin.com';
  const adminPassword = 'admin';

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign({ email }, adminSecretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.post('/student', async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email, password });

    if (student) {
      const token = jwt.sign({ email }, studentSecretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication error' });
  }
});

export function verifyAdminToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, adminSecretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.adminEmail = decoded.email;
    next();
  });
}

export function verifyStudentToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, studentSecretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.studentEmail = decoded.email;
    next();
  });
}