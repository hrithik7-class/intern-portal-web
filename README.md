# Intern Portal
Demo  userName- xyz pass- 123456

A full-stack web application for managing intern fundraising, leaderboards, authentication, and more.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Intern authentication (signup, login, logout)
- JWT-based authentication with HTTP-only cookies
- Leaderboard showing top fundraisers
- Animated landing page sections
- Responsive UI with Tailwind CSS
- Toast notifications for actions and errors

---

## Tech Stack

- **Frontend:** React, Redux Toolkit, React Router, Framer Motion, Tailwind CSS, Axios, React Hot Toast
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Other:** Vite (frontend build), dotenv

---

## Getting Started

### Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI, JWT secret, and frontend URL.

3. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend runs on `http://localhost:5000` by default.

---

### Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and set `VITE_API_URL` to your backend URL (e.g., `http://localhost:5000`).

3. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

---

## Environment Variables

### Backend (`backend/.env`)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
PORT=5000
```

### Frontend (`frontend/.env`)
```
VITE_API_URL=http://localhost:5000
```

---

## Project Structure

```
intern-portal/
├── backend/
│   ├── index.js
│   ├── db/
│   ├── models/
│   ├── router/
│   ├── middleware/
│   ├── utils/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── redux/
│   │   └── ...
│   ├── public/
│   ├── index.html
│   └── ...
└── README.md
```

---

## Scripts

### Backend

- `npm start` — Start the backend server

### Frontend

- `npm run dev` — Start the frontend dev server
- `npm run build` — Build the frontend for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

---

## Usage

- Visit the landing page at `/`
- Sign up or log in as an intern
- View your dashboard and leaderboard
- Log out securely
- Enjoy animated sections and responsive design

---

## API Endpoints

### Auth

- `POST /api/auth/signup` — Register a new intern
- `POST /api/auth/login` — Log in
- `POST /api/auth/logout` — Log out
- `GET /api/auth` — Get current user (requires authentication)

### Leaderboard

- `GET /api/leaderboard` — Get top 6 interns by funds raised

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

