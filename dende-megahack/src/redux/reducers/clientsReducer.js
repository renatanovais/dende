import { SAVE_CLIENT } from '../actions';

const initialState = {
  clients: [{
    name: "Renata Novais",
    birthday: "14/12/1995",
    phone: "(31) 997914607",
    email: "rnovaiscs@gmail.com",
    address: "Alameda das Falcatas",
    observations: "Não gosta de maracujá",
    registryDate: "06/09/2020"
  }, {
    name: "Marina Barcelos",
    birthday: "29/04/1991",
    phone: "(48) 988221516",
    email: "barcelos.marina@gmail.com",
    address: "Rodovia Admar Gonzaga",
    observations: "Gosta muito de gatos",
    registryDate: "06/09/2020"
  }, {
    name: "Mariana Martignago",
    birthday: "17/05/1990",
    phone: "(48) 999958248",
    email: "marimartginago@gmail.com",
    address: "Rodovia Admar Gonzaga",
    observations: "Não gosta de azeitona",
    registryDate: "06/09/2020"
  }, {
    name: "Natália Macedo",
    birthday: "05/07/1992",
    phone: "(31) 99990000",
    email: "natmacedo@gmail.com",
    address: "Savassi",
    observations: "Sua data de aniversário tá errada",
    registryDate: "06/09/2020"
  }],
};

export function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CLIENT:
      return {
        ...state,
        clients:
          [...state.clients,
          {
            name: action.name,
            birthday: action.birthday,
            phone: action.phone,
            email: action.email,
            address: action.address,
            observations: action.observations,
            registryDate: action.registryDate,
          }
          ]
      };
    default:
      return state;
  }
}

//  PARA TESTAR DROPDOWN NA PÁGINA DE AGENDAR ENCOMENDA
// {name:"Renata Novais",
//   birthday:"1995-12-14",
//   phone:"31997914607",
//   email:"rnovaiscs@gmail.com",
//   address:"Alameda das Falcatas",
//   observations:"não gosta de maracujá",
//   registryDate:"2020-09-06T18:10"}, {name: 'ross'}, {name: 'ana'}, {name: 'bill'}, {name: 'bianca'}, {name: 'beatriz'}