# 📚 My Portfolio

A RESTful API built with **Express**, **TypeScript**, and **MongoDB (Mongoose)** to work as the backend server for a portfolio website with blog-management feature (only for owner). This API follows proper validation, business logics, and modern development practices which makes portfolio management easier.

---

## Features

- ✅ **Project Management** - Owner can add, update or delete his own projects he wants to showcase.
- ✅ **Blog Management** - Owner can write, update or delete his own blogs easily. Blogs will be public.
- ✅ **Schema Validation** using Mongoose
- ✅ **Password Hashing** using Bcrypt.js
- ✅ **Business Logic Enforcement** (e.g., increasing the views upon each visit to a blog page)

---

## Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** (via Mongoose)

---

## Project Structure

```plaintext
src/
├── app/
│   ├── config/     
│   ├── errorHelpers/     
│   ├── interfaces/      
│   ├── middlewares/          
│   ├── modules/          
│   ├── ├── auth/                   
│   ├── ├── user/          
│   ├── ├── project/          
│   ├── ├── blog/          
│   ├── routes/          
│   ├── utils/          
│   ├── constants.ts          
├── app.ts               # Express app setup
└── server.ts            # Application entry point
```

---

## Project Setup in Local System

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abrar9410/Backend-Portfolio.git
cd backend-portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a .env File
Create a .env file in the root with the following values:

```env
DB_URL=your_database_connection_uri
NODE_ENV=development or production

# bcrypt
SALT=#

# JWT
JWT_SECRET=secret-string
JWT_EXPIRESIN=example->(2d)
REFRESH_JWT_SECRET=another-secret-string
REFRESH_JWT_EXPIRESIN=example->(20d)
```

### 4️⃣ Build the Project

```bash
npm run build
```

### 5️⃣ Start the Server
In development (with hot reload):

```bash
npm run dev
```

In production:

```bash
npm start
```

--- 

## API Endpoints

### User Endpoints
  
- **GET** `/api/users/me` – Get owner's profile 
- **PATCH** `/api/users/update-user/:id` – Update owner's profile  


### Auth Endpoints

- **POST** `/api/auth/login` – Login with the owner's account  
- **POST** `/api/auth/logout` – Log Out from App  
- **PATCH** `/api/auth/change-password` – Owner can change his/her password through this route  


### Project Endpoints

- **POST** `/api/projects/add-project` – Route for adding a project (Owner-only Route)    
- **GET** `/api/projects` – Get all projects    
- **GET** `/api/projects/:projectId` – Get single project
- **PATCH** `/api/projects/update-project/:projectId` – Update a Project (Owner-only Route)
- **DELETE** `/api/projects/delete-project/:projectId` – Delete a Project (Owner-only Route)


### Blog Endpoints

- **POST** `/api/blogs/create-blog` – Route for creating a blog (Owner-only Route)    
- **GET** `/api/blogs` – Get all blogs    
- **GET** `/api/blogs/:blogId` – Get single blog
- **PATCH** `/api/blogs/update-blog/:blogId` – Update a blog (Owner-only Route)
- **DELETE** `/api/blogs/delete-blog/:blogId` – Delete a blog (Owner-only Route)


---

## Scripts

| Script         | Description                           |
|----------------|---------------------------------------|
| `npm run dev`  | Run development server with Nodemon   |
| `npm run build`| Compile TypeScript to JavaScript      |
| `npm start`    | Start the production server           |

---

[Live Link]()
