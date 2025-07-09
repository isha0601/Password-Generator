const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API route to generate password
app.get('/api/generate-password', async (req, res) => {
  const length = req.query.length || 16; // default 16
  const apiUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': 'YOUR_API_KEY'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
