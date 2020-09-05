export const DO_LOGIN = 'DO_LOGIN';

export const doLogin = (email, senha) => ({
  type: DO_LOGIN,
  email,
  senha,
});

export const NEW_PRODUCT = 'NEW_PRODUCT';

export const newProduct = (product, quantity) => ({
  type: NEW_PRODUCT,
  product,
  quantity,
})