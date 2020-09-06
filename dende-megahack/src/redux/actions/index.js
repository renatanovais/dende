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
  resume: {
    product,
    quantity,
  }
})

export const SCHEDULE_IT = 'SCHEDULE_IT';

export const scheduleIt = (products, client, dueData, delivery, details) => ({
  type: SCHEDULE_IT, 
  order: {
    products,
    client,
    dueData,
    delivery,
    details,
  }
})
