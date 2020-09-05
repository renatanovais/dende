export const DO_LOGIN = 'DO_LOGIN';

export const doLogin = (email, senha) => ({
  type: DO_LOGIN,
  email,
  senha,
});
