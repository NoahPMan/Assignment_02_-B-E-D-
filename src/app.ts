import express, { Request, Response } from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeRoutes"
import branchRoutes from "./api/v1/routes/branchRoutes"
import dotenv from "dotenv";
import { getHelmetConfig } from "../config/helmetConfig";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Employee endpoint
app.use("/api/v1/employees", employeeRoutes)

// Branch endpoint (Step: 5)
app.use("/api/v1/branches", branchRoutes)

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

app.use(getHelmetConfig());

export default app;