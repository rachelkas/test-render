import mongoose from "mongoose";
import express from 'express';
import userRouter from './routers/users.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config()
const app = express();
app.use(cors())

mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(express.json());
app.use('/api/users', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000 - http://localhost:3000/');
});