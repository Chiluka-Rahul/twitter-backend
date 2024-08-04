# Twitter Backend

## Assignment Overview

This assignment involves designing and implementing a simplified Twitter-like backend system using Node.js and MongoDB. The system includes user authentication, tweet posting, and timeline fetching functionalities, with a focus on scalability, performance, maintainability, and Domain-Driven Design (DDD) principles.

## How to Run the Application

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas instance)

### Steps

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd twitter-backend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    - Create a `.env` file in the root of the project.
    - Add the following configurations:

      ```
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

4. **Start the Server**

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:3000`.

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **bcryptjs**: Library to hash passwords.
- **jsonwebtoken**: JSON Web Token implementation for authentication.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation Instructions

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd twitter-backend
    ```

2. **Install Node.js Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Application**

    ```bash
    npm start
    ```

## Configuration

Ensure that the `.env` file contains the correct MongoDB connection string and JWT secret. Example:

MONGO_URI=mongodb://localhost:27017/twitter-backend
JWT_SECRET=your_jwt_secret_key




## Testing

For this minimal setup, no specific tests have been implemented. However, you can use tools like Postman to test the API endpoints.

### Manual Testing Steps

1. **User Registration**

    - Endpoint: `POST /api/users/register`
    - Body:

      ```json
      {
        "username": "testuser",
        "password": "password123"
      }
      ```

2. **User Login**

    - Endpoint: `POST /api/users/login`
    - Body:

      ```json
      {
        "username": "testuser",
        "password": "password123"
      }
      ```

3. **Post a Tweet**

    - Endpoint: `POST /api/tweets`
    - Header: `Authorization: Bearer <JWT_TOKEN>`
    - Body:

      ```json
      {
        "text": "Hello, world!"
      }
      ```

4. **Fetch User Timeline**

    - Endpoint: `GET /api/users/:userId/timeline`
    - Header: `Authorization: Bearer <JWT_TOKEN>`

## Issues and Troubleshooting

- **MongoDB Connection Issues**: Ensure your MongoDB server is running and the connection string in `.env` is correct.
- **Invalid JWT Token**: Ensure you are including a valid JWT token in the `Authorization` header for protected routes.
- **Server Crashes**: Check for errors in the server logs and ensure all dependencies are correctly installed.

## Contact Information

For any queries or assistance, please contact:

- Name: [Chiluka Rahul]
- Email: [rahulchiluka2511@gmail.com]
