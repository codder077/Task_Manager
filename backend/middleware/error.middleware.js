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
exports.errorMiddleware = exports.TryCatch = void 0;
// Typing for TryCatch function
const TryCatch = (passedFunc) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield passedFunc(req, res, next);
    }
    catch (error) {
        console.log("hi");
        next(error);
    }
});
exports.TryCatch = TryCatch;
const errorMiddleware = (err, req, res, next) => {
    // Default error message and statusCode
    err.message || (err.message = "Internal Server Error");
    err.statusCode || (err.statusCode = 500);
    // Handling duplicate key errors (MongoDB)
    if (err.code === 11000) {
        const error = Object.keys(err.keyPattern || {}).join(",");
        err.message = `${error} already exists`;
        err.statusCode = 400;
    }
    // Handling CastError (invalid format)
    if (err.name === "CastError") {
        const errorPath = err.path;
        err.message = `Invalid Format of ${errorPath}`;
        err.statusCode = 400;
    }
    // Response format
    const response = {
        success: false,
        message: err.message,
    };
    return res.status(err.statusCode).json(response);
};
exports.errorMiddleware = errorMiddleware;
