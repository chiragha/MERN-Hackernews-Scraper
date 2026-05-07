# MERN Hacker News Scraper

A full-stack MERN application that scrapes top stories from Hacker News, stores them in MongoDB, and allows authenticated users to bookmark stories.

## Features

### Web Scraper
- Scrapes top 10 stories from Hacker News
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores data in MongoDB
- Automatically runs on server start


### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Story Features
- Fetch all stories
- Fetch single story
- Bookmark / Unbookmark stories
- Real-time bookmark UI updates
- Protected Bookmarks Page

### Frontend
- Built with React + Tailwind CSS
- React Context API for authentication state
- Responsive UI
- Toast notifications


---

# Tech Stack

## Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cheerio
- Axios

---

# Folder Structure

## Backend

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── scraper/
├── utils/
├── server.js
```

## Frontend

```bash
frontend/
│
├── components/
├── pages/
├── context/
├── services/
├── api/
├── App.jsx
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone (https://github.com/chiragha/MERN-Hackernews-Scraper)
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# Run Project Locally

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Deployment

## Frontend
- Vercel
- https://mern-hackernews-scraper.vercel.app/

## Backend
- Render
- https://mern-hackernews-scraper.onrender.com/



# Author

Shivani Sinha
