import mongoose from 'mongoose';
export const connectDB = (url:string) => {
    mongoose
      .connect(url, { dbName: "TaskManagement" })
      .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
      .catch((err:Error) => {
        throw err;
      });
  };

export class ErrorHandler extends Error {
  statusCode:number;
    constructor(message:string, statusCode:number) {
      // console.log(statusCode)
      super(message);
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
  }