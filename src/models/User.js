const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
class User extends Model {
  /**
   * @param {*} connection objeto de conexão do banco de dados
   */
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        // objeto de conexão com o banco de dados
        sequelize: connection,
        defaultScope: {
          attributes: { exclude: ['password'] },
        },
        scopes: {
          all: {
            attributes: { include: ['password'] },
          },
        },
      }
    );
  }
  static async authenticate(params) {
    try {
      const user = await this.scope('all').findOne({
        where: { login: params.login },
      });

      if (!user) return false;

      const match = await bcrypt.compare(params.password, user.password);

      if (!match) return false;

      user.password = undefined;

      return user;
    } catch (err) {
      console.log(`
      Error na autenticação
      error: ${err}
      `);
    }
  }
}

module.exports = User;
