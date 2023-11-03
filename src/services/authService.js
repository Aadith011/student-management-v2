import jwt from 'jsonwebtoken';

const adminSecretKey = 'admin1234';
const studentSecretKey = 'std1234';

export const generateAdminToken = (email) => {
  return jwt.sign({ email }, adminSecretKey, { expiresIn: '1h' });
};

export const generateStudentToken = (email) => {
  return jwt.sign({ email }, studentSecretKey, { expiresIn: '1h' });
};
