import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cron from 'cron';
import adminRoutes from '../routes/adminRoutes';
import studentRoutes from '../routes/studentRoutes';

const app = express();git 
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aadithmanoj1:32OOqa27fRGwAWe5@cluster0.kfkllsc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
