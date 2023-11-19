const bcrypt = require('bcrypt');

const { attempt } = require('../services/authentication');
const JWT = require('../services/token');

const User = require('../models/User');
const { UserExistsExceptions } = require('../exceptions/Auth');

module.exports = {
  async signUp(request, response) {
    try {
      let { name, login, password } = request.body;

      if (await User.findOne({ where: { login: login } })) {
        throw new UserExistsExceptions();
      }

      password = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        login,
        password,
      });

      user.password = undefined;

      const token = JWT.createToken({ id: user.id });
      return response.status(201).json({ user, token });
    } catch (error) {
      return response.status(401).send({ error: error.message });
    }
  },

  async signIn(request, response) {
    try {
      const { login, password } = request.body;
      const { user, token } = await attempt({ login, password });

      return response.json({ user, token });
    } catch (error) {
      return response.status(401).send({ error: error.message });
    }
  },

  async signOut(request, response) {
    try {
      return response.status(200).send();
    } catch (error) {
      return response.status(500);
    }
  },
};
