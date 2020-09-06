import { SAVE_CLIENT } from '../actions';

const initialState = {
  clients: []
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
