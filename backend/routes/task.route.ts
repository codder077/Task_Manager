import express from "express";
import { allTasks, createTask, deleteTask, getTaskById, updateTask } from "../controllers/task.controller";

const app = express.Router();

app.get('/' , allTasks)
.get('/:id' , getTaskById)
    .post('/createTask' , createTask)
    .put('/:id' , updateTask)
    .delete('/:id' , deleteTask)

export default app;