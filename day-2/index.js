const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

// GET endpoint to fetch data from Pokemon API
app.get('/pokemon/:name', async (req, res) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}/${req.params.name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Pokemon API' });
  }
});

// POST endpoint to insert a new Pokemon
app.post('/pokemon', (req, res) => {
  const newPokemon = req.body;
  res.json({ message: 'Pokemon inserted', data: newPokemon });
});

// PUT endpoint
app.put('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is a PUT operation' });
});

// PATCH endpoint
app.patch('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is a PATCH operation' });
});

// DELETE endpoint
app.delete('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is a DELETE operation' });
});

// HEAD endpoint
app.head('/pokemon', (req, res) => {
  res.status(200).end(); // Head cannot return a message
});

// OPTIONS endpoint
app.options('/pokemon', (req, res) => {
  res.json({ message: 'This is a OPTIONS operation' });
});

// Start the server
const PORT = 3000; // Port default :)
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});