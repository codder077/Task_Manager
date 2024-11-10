"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../controllers/task.controller");
const app = express_1.default.Router();
app.get('/', task_controller_1.allTasks)
    .get('/:id', task_controller_1.getTaskById)
    .post('/createTask', task_controller_1.createTask)
    .put('/:id', task_controller_1.updateTask)
    .delete('/:id', task_controller_1.deleteTask);
exports.default = app;
