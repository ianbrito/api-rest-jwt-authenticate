const { verifyToken } = require('../services/token');
const { JsonWebTokenError, TokenExpiredError } = require('jsonwebtoken');

function auth(request, response, next) {
  try {
    const { authorization } = request.headers;
    const [prefix, token] = authorization.split(' ');
    const { id } = verifyToken(token);

    request.headers.user_id = id;

    return next();
  } catch (e) {
    if (e instanceof JsonWebTokenError) {
      return response.status(400).send();
    }

    if (e instanceof TokenExpiredError) {
      return res.status(401).send({
        message: 'Sessão expirada',
      });
    }

    return response.status(401).json({
      message: 'Usuário não autenticado',
    });
  }
}

module.exports = auth;
