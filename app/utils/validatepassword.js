
/**
 * Regras para validação do password
 ^ -> The password string will start this way
 (?=.*[a-z]) -> um ou mais letras minúsculas
 | -> expressão OU ((?=.*[a-z]) | (?=.*[A-Z])), tem de ter pelo menos uma letra minúscula, ou pelo menos uma letra maiúscula
 (?=.*[A-Z]) -> um ou mais letras maiúsculas
 (?=.*[0-9]) -> um ou mais números
 (?=^\S*$) -> não deve conter espaços
 (?=.{8,}) -> mínimo de 8 caracteres
 */
const validatePassword = {
  validate: password => /^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=^\S*$)(?=.{8,})/.test(String(password)),
  message: 'A senha deve ter no mínimo 8 caracteres, e conter ao menos 1 número, 1 letra, e não conter espaços',
};

module.exports = validatePassword;

