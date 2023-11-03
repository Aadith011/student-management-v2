import Student from '../models/studentModel.js';
import Task from '../models/taskModel.js';

export const addStudent = async (req, res) => {
  const { name, email, password, department } = req.body;
  const student = new Student({ name, email, password, department });

  try {
    await student.save();
    res.json({ message: 'Student added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding the student' });
  }
};

export const assignTask = async (req, res) => {
  const { studentEmail, task, dueTime, taskId } = req.body;

  try {
    await assignTask(studentEmail, task, dueTime, taskId);
    res.json({ message: 'Task assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error assigning the task' });
  }
};
