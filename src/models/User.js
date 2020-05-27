const { Model, DataTypes } = require('sequelize');

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
}

module.exports = User;
