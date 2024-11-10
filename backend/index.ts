import express, { Request, Response } from 'express';
import taskRoute from './routes/task.route'
import cors from "cors";
import dotenv from "dotenv";
import { corsOptions } from './utils/config';
import { connectDB } from './utils/features';

const app = express();
dotenv.config();
   
const MONGO_URL:string = process.env.MONGO_URL|| '';
 
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors(corsOptions))
  
//Express router
app.use('/tasks',taskRoute )

connectDB(MONGO_URL)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
