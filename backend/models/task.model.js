"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
// Define the Task schema
const taskSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});
// Export the model for use in other parts of the application
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
