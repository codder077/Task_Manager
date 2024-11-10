import { Request, Response, NextFunction } from "express";

// Typing for TryCatch function
export const TryCatch = (passedFunc: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await passedFunc(req, res, next);
    } catch (error) {
        console.log("hi");
        next(error);
    }
};

// Typing for errorMiddleware function
interface CustomError extends Error {
  statusCode?: number;
  code?: number;
  keyPattern?: Record<string, any>;
  path?: string;
}

export const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction): Response => {
    // Default error message and statusCode
    err.message ||= "Internal Server Error";
    err.statusCode ||= 500;

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

    return res.status(err.statusCode!).json(response);
};
