# Keerthana V — Personal Portfolio (Full Stack)

A full-stack portfolio website: React frontend, Node.js/Express backend, MongoDB database.

```
portfolio-website/
├── backend/          Express API + MongoDB (Mongoose) models
└── frontend/         React app (Create React App)
```

## 1. Prerequisites

- Node.js 18+ and npm installed
- A free MongoDB Atlas account (https://www.mongodb.com/cloud/atlas) — or a local MongoDB install
- A GitHub account (for deployment)

## 2. Backend setup (local)

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set:
```
MONGO_URI=<your MongoDB Atlas connection string>
PORT=5000
CLIENT_URL=http://localhost:3000
```

Load your projects and skills into the database:
```bash
npm run seed
```

Start the API:
```bash
npm run dev
```
It should print `Connected to MongoDB` and `Server running on port 5000`.
Visit http://localhost:5000/api/health to confirm it's up.

## 3. Frontend setup (local)

In a new terminal:
```bash
cd frontend
npm install
cp .env.example .env
npm start
```
This opens http://localhost:3000 — your portfolio, pulling live data from the backend.
If the backend isn't running, the site still displays using the built-in fallback content in `src/data/fallbackData.js`, so it never looks broken.

## 4. Editing your content

- **Bio, education, contact links:** edit `frontend/src/data/profile.js` directly.
- **Projects & skills:** either edit `backend/seed.js` and re-run `npm run seed`, or send requests to the API (`POST /api/projects`, `POST /api/skills`) once it's deployed. The frontend's `src/data/fallbackData.js` is a mirror of the seed data shown if the API is unreachable — keep both in sync.

## 5. Deployment

### Database — MongoDB Atlas
1. Create a free cluster at mongodb.com/cloud/atlas.
2. Create a database user and allow network access from anywhere (0.0.0.0/0) for simplicity, or your specific hosting provider's IPs.
3. Copy the connection string — this is your `MONGO_URI`.

### Backend — Render (or Heroku)
1. Push this repo to GitHub.
2. On Render.com: New → Web Service → connect your repo, set root directory to `backend`.
3. Build command: `npm install`. Start command: `npm start`.
4. Add environment variables: `MONGO_URI`, `PORT` (Render sets this automatically, but keep it in code), `CLIENT_URL` (your deployed frontend URL, added after step below).
5. Deploy. Note the resulting API URL, e.g. `https://your-api.onrender.com`.
6. Run `npm run seed` once, either locally pointed at the Atlas URI, or via Render's shell.

### Frontend — Netlify or Vercel
**Netlify:**
1. Push to GitHub, then in Netlify: New site from Git → select repo.
2. Base directory: `frontend`. Build command: `npm run build`. Publish directory: `frontend/build`.
3. Add environment variable `REACT_APP_API_URL` = your deployed backend URL + `/api` (e.g. `https://your-api.onrender.com/api`).
4. Deploy.

**Vercel:** same idea — set root directory to `frontend`, framework preset "Create React App", and add the `REACT_APP_API_URL` environment variable.

5. Once you have your live frontend URL, go back to your backend's environment variables and set `CLIENT_URL` to it, then redeploy the backend so CORS allows requests from it.

## 6. Tech stack summary

- **Frontend:** React, plain CSS (no framework), Axios for API calls
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB (Projects, Skills, Contact Messages collections)
- **Hosting:** Netlify/Vercel (frontend) + Render/Heroku (backend) + MongoDB Atlas (database)

## 7. API reference

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/:id` | Get one project |
| POST | `/api/projects` | Add a project |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |
| GET | `/api/skills` | List all skills |
| POST | `/api/skills` | Add a skill |
| DELETE | `/api/skills/:id` | Delete a skill |
| POST | `/api/contact` | Submit a contact form message |
| GET | `/api/contact` | View received messages |
