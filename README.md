Backend Project

Author: Noah Manaigre

Description:
- A RESTful API for managing employees and branches, with CRUD operations and tests for all endpoints.

Endpoint links:

-http://localhost:3000/health
-http://localhost:3000/api/v1/employees

Debug Examples:

Debug #1:

To test error handling, you can add a route like this in app.ts:

app.get("/health", (req: Request, res: Response) => {
  throw new Error("Test error");
});

This will intentionally throw an error to ensure your error-handling middleware works correctly.

Debug #2: 

-http://localhost:3000/api/v1/employees
-http://localhost:3000/api/v1/employees/1

Debug #3
