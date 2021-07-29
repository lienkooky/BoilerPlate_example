import Axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './Types';

export function loginUser(dataToSubmit) {
  const request = Axios.post('/api/users/login', dataToSubmit).then(
    (res) => res.data
  );

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = Axios.post('/api/users/register', dataToSubmit).then(
    (res) => res.data
  );

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
