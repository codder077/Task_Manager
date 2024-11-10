"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.allTasks = exports.deleteTask = exports.updateTask = exports.createTask = void 0;
const error_middleware_1 = require("../middleware/error.middleware"); // Assuming TryCatch is a middleware function for error handling
const task_model_1 = require("../models/task.model"); // Assuming Task is a Mongoose model
// Define the CreateTask handler
exports.createTask = (0, error_middleware_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body; // Define the data as the body of the request
    console.log("data", data); // Log the received data (just for debugging purposes)
    yield task_model_1.Task.create(data); // Create a new task in the database
    res.status(200).json({
        success: true,
        message: "Created task successfully"
    });
}));
// Define the UpdateTask handler
exports.updateTask = (0, error_middleware_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Extract the task ID from the route parameters
    const data = req.body; // Extract the data from the request body
    yield task_model_1.Task.findByIdAndUpdate(id, data, {
        new: true, // Return the updated document
        runValidators: true // Ensure the update follows the schema validation
    });
    res.status(200).json({
        success: true,
        message: "Updated task successfully"
    });
}));
// Define the DeleteTask handler
exports.deleteTask = (0, error_middleware_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Extract the task ID from the route parameters
    yield task_model_1.Task.findByIdAndDelete(id); // Delete the task by ID
    res.status(200).json({
        success: true,
        message: "Deleted task successfully"
    });
}));
// Define the Get All Tasks handler
exports.allTasks = (0, error_middleware_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_model_1.Task.find({}); // Find all tasks in the database
    res.status(200).json({
        success: true,
        tasks: tasks // Return the fetched tasks
    });
}));
// Define the Get  Task by id
exports.getTaskById = (0, error_middleware_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_model_1.Task.find({ _id: id }); // Find all tasks in the database
    res.status(200).json({
        success: true,
        task: task // Return the fetched tasks
    });
}));
