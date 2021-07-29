import { LOGIN_USER, REGISTER_USER, AUTH_USER } from '../_Actions/Types';

function Reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case AUTH_USER:
      return { ...state, authSuccess: action.payload };
    default:
      return state;
  }
}

export default Reducer;
