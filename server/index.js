const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`PokeResume runing on port ${PORT}...`);
});