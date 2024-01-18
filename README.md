# Employee Management from Wise Consultancy


## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
 
## Introduction

Brief introduction about your project.

## Prerequisites

Ensure you have the following tools installed before proceeding:

- [Node.js](https://nodejs.org/) for running the React frontend.
- [Java](https://www.oracle.com/java/) for running the Spring Boot backend.
- [PostgreSQL](https://www.postgresql.org/) for the database.

## Getting Started

### Frontend

1. Clone the repository.

   ```bash
   git clone (https://github.com/habibulmursaleen/emplyeeManagement.git)https://github.com/habibulmursaleen/emplyeeManagement.git
   cd emplyeeManagement/frontend
   ```

2. Install dependencies.
``` bash
npm install
```
3. Run the development server.
```bash
npm start
```
The React app will be available at http://localhost:3000.

### Backend

Before you start, ensure you have the following prerequisites installed on your system:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Postgres Database] 
- [Git](https://git-scm.com/downloads) (optional, for version control)

### Installation
Navigate to the project directory:
 ```
cd emplyeeManagement/backend
```
 
Configure MySQL Database:

    Create a postygres database schema named employeeDB.
    Update the database connection details in src/main/resources/application.properties if necessary.
    
Build and run the application:
    mvn spring-boot:run
The API should now be running at http://localhost:8081/api/employee. You can access it using tools like Postman or a web browser.

Usage

The API supports the following operations:

    Create Employee: POST /api/v1/employee
    Retrieve All Employees: GET /api/v1/employee
    Update Employee: PUT /api/employee/{id}
    Delete Employee: DELETE /api/employee/{id}
