import mongoose from "mongoose";
import express from express;
import userRouter from './routers/users.js';

const app = express();

mongoose.connect('mongodb+srv://rachelik:6MriAkoTU2VutpqC@cluster0.um0lgjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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