import { NEW_ITEM, SAVE_ITEM } from '../actions/index';

// LISTA DE PRODUTOS PARA TESTE

const initialState = {
  item: '',
  quantity: 0,
  unity: '',
  price: 0,
  itens: [],
  img:'',
  prepare: '',
  produce: '',
  allProducts: [
    {
      itens: [{
        item:"Leite Condensado",
        quantity:"1",
        unity:"Lata",
        price:"6.0",
      },
      {
        item:"Toddy",
        quantity:"3",
        unity:"colheres",
        price: "7.0",
      }],
      nameProduct:"Brigadeiro",
      date:"2020-9-7",
      produce:"1 panela",
      prepare:"Coloca tudo na panela, cozinha e mexe mexe mexe mexe como é bom",
      img:"https://comidinhasdochef.com/brigadeiro-gomer/brigadeiro-gomer/"
    },
    { 
      itens: [{item:"Grão",
        quantity:"1",
        unity:"kg",
        price:"23.0",
        }],
      nameProduct:"Café",
      date:"2020-9-10",
      produce:"8 xícaras",
      prepare:"Moer, moer e moer, para coar, coar e coar!",
      img:"https://blog.chefsclub.com.br/wp-content/uploads/2019/08/historia_do_cafe-968x660.jpg"
    },
  ],
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
        itens: [],
        allProducts: [...state.allProducts, action.itemList],
      };
    default:
      return state;
  }
}
