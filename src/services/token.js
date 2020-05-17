const jwt = require('jsonwebtoken');
const env = require('../config/env');

function createToken({ id }) {
  return jwt.sign(id, env.secretKey);
}

module.exports = {
  createToken,
};
