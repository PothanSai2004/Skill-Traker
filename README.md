# Skill Tracker Pro

A full-stack CRUD application built with React frontend and Node.js/Express backend for tracking learning progress and skills.

## Features

- Create, read, update, and delete skills
- Track progress with visual indicators
- Filter and search functionality
- Responsive design
- Modern UI with Bootstrap

## Tech Stack

- Frontend: React, Bootstrap, Axios
- Backend: Node.js, Express.js
- Storage: In-memory (can be extended to database)

## Installation

1. Clone the repository
2. Install backend dependencies: `cd backend && npm install`
3. Install frontend dependencies: `cd frontend && npm install`
4. Start backend: `npm run dev` (from backend directory)
5. Start frontend: `npm start` (from frontend directory)
6. Open http://localhost:3000

## API Endpoints

- GET /api/skills - Fetch all skills
- POST /api/skills - Create a new skill
- PUT /api/skills/:id - Update a skill
- DELETE /api/skills/:id - Delete a skill