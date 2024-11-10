import { Request, Response, NextFunction } from 'express';  // Import the necessary types from Express
import { TryCatch } from "../middleware/error.middleware";  // Assuming TryCatch is a middleware function for error handling
import { Task } from "../models/task.model";  // Assuming Task is a Mongoose model
import { ErrorHandler } from "../utils/features";  // Assuming ErrorHandler is a utility function for handling errors

// Define the CreateTask handler
export const createTask = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;  // Define the data as the body of the request
    console.log("data", data);  // Log the received data (just for debugging purposes)
    await Task.create(data);  // Create a new task in the database
  
    res.status(200).json({
        success: true,
        message: "Created task successfully"
    });
});

// Define the UpdateTask handler
export const updateTask = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;  // Extract the task ID from the route parameters
    const data = req.body;  // Extract the data from the request body
    await Task.findByIdAndUpdate(id, data, {
        new: true,  // Return the updated document
        runValidators: true  // Ensure the update follows the schema validation
    });

    res.status(200).json({
        success: true,
        message: "Updated task successfully"
    });
});

// Define the DeleteTask handler
export const deleteTask = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;  // Extract the task ID from the route parameters
  await Task.findByIdAndDelete(id);  // Delete the task by ID

  res.status(200).json({
      success: true,
      message: "Deleted task successfully"
  });
});

// Define the Get All Tasks handler
export const allTasks = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const tasks = await Task.find({});  // Find all tasks in the database
  
    res.status(200).json({
        success: true,
        tasks: tasks  // Return the fetched tasks
    });
});

// Define the Get  Task by id
export const getTaskById = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const task = await Task.find({_id:id});  // Find all tasks in the database
  
    res.status(200).json({
        success: true,
        task: task  // Return the fetched tasks
    });
});
