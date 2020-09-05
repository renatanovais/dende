import { NEW_PRODUCT } from '../actions';

const initialState = {
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
        products: [...state.products, {product: action.product, quantity: action.quantity}],
      };
    default:
      return state;
  }
}
