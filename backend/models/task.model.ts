import { Schema, model, Document } from "mongoose";

// Define the types for the Task document
interface ITask extends Document {
  title: string;
  description: string;
  priority: 'low' | 'high';  // Enum for priority
  dueDate: Date;  // Type Date for dueDate
  status: string;  // Boolean to indicate if the task is completed
}

// Define the Task schema
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true, // Ensure title is provided
    },
    description: {
      type: String,
      required: true, // Ensure description is provided
    },
    priority: {
      type: String,
      enum: ['low', 'high'], // Restrict to low and high values only
      required: true, // Make it a required field
    },
    dueDate: {
      type: Date, // Store date as a Date object
      required: true, // Make it required
    },
    status: {
      type: String,
      default: "todo", // Default value is false if not provided
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Export the model for use in other parts of the application
export const Task = model<ITask>("Task", taskSchema);
