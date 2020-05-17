const express = require('express');
const http = require('http');
const cors = require('cors');

require('./database');

const env = require('./config/env');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

// configurações do express
app.use(cors());
app.use(express.json());

// rotas
app.use(routes);

server.listen(env.PORT || 3333, () => {
  console.log('server run in localhost:' + (env.PORT || 3333));
});
