import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cron from 'node-cron';
import adminRoutes from './routers/adminRoutes.js';
import studentRoutes from './routers/studentRoutes.js';
import authRoutes from './routers/authRoutes.js';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aadithmanoj1:32OOqa27fRGwAWe5@cluster0.kfkllsc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
