require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/notes', require('./routes/notes'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`INoteBook backend listening at http://localhost:${port}`);
});