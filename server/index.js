const express = require('express');
const path = require('path');
const cowsdb = require('../database/index.js');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
  res.redirect('/api/cows');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

app.get('/api/cows', (req, res) => {
  cowsdb.listCows((err, data) => {
    if (err) {
      res.status(400)
    }
    res.json(data)
  })
})

app.post('/api/cows', (req, res) => {
  cowsdb.addCow(req.body, (err, data) => {
    res.status(201)
    res.end(data)
  })
})