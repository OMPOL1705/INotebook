const connectToMongo = require('./db');
const path = require('path');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})

