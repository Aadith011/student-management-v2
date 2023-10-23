import jwt from 'jsonwebtoken';
import { adminSecretKey, studentSecretKey } from '../config/constants';

export function verifyAdminToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  jwt.verify(token, adminSecretKey, (err, decoded) => {
    if (err || decoded.role !== 'admin') {
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
    if (err || decoded.role !== 'student') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    req.studentEmail = decoded.email;
    next();
  });
}
