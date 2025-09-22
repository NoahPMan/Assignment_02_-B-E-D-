import express, { Request, Response } from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeRoutes"

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Employee endpoint
app.use("/api/v1/employees", employeeRoutes)

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

export default app;
