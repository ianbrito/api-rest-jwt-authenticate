exports.UserExistsExceptions = function () {
  this.message = 'Usuário já cadastrado';
  this.name = 'UserExistsExceptions';
};

exports.UserDoesNotExistExceptions = function () {
  this.message = 'Usuário não cadastrado';
  this.name = 'UserDoesNotExistExceptions';
};

exports.UserOrPasswordInvalidExceptions = function () {
  this.message = 'Usuário ou Senha Incorreto';
  this.name = 'UserOrPasswordInvalidExceptions';
};
