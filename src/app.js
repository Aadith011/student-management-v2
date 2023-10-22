import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import adminRoutes from './routes/adminRoutes'; //need to create a file
import studentRoutes from './routes/studentRoutes'; //need to create a file
import taskRoutes from './routes/taskRoutes'; //need to create a file

const app = express();
app.use(bodyParser.json());

const db = mongoose.connection;
mongoose.connect('mongodb+srv://aadithmanoj1:32OOqa27fRGwAWe5@cluster0.kfkllsc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/task', taskRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
