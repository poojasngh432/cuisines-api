# 🍽️ Cuisines API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

A simple and fun **REST API** that provides a list of cuisines and their dishes.  
Built for a **personal project** to power my app’s backend, but open for anyone to explore and use.
Perfect for food-related apps, recipe platforms, or just playing around with APIs.  

> Live API: [https://cuisines-api-pyk0.onrender.com/cuisines](https://cuisines-api-pyk0.onrender.com/cuisines)

---

## ✨ Features
- 📜 Get all cuisines  
- 🍛 Get dishes for a specific cuisine  
- 🎲 Get a random dish with `/surprise` endpoint  
- 🌐 Deployed with [Render](https://render.com)  
- 💾 Database powered by [MongoDB Atlas](https://www.mongodb.com/atlas/database) 

---

## 📡 API Endpoints

Base URL:  https://cuisines-api-pyk0.onrender.com

| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| `GET`  | `/cuisines` | 📋 Get all cuisines | `/cuisines` |
| `GET`  | `/cuisines/:id/dishes` | 🍜 Get all dishes for a specific cuisine by its MongoDB `_id` | `/cuisines/66bcf1a34f16b9d2d8d6f0a1/dishes` |
| `GET`  | `/surprise` | 🎲 Get a random dish | `/surprise` |

**Example Request:** `curl https://cuisines-api-pyk0.onrender.com/cuisines`
```bash
[
  {
    "_id": "66bcf1a34f16b9d2d8d6f0a1",
    "name": "Chinese",
    "dishes": ["Kung Pao Chicken", "Sweet and Sour Pork", "Mapo Tofu"]
  },
  {
    "_id": "66bcf1a34f16b9d2d8d6f0a2",
    "name": "Italian",
    "dishes": ["Margherita Pizza", "Spaghetti Carbonara", "Lasagna"]
  }
]
```

## 🚀 Tech Stack
- Node.js + Express – Server
- MongoDB Atlas – Cloud database
- Mongoose – Object Data Modeling
- Render – Deployment platform
- dotenv – Environment variables

## 🛠 How I Built It
1. Designed the API structure for cuisines and dishes.
2. Used MongoDB Atlas for a scalable cloud database.
3. Built routes in Express to fetch data and return JSON.
4. Deployed to Render for public access.

## 🚀 Local Development Setup

**1. Clone the repository**
```
git clone https://github.com/<your-username>/cuisines-api.git
cd cuisines-api
```

**2. Install dependencies**  
```
npm install
```

**3. Setup environment variables**
- Create .env file (find template below)
- Fill in your MongoDB connection string and port
- Then add it to .gitignore

**4. Run locally**
```
npm run dev
```
> API will be live at: http://localhost:5000

**5. .env file (Example)**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

⸻ 

## 📜 License

This project is licensed under the MIT License — you are free to use and explore it.

## 💡 Notes
- This API was created for a personal app project.
- The database content may change over time as I add new cuisines/dishes.

