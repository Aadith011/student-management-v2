import Student from '../models/studentModel.js';
import Task from '../models/taskModel.js';
import express from 'express';

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
  if (!req.body || !req.body.studentEmail || !req.body.task || !req.body.dueTime || !req.body.taskId) {
    return res.status(400).json({ message: 'Invalid request data' });
  }

  const { studentEmail, task, dueTime, taskId } = req.body;

  try {
    const newTask = new Task({ studentEmail, task, dueTime, taskId });
    await newTask.save();
    res.json({ message: 'Task assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error assigning the task' });
  }
};
