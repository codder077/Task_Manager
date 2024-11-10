"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (url) => {
    mongoose_1.default
        .connect(url, { dbName: "TaskManagement" })
        .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
        .catch((err) => {
        throw err;
    });
};
exports.connectDB = connectDB;
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        // console.log(statusCode)
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
}
exports.ErrorHandler = ErrorHandler;
