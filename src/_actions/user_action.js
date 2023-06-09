import axios from 'axios';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('api/users/login', dataToSubmit)
    .then((response) => response.data);

  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}
