Backend Project

Author: Noah Manaigre

Description:



Debug Examples:

Debug #1:

To test error handling, you can add a route like this in app.ts:

app.get("/health", (req: Request, res: Response) => {
  throw new Error("Test error");
});

This will intentionally throw an error to ensure your error-handling middleware works correctly.

Debug #2: 