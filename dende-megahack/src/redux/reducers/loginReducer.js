import { DO_LOGIN } from "../actions";

const initialState = {
  email: '',
  password: '',
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.senha,
      };
    default:
      return state;
  }
}
