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

export const NEW_ITEM = 'NEW_ITEM';

export const newProduct = (item, quantity, unity, price) => ({
  type: NEW_ITEM,
  item,
  quantity,
  unity,
  price,
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
  }
})

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
