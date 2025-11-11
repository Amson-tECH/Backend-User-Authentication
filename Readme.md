# Backend User Authentication

A secure and robust backend authentication system built with Node.js and Express. This project provides complete user authentication functionality including signup, login, logout, and route protection with JWT tokens stored in HTTP-only cookies.

## 🚀 Features

- **User Registration**: Secure user signup with password hashing
- **User Login**: JWT-based authentication with token storage in cookies
- **User Logout**: Cookies termination
- **Protected Routes**: Middleware-based route protection
- **Password Security**: Bcrypt password hashing
- **Input Validation**: Comprehensive data validation using validator
- **MongoDB Integration**: Mongoose ODM for database operations

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.1.0)
- **Database**: MongoDB with Mongoose (v8.19.3)
- **Authentication**: JSON Web Tokens (JWT v9.0.2)
- **Password Hashing**: Bcrypt (v6.0.0)
- **Validation**: Validator (v13.15.22)
- **Environment Variables**: Dotenv (v17.2.3)
- **Cookie Parsing**: Cookie-parser (v1.4.7)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amson-tECH/backend-user-authentication.git
   cd backend-user-authentication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   **Example:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/authflow
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
   ```

4. **Ensure MongoDB is running**
   
   If using local MongoDB:
   ```bash
   mongodb
   ```
   
   Or make sure your MongoDB Atlas cluster is accessible.

## 🚀 Running the Application

**Development Mode** (with auto-restart on file changes):
```bash
npm run server
```

**Production Mode**:
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## 📁 Project Structure

```
backend-user-authentication/
├── config/
│   └── mongodb.js          # MongoDB connection configuration
├── controller/
│   └── userController.js   # User authentication logic
├── Middleware/
│   └── authUser.js         # Authentication middleware
├── model/
│   └── userModel.js        # User schema and model
├── routes/
│   └── userRoute.js        # API routes
├── .env                    # Environment variables (not in repo)
├── .gitignore             # Git ignore file
├── app.js                 # Application entry point
├── package.json           # Project dependencies
└── Readme.md              # Project documentation
```

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/users/signup` | Register a new user | No |
| POST | `/api/users/login` | Login user and receive JWT token | No |
| GET | `/api/users/logout` | Logout user and clear token | No |
| GET | `/api/users/dashboard` | Get dashboard | Yes |
| GET | `/api/users/store` | Get store | Yes |

### Example Requests

**Signup**
```bash
POST /api/users/signup
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Login**
```bash
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

## 🔒 Authentication Flow

1. User registers or logs in
2. Server validates credentials
3. JWT token is generated and stored in HTTP-only cookie
4. Client includes cookie in subsequent requests
5. Auth middleware validates token on protected routes
6. Access granted or denied based on token validity

## 🛡️ Security Features

- **Password Hashing**: Passwords are hashed using bcrypt before storage
- **HTTP-Only Cookies**: JWT tokens stored in secure, HTTP-only cookies
- **Input Validation**: All user inputs are validated before processing
- **Environment Variables**: Sensitive data stored in environment variables
- **Mongoose Security**: Protection against NoSQL injection attacks

## 🧪 Testing

```bash
npm test
```
*Note: Test implementation is pending*

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/authflow` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key_here` |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Reuben Korsi Amuzu**
- GitHub: [@Amson-tECH](https://github.com/Amson-tECH)
- Email: reubenamuzu23@gmail.com



---

**Note**: Make sure to never commit your `.env` file to version control. Keep your JWT secret secure and use strong, random values in production.