require('./config/bootstrap')

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

require('./database');

// configurações do express
app.use(cors());
app.use(express.json());

// rotas
app.use(routes);

module.exports = app;