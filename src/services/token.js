const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.KEY;

function createToken({ id }) {
  return jwt.sign(id, SECRET_KEY);
}


/** 
 * @module createToken
*/
module.exports = {
  createToken
};
