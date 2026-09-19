# Kapil Shah - Personal Portfolio

A modern, responsive full-stack portfolio website built with React, Node.js, Express, and MongoDB.

## 1. Project Overview

This is a comprehensive personal portfolio designed for a BSc IT student and aspiring Software Developer. It features a clean, professional design suitable for job applications, showcasing skills, education, projects, experience, and achievements.

## 2. Features

*   **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
*   **Dark/Light Mode:** Seamless theme switching with persistence.
*   **Dynamic Content:** Data fetched from a MongoDB database via a REST API.
*   **Admin Dashboard:** Protected area for managing portfolio content (projects, skills, experience, etc.) and viewing contact messages.
*   **Contact Form:** Secure form with frontend and backend validation.
*   **Modern UI:** Smooth animations using Framer Motion, modern typography, and a cohesive color palette.

## 3. Technologies

*   **Frontend:** React (Vite), Tailwind CSS v4, React Router DOM, Framer Motion, Axios.
*   **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT (JSON Web Tokens) for authentication, Express-Validator, Bcrypt.js.

## 4. Installation

Ensure you have Node.js (v20+) and MongoDB installed on your system or access to a MongoDB Atlas cluster.

1.  Clone the repository:
    ```bash
    git clone https://github.com/kapilshah/portfolio.git
    cd portfolio
    ```

## 5. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## 6. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## 7. MongoDB Setup

1.  Create a local MongoDB database named `portfolio` or create a cluster on MongoDB Atlas.
2.  Obtain your connection string (e.g., `mongodb://localhost:27017/portfolio` or the Atlas URI).

## 8. Environment Variables

1.  Copy `.env.example` to `.env` in the root directory (or create a `.env` in the `backend` folder).
    ```bash
    cp .env.example backend/.env
    ```
2.  Open `backend/.env` and update the values:
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `JWT_SECRET`: A strong, random string for signing authentication tokens.

3.  Create a `.env` file in the `frontend` folder if you need to override the default API URL:
    ```bash
    VITE_API_URL=http://localhost:5000/api
    ```

## 9. Running the Project Locally

First, you can optionally seed the database with sample data (this will erase existing data!):
```bash
cd backend
npm run seed
```

Start the Backend (Terminal 1):
```bash
cd backend
npm run dev
```

Start the Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```

Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 10. API Endpoints

### Public
*   `GET /api/projects` - Get all projects
*   `GET /api/projects/:id` - Get a specific project
*   `GET /api/skills` - Get all skills
*   `GET /api/experience` - Get all experiences
*   `GET /api/education` - Get all education entries
*   `GET /api/certifications` - Get all certifications
*   `POST /api/contact` - Submit a contact message
*   `POST /api/auth/login` - Admin login (returns JWT)
*   `POST /api/auth/setup` - Create initial admin account (one-time use)

### Private (Requires JWT `Authorization: Bearer <token>`)
*   `GET /api/auth/me` - Get current admin user
*   `POST /api/projects` - Add a project
*   `PUT /api/projects/:id` - Edit a project
*   `DELETE /api/projects/:id` - Delete a project
*   *(Similar POST, PUT, DELETE endpoints exist for skills, experience, education, and certifications)*
*   `GET /api/contact` - View all contact messages
*   `PUT /api/contact/:id/read` - Mark a message as read
*   `DELETE /api/contact/:id` - Delete a message

## 11. Deployment Instructions

### Backend (e.g., Render, Railway, Heroku)
1.  Set environment variables (`MONGO_URI`, `JWT_SECRET`, `NODE_ENV=production`, `FRONTEND_URL`) on your hosting platform.
2.  Deploy the `backend` folder. The start command is `node server.js`.

### Frontend (e.g., Vercel, Netlify)
1.  Set the `VITE_API_URL` environment variable to your deployed backend URL.
2.  Deploy the `frontend` folder.
3.  The build command is `npm run build` and the publish directory is `dist`.
