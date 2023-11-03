import jwt from 'jsonwebtoken';
import Student from '../models/studentModel.js';

export function verifyAdminToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, adminSecretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
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
    if (decoded.role !== 'student') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.studentEmail = decoded.email;
    next();
  });
}