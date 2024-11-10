export const corsOptions = {
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "https://task-manager-inxw.vercel.app"
      
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,  
  };