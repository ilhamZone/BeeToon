import Axios from 'axios';

import * as types from '../types';

export const handleActionLogin = (email, password) => ({
  type: types.LOGIN,
  payload: Axios({
    method: 'POST',
    url: 'https://webtoons-restapi.herokuapp.com/api/v1/auth',
    data: { email, password }
  })
});
