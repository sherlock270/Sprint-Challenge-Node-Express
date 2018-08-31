const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send('success!');
})

server.listen(8000, () => {
  console.log('== LISTENING ON PORT 8000 ==');
})
