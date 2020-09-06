import { NEW_ITEM } from '../actions';

const initialState = {
  item: '',
  quantity: 0,
  unity: '',
  price: 0,
  products: [],
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ITEM:
      return {
        ...state,
        item: action.item,
        quantity: action.quantity,
        unity: action.unity,
        price: action.price,
        products: [...state.products, {item: action.item, quantity: action.quantity, unity: action.unity, price: action.price}]
      };
    default:
      return state;
  }
}
