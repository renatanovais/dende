import { DO_LOGIN } from "../actions";

const initialState = {
  email: '',
  password: '',
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        email: action.email,
        passowrd: action.senha,
      };
    default:
      return state;
  }
}
