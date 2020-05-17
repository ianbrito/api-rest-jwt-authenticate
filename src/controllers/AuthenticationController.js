const bcrypt = require('bcrypt');

const JWT = require('../services/token');
const User = require('../models/User');

module.exports = {
  async signUp(request, response) {
    try {
      let { name, login, password } = request.body;

      password = await bcrypt.hash(password, 10);

      if (await User.findOne({ where: { login: login } }))
        return response.status(401).json({ error: 'usuário já cadastrado' });

      const user = await User.create({
        name,
        login,
        password,
      });
      user.password = undefined;
      const token = JWT.createToken({ id: user.id });
      return response.json({ user, token });
    } catch (error) {
      console.log(`[AuthenticationController@signUp]: ${error}`);
      return response.status(500);
    }
  },

  async signIn(request, response) {
    try {
      const { login, password } = request.body;

      const user = await User.authenticate({ login, password });
      if (!user) {
        return response.status(401).json({ error: 'usuário não cadastrado' });
      }
      const token = JWT.createToken({ id: user.id });
      return response.json({ user, token });
    } catch (error) {
      console.log(`[AuthenticationController@signIn]: ${error}`);
      return response.status(500);
    }
  },

  async signOut(request, response) {
    try {
      const { login, password } = request.body;

      const user = await User.authenticate({ login, password });
      if (!user) {
        return response.status(401).json({ error: 'usuário não cadastrado' });
      }
      const token = JWT.createToken({ id: user.id });
      return response.json({ user, token });
    } catch (error) {
      console.log(`[AuthenticationController@signIn]: ${error}`);
      return response.status(500);
    }
  },
};
