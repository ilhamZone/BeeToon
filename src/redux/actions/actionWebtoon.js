import Axios from 'axios';

import * as types from './../types';

export const handleGetWebtoon = () => ({
  type: types.GET_WEBTOON,
  payload: Axios.get('https://webtoons-restapi.herokuapp.com/api/v1/webtoons')
});
