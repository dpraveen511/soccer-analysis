const express = require('express');
// const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./db');

app.get('/data', async (req, res, next) => {
    console.log("here")
  try {
    let result = await db.execute('SELECT * FROM PLAYERS FETCH FIRST 10 ROWS ONLY');
    console.log(result);
    if (result && result.rows) {
      res.json(result.rows);
    } else {
      res.status(500).json({ error: 'Unexpected database response.' });
    }
  } catch (err) {
    next(err);
  }
});
app.get('/sample', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
