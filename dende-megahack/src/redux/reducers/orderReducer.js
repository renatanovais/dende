import { NEW_PRODUCT, SCHEDULE_IT, CLEAR_PRODUCTS } from '../actions';

const initialState = {
  orders: [],
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
