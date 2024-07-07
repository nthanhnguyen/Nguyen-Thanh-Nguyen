# Problem 5: A Crude Server

## Table of contents

- [Overview](#overview)
- [Installation and running the Application](#InstallationandrunningtheApplication)
- [Features and API Endpoints](#features)

## Overview

- **Topic name**: Backend Server with ExpressJS and TypeScript.
- **Description**: This project implements a backend server using ExpressJS and TypeScript, providing a set of CRUD functionalities for managing user resources. It connects to MongoDB for data persistence.

## Installation and running the Application

**Note:** Use node 14.x (v14.17.0) to run the application

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-folder>

2. **Install dependencies:**
    ```bash
    npm install

3. **Set up environment variables (you can use .env file in this project):**

Create a .env file in the root directory and configure the following variables:
PORT=3000  # Specify your desired port number
MONGO_URL=mongodb://localhost:27017/mydatabase  # MongoDB connection URI

4. **start the server:**
    ```bash
    npm start      

## Features and API Endpoints

1. Create a resource: POST /create-user
2. List resources with basic filters: GET /
3. Get details of a resource: GET /update/:email
4. Update resource details: POST /update-user
5. Delete a resource: POST /delete-user/:email
