In Development

# Digital Bank Simulator

## Backend Summary [**BackEnd**](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/backend)

The Backend of this application consists of an API that simulates basic financial account operations, where you can login with `username` and `password`, register new users, check a user's balance, transfer money to other users, and view a user's transaction history, with the ability to filter by date and operation type (cash-in/cash-out).
The `API` was developed in `NodeJS` with `TypeScript`, `Express` and `PostgreSQL` as the database. It has an `MSC architecture` (Model, Service and Controller) and `ORM` (Object Relational Mapping) with `Sequelize`. It also has authentication with `JWT` and encryption with `bcrypt`, validations were done with `zod` and error handling with `express-async-errors`.

For more details: [**README.md**](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/backend)

## Frontend Summary [**FrontEnd**](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/frontend)

The Frontend has a minimalist interface and consumes the API developed in the Backend, simulating a financial account application, where you can login with `username` and `password`, check a user's balance, transfer money to other users, and view a user's transaction history, with the ability to filter by date and operation type (cash-in/cash-out).
It was developed in `ReactJS` with `TypeScript` and created using `Vite`. Styling was done with `Tailwind CSS` and `Radix-UI`, with icons from the `phosphor-icons` library and `Axios` to make requests to the API.

Demo:
![Demo](/images/Demo.png)

For more details: [**README.md**](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/frontend)

## Table of Contents
- [Digital Bank Simulator](#digital-bank-simulator)
  - [Backend Summary](#backend-summary)
  - [Frontend Summary](#frontend-summary)
  - [Table of Contents](#table-of-contents)
- [**Application Structure**](#application-structure)
- [**Instructions**](#instructions)
    - [**Installation and Execution**](#installation-and-execution)

# **Application Structure**
````
backend
  ├── src
    ├── app.ts            # middleware and API route definitions
    ├── server.ts         # API initialization
    ├── /controllers      # controller layer - client request to API
    ├── /database         # database connection via Sequelize
      ├── /config         # sequelize config
      ├── /migrations     # sequelize migrations
      ├── /models         # sequelize models
      ├── /seeders        # sequelize seeders
    ├── /interfaces       # application interfaces
    ├── /middlewares      # data validation and authentication
    ├── /models           # isolated model layer
    ├── /routes           # routes for each endpoint
    ├── /services         # service layer - business rules
    ├── /errors           # error catalog
  
frontend
  ├── public
    ├── index.html        # html file
  ├── src
    ├── App.tsx           # route and component definitions
    ├── index.tsx         # application initialization
    ├── /components       # application components
    ├── /pages            # application pages
    ├── /services         # service layer - business rules
    ├── /styles           # application styling
    ├── /utils            # utility functions
````

# **Instructions**

Ports used:
- Database: 5432
- BackEnd: 3001
- FrontEnd: 5173

### **Installation and Execution**

Installation and execution will depend on the environment (`Local` or `Docker`) you are using. To run locally, see the README for [Frontend](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/frontend) and [Backend](https://github.com/rosaline-alignerr/financial-transfer-system-bugged/tree/master/backend). The following instructions are for execution using Docker.

The available `Scripts` allow the complete execution of the application in a `Docker` environment with `Docker Compose`.

**Complete Application**
```bash
npm run compose:up
```

**Delete Containers**
```bash
npm run compose:down
```

**View Docker Logs**
```bash
npm run logs
```