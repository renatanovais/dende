import { SAVE_CLIENT } from '../actions';

const initialState = {
  clients: [{name:"Renata Novais",
  birthday:"1995-12-14",
  phone:"31997914607",
  email:"rnovaiscs@gmail.com",
  address:"Alameda das Falcatas",
  observations:"não gosta de maracujá",
  registryDate:"2020-09-06T18:10"}, {name: 'ross'}, {name: 'ana'}, {name: 'bill'}, {name: 'bianca'}, {name: 'beatriz'}],
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