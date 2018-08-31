const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');

const projectRoutes = require('./Routes/projectRoutes');
const actionRoutes = require('./Routes/actionRoutes');

server.use(cors());
server.use(bodyParser.json());
server.use('/project', projectRoutes);
server.use('/action', actionRoutes);

server.get('/', (req, res) => {
  res.send('success!');
})

server.listen(8000, () => {
  console.log('== LISTENING ON PORT 8000 ==');
})
