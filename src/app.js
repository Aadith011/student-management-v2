import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import adminRoutes from './routes/adminRoutes'; 
import studentRoutes from './routes/studentRoutes';
import taskRoutes from './routes/taskRoutes'; //need to create a file
import { initializeApp } from 'firebase-admin/app';

const app = express();
app.use(bodyParser.json());
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = mongoose.connection;
mongoose.connect('mongodb+srv://aadithmanoj1:32OOqa27fRGwAWe5@cluster0.kfkllsc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const firebaseConfig = {
  apiKey: "AIzaSyCeilYGI0BA8PscDdzT0c4SapSsbzd4JgY",
  authDomain: "student-management-v2.firebaseapp.com",
  projectId: "student-management-v2",
  storageBucket: "student-management-v2.appspot.com",
  messagingSenderId: "790493519838",
  appId: "1:790493519838:web:472d2affdf4376b6c3c74f",
  measurementId: "G-7NV40SM4X4"
};

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/task', taskRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
