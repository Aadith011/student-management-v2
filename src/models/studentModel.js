import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  department: String,
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
