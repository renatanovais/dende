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
});

export const NEW_ITEM = 'NEW_ITEM';

export const newItem = (item, quantity, unity, price) => ({
  type: NEW_ITEM,
  item,
  quantity,
  unity,
  price,
});

export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';

export const clearProduct = () => ({
  type: CLEAR_PRODUCTS,
  productList: [],
})


export const SCHEDULE_IT = 'SCHEDULE_IT';

export const scheduleIt = (products, client, dueDate, delivery, details) => ({
  type: SCHEDULE_IT,
  order: {
    products,
    client,
    dueDate,
    delivery,
    details,
  },
});

export const SAVE_ITEM = 'SAVE_ITEM';

export const saveItem = (itens, nameProduct, produce, prepare, date, img) => ({
  type: SAVE_ITEM,
  itemList: { itens, nameProduct, date, produce, prepare, img },
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
