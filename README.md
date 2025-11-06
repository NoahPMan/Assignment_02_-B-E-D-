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



Assignment_05


Project Overview:

# Student Management API

This API provides CRUD operations for managing students and related resources. 
It is designed for easy integration with front-end applications and includes robust security features and comprehensive documentation.



Installation Instructions:

## Installation

1. Clone the repository:
   git clone https://github.com/NoahPMan/Assignment_02_-B-E-D-.git

2. Navigate to the project folder:
   cd Assignment_02_-B-E-D-

3. Install dependencies:
   npm install

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     NODE_ENV=development
     PORT=3000
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
     FIREBASE_CLIENT_EMAIL=your_service_account_email
     SWAGGER_SERVER_URL=http://localhost:3000/api/v1

5. Start the server:
   npm run dev