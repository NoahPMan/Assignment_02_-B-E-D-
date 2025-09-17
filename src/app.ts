import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

export default app;