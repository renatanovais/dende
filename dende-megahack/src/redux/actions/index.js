export const DO_LOGIN = 'DO_LOGIN';

export const doLogin = (email, senha) => ({
  type: DO_LOGIN,
  email,
  senha,
});

export const SAVE_CLIENT = 'SAVE_CLIENT';

export const saveClient = (name, birthday, phone, email, address, observations, registryDate) => ({
  type: SAVE_CLIENT,
  name,
  birthday,
  phone,
  email,
  address,
  observations,
  registryDate,
});
