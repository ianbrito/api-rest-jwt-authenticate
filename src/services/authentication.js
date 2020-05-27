const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWT = require('./token');
const {
  UserDoesNotExistExceptions,
  UserOrPasswordInvalidExceptions,
} = require('../exceptions/Auth');

exports.attempt = async (params) => {
  const user = await User.scope('all').findOne({
    where: { login: params.login },
  });

  if (!user) throw new UserDoesNotExistExceptions();

  const match = await bcrypt.compare(params.password, user.password);

  if (!match) throw new UserOrPasswordInvalidExceptions();

  const token = JWT.createToken({ id: user.id });

  user.password = undefined;

  return { user, token };
};
