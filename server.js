const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Cuisine = require('./models/Cuisine');
const cuisinesData = require('./data/cuisines');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');

  // Refresh the collection every time the server starts (development mode)
  await Cuisine.deleteMany({});
  await Cuisine.insertMany(cuisinesData);
  console.log('Sample cuisines refreshed');
  console.log('Inserted data:', cuisinesData);
})
.catch(err => console.error(err));

// Routes
app.get('/cuisines', async (req, res) => {
  const cuisines = await Cuisine.find();
  res.json(cuisines);
});

app.get('/cuisine/:name', async (req, res) => {
  const cuisine = await Cuisine.findOne({ name: req.params.name });
  res.json(cuisine);
});

app.get('/surprise', async (req, res) => {
  const cuisines = await Cuisine.find();
  const allDishes = cuisines.flatMap(c => c.dishes);
  const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
  res.json({ dish: randomDish });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));