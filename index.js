const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Example data (later you can replace with database)
const cuisines = [
  { id: 1, name: "Italian" },
  { id: 2, name: "Indian" },
  { id: 3, name: "Mexican" }
];

const dishes = [
  { id: 11, name: "Pizza", cuisine_id: 1 },
  { id: 12, name: "Pasta", cuisine_id: 1 },
  { id: 21, name: "Biryani", cuisine_id: 2 },
  { id: 31, name: "Tacos", cuisine_id: 3 }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Cuisines API!');
});

app.get('/cuisines', (req, res) => {
  res.json(cuisines);
});

app.get('/cuisines/:id/dishes', (req, res) => {
  const cuisineId = parseInt(req.params.id);
  const result = dishes.filter(d => d.cuisine_id === cuisineId);
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});