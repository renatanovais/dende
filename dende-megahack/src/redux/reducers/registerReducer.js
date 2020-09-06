import { NEW_ITEM, SAVE_ITEM } from '../actions/index';

const initialState = {
  item: '',
  quantity: 0,
  unity: '',
  price: 0,
  itens: [],
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ITEM:
      return {
        ...state,
        item: action.item,
        quantity: action.quantity,
        unity: action.unity,
        price: action.price,
        itens: [
          ...state.itens,
          {
            item: action.item,
            quantity: action.quantity,
            unity: action.unity,
            price: action.price,
          },
        ],
      };
    case SAVE_ITEM:
      return {
        ...state,
        products: [
          ...state.products,
          {
            item: action.item,
            date: action.date,
            produce: action.produce,
            prepare: action.prepare,
          },
        ],
      };
    default:
      return state;
  }
}
