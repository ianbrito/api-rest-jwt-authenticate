const jwt = require('jsonwebtoken');
const env = require('../config/env');

function createToken({ id }) {
  return jwt.sign(id, env.secretKey);
}

function revokeToken({ token }) {}

/** 
 * @module createToken
*/
module.exports = {
  createToken,
  revokeToken,
};
