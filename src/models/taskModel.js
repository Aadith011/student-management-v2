import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  studentEmail: String,
  task: String,
  dueTime: Date,
  status: String,
  taskId: String,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
