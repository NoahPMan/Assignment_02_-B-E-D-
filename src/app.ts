import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { getHelmetConfig } from "../config/helmetConfig";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import cors from "cors";
import getCorsOptions from "../config/corsConfig";


dotenv.config();

const app = express();

// Apply Helmet security headers before routes
app.use(getHelmetConfig());

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

app.use(cors(getCorsOptions()));

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

export default app;
