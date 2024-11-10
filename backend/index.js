"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./utils/config");
const features_1 = require("./utils/features");
const app = (0, express_1.default)();
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL || '';
const PORT = process.env.PORT || 8000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.use((0, cors_1.default)(config_1.corsOptions));
//Express router
app.use('/tasks', task_route_1.default);
(0, features_1.connectDB)(MONGO_URL);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
