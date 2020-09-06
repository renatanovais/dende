import { SAVE_CLIENT } from '../actions';

const initialState = {
  clients: [{name: 're'}, {name: 'ross'}, {name: 'ana'}, {name: 'bill'}, {name: 'bianca'}, {name: 'beatriz'}]
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
// {name: 're'}, {name: 'ross'}, {name: 'ana'}, {name: 'bill'}, {name: 'bianca'}, {name: 'beatriz'}