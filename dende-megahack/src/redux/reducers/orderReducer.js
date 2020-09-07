import { NEW_PRODUCT, SCHEDULE_IT, CLEAR_PRODUCTS } from '../actions';

const order1 = {
  client: 'Rachel',
  dueDate: '2020-10-02',
  delivery: 'Buscar',
  products: [{product: 'cafe', quantity: 5}],
  details: 'vai buscar de manhã'
}

const order2 = {
  client: 'Joey',
  dueDate: '2020-08-08',
  delivery: 'Entregar',
  products: [{product: 'bolo', quantity: 2}, {product: 'brigadeiro', quantity: 3} ],
  details: 'entregar via rappi',
}

const order3 = {
  client: 'Monica',
  dueDate: '2020-09-07',
  delivery: 'Buscar',
  products: [{product: 'bolo', quantity: 2}, {product: 'brigadeiro', quantity: 3} ],
  details: 'já pagou - vai buscar',
}

const initialState = {
  orders: [order1, order2, order3],
  product: '',
  quantity: 0,
  products: [],
  scheduleDate: '',
  typeDelivery: '',
  details: '',
}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      return {
        ...state,
        product: action.product,
        quantity: action.quantity,
        products: [...state.products, {product: action.product, quantity: action.quantity}]
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: action.productList,
      }
    case SCHEDULE_IT:
      return {
        ...state,
        orders: [...state.orders, action.order]
      }
    default:
      return state;
  }
}

